import test from 'node:test';
import assert from 'node:assert/strict';
import {
  toPersianDigits,
  calculateDiscountPercent,
  calculateCampaignSummary,
  parseOfflineReminder,
  validateReservationForm,
  validateContactForm
} from './narvanLogic';

test('toPersianDigits converts English numerals to Persian numerals accurately', () => {
  assert.equal(toPersianDigits(365), '۳۶۵');
  assert.equal(toPersianDigits('09123456789'), '۰۹۱۲۳۴۵۶۷۸۹');
});

test('calculateDiscountPercent returns accurate discount percentage', () => {
  assert.equal(calculateDiscountPercent(289000, 640000), 55);
  assert.equal(calculateDiscountPercent(500, 500), 0);
});

test('calculateCampaignSummary tracks total 365 capacity and remaining spots', () => {
  const summary = calculateCampaignSummary({
    bronze: 120,
    silver: 110,
    gold: 60
  });
  assert.equal(summary.totalCapacity, 365);
  assert.equal(summary.totalClaimed, 290);
  assert.equal(summary.remainingTotal, 75);
});

test('parseOfflineReminder extracts location, time, category and enforces 0 network bytes', () => {
  const res = parseOfflineReminder('فردا ساعت ۱۷ نزدیک میدان ولیعصر قرص ویتامین بخرم');
  assert.equal(res.networkBytesSent, 0);
  assert.equal(res.storageEngine, 'SQLite Local Encrypted');
  assert.equal(res.timeTrigger, 'فردا · ساعت ۱۷:۰۰');
  assert.ok(res.locationTrigger?.includes('نزدیک میدان ولیعصر'));
  assert.equal(res.category, 'سلامت و دارو');
});

test('validateReservationForm validates Iranian mobile numbers with Persian or English digits and emails', () => {
  assert.equal(
    validateReservationForm({ fullName: 'کیوان', contact: '۰۹۱۲۳۴۵۶۷۸۹', planId: 'silver' }).valid,
    true
  );
  assert.equal(
    validateReservationForm({ fullName: 'سارا محمدی', contact: 'sara@narvanteam.ir', planId: 'gold' }).valid,
    true
  );
  assert.equal(
    validateReservationForm({ fullName: 'ع', contact: '09123456789', planId: 'bronze' }).valid,
    false
  );
  assert.equal(
    validateReservationForm({ fullName: 'امیر رضایی', contact: '12345', planId: 'bronze' }).valid,
    false
  );
});

test('validateContactForm rejects empty or invalid inputs and accepts valid messages', () => {
  assert.equal(validateContactForm('مهدی', '09121112233', 'سلام، خسته نباشید. کمپین عالیه!').valid, true);
  assert.equal(validateContactForm('مهدی', 'invalid', 'سلام، خسته نباشید.').valid, false);
  assert.equal(validateContactForm('مهدی', 'info@narvanteam.ir', 'کوتاه').valid, false);
});
