export const STATIC_PRIVACY_HTML = `<!doctype html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>حریم خصوصی و امنیت داده‌ها | تیم نرم‌افزاری نارون (NarvanTeam.ir)</title>
  <meta name="description" content="سیاست‌نامه رسمی حریم خصوصی تیم نرم‌افزاری نارون و اپلیکیشن یاد؛ تضمین پردازش ۱۰۰٪ آفلاین، دیتابیس لوکال روی دستگاه و عدم ارسال اطلاعات به سرور." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
  <style>
    :root {
      --bg: #F7F8F5;
      --surface: #FFFFFF;
      --surface-muted: #EEF1EC;
      --text: #111C15;
      --text-muted: #4A5A50;
      --primary: #14532D;
      --primary-dark: #0D381E;
      --accent: #D97706;
      --accent-hover: #B45309;
      --border: #DCE2D9;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Vazirmatn', system-ui, -apple-system, sans-serif;
      background-color: var(--bg);
      color: var(--text);
      line-height: 1.85;
      -webkit-font-smoothing: antialiased;
    }
    a { color: inherit; text-decoration: none; }
    .container { max-width: 960px; margin: 0 auto; padding: 0 24px; }
    header {
      border-bottom: 1px solid var(--border);
      background: rgba(247, 248, 245, 0.92);
      backdrop-filter: blur(8px);
      position: sticky;
      top: 0;
      z-index: 20;
    }
    .header-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 32px;
      height: 72px;
    }
    .brand {
      font-size: 1.15rem;
      font-weight: 800;
      color: var(--primary);
      white-space: nowrap;
    }
    .nav-links {
      display: flex;
      gap: 24px;
      font-size: 0.92rem;
      font-weight: 500;
      color: var(--text-muted);
    }
    .nav-links a:hover { color: var(--primary); }
    .btn-accent {
      background: var(--accent);
      color: #fff;
      font-weight: 700;
      font-size: 0.875rem;
      padding: 10px 20px;
      border-radius: 10px;
      transition: background 0.15s ease, transform 0.15s ease;
      white-space: nowrap;
    }
    .btn-accent:hover { background: var(--accent-hover); transform: translateY(-1px); }
    .hero-legal {
      padding: 64px 0 40px;
      border-bottom: 1px solid var(--border);
    }
    .kicker {
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--primary);
      margin-bottom: 12px;
    }
    h1 {
      font-size: clamp(2rem, 3.8vw, 3rem);
      font-weight: 900;
      line-height: 1.3;
      color: var(--text);
      margin-bottom: 16px;
    }
    .lead {
      font-size: 1.1rem;
      color: var(--text-muted);
      max-width: 72ch;
    }
    .guarantee-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 20px;
      margin: 40px 0;
    }
    .guarantee-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 24px;
    }
    .guarantee-card h3 {
      font-size: 1.05rem;
      font-weight: 800;
      color: var(--primary);
      margin-bottom: 8px;
    }
    .guarantee-card p {
      font-size: 0.92rem;
      color: var(--text-muted);
    }
    .legal-section {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 36px;
      margin-bottom: 24px;
    }
    .legal-section h2 {
      font-size: 1.35rem;
      font-weight: 800;
      color: var(--primary-dark);
      margin-bottom: 14px;
    }
    .legal-section p {
      color: var(--text-muted);
      margin-bottom: 14px;
      font-size: 0.98rem;
    }
    .legal-section ul {
      padding-right: 20px;
      color: var(--text-muted);
      font-size: 0.95rem;
    }
    .legal-section li { margin-bottom: 8px; }
    footer {
      border-top: 1px solid var(--border);
      margin-top: 64px;
      padding: 40px 0;
      color: var(--text-muted);
      font-size: 0.9rem;
    }
    .footer-row {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
    }
    @media (max-width: 768px) {
      .nav-links { display: none; }
      .legal-section { padding: 24px; }
    }
  </style>
</head>
<body>
  <header>
    <div class="container header-inner">
      <a href="index.html" class="brand">تیم نرم‌افزاری نارون</a>
      <nav class="nav-links" aria-label="ناوبری اصلی">
        <a href="index.html#products">محصولات</a>
        <a href="index.html#campaign-365">پویش ۳۶۵</a>
        <a href="index.html#workflow">معماری چابک</a>
        <a href="privacy.html">حریم خصوصی</a>
      </nav>
      <a href="index.html" class="btn-accent">بازگشت به صفحه اصلی</a>
    </div>
  </header>

  <main class="container">
    <section class="hero-legal">
      <p class="kicker">سند حقوقی و تعهدنامه حریم خصوصی · نسخه ۱۴۰۵.۱</p>
      <h1>حریم خصوصی در «یاد» یک تنظیم نیست؛ معماریِ پایه است.</h1>
      <p class="lead">
        در تیم نرم‌افزاری نارون (NarvanTeam.ir)، ما بر این باوریم که یادآورهای شخصی، موقعیت‌های مکانی و برنامه‌های روزمره شما، خصوصی‌ترین دارایی دیجیتال شما هستند. اپلیکیشن «یاد» به گونه‌ای مهندسی شده که حتی خود ما نیز به داده‌های شما دسترسی نداریم.
      </p>

      <div class="guarantee-grid">
        <div class="guarantee-card">
          <h3>۰۱. دیتابیس ۱۰۰٪ لوکال</h3>
          <p>تمامی یادآورها، یادداشت‌ها و دسته‌بندی‌ها مستقیماً روی حافظه داخلی گوشی شما (SQLite محلی) ذخیره می‌شوند و هیچ سرور ابری واسطی وجود ندارد.</p>
        </div>
        <div class="guarantee-card">
          <h3>۰۲. هوش مصنوعی کاملاً آفلاین</h3>
          <p>موتور تحلیل زبان طبیعی و پیشنهاد زمان‌بندی هوشمند یاد به صورت بومی روی پردازنده موبایل شما اجرا می‌شود؛ بدون ارسال حتی یک بایت به APIهای خارجی.</p>
        </div>
        <div class="guarantee-card">
          <h3>۰۳. موقعیت مکانی بدون ردیابی</h3>
          <p>مختصات جغرافیایی یادآورهای مکان‌محور صرفاً توسط سرویس Geofencing سیستم‌عامل روی خود دستگاه بررسی شده و هرگز به بیرون از تلفن همراه مخابره نمی‌شود.</p>
        </div>
      </div>
    </section>

    <div style="padding-top: 40px;">
      <article class="legal-section">
        <h2>۱. عدم جمع‌آوری اطلاعات شخصی و محتوایی</h2>
        <p>
          اپلیکیشن «یاد» برای شروع به کار نیازی به ثبت‌نام، وارد کردن شماره موبایل، ایمیل یا ساخت حساب کاربری ابری ندارد. تمام یادآورهایی که ثبت می‌کنید منحصراً در فضای ذخیره‌سازی اختصاصی اپلیکیشن در سیستم‌عامل اندروید نگهداری می‌شوند.
        </p>
        <ul>
          <li>هیچ‌گونه لاگ متنی از عنوان یا متن یادآورهای شما به سرورهای NarvanTeam.ir ارسال نمی‌شود.</li>
          <li>هیچ اسکریپت تبلیغاتی، ردیاب رفتار کاربر (Tracker) یا کیت‌های تحلیل تجاری شخص ثالث در هسته اپلیکیشن وجود ندارد.</li>
        </ul>
      </article>

      <article class="legal-section">
        <h2>۲. نحوه عملکرد پردازش آفلاین هوش مصنوعی</h2>
        <p>
          زمانی که عبارتی مانند «فردا ساعت ۵ عصر نزدیک میدان ولیعصر دارو بخرم» را در اپلیکیشن یاد می‌نویسید، الگوریتم پردازش متن ما به صورت کاملاً محلی (On-Device) زمان، مکان و موضوع را استخراج می‌کند. این فرآیند در حالت پرواز (Airplane Mode) و بدون اتصال اینترنت نیز با همان سرعت و دقت کار می‌کند.
        </p>
      </article>

      <article class="legal-section">
        <h2>۳. مجوزهای دسترسی سیستم‌عامل (Permissions)</h2>
        <p>اپلیکیشن یاد تنها مجوزهایی را درخواست می‌کند که مستقیماً برای اجرای وظایف خودِ کاربر روی دستگاه ضروری هستند:</p>
        <ul>
          <li><strong>دسترسی به موقعیت مکانی (Location / Geofencing):</strong> صرفاً در صورت فعال‌سازی «یادآور مکان‌محور» توسط کاربر، جهت تشخیص ورود یا خروج از محدوده تعیین‌شده توسط سیستم‌عامل.</li>
          <li><strong>اجرای سرویس پس‌زمینه و اعلان دقیق (Exact Alarm &amp; Foreground Service):</strong> جهت تضمین پخش به‌موقع هشدارها حتی در صورت بسته بودن برنامه یا بهینه‌سازی باتری گوشی.</li>
          <li><strong>دسترسی به حافظه جهت پشتیبان‌گیری محلی:</strong> فقط زمانی که کاربر به صورت دستی گزینه خروجی گرفتن از فایل پشتیبان رمزنگاری‌شده را انتخاب کند.</li>
        </ul>
      </article>

      <article class="legal-section">
        <h2>۴. پرداخت‌ها و پویش رونمایی ۳۶۵ نفره</h2>
        <p>
          فرآیند ارتقا به پلن‌های برنزی، نقره‌ای و طلایی از طریق درگاه‌های رسمی مارکت‌های معتبر ایرانی (کافه‌بازار و مایکت) انجام می‌گیرد. تیم نرم‌افزاری نارون هیچ‌گونه اطلاعات بانکی یا شماره کارت شما را دریافت یا ذخیره نمی‌کند.
        </p>
      </article>

      <article class="legal-section">
        <h2>۵. راه‌های ارتباطی با تیم نرم‌افزاری نارون</h2>
        <p>در صورت وجود هرگونه پرسش حقوقی یا فنی می‌توانید از طریق درگاه‌های رسمی زیر با ما در ارتباط باشید:</p>
        <ul>
          <li>وب‌سایت رسمی: <strong>https://NarvanTeam.ir</strong></li>
          <li>پست الکترونیک پشتیبانی و حقوقی: <strong>privacy@narvanteam.ir</strong></li>
          <li>مخزن و مستندات فنی: <strong>github.com/NarvanTeam</strong></li>
        </ul>
      </article>
    </div>
  </main>

  <footer>
    <div class="container footer-row">
      <span>© ۱۴۰۵ تیم نرم‌افزاری نارون (NarvanTeam.ir). تمامی حقوق محفوظ است.</span>
      <a href="index.html" style="color: var(--primary); font-weight: 700;">بازگشت به صفحه اصلی سایت ←</a>
    </div>
  </footer>
</body>
</html>`;

export const STATIC_INDEX_HTML = `<!doctype html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>تیم نرم‌افزاری نارون | NarvanTeam.ir — محصولات مینیمال، امن و کاربردی</title>
  <meta name="description" content="وب‌سایت رسمی تیم نرم‌افزاری نارون (NarvanTeam.ir)؛ سازنده اپلیکیشن یاد (یادآور آنچه مهم است) با معماری آفلاین، حفظ کامل حریم خصوصی و توسعه چابک مبتنی بر Capacitor و وب." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
  <style>
    :root {
      --bg: #F7F8F5;
      --surface: #FFFFFF;
      --surface-soft: #EEF2EC;
      --text: #111C15;
      --text-muted: #4A5A50;
      --primary: #14532D;
      --primary-dark: #0B321A;
      --accent: #D97706;
      --accent-hover: #B45309;
      --border: #DCE2D9;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'Vazirmatn', system-ui, -apple-system, sans-serif;
      background-color: var(--bg);
      color: var(--text);
      line-height: 1.75;
      -webkit-font-smoothing: antialiased;
    }
    a { color: inherit; text-decoration: none; }
    .container { max-width: 1160px; margin: 0 auto; padding: 0 24px; }
    header {
      border-bottom: 1px solid var(--border);
      background: rgba(247, 248, 245, 0.92);
      backdrop-filter: blur(10px);
      position: sticky;
      top: 0;
      z-index: 50;
    }
    .header-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 32px;
      height: 76px;
    }
    .brand { font-size: 1.2rem; font-weight: 900; color: var(--primary); white-space: nowrap; }
    .nav { display: flex; gap: 28px; font-size: 0.95rem; font-weight: 600; color: var(--text-muted); }
    .nav a:hover { color: var(--primary); }
    .btn-cta {
      background: var(--accent);
      color: #fff;
      font-weight: 800;
      font-size: 0.9rem;
      padding: 11px 22px;
      border-radius: 10px;
      border: none;
      cursor: pointer;
      transition: transform 0.15s ease, background 0.15s ease;
      white-space: nowrap;
      display: inline-block;
    }
    .btn-cta:hover { background: var(--accent-hover); transform: translateY(-1px); }
    .btn-outline {
      border: 1px solid var(--border);
      background: var(--surface);
      color: var(--primary);
      font-weight: 700;
      font-size: 0.9rem;
      padding: 11px 22px;
      border-radius: 10px;
      transition: border-color 0.15s ease;
      display: inline-block;
    }
    .btn-outline:hover { border-color: var(--primary); }
    .hero { padding: 80px 0 64px; border-bottom: 1px solid var(--border); }
    .hero-grid { display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 48px; align-items: center; }
    .kicker { color: var(--primary); font-weight: 700; font-size: 0.9rem; margin-bottom: 14px; }
    h1 { font-size: clamp(2.25rem, 4vw, 3.5rem); font-weight: 900; line-height: 1.25; margin-bottom: 20px; }
    .hero-desc { font-size: 1.12rem; color: var(--text-muted); margin-bottom: 32px; max-width: 60ch; }
    .cta-row { display: flex; flex-wrap: wrap; gap: 14px; }
    .hero-card {
      background: var(--primary-dark);
      color: #fff;
      border-radius: 20px;
      padding: 36px;
      border: 1px solid rgba(255,255,255,0.12);
    }
    .section { padding: 80px 0; border-bottom: 1px solid var(--border); }
    .section-title { font-size: clamp(1.6rem, 2.8vw, 2.35rem); font-weight: 900; margin-bottom: 12px; }
    .section-sub { color: var(--text-muted); max-width: 65ch; margin-bottom: 40px; }
    .bento-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
    .card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 28px;
    }
    .card h3 { font-size: 1.2rem; font-weight: 800; color: var(--primary); margin-bottom: 10px; }
    .card p { color: var(--text-muted); font-size: 0.95rem; }
    .store-buttons { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 28px; }
    .plans-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 32px; }
    .plan-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 18px;
      padding: 32px 26px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .plan-card.featured {
      border: 2px solid var(--primary);
      background: #F3F7F2;
    }
    .price { font-size: 1.85rem; font-weight: 900; color: var(--text); margin: 16px 0 8px; }
    .plan-list { list-style: none; margin: 20px 0 28px; }
    .plan-list li { font-size: 0.92rem; color: var(--text-muted); margin-bottom: 10px; }
    footer { padding: 48px 0; color: var(--text-muted); font-size: 0.92rem; }
    .footer-inner { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 24px; }
    @media (max-width: 900px) {
      .hero-grid, .bento-grid, .plans-grid { grid-template-columns: 1fr; }
      .nav { display: none; }
    }
  </style>
</head>
<body>
  <header>
    <div class="container header-inner">
      <a href="index.html" class="brand">تیم نرم‌افزاری نارون</a>
      <nav class="nav" aria-label="ناوبری اصلی">
        <a href="#products">محصولات</a>
        <a href="#campaign-365">پویش ۳۶۵</a>
        <a href="#workflow">معماری چابک</a>
        <a href="privacy.html">حریم خصوصی</a>
      </nav>
      <a href="#products" class="btn-cta">دانلود اپلیکیشن یاد</a>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="container hero-grid">
        <div>
          <p class="kicker">مهندسی نرم‌افزار مینیمال · NarvanTeam.ir</p>
          <h1>ساخت اپلیکیشن‌های مینیمال، امن و کاربردی برای زندگی واقعی.</h1>
          <p class="hero-desc">
            ما در تیم نرم‌افزاری نارون با تکیه بر Capacitor و تکنولوژی‌های وب مدرن، محصولاتی می‌سازیم که به حریم خصوصی شما احترام می‌گذارند. کل چرخه توسعه ما به صورت چابک، مستقیماً از مرورگر موبایل و GitHub Actions بدون وابستگی به سیستم‌های سنگین انجام می‌شود.
          </p>
          <div class="cta-row">
            <a href="#products" class="btn-cta">آشنایی با اپلیکیشن یاد</a>
            <a href="#campaign-365" class="btn-outline">مشاهده پویش رونمایی ۳۶۵ نفره</a>
          </div>
        </div>
        <div class="hero-card">
          <p style="color: #FBBF24; font-weight: 700; font-size: 0.88rem; margin-bottom: 8px;">محصول پرچمدار · نسخه اندروید</p>
          <h2 style="font-size: 1.9rem; font-weight: 900; margin-bottom: 12px;">یاد؛ یادآور آنچه مهم است.</h2>
          <p style="color: #D1FAE5; font-size: 0.96rem; margin-bottom: 24px;">
            اولین دستیار یادآوری کاملاً آفلاین با دیتابیس لوکال، پردازش زبان طبیعی روی دستگاه، یادآورهای مکان‌محور و هشدارهای پس‌زمینه پایدار.
          </p>
          <div class="cta-row">
            <a href="https://cafebazaar.ir" target="_blank" rel="noopener" class="btn-cta">دریافت از کافه‌بازار</a>
            <a href="https://myket.ir" target="_blank" rel="noopener" class="btn-outline" style="background: rgba(255,255,255,0.1); color: #fff; border-color: rgba(255,255,255,0.25);">دریافت از مایکت</a>
          </div>
        </div>
      </div>
    </section>

    <section id="products" class="section">
      <div class="container">
        <p class="kicker">۰۱ · اکوسیستم محصولات نارون</p>
        <h2 class="section-title">یاد؛ یادآور آنچه مهم است.</h2>
        <p class="section-sub">طراحی شده برای کسانی که نمی‌خواهند اطلاعات شخصی و موقعیت مکانی‌شان روی سرورهای ابری ذخیره شود.</p>

        <div class="bento-grid">
          <article class="card">
            <h3>۰۱. دیتابیس لوکال و هوش مصنوعی آفلاین</h3>
            <p>تمام داده‌های شما روی حافظه داخلی دستگاه با SQLite ذخیره شده و تحلیل هوشمند جملات فارسی بدون نیاز به اینترنت و بدون ارسال دیتا به سرور انجام می‌شود.</p>
          </article>
          <article class="card">
            <h3>۰۲. یادآورهای مکان‌محور دقیق</h3>
            <p>ثبت هشدار بر اساس ورود یا خروج از محدوده جغرافیایی (Geofencing)؛ به محض رسیدن به داروخانه، محل کار یا میدان شهر، یاد به شما اطلاع می‌دهد.</p>
          </article>
          <article class="card">
            <h3>۰۳. هشدارهای پس‌زمینه پایدار</h3>
            <p>معماری بومی هیبریدی با Capacitor که حتی در صورت بسته بودن اپلیکیشن یا محدودیت‌های باتری اندروید، زنگ هشدار را در ثانیه دقیق اجرا می‌کند.</p>
          </article>
        </div>

        <div class="card" style="margin-top: 24px; background: var(--surface-soft); display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 20px;">
          <div>
            <p class="kicker" style="margin-bottom: 4px;">محصولات آینده نارون</p>
            <h3 style="margin-bottom: 6px;">در حال توسعه... (آزمایشگاه چابک نارون)</h3>
            <p>پروژه‌های بعدی ما در حوزه ابزارهای بهره‌وری فردی آفلاین و مدیریت مالی شخصی بدون سرور، هم‌اکنون در پایپ‌لاین GitHub Actions در حال شکل‌گیری هستند.</p>
          </div>
          <a href="privacy.html" class="btn-outline">مطالعه معماری حریم خصوصی</a>
        </div>
      </div>
    </section>

    <section id="campaign-365" class="section">
      <div class="container">
        <p class="kicker">۰۲ · کمپین ویژه رونمایی (ظرفیت محدود ۳۶۵ نفر)</p>
        <h2 class="section-title">همراهان نخستین «یاد» باشید.</h2>
        <p class="section-sub">به مناسبت رونمایی رسمی اپلیکیشن یاد، تنها برای ۳۶۵ نفر اول (به تعداد روزهای یک سال)، پلن‌های ویژه با تعرفه استثنایی و مزایای دائمی ارائه می‌شود.</p>

        <div class="plans-grid">
          <div class="plan-card">
            <div>
              <p class="kicker">ظرفیت: ۱۵۰ نفر</p>
              <h3>پلن برنزی (حامی آغازین)</h3>
              <p class="price">۱۴۹,۰۰۰ تومان</p>
              <p style="font-size: 0.85rem; color: var(--text-muted);">اشتراک ۱ ساله کامل + تمدید با تعرفه ثابت</p>
              <ul class="plan-list">
                <li>• یادآورهای زمان‌محور و تکرارهای هوشمند نامحدود</li>
                <li>• دیتابیس لوکال SQLite رمزنگاری‌شده</li>
                <li>• پردازش آفلاین متن فارسی</li>
                <li>• هشدارهای پس‌زمینه پایدار</li>
              </ul>
            </div>
            <a href="https://cafebazaar.ir" class="btn-outline" style="text-align: center;">انتخاب پلن برنزی</a>
          </div>

          <div class="plan-card featured">
            <div>
              <p class="kicker" style="color: var(--accent);">پیشنهاد ویژه · ظرفیت: ۱۴۰ نفر</p>
              <h3>پلن نقره‌ای (حامی پیشرو)</h3>
              <p class="price">۲۸۹,۰۰۰ تومان</p>
              <p style="font-size: 0.85rem; color: var(--text-muted);">لایسنس مادام‌العمر نسخه ۱ و ۲</p>
              <ul class="plan-list">
                <li>• تمام امکانات پلن برنزی بدون محدودیت زمانی</li>
                <li>• یادآورهای مکان‌محور نامحدود (Geofencing)</li>
                <li>• پشتیبان‌گیری آفلاین رمزنگاری‌شده با کلید شخصی</li>
                <li>• نشان افتخاری «حامی ۳۶۵» در اپلیکیشن</li>
              </ul>
            </div>
            <a href="https://cafebazaar.ir" class="btn-cta" style="text-align: center;">انتخاب پلن نقره‌ای</a>
          </div>

          <div class="plan-card">
            <div>
              <p class="kicker">ظرفیت محدود: ۷۵ نفر</p>
              <h3>پلن طلایی (حامی بنیان‌گذار)</h3>
              <p class="price">۴۹۰,۰۰۰ تومان</p>
              <p style="font-size: 0.85rem; color: var(--text-muted);">لایسنس مادام‌العمر تمام نسخه‌ها + هدیه محصولات بعدی</p>
              <ul class="plan-list">
                <li>• دسترسی مادام‌العمر به تمام قابلیت‌های فعلی و آینده یاد</li>
                <li>• ۳۰٪ تخفیف دائمی روی محصولات آینده نارون</li>
                <li>• عضویت در حلقه رای‌دهی به ویژگی‌های جدید</li>
                <li>• ثبت نام در تالار حامیان بنیان‌گذار NarvanTeam.ir</li>
              </ul>
            </div>
            <a href="https://myket.ir" class="btn-outline" style="text-align: center;">انتخاب پلن طلایی</a>
          </div>
        </div>
      </div>
    </section>

    <section id="workflow" class="section">
      <div class="container">
        <p class="kicker">۰۳ · سبک کاری و مهندسی چابک ما</p>
        <h2 class="section-title">توسعه ۱۰۰٪ ابری از مرورگر موبایل؛ بدون سیستم‌های سنگین.</h2>
        <p class="section-sub">ما پیچیدگی‌های سنتی توسعه نرم‌افزار را حذف کرده‌ایم تا تمام تمرکزمان روی کیفیت محصول و تجربه کاربری باشد.</p>
        <div class="bento-grid">
          <div class="card">
            <h3>۰۱. توسعه در مرورگر موبایل</h3>
            <p>نوشتن و بازبینی کدهای فرانت‌اند و منطق برنامه مستقیماً از طریق مرورگر موبایل با معماری ماژولار و سبک.</p>
          </div>
          <div class="card">
            <h3>۰۲. هسته هیبریدی Capacitor</h3>
            <p>ترکیب زیبایی و سرعت تکنولوژی‌های وب با دسترسی عمیق به قابلیت‌های بومی اندروید (سنسور مکانی، نوتیفیکیشن پایدار و فایل‌سیستم).</p>
          </div>
          <div class="card">
            <h3>۰۳. بیلد خودکار با GitHub Actions</h3>
            <p>کامپایل، تست خودکار، تولید خروجی امضاشده APK/AAB اندروید و استقرار آنی روی گیت‌هاب و لیارا در چند دقیقه.</p>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container footer-inner">
      <div>
        <strong style="color: var(--primary);">تیم نرم‌افزاری نارون (NarvanTeam.ir)</strong>
        <p style="margin-top: 6px;">© ۱۴۰۵ تمامی حقوق برای تیم نرم‌افزاری نارون محفوظ است.</p>
      </div>
      <div style="display: flex; gap: 24px; align-items: center;">
        <a href="privacy.html" style="font-weight: 700; color: var(--primary);">سیاست حریم خصوصی (privacy.html)</a>
        <a href="mailto:info@narvanteam.ir">info@narvanteam.ir</a>
        <a href="https://github.com" target="_blank" rel="noopener">GitHub</a>
      </div>
    </div>
  </footer>
</body>
</html>`;
