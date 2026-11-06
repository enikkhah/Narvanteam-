import React, { useState } from 'react';
import { Check, Award, Sparkles } from 'lucide-react';
import {
  CAMPAIGN_PLANS,
  calculateCampaignSummary,
  calculateDiscountPercent,
  formatToman,
  toPersianDigits,
  validateReservationForm,
  type PlanTierId
} from '../utils/narvanLogic';

export const Campaign365Section: React.FC = () => {
  const [selectedPlanId, setSelectedPlanId] = useState<PlanTierId>('silver');
  const [claimedCounts, setClaimedCounts] = useState<Record<PlanTierId, number>>({
    bronze: 118,
    silver: 112,
    gold: 61
  });
  const [fullName, setFullName] = useState('');
  const [contact, setContact] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const [reservationSuccess, setReservationSuccess] = useState<{
    name: string;
    planTitle: string;
    spotNumber: number;
  } | null>(null);

  const summary = calculateCampaignSummary(claimedCounts);
  const activePlan =
    CAMPAIGN_PLANS.find((p) => p.id === selectedPlanId) ?? CAMPAIGN_PLANS[1];

  const handleReserveSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    const validation = validateReservationForm({
      fullName,
      contact,
      planId: selectedPlanId
    });

    if (!validation.valid) {
      setFormError(validation.errorFa ?? 'لطفاً اطلاعات فرم را بررسی کنید.');
      return;
    }

    const nextClaimedForPlan = Math.min(
      activePlan.totalQuota,
      (claimedCounts[selectedPlanId] ?? activePlan.initialClaimed) + 1
    );
    const updatedCounts = {
      ...claimedCounts,
      [selectedPlanId]: nextClaimedForPlan
    };
    setClaimedCounts(updatedCounts);

    const updatedSummary = calculateCampaignSummary(updatedCounts);
    setReservationSuccess({
      name: fullName.trim(),
      planTitle: activePlan.titleFa,
      spotNumber: updatedSummary.totalClaimed
    });
    setFullName('');
    setContact('');
  };

  return (
    <section id="campaign-365" className="py-20 border-b border-[#DCE2D9] bg-white">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header & Live 365 Counter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <p className="text-sm font-bold text-[#D97706] mb-2">
              ۰۲. پویش رونمایی ۳۶۵ نفره اپلیکیشن یاد · فرصت محدود آغازین
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111C15] headline-balance leading-tight">
              به جمع ۳۶۵ حامی نخستین «یاد» بپیوندید.
            </h2>
            <p className="text-base text-[#4A5A50] mt-3 max-w-2xl leading-relaxed">
              به مناسبت انتشار نسخه رسمی یاد، به تعداد روزهای یک سال (۳۶۵ نفر)، امکان تهیه اشتراک و لایسنس مادام‌العمر با تعرفه حمایتی تکرارنشدنی در سه سطح برنزی، نقره‌ای و طلایی فراهم شده است.
            </p>
          </div>

          {/* Quantitative Capacity Readout */}
          <div
            data-testid="campaign-capacity-box"
            className="bg-[#F7F8F5] border border-[#DCE2D9] rounded-2xl p-5 min-w-[280px] shrink-0"
          >
            <div className="flex items-center justify-between text-xs text-[#4A5A50] mb-1.5">
              <span>ظرفیت تکمیل‌شده پویش ۳۶۵:</span>
              <span className="font-mono-tabular font-bold text-[#14532D]">
                {toPersianDigits(summary.totalClaimed)} از {toPersianDigits(summary.totalCapacity)} نفر
              </span>
            </div>
            <div className="w-full h-2.5 bg-[#DCE2D9] rounded-full overflow-hidden mb-2">
              <div
                className="h-full bg-[#14532D] transition-all duration-300"
                style={{ width: `${summary.progressPercent}%` }}
              />
            </div>
            <div className="text-xs font-bold text-[#D97706]">
              تنها {toPersianDigits(summary.remainingTotal)} جایگاه خالی تا پایان پویش رونمایی باقی مانده است
            </div>
          </div>
        </div>

        {/* 3 Plans Grid: Bronze, Silver, Gold */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 items-stretch">
          {CAMPAIGN_PLANS.map((plan) => {
            const isSelected = selectedPlanId === plan.id;
            const claimed = claimedCounts[plan.id] ?? plan.initialClaimed;
            const remaining = Math.max(0, plan.totalQuota - claimed);
            const discountPercent = calculateDiscountPercent(
              plan.priceToman,
              plan.originalPriceToman
            );

            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlanId(plan.id)}
                className={`rounded-2xl p-7 flex flex-col justify-between transition-all cursor-pointer border ${
                  plan.highlight
                    ? 'bg-[#112619] text-white border-[#14532D]'
                    : isSelected
                    ? 'bg-[#F7F8F5] border-[#14532D] ring-2 ring-[#14532D]/20'
                    : 'bg-[#F7F8F5] border-[#DCE2D9] hover:border-[#14532D]/60'
                }`}
              >
                <div>
                  {/* Clean unboxed metadata row */}
                  <div
                    className={`flex items-center justify-between text-xs mb-3 ${
                      plan.highlight ? 'text-[#A7F3D0]' : 'text-[#4A5A50]'
                    }`}
                  >
                    <span>{plan.badgeText}</span>
                    <span className="font-mono-tabular font-bold text-[#D97706]">
                      {toPersianDigits(remaining)} ظرفیت باقی‌مانده
                    </span>
                  </div>

                  <h3
                    className={`text-xl font-black mb-1 ${
                      plan.highlight ? 'text-white' : 'text-[#111C15]'
                    }`}
                  >
                    {plan.titleFa}
                  </h3>
                  <p
                    className={`text-xs mb-5 ${
                      plan.highlight ? 'text-[#D1FAE5]' : 'text-[#4A5A50]'
                    }`}
                  >
                    {plan.subtitleFa}
                  </p>

                  {/* Pricing Block */}
                  <div className="pb-5 mb-5 border-b border-current/10">
                    <div className="flex items-baseline gap-2.5">
                      <span
                        className={`text-2xl sm:text-3xl font-black font-mono-tabular ${
                          plan.highlight ? 'text-[#FBBF24]' : 'text-[#14532D]'
                        }`}
                      >
                        {formatToman(plan.priceToman)}
                      </span>
                      <span
                        className={`text-xs line-through font-mono-tabular ${
                          plan.highlight ? 'text-[#86A893]' : 'text-[#7A8B80]'
                        }`}
                      >
                        {toPersianDigits(plan.originalPriceToman.toLocaleString('en-US'))}
                      </span>
                    </div>
                    <p
                      className={`text-xs mt-1.5 font-semibold ${
                        plan.highlight ? 'text-[#A7F3D0]' : 'text-[#4A5A50]'
                      }`}
                    >
                      {plan.durationLabel} · {toPersianDigits(discountPercent)}٪ تخفیف رونمایی
                    </p>
                  </div>

                  {/* Feature List */}
                  <ul className="space-y-3 mb-7 text-sm">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check
                          className={`w-4 h-4 mt-1 shrink-0 ${
                            plan.highlight ? 'text-[#FBBF24]' : 'text-[#14532D]'
                          }`}
                        />
                        <span
                          className={
                            plan.highlight ? 'text-[#ECFDF5]' : 'text-[#2C3A31]'
                          }
                        >
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPlanId(plan.id);
                    document
                      .getElementById('campaign-reserve-box')
                      ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    plan.highlight
                      ? 'bg-[#D97706] hover:bg-[#B45309] text-white'
                      : isSelected
                      ? 'bg-[#14532D] text-white'
                      : 'bg-white border border-[#DCE2D9] text-[#14532D] hover:bg-[#EEF2EC]'
                  }`}
                >
                  {isSelected ? `پلن انتخاب‌شده: ${plan.titleFa}` : `انتخاب ${plan.titleFa}`}
                </button>
              </div>
            );
          })}
        </div>

        {/* Interactive Spot Reservation Form for the 365 Campaign */}
        <div
          id="campaign-reserve-box"
          className="bg-[#F7F8F5] border border-[#DCE2D9] rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#14532D] mb-2">
                <Award className="w-4 h-4 text-[#D97706]" />
                <span>رزرو آنی کد تخفیف و سهمیه پویش ۳۶۵</span>
              </div>
              <h3 className="text-xl font-black text-[#111C15] mb-2">
                ثبت سهمیه برای «{activePlan.titleFa}»
              </h3>
              <p className="text-sm text-[#4A5A50] leading-relaxed">
                با ثبت نام و شماره موبایل یا ایمیل خود، کد اختصاصی فعال‌سازی درون‌برنامه‌ای (قابل استفاده در نسخه کافه‌بازار و مایکت اپلیکیشن یاد) برایتان رزرو می‌شود.
              </p>
            </div>

            <div className="lg:col-span-7">
              <form onSubmit={handleReserveSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label
                      htmlFor="reserve-fullname"
                      className="block text-xs font-bold text-[#111C15] mb-1"
                    >
                      نام و نام خانوادگی
                    </label>
                    <input
                      id="reserve-fullname"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="مثلاً: آرش کریمی"
                      className="w-full rounded-xl bg-white border border-[#DCE2D9] px-3.5 py-2.5 text-sm text-[#111C15] focus:outline-none focus:border-[#14532D]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="reserve-contact"
                      className="block text-xs font-bold text-[#111C15] mb-1"
                    >
                      شماره موبایل یا ایمیل
                    </label>
                    <input
                      id="reserve-contact"
                      type="text"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="۰۹۱۲۳۴۵۶۷۸۹ یا ایمیل"
                      className="w-full rounded-xl bg-white border border-[#DCE2D9] px-3.5 py-2.5 text-sm text-[#111C15] focus:outline-none focus:border-[#14532D]"
                    />
                  </div>

                  <div className="flex items-end">
                    <button
                      type="submit"
                      className="w-full py-2.5 px-4 bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-sm rounded-xl transition-colors cursor-pointer whitespace-nowrap shrink-0"
                    >
                      ثبت و رزرو سهمیه ۳۶۵
                    </button>
                  </div>
                </div>

                {formError && (
                  <p
                    role="alert"
                    className="text-xs font-bold text-red-700 bg-red-50 border border-red-200 rounded-lg px-3.5 py-2"
                  >
                    {formError}
                  </p>
                )}

                {reservationSuccess && (
                  <div
                    role="status"
                    className="text-xs font-bold text-[#14532D] bg-[#ECFDF5] border border-[#A7F3D0] rounded-xl px-4 py-3 flex flex-wrap items-center justify-between gap-2"
                  >
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#D97706]" />
                      <span>
                        {reservationSuccess.name} عزیز، جایگاه شماره{' '}
                        {toPersianDigits(reservationSuccess.spotNumber)} از ۳۶۵ برای «
                        {reservationSuccess.planTitle}» با موفقیت رزرو شد.
                      </span>
                    </span>
                    <span className="font-mono-tabular text-[#065F46]">
                      کد رزرو: YAD-365-{toPersianDigits(reservationSuccess.spotNumber)}
                    </span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
