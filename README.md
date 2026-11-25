# AI Academy — joylashtirish (deploy) bo'yicha qo'llanma

## 1-qadam: Google Gemini API kalitini oling (BEPUL, karta shart emas)
1. https://aistudio.google.com/apikey saytiga kiring (Google akkauntingiz bilan)
2. "Create API key" tugmasini bosing
3. Chiqqan kalitni nusxalab, xavfsiz joyda saqlang
4. Hech qanday karta yoki pul kerak emas — kuniga 1500 tagacha bepul so'rov beriladi

## 2-qadam: Kodni GitHub'ga joylang
1. https://github.com da bepul akkaunt oching (agar yo'q bo'lsa)
2. Yangi repository yarating, nomi: "ai-academy"
3. Shu papkadagi barcha fayllarni (public/, api/, package.json) o'sha repositoryga yuklang
   (GitHub saytida "Add file" > "Upload files" tugmasi orqali, sudrab tashlash kifoya)

## 3-qadam: Vercel orqali internetga chiqaring (bepul)
1. https://vercel.com saytiga kiring, GitHub akkauntingiz bilan ro'yxatdan o'ting
2. "Add New Project" tugmasini bosing, "ai-academy" repositoryingizni tanlang
3. "Environment Variables" bo'limida qo'shing:
   - Name: GEMINI_API_KEY
   - Value: (1-qadamda olgan kalitingiz)
4. "Deploy" tugmasini bosing — 1-2 daqiqada sayt tayyor bo'ladi
5. Sizga shunday manzil beriladi: ai-academy-XXXX.vercel.app — bu sizning jonli websiteingiz!

## 4-qadam (ixtiyoriy): O'z domeningizni ulash
1. Domain nomi sotib oling (masalan Namecheap yoki reg.uz saytidan, ~10-15$/yil)
2. Vercel loyihangizda "Settings" > "Domains" bo'limiga o'ting
3. Domeningizni kiriting, ko'rsatilgan DNS sozlamalarini domain provayderingizda sozlang

---

## 5-qadam: Login/Ro'yxatdan o'tish (Supabase)
Bu sayt endi "Kirish" tugmasi va Google orqali kirish imkoniyatiga ega. Buni ishga tushirish uchun:

1. https://supabase.com saytida bepul akkaunt oching
2. "New Project" tugmasini bosib, yangi loyiha yarating (parol o'ylab toping, saqlab qo'ying)
3. Loyiha ochilgach, chap menyudan **Settings > API** bo'limiga o'ting
4. **Project URL** va **anon public key** qiymatlarini nusxalab oling
5. `public/index.html` faylini oching (VS Code'da), fayl ichidan quyidagi qatorlarni toping:
   ```
   const SUPABASE_URL = "YOUR_SUPABASE_URL";
   const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";
   ```
6. `YOUR_SUPABASE_URL` o'rniga Project URL'ni, `YOUR_SUPABASE_ANON_KEY` o'rniga anon key'ni qo'ying (tirnoqlar ichida qoldiring)
7. **Google orqali kirish uchun:** Supabase loyihangizda **Authentication > Providers > Google** bo'limiga o'ting, yoqing (enable), so'ng ko'rsatmalar bo'yicha Google Cloud Console'da OAuth ma'lumotlarini oling va shu yerga kiriting (Supabase'ning o'z qo'llanmasi bor, shu sahifada havola beriladi)
8. O'zgarishlarni saqlab, GitHub'ga qayta yuklang (yoki Vercel avtomatik yangilaydi, agar GitHub bilan ulangan bo'lsa)

## 6-qadam: Aloqa formasi (Formspree)
1. https://formspree.io saytida bepul akkaunt oching
2. Yangi forma yarating (masalan "AI Academy Aloqa")
3. Sizga berilgan forma manzilini (masalan `https://formspree.io/f/abc123`) nusxalang
4. `public/index.html` faylida quyidagi qatorni toping:
   ```
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
   ```
5. `YOUR_FORM_ID` o'rniga o'z forma ID'ingizni qo'ying
6. Saqlang va qayta yuklang — endi "Aloqa" formasidan kelgan xabarlar sizning Formspree emailingizga tushadi

---

## 7-qadam: Kunlik limit (5 ta bepul dars)
1. `supabase-schema.sql` faylini oching, ichidagi hamma matnni nusxalang
2. Supabase loyihangizda chap menyudan **SQL Editor** ga o'ting
3. **"New query"** tugmasini bosing, nusxalangan matnni joylashtiring, **"Run"** tugmasini bosing
4. Shu bilan har bir foydalanuvchi kuniga 5 ta bepul darsga ega bo'ladi, VIP a'zolar uchun cheklov bo'lmaydi

## 8-qadam: VIP to'lov ($5/oy, Stripe orqali)
1. https://stripe.com saytida bepul akkaunt oching
2. **Dashboard'da "Product catalog" > "Add product"** — nomi "AI Academy VIP", narxi $5, "Recurring" (oylik) tanlang
3. Yaratilgan mahsulotning **Price ID** qiymatini nusxalang (masalan `price_1AbCdE...`)
4. Chap menyudan **"Developers" > "API keys"** ga o'ting, **Secret key**ni nusxalang
5. Vercel loyihangizda **Settings > Environment Variables** bo'limiga qo'shing:
   - `STRIPE_SECRET_KEY` — Stripe secret key
   - `STRIPE_PRICE_ID` — nusxalagan Price ID
   - `SUPABASE_URL` — Supabase Project URL (2-qadamda olgan)
   - `SUPABASE_SERVICE_ROLE_KEY` — Supabase'da Settings > API > **service_role** kaliti (bu maxfiy, faqat serverda ishlatiladi)
6. **Webhook sozlash:** Stripe Dashboard'da **Developers > Webhooks > Add endpoint**, manzil sifatida `https://sizning-saytingiz.vercel.app/api/stripe-webhook` kiriting, tinglaydigan hodisalar: `checkout.session.completed` va `customer.subscription.deleted`
7. Vercel'da environment variable qo'shgach, loyihani qayta deploy qiling (Vercel'da "Redeploy" tugmasi)

## 9-qadam: Ilova sifatida o'rnatish (PWA)
Hech narsa sozlash shart emas — bu allaqachon ishlaydi! Saytga kirganingizda, brauzer manzil qatorida yoki header'dagi **"Ilovani o'rnatish"** tugmasi orqali saytni telefon yoki kompyuteringizga ilova sifatida o'rnatishingiz mumkin.

## Muhim eslatma
API kalit — bu sizning "kalitingiz", uni hech qachon ochiq joyga (masalan frontend kodga) qo'ymang.
U faqat Vercel'ning "Environment Variables" bo'limida, xavfsiz saqlanadi.

---

## 10-qadam: Yangi funksiyalar (ball, reyting, sertifikat, streak)
Bular uchun **faqat SQL yangilash kerak** — kod tomondan hech narsa qo'shimcha sozlash talab qilmaydi:

1. `supabase-schema.sql` faylini qayta oching (u yangilangan)
2. Supabase'da **SQL Editor > New query** ga o'ting
3. Butun faylni joylashtirib, **"Run"** bosing (eski jadvalga yangi ustunlar va funksiyalar qo'shiladi, xavfsiz)

Shu bilan:
- Har bir dars/imtihon uchun ball beriladi
- 🏆 tugmasi orqali reyting jadvali ochiladi (foydalanuvchi birinchi marta kirganda taxallus so'raladi)
- 7-modul imtihonidan o'tgach, sertifikat (chop etish/PDF) ochiladi
- Streak (necha kun ketma-ket kirgani) va 📊 Progress paneli — bular sozlashsiz, avtomatik ishlaydi (brauzerda saqlanadi)

## 11-qadam: Rasm yuborish (kuniga 5 tagacha bepul)
Bu ham qo'shimcha sozlash talab qilmaydi — agar 10-qadamda `supabase-schema.sql`ni qayta ishga tushirgan bo'lsangiz, rasm yuborish limiti ham avtomatik ishlay boshlaydi (agar hali ishga tushirmagan bo'lsangiz, hozir ishga tushiring).

Composer'da 📷 tugmasi chiqadi — bosib rasm tanlaysiz, u yuqorida ko'rinadi, "Yuborish" bossangiz AI rasmni ko'rib, javob beradi. VIP a'zolarga limit yo'q.

## 12-qadam: Jadval, kalendar va hisobga bog'langan progress
`supabase-schema.sql` yana yangilandi (agar 10-qadamda qayta ishga tushirgan bo'lsangiz, uni **yana bir marta** ishga tushiring — yangi jadvallar qo'shildi). Bundan keyin:

- Barcha progress (o'tilgan darslar, ochilgan modullar, sertifikat, streak) endi **hisobingizga** bog'lanadi — istalgan qurilmadan kirsangiz ham davom etadi
- Header'dagi 🗓 tugmasi — haftalik dars rejasi (qaysi kuni qaysi fan)
- Header'dagi 📅 tugmasi — faollik tarixi, kalendar ko'rinishida (✓ = bajardi, ✗ = o'tkazib yubordi)

## 13-qadam: Chat va imtihon tarixi
`supabase-schema.sql` yana yangilandi (ikkita yangi jadval: chat_history, exam_attempts) — uni **yana bir marta** Supabase SQL Editor'da ishga tushiring.

Bundan keyin:
- Fanni tark etib, qaytadan tanlasangiz — suhbat **davom etadi** (boshidan boshlanmaydi)
- 📊 Progress panelida **"So'nggi imtihonlar"** bo'limi qo'shildi — barcha o'tgan test/imtihon urinishlaringiz (natija bilan) ko'rinadi

## 14-qadam: Kod tuzilishi — CSS alohida faylga chiqarildi
Endi barcha uslublar (`<style>`) `public/css/style.css` faylida, `index.html`da esa faqat havola bor. GitHub'ga yuklaganda **shu yangi faylni ham** (`public/css/style.css`) qo'shishni unutmang — "Add file > Upload files" orqali, fayl nomini `css/style.css` deb ko'rsatsangiz, GitHub avtomatik papka yaratadi.

## 15-qadam: JavaScript ham alohida faylga chiqarildi
Endi `public/js/app.js` — yangi fayl. GitHub'ga yuklaganda buni ham qo'shing (`public/js` papkasiga, fayl nomi `js/app.js` deb yozib "Create new file" orqali, yoki "Upload files" orqali).

Yakuniy tuzilma:
```
public/
├── index.html   (faqat HTML tuzilishi)
├── css/style.css (barcha dizayn)
├── js/app.js     (barcha funksionallik)
├── manifest.json, sw.js, icons/
```

## 16-qadam: "Do'stim" (Support Bot) va o'yinlar
`supabase-schema.sql` yana yangilandi (`companion_profile` jadvali qo'shildi) — Supabase SQL Editor'da qayta ishga tushiring.

Header'dagi **🤗** tugmasi — "Do'stim" panelini ochadi:
- Birinchi marta kirganda, sizdan ism, yosh, xarakter, maqsad, kuchli/zaif tomonlar so'raladi (faqat sizga moslashish uchun)
- Shundan keyin u bilan istalgancha suhbatlashishingiz mumkin — quvnoq, hazilkash, sizga moslashgan javoblar beradi
- **⭕ X/O** — yutib bo'lmaydigan aqlli bot bilan
- **🔴 Shashka** — asosiy qoidalar bilan (majburiy yeyish, shohlik)
- **♟️ Shaxmat** — to'liq, to'g'ri qoidalar bilan (chess.js kutubxonasi orqali), bot qarshi o'ynaydi

## 17-qadam: AI Support robot va sayt yaxshilanishlari
- Sahifaning chap chetida **3D robot** doim ko'rinib turadi — sekin suzib, ko'zlari yonib turadi, mavzuga qarab kiyimi o'zgaradi (Galaktika — kosmik dubulg'a, Texno-qahramon — qizil-oltin zirh). Bosilsa "Do'stim" panelini ochadi.
- Dars/chat maydoni sezilarli kattalashtirildi (kengroq, balandroq, matn kattaroq)
- Fan tanlanganda chiqadigan matnlar endi to'g'ri tarjima qilinadi (avval "Kodlash" kabi so'zlar tilga qaramay o'zbekcha qolib ketardi — bu tuzatildi)

## 18-qadam: Sana xatosi, kuchli o'yinlar, rasm va kattalashtirish
- **Sana xatosi tuzatildi** — kalendar/streak endi vaqt zonangizga to'g'ri mos keladi (avval UTC asosida noto'g'ri kun ko'rsatilardi)
- **Shashka va Shaxmat AI kuchaytirildi** — endi ikkalasi ham chuqur qidiruv (minimax) orqali o'ynaydi, yutish ancha qiyin
- **Robot masxaralaydi** — har safar yutganda, kulguli/mazax matn yozadi va sakrab-tebranib "kuladi"
- **"Do'stim"ga ham rasm yuborish** qo'shildi — xuddi oddiy fanlardagidek, kuniga 5 tagacha bepul (VIP cheksiz), bir xil limit hisoblanadi
- **Kattalashtirish (⤢) tugmasi** — ham oddiy dars chatida, ham "Do'stim" panelida, o'ng tomonda kichik tugma — bosilganda butun ekranga yoyiladi

## 19-qadam: Admin panel
`supabase-schema.sql` yana yangilandi (admin funksiyalari qo'shildi) — qayta ishga tushiring.

**MUHIM:** SQL fayl ichida `'YOUR_ADMIN_EMAIL'` yozuvini toping (2 marta uchraydi — bitta izohda, bitta kodda), va o'zingizning Google email manzilingizga almashtiring. Shundagina faqat siz admin panelni ko'ra olasiz.

Shu email bilan kirganingizda, header'da **📊** tugmasi paydo bo'ladi — bosilganda: jami foydalanuvchilar, VIP soni, so'nggi ro'yxatdan o'tganlar, qaysi fan eng mashhur, jami tugatilgan darslar va boshqa statistikalar ko'rinadi.

## 20-qadam: Payme va Click (O'zbek kartalari uchun to'lov)
Stripe faqat xalqaro kartalar uchun ishlaydi, shuning uchun O'zbekiston kartalari (Humo/UzCard) uchun **Payme** va **Click** qo'shildi.

`supabase-schema.sql` yana yangilandi (`payme_transactions`, `click_transactions` jadvallari qo'shildi) — Supabase SQL Editor'da qayta ishga tushiring.

Yangi fayllar: `api/payme.js`, `api/click.js` — bularni ham GitHub'ga yuklang (`api` papkasiga).

**Sozlash kerak bo'lgan joylar:**
1. `public/js/app.js` faylida (eng tepada) quyidagilarni toping va o'zgartiring:
   - `YOUR_PAYME_MERCHANT_ID` — Payme kabinetidan olingan Merchant ID
   - `YOUR_CLICK_MERCHANT_ID` — Click kabinetidan olingan Merchant ID
   - `YOUR_CLICK_SERVICE_ID` — Click kabinetidan olingan Service ID
2. Vercel loyihangizning **Settings → Environment Variables** bo'limiga quyidagilarni qo'shing:
   - `PAYME_MERCHANT_KEY` — Payme kabinetidagi maxfiy kalit (test va productionni alohida qo'ying)
   - `CLICK_SECRET_KEY` — Click kabinetidagi maxfiy kalit
3. Payme va Click kabinetlaringizda **Webhook/Callback URL** sifatida quyidagilarni ko'rsating:
   - Payme: `https://SAYTINGIZ.vercel.app/api/payme`
   - Click: `https://SAYTINGIZ.vercel.app/api/click`

"VIP bo'lish" oynasida endi 3 ta tugma bor: Stripe (kartangiz bo'lsa), Payme, Click — foydalanuvchi qulay bo'lganini tanlaydi.

## 21-qadam: Dizayn — yakuniy tozalash
- Saytda endi faqat **2 ta rejim** bor: **Light** va **Dark** (header'dagi 🌙/☀️ tugmasi) — oddiy, toza, ChatGPT/Claude uslubida, 3D fon mavzulari butunlay olib tashlandi.
- Asosiy dars-chat oynasi va darslar ro'yxati kengaytirildi — bitta keng, toza asosiy ekran.
- Chap pastki burchakdagi robot — oq tanali, ko'k antennali, dumaloq boshli, qo'li bilan salom beradigan "mehribon" dizaynda, asosiy ekranga hech qachon halaqit bermaydi (kichik, burchakda).
- Ichki xatolik tuzatildi: eski (olib tashlangan) mavzu-tanlash oynasiga ishora qilgan kod qoldiqlari sayt tilini almashtirishda "jim" xatolikka olib kelardi (ba'zi matnlar tarjima qilinmay qolardi) — bu butunlay tozalandi.

## 22-qadam: Robot — aniq va chiroyli (SVG)
Avvalgi 3D (Three.js) robot o'rniga endi **toza SVG rasm** ishlatiladi — xuddi siz yuborgan rasmga o'xshash: oq tanali, ko'k antennali, dumaloq bosh, to'q ko'k ekran-yuz, ko'k ko'zlar va tabassum, o'ng qo'li doim "salom" berib turadi. Bu ham tezroq ishlaydi, ham ekranlarda aniqroq ko'rinadi.

Faylni almashtirish uchun: `public/index.html`, `public/js/app.js`, `public/css/style.css` — barchasini qayta yuklang (Three.js kutubxonasi endi kerak emas, shuning uchun sayt sal tezroq yuklanadi).
