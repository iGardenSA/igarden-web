import puppeteer from "puppeteer";
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const logo = fs.readFileSync(path.join(ROOT, "public/logo/lockup-horizontal-en-white.png")).toString("base64");

const CARDS = [
  {
    out: "public/images/og/home.png",
    title: "iGarden — منظومات زراعية متكاملة",
    desc: "نؤسس مشروعك أو نطوّر منشأتك. ازرع بذكاء.",
  },
  {
    out: "public/images/og/app.png",
    title: "تطبيق iGarden — أدوات الزراعة المائية",
    desc: "حاسبات ويوميات ومتابعة تشغيل — انضم إلى قائمة الانتظار.",
  },
];

const html = (c) => `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8">
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  html, body { width:1200px; height:630px; }
  body {
    font-family: "Tajawal", sans-serif;
    background:
      radial-gradient(circle at 88% 12%, rgba(165,214,63,.20) 0%, transparent 46%),
      linear-gradient(135deg, #0F3D2E 0%, #14523d 58%, #0F3D2E 100%);
    color: #FAFAF7;
    display:flex; flex-direction:column;
    padding: 68px 80px;
  }
  .main { flex:1; display:flex; flex-direction:column; justify-content:center; }
  .bar { width:96px; height:8px; border-radius:999px; background:#A5D63F; }
  h1 {
    font-weight:800; font-size:70px; line-height:1.25; letter-spacing:-.5px;
    max-width:1040px; margin-top:30px;
  }
  p {
    font-weight:500; font-size:36px; line-height:1.5; color:rgba(250,250,247,.82);
    max-width:960px; margin-top:26px;
  }
  footer { display:flex; align-items:center; justify-content:space-between; }
  img { height:56px; width:auto; display:block; }
  .domain {
    font-family:"Tajawal", sans-serif; direction:ltr;
    font-size:30px; font-weight:700; color:#A5D63F; letter-spacing:.5px;
  }
</style></head><body>
  <div class="main">
    <div class="bar"></div>
    <h1>${c.title}</h1>
    <p>${c.desc}</p>
  </div>
  <footer>
    <img src="data:image/png;base64,${logo}" alt="">
    <span class="domain">igarden.sa</span>
  </footer>
</body></html>`;

const browser = await puppeteer.launch({ args: ["--no-sandbox", "--font-render-hinting=none"] });

for (const c of CARDS) {
  // صفحة جديدة لكل بطاقة — إعادة استخدام الصفحة تُعلّق networkidle0.
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
  await page.setContent(html(c), { waitUntil: "domcontentloaded" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(ROOT, c.out), type: "png" });
  await page.close();
  console.log("✓", c.out);
}
await browser.close();
