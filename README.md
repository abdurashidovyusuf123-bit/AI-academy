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

## Muhim eslatma
API kalit — bu sizning "kalitingiz", uni hech qachon ochiq joyga (masalan frontend kodga) qo'ymang.
U faqat Vercel'ning "Environment Variables" bo'limida, xavfsiz saqlanadi.

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
