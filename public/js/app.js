const SUBJECTS = [
  { id:"coding", label:"Kodlash", icon:"{ }", color:"var(--coding)", heroWord:"kodlashdan",
    desc:"Dasturlash asoslarini o'rgatuvchi AI ustoz",
    system:"Sen AI Academy platformasidagi dasturlash (coding) bo'yicha o'qituvchisan. Foydalanuvchi noldan boshlaydi. O'zbek tilida, sodda, qisqa jumlalar bilan, misollar va kod namunalari orqali tushuntir. Har bir tushuntirishdan keyin kichik amaliy topshiriq taklif qil." },
  { id:"math", label:"Matematika", icon:"∑", color:"var(--math)", heroWord:"matematikagacha",
    desc:"Matematik tushunchalarni asosdan tushuntiruvchi AI ustoz",
    system:"Sen AI Academy platformasidagi matematika o'qituvchisan. O'zbek tilida, bosqichma-bosqich, real hayotdan misollar bilan tushuntir. Formulalarni oddiy tilda izohla." },
  { id:"physics", label:"Fizika", icon:"⚛", color:"var(--physics)", heroWord:"fizikagacha",
    desc:"Fizik hodisalarni tushunarli tilda tushuntiruvchi AI ustoz",
    system:"Sen AI Academy platformasidagi fizika o'qituvchisan. O'zbek tilida, kundalik hayotdan misollar va tasavvur qilish oson bo'lgan tushuntirishlar orqali o'rgat." },
  { id:"chemistry", label:"Kimyo", icon:"⚗", color:"var(--chemistry)", heroWord:"kimyogacha",
    desc:"Kimyoviy jarayonlarni sodda tilda tushuntiruvchi AI ustoz",
    system:"Sen AI Academy platformasidagi kimyo o'qituvchisan. O'zbek tilida, xavfsizlik va aniq tushuntirishlarga e'tibor berib, sodda tilda o'rgat." },
  { id:"biology", label:"Biologiya", icon:"❁", color:"var(--biology)", heroWord:"biologiyagacha",
    desc:"Tirik tabiat sirlarini tushuntiruvchi AI ustoz",
    system:"Sen AI Academy platformasidagi biologiya o'qituvchisan. O'zbek tilida, tabiiy misollar orqali sodda va qiziqarli tushuntir." },
  { id:"psychology", label:"Psixologiya", icon:"✧", color:"var(--psychology)", heroWord:"psixologiyagacha",
    desc:"Inson xatti-harakati va ongini tushuntiruvchi AI ustoz",
    system:"Sen AI Academy platformasidagi psixologiya o'qituvchisan. O'zbek tilida, ilmiy asoslangan, lekin sodda tushuntirishlar ber. Tibbiy yoki shaxsiy tashxis qo'yishdan saqlan, umumiy ta'lim beruvchi bo'l." },
  { id:"grammar", label:"Grammar", icon:"Aa", color:"var(--grammar)", heroWord:"grammargacha",
    desc:"Ingliz tili grammatikasini o'rgatuvchi AI ustoz",
    system:"Sen AI Academy platformasidagi ingliz tili grammatikasi (Grammar) o'qituvchisan. Tushuntirishlaringni foydalanuvchi tanlagan tilda ber, lekin ingliz tili misollarini har doim ingliz tilida ko'rsat va tarjimasini qo'sh. Qoidalarni sodda, bosqichma-bosqich, ko'p misollar bilan tushuntir. Har bir tushuntirishdan keyin kichik amaliy mashq taklif qil." },
  { id:"history", label:"Tarix", icon:"⏳", color:"var(--history)", heroWord:"tarixgacha",
    desc:"Jahon va O'zbekiston tarixini o'rgatuvchi AI ustoz",
    system:"Sen AI Academy platformasidagi tarix o'qituvchisan. Voqealarni xolis, aniq sanalar va sabab-oqibat bog'liqligini ko'rsatib, qiziqarli tarzda tushuntir. Murakkab tarixiy jarayonlarni sodda tilda, misollar bilan bayon qil." },
];

const CURRICULA = {
  "coding": [
    {
      "module": "Kirish va asoslar",
      "lessons": [
        "Dasturlash nima va nega kerak",
        "Dasturlash muhitini sozlash",
        "Birinchi dasturingiz",
        "O'zgaruvchilar",
        "Ma'lumot turlari",
        "Kiritish va chiqarish",
        "Izohlar yozish",
        "Arifmetik va mantiqiy operatorlar",
        "Tipni o'zgartirish",
        "1-modul mashqlari"
      ]
    },
    {
      "module": "Boshqaruv tuzilmalari",
      "lessons": [
        "if / else shartlari",
        "Mantiqiy operatorlar",
        "switch operatori",
        "for tsikli",
        "while tsikli",
        "do-while tsikli",
        "break va continue",
        "Ichma-ich tsikllar",
        "Umumiy xatolar va debugging",
        "2-modul mashqlari"
      ]
    },
    {
      "module": "Funksiyalar va massivlar",
      "lessons": [
        "Funksiya yaratish",
        "Parametrlar va argumentlar",
        "Qaytish qiymati (return)",
        "Massivlar asoslari",
        "Massiv metodlari",
        "Ko'p o'lchamli massivlar",
        "String bilan ishlash",
        "Rekursiya tushunchasi",
        "O'zgaruvchilar sohasi (scope)",
        "3-modul mashqlari"
      ]
    },
    {
      "module": "Ma'lumotlar tuzilmalari",
      "lessons": [
        "Obyektlar",
        "Kalit-qiymat juftliklari",
        "To'plamlar (Set)",
        "Stack tuzilmasi",
        "Queue tuzilmasi",
        "Hash-jadval tushunchasi",
        "Sortlash algoritmlari asoslari",
        "Qidiruv algoritmlari asoslari",
        "Murakkablik (Big O) kirish",
        "4-modul mashqlari"
      ]
    },
    {
      "module": "OOP asoslari",
      "lessons": [
        "Klass va obyekt",
        "Konstruktor",
        "Inkapsulyatsiya",
        "Meros (inheritance)",
        "Polimorfizm",
        "Interfeys tushunchasi",
        "Abstrakt klass",
        "Statik a'zolar",
        "Dizayn tamoyillari kirish",
        "5-modul mashqlari"
      ]
    },
    {
      "module": "Veb dasturlash kirish",
      "lessons": [
        "HTML asoslari",
        "CSS asoslari",
        "DOM bilan ishlash",
        "Hodisalar (events)",
        "JSON formati",
        "API bilan ishlash",
        "Fetch so'rovlari",
        "Forma bilan ishlash",
        "Oddiy veb-loyiha yaratish",
        "6-modul mashqlari"
      ]
    },
    {
      "module": "Amaliy loyiha",
      "lessons": [
        "Git va version control",
        "Debugging texnikalari",
        "Kod sifat qoidalari",
        "Test yozish asoslari",
        "Kichik loyiha rejalashtirish",
        "Portfolio loyihasi: 1-qism",
        "Portfolio loyihasi: 2-qism",
        "Ish qidirish va CV",
        "Community va resurslar",
        "Yakuniy loyiha"
      ]
    }
  ],
  "math": [
    {
      "module": "Sonlar va amallar",
      "lessons": [
        "Natural sonlar",
        "Butun sonlar",
        "Kasr sonlar",
        "O'nlik kasrlar",
        "Foizlar",
        "Nisbat va proporsiya",
        "Darajalar",
        "Kvadrat va kub ildiz",
        "Sonlar tizimi",
        "1-modul mashqlari"
      ]
    },
    {
      "module": "Algebra asoslari",
      "lessons": [
        "Ifodalar va o'zgaruvchilar",
        "Tenglamalar",
        "Chiziqli tenglamalar",
        "Tengsizliklar",
        "Ko'phadlar",
        "Ko'paytuvchilarga ajratish",
        "Kvadrat tenglamalar",
        "Tenglamalar sistemasi",
        "Funksiya tushunchasi",
        "2-modul mashqlari"
      ]
    },
    {
      "module": "Funksiyalar va grafiklar",
      "lessons": [
        "Chiziqli funksiya",
        "Kvadrat funksiya",
        "Daraja funksiyasi",
        "Ko'rsatkichli funksiya",
        "Logarifmik funksiya",
        "Grafik chizish",
        "Funksiya xossalari",
        "Funksiyalar kompozitsiyasi",
        "Teskari funksiya",
        "3-modul mashqlari"
      ]
    },
    {
      "module": "Geometriya asoslari",
      "lessons": [
        "Nuqta va chiziq",
        "Burchaklar",
        "Uchburchaklar",
        "To'rtburchaklar",
        "Aylana",
        "Perimetr va yuza",
        "Pifagor teoremasi",
        "O'xshashlik",
        "Koordinatalar tekisligi",
        "4-modul mashqlari"
      ]
    },
    {
      "module": "Trigonometriya",
      "lessons": [
        "Burchak o'lchovlari",
        "Sinus, kosinus, tangens",
        "Trigonometrik ayniyatlar",
        "Birlik aylana",
        "Trigonometrik tenglamalar",
        "Uchburchakda yechish",
        "Davriy funksiyalar",
        "Amaliy masalalar",
        "Trigonometrik grafiklar",
        "5-modul mashqlari"
      ]
    },
    {
      "module": "Analiz kirish",
      "lessons": [
        "Limit tushunchasi",
        "Hosila tushunchasi",
        "Hosila qoidalari",
        "Hosilaning tatbiqlari",
        "Integral tushunchasi",
        "Aniq integral",
        "Integral tatbiqlari",
        "Ketma-ketliklar",
        "Qatorlar kirish",
        "6-modul mashqlari"
      ]
    },
    {
      "module": "Ehtimollik va statistika",
      "lessons": [
        "Kombinatorika asoslari",
        "Ehtimollik tushunchasi",
        "Shartli ehtimollik",
        "Statistik ko'rsatkichlar",
        "Ma'lumotlarni tahlil qilish",
        "Taqsimotlar",
        "Amaliy masalalar",
        "Matematik modellashtirish",
        "Yakuniy takrorlash",
        "Yakuniy loyiha"
      ]
    }
  ],
  "physics": [
    {
      "module": "Kirish va o'lchov",
      "lessons": [
        "Fizika nima",
        "Birliklar tizimi (SI)",
        "O'lchov va xatoliklar",
        "Skalyar va vektor kattaliklar",
        "Vektorlar bilan amallar",
        "Grafik tahlil",
        "Ilmiy metod",
        "Taqriblash usullari",
        "Kirish testi",
        "1-modul mashqlari"
      ]
    },
    {
      "module": "Kinematika",
      "lessons": [
        "Tezlik",
        "Tezlanish",
        "To'g'ri chiziqli harakat",
        "Erkin tushish",
        "Gorizontal otilgan jism harakati",
        "Aylana harakat",
        "Nisbiy harakat",
        "Grafiklar tahlili",
        "Masalalar yechish",
        "2-modul mashqlari"
      ]
    },
    {
      "module": "Dinamika",
      "lessons": [
        "Kuch tushunchasi",
        "Nyuton qonunlari",
        "Ishqalanish kuchi",
        "Og'irlik kuchi",
        "Elastiklik kuchi",
        "Impuls",
        "Energiya saqlanish qonuni",
        "Ish va quvvat",
        "Aylanma harakat dinamikasi",
        "3-modul mashqlari"
      ]
    },
    {
      "module": "Issiqlik fizikasi",
      "lessons": [
        "Harorat va issiqlik",
        "Ideal gaz qonunlari",
        "Termodinamikaning 1-qonuni",
        "Entropiya kirish",
        "Agregat holatlar",
        "Issiqlik uzatilishi",
        "Molekulyar-kinetik nazariya",
        "Amaliy masalalar",
        "4-modul mashqlari",
        "Takrorlash"
      ]
    },
    {
      "module": "Elektr va magnetizm",
      "lessons": [
        "Elektr zaryad",
        "Elektr maydon",
        "Kuchlanish va tok",
        "Om qonuni",
        "Elektr zanjirlar",
        "Magnit maydon",
        "Elektromagnit induksiya",
        "Kondensator",
        "Amaliy masalalar",
        "5-modul mashqlari"
      ]
    },
    {
      "module": "Tebranish va to'lqinlar",
      "lessons": [
        "Garmonik tebranish",
        "Matematik mayatnik",
        "Mexanik to'lqinlar",
        "Tovush",
        "Yorug'lik tabiati",
        "Aks etish va sinish",
        "Linzalar",
        "Interferensiya",
        "Difraksiya",
        "6-modul mashqlari"
      ]
    },
    {
      "module": "Zamonaviy fizika",
      "lessons": [
        "Atom tuzilishi",
        "Fotoeffekt",
        "Kvant tushunchasi",
        "Radioaktivlik",
        "Yadro fizikasi kirish",
        "Nisbiylik nazariyasi kirish",
        "Zamonaviy tatbiqlar",
        "Fanning kelajagi",
        "Yakuniy takrorlash",
        "Yakuniy loyiha"
      ]
    }
  ],
  "chemistry": [
    {
      "module": "Kirish",
      "lessons": [
        "Kimyo nima",
        "Materiya va uning holatlari",
        "Atom tuzilishi",
        "Elementlar davriy jadvali",
        "Atom massasi",
        "Izotoplar",
        "Elektron konfiguratsiya",
        "Laboratoriya xavfsizligi",
        "O'lchov birliklari",
        "1-modul mashqlari"
      ]
    },
    {
      "module": "Kimyoviy bog'lanish",
      "lessons": [
        "Ion bog'lanish",
        "Kovalent bog'lanish",
        "Metall bog'lanish",
        "Molekula shakli",
        "Elektromanfiylik",
        "Bog'lanish energiyasi",
        "Lyuis strukturalari",
        "Molekula polyarligi",
        "2-modul mashqlari",
        "Takrorlash"
      ]
    },
    {
      "module": "Kimyoviy reaksiyalar",
      "lessons": [
        "Reaksiya turlari",
        "Kimyoviy tenglamalar",
        "Mol tushunchasi",
        "Stexiometriya",
        "Reaksiya tezligi",
        "Kimyoviy muvozanat",
        "Katalizatorlar",
        "Energiya o'zgarishi",
        "Amaliy masalalar",
        "3-modul mashqlari"
      ]
    },
    {
      "module": "Eritmalar va kislota-asos",
      "lessons": [
        "Eritma tushunchasi",
        "Konsentratsiya",
        "Erish jarayoni",
        "Kislotalar va asoslar",
        "pH tushunchasi",
        "Neytrallash reaksiyasi",
        "Buferli eritmalar",
        "Tuzlar",
        "Amaliy masalalar",
        "4-modul mashqlari"
      ]
    },
    {
      "module": "Organik kimyo asoslari",
      "lessons": [
        "Uglerod xossalari",
        "Uglevodorodlar",
        "Funksional guruhlar",
        "Spirtlar va kislotalar",
        "Polimerlar",
        "Izomeriya",
        "Organik reaksiyalar",
        "Biomolekulalar kirish",
        "Amaliy masalalar",
        "5-modul mashqlari"
      ]
    },
    {
      "module": "Anorganik kimyo",
      "lessons": [
        "Metallar xossalari",
        "Metalmaslar",
        "Oksidlar",
        "Gazlar kimyosi",
        "Elektrokimyo asoslari",
        "Korroziya",
        "Sanoat kimyosi",
        "Atrof-muhit kimyosi",
        "Amaliy masalalar",
        "6-modul mashqlari"
      ]
    },
    {
      "module": "Kimyo va hayot",
      "lessons": [
        "Oziq-ovqat kimyosi",
        "Dori vositalari kimyosi",
        "Kundalik hayotda kimyo",
        "Kimyoviy xavfsizlik",
        "Laboratoriya amaliyoti",
        "Zamonaviy tatbiqlar",
        "Kimyo va texnologiya",
        "Karyera yo'nalishlari",
        "Yakuniy takrorlash",
        "Yakuniy loyiha"
      ]
    }
  ],
  "biology": [
    {
      "module": "Hayot asoslari",
      "lessons": [
        "Biologiya nima",
        "Hujayra tuzilishi",
        "Hujayra organoidlari",
        "Prokariot va eukariot hujayralar",
        "Hujayra membranasi",
        "Moddalar almashinuvi kirish",
        "Mikroskop bilan ishlash",
        "Biologik molekulalar",
        "Suv va hayot",
        "1-modul mashqlari"
      ]
    },
    {
      "module": "Genetika asoslari",
      "lessons": [
        "DNK tuzilishi",
        "Gen tushunchasi",
        "Xromosomalar",
        "Mitoz bo'linish",
        "Meyoz bo'linish",
        "Irsiylanish qonunlari",
        "Mutatsiyalar",
        "Genetik xilma-xillik",
        "Zamonaviy genetika",
        "2-modul mashqlari"
      ]
    },
    {
      "module": "Odam anatomiyasi",
      "lessons": [
        "Skelet tizimi",
        "Mushak tizimi",
        "Yurak-qon tomir tizimi",
        "Nafas olish tizimi",
        "Ovqat hazm qilish tizimi",
        "Asab tizimi",
        "Endokrin tizim",
        "Immun tizim",
        "Ayirish tizimi",
        "3-modul mashqlari"
      ]
    },
    {
      "module": "O'simliklar biologiyasi",
      "lessons": [
        "Fotosintez",
        "O'simlik tuzilishi",
        "O'sish va rivojlanish",
        "Ko'payish usullari",
        "Muhitga moslashish",
        "O'simlik turlari",
        "Ekologik rol",
        "Amaliy misollar",
        "4-modul mashqlari",
        "Takrorlash"
      ]
    },
    {
      "module": "Hayvonot dunyosi",
      "lessons": [
        "Hayvonlar tasnifi",
        "Umurtqasiz hayvonlar",
        "Umurtqali hayvonlar",
        "Hayvonlar xulq-atvori",
        "Ko'payish strategiyalari",
        "Moslashish va evolyutsiya",
        "Ekotizimdagi o'rni",
        "Amaliy misollar",
        "5-modul mashqlari",
        "Takrorlash"
      ]
    },
    {
      "module": "Ekologiya",
      "lessons": [
        "Ekotizim tushunchasi",
        "Oziq zanjiri",
        "Populyatsiya dinamikasi",
        "Biologik xilma-xillik",
        "Atrof-muhit muammolari",
        "Iqlim o'zgarishi va biologiya",
        "Barqarorlik",
        "Inson ta'siri",
        "Amaliy misollar",
        "6-modul mashqlari"
      ]
    },
    {
      "module": "Zamonaviy biologiya",
      "lessons": [
        "Evolyutsiya nazariyasi",
        "Tabiiy tanlanish",
        "Biotexnologiya",
        "Gen muhandisligi",
        "Mikrobiologiya kirish",
        "Tibbiyot va biologiya",
        "Biologiya sohasidagi kasblar",
        "Ilmiy tadqiqot metodlari",
        "Yakuniy takrorlash",
        "Yakuniy loyiha"
      ]
    }
  ],
  "psychology": [
    {
      "module": "Kirish",
      "lessons": [
        "Psixologiya nima",
        "Psixologiya tarixi",
        "Ilmiy tadqiqot metodlari",
        "Ong va ongsizlik",
        "Miya va xulq-atvor",
        "Nerv tizimi asoslari",
        "Psixologiya yo'nalishlari",
        "Tadqiqot etikasi",
        "Kundalik hayotda psixologiya",
        "1-modul mashqlari"
      ]
    },
    {
      "module": "Idrok va bilish",
      "lessons": [
        "Sezgi va idrok",
        "Diqqat",
        "Xotira turlari",
        "Xotirani yaxshilash usullari",
        "Fikrlash jarayonlari",
        "Muammo yechish",
        "Til va tafakkur",
        "Intellekt tushunchasi",
        "Ijodkorlik",
        "2-modul mashqlari"
      ]
    },
    {
      "module": "Rivojlanish psixologiyasi",
      "lessons": [
        "Bolalik rivojlanishi",
        "O'smirlik davri",
        "Kattalar rivojlanishi",
        "Bog'lanish nazariyasi",
        "Ijtimoiylashuv",
        "Shaxs shakllanishi",
        "Ta'lim va rivojlanish",
        "Amaliy misollar",
        "3-modul mashqlari",
        "Takrorlash"
      ]
    },
    {
      "module": "Shaxs psixologiyasi",
      "lessons": [
        "Shaxs nazariyalari",
        "Temperament",
        "Xarakter",
        "Motivatsiya",
        "Emotsiyalar",
        "O'zini o'zi anglash",
        "O'ziga ishonch",
        "Shaxsiy o'sish",
        "Amaliy misollar",
        "4-modul mashqlari"
      ]
    },
    {
      "module": "Ijtimoiy psixologiya",
      "lessons": [
        "Ijtimoiy idrok",
        "Munosabatlar psixologiyasi",
        "Guruh dinamikasi",
        "Ishontirish va ta'sir",
        "Stereotiplar",
        "Madaniyat va psixologiya",
        "Aloqa ko'nikmalari",
        "Konfliktlarni hal qilish",
        "Amaliy misollar",
        "5-modul mashqlari"
      ]
    },
    {
      "module": "Hissiy salomatlik asoslari",
      "lessons": [
        "Stress tushunchasi",
        "Stressni boshqarish usullari",
        "Tashvishni tushunish",
        "Kayfiyatni tushunish",
        "Sog'lom odatlar",
        "Uyqu va psixologiya",
        "O'zini o'zi parvarish qilish",
        "Qo'llab-quvvatlash tizimlari",
        "Amaliy misollar",
        "6-modul mashqlari"
      ]
    },
    {
      "module": "Amaliy psixologiya",
      "lessons": [
        "Psixologiya sohasidagi kasblar",
        "Ta'lim psixologiyasi",
        "Ish joyida psixologiya",
        "Sport psixologiyasi kirish",
        "Psixologiya va texnologiya",
        "Tadqiqot loyihasi asoslari",
        "Tanqidiy fikrlash",
        "Zamonaviy tendensiyalar",
        "Yakuniy takrorlash",
        "Yakuniy loyiha"
      ]
    }
  ]
};

const I18N = {"uz": {"dir": "ltr", "nav_contact": "Aloqa", "nav_install": "Ilovani o'rnatish", "auth_login": "Kirish", "hero_eyebrow": "Bepul • Barcha fanlar • AI bilan", "hero_title": "Barcha fanlarni bitta joyda o'rganing", "hero_sub": "Fanni tanlang, savolingizni yozing — AI o'qituvchi sizga qadam-baqadam, tushunarli tilda tushuntiradi.", "hint": "Har bir fan — o'z rangi bilan. Bosing va so'rang.", "core_label": "Fanni tanlang", "core_sub": "quyidan bittasini bosing", "chat_title_default": "Fan tanlanmagan", "chat_desc_default": "Yuqoridan fanni tanlang, so'ng savolingizni yozing", "input_placeholder_default": "Savolingizni yozing...", "send_btn": "Yuborish", "usage_login_prompt": "Darslarni boshlash uchun avval kiring", "curriculum_bajarildi": "bajarildi", "level_test_btn": "Darajangizni aniqlang", "lesson_start_btn": "Boshlash", "auth_welcome_title": "Xush kelibsiz", "auth_welcome_sub": "Davom etish uchun kiring", "auth_signup_title": "Ro'yxatdan o'tish", "google_btn": "Google orqali kirish", "or_divider": "yoki", "email_ph": "Email", "password_ph": "Parol", "submit_login": "Kirish", "submit_signup": "Ro'yxatdan o'tish", "toggle_to_signup_pre": "Hisobingiz yo'qmi?", "toggle_to_signup_link": "Ro'yxatdan o'ting", "toggle_to_signin_pre": "Hisobingiz bormi?", "toggle_to_signin_link": "Kiring", "contact_title": "Aloqa", "contact_sub": "Savol yoki taklifingiz bo'lsa, yozing", "contact_name_ph": "Ismingiz", "contact_email_ph": "Email", "contact_msg_ph": "Xabaringiz...", "contact_submit": "Yuborish", "upgrade_title": "Bugungi bepul limit tugadi", "upgrade_sub": "Kuniga 5 ta bepul dars mavjud. VIP a'zo bo'lib, cheksiz darslarga ega bo'ling.", "upgrade_btn": "VIP bo'lish — $5/oy", "footer": "AI Academy — sun'iy intellekt bilan o'rganing", "lang_label": "Til", "greeting": "Assalomu alaykum! Men sizning {subject} bo'yicha AI ustozingizman. Nimadan boshlaymiz? Savolingizni yozing yoki \"Noldan boshlamoqchiman\" deb yozing.", "leaderboard_title": "🏆 Reyting", "leaderboard_sub": "Eng ko'p ball to'plagan o'quvchilar", "nickname_prompt": "Reytingda ko'rinadigan ismingizni tanlang:", "nickname_ph": "Taxallusingiz", "save_btn": "Saqlash", "no_scores_yet": "Hali hech kim ball to'plamagan.", "anonymous": "Anonim", "progress_title": "📊 Progress", "progress_sub": "Ota-ona yoki o'qituvchi bilan ulashish uchun shu sahifani ko'rsating", "streak_label": "🔥 Streak", "days_word": "kun", "lessons_word": "dars", "modules_word": "modul", "recent_exams": "So'nggi imtihonlar", "no_exams_yet": "Hali imtihon topshirilmagan.", "level_test_word": "Daraja testi", "module_exam_word": "-modul imtihoni", "schedule_title": "🗓 Haftalik dars rejasi", "schedule_sub": "Har bir kunga qaysi fan(lar)dan shug'ullanishni belgilang", "day1": "Dushanba", "day2": "Seshanba", "day3": "Chorshanba", "day4": "Payshanba", "day5": "Juma", "day6": "Shanba", "day0": "Yakshanba", "calendar_title": "📅 Faollik tarixi", "cal_prev": "‹ Oldingi", "cal_next": "Keyingi ›", "m1": "Yanvar", "m2": "Fevral", "m3": "Mart", "m4": "Aprel", "m5": "May", "m6": "Iyun", "m7": "Iyul", "m8": "Avgust", "m9": "Sentabr", "m10": "Oktabr", "m11": "Noyabr", "m12": "Dekabr", "cert_title": "Sertifikat", "cert_org": "AI Academy", "cert_print_btn": "Chop etish / PDF saqlash", "your_level": "Darajangiz:", "correct_word": "to'g'ri", "recommendation": "Tavsiya:", "start_from_module": "-moduldan boshlang. Darslar ro'yxatida shu modul avtomatik ochiladi.", "exam_passed": "✅ Imtihon topshirildi! (", "exam_failed": "❌ O'tolmadingiz (", "module_now_open": "-modul endi ochildi.", "course_complete_title": "🏆 Tabriklaymiz! Kurs yakunlandi!", "course_complete_sub": "Endi sertifikatingizni olishingiz mumkin.", "need_min_score": "Kamida 21/30 to'g'ri kerak. Quyida xato javoblaringiz tahlili bilan berilgan — ko'rib chiqib, qayta urining.", "final_exam_btn": "Yakuniy imtihon — sertifikat olish", "open_module_btn_suffix": "-modulni ochish uchun imtihon", "usage_today_used": "Bugun ", "usage_free_lessons": " bepul dars ishlatildi", "usage_vip_unlimited": "✦ VIP a'zosiz — cheksiz darslar", "cert_body_template": "Ushbu sertifikat {name} {subject} fani bo'yicha barcha 7 modulni muvaffaqiyatli yakunlaganini tasdiqlaydi.", "level_beginner": "Boshlang'ich", "level_intermediate": "O'rta", "level_advanced": "Yuqori", "level_test_title": "{subject} bo'yicha daraja aniqlash testi (25 savol)", "module_exam_title": "{n}-modul imtihoni: {module} (30 savol, 45 daqiqa)", "your_answer_word": "Sizning javobingiz:", "correct_answer_word": "To'g'ri javob:", "analyzing_word": "Tahlil tayyorlanmoqda...", "theme_picker_title": "🎨 Fon mavzusini tanlang", "theme_picker_sub": "3D fon — o'zingizga yoqqanini tanlang", "theme_space": "🌌 Galaktika", "theme_tech": "⚙️ Texno-qahramon", "comp_onboard_title": "🤗 Keling, tanishamiz!", "comp_onboard_sub": "Bu ma'lumotlar faqat sizga moslashish uchun kerak — hech kimga ko'rinmaydi.", "comp_name_ph": "Ismingiz", "comp_age_ph": "Yoshingiz", "comp_gender_ph": "Jinsingiz (ixtiyoriy)", "comp_personality_ph": "O'zingizni qanday odam deb bilasiz? (xarakteringiz)", "comp_goals_ph": "Maqsadlaringiz nima?", "comp_strengths_ph": "Kuchli tomonlaringiz", "comp_weaknesses_ph": "Zaif tomonlaringiz", "comp_skills_ph": "Qobiliyatlaringiz", "comp_onboard_save": "Tanishishni tugatish", "comp_hub_title": "🤗 Do'stim", "comp_hub_sub": "Suhbatlashamizmi yoki o'ynaymizmi?", "comp_chat_btn": "💬 Suhbat", "comp_xo_btn": "⭕ X/O", "comp_checkers_btn": "🔴 Shashka", "comp_chess_btn": "♟️ Shaxmat", "comp_input_ph": "Yozing...", "game_restart_btn": "🔄 Qayta boshlash", "comp_greeting": "Salom{name}! 😄 Men — Do'stim! Zerikkaningda gaplashishga, savol berishga yoki o'ynashga tayyorman. Nima gap?", "xo_your_turn": "Siz — X. Bosing!", "xo_you_win": "🎉 Siz yutdingiz!", "xo_bot_win": "🤖 Do'stim yutdi! Qayta urinib ko'ring.", "xo_draw": "🤝 Durrang!", "checkers_your_turn": "Sizning navbatingiz (qizil)", "checkers_you_win_nomove": "🎉 Siz yutdingiz! Do'stimda yurish yo'q.", "checkers_bot_win": "🤖 Do'stim yutdi!", "checkers_you_win": "🎉 Siz yutdingiz!", "chess_your_turn_start": "Siz — oq. Yurish uchun donani, keyin katakni bosing.", "chess_bot_mate": "🤖 Do'stim mat qildi!", "chess_you_mate": "🎉 Siz mat qildingiz, g'alaba!", "chess_draw": "🤝 Durrang!", "chess_check": "⚠️ Shoh xavf ostida (shax)!", "chess_your_turn": "Sizning navbatingiz (oq)", "chess_thinking": "Do'stim o'ylayapti...", "image_sent_placeholder": "(rasm yuborildi)"}, "ru": {"dir": "ltr", "nav_contact": "Контакты", "nav_install": "Установить приложение", "auth_login": "Войти", "hero_eyebrow": "Бесплатно • Все предметы • С ИИ", "hero_title": "Изучайте все предметы в одном месте", "hero_sub": "Выберите предмет, задайте вопрос — ИИ-учитель объяснит вам шаг за шагом, понятным языком.", "hint": "У каждого предмета свой цвет. Нажмите и спросите.", "core_label": "Выберите предмет", "core_sub": "нажмите на один из них", "chat_title_default": "Предмет не выбран", "chat_desc_default": "Выберите предмет выше, затем напишите вопрос", "input_placeholder_default": "Напишите ваш вопрос...", "send_btn": "Отправить", "usage_login_prompt": "Войдите, чтобы начать уроки", "curriculum_bajarildi": "пройдено", "level_test_btn": "Определить уровень", "lesson_start_btn": "Начать", "auth_welcome_title": "Добро пожаловать", "auth_welcome_sub": "Войдите, чтобы продолжить", "auth_signup_title": "Регистрация", "google_btn": "Войти через Google", "or_divider": "или", "email_ph": "Email", "password_ph": "Пароль", "submit_login": "Войти", "submit_signup": "Зарегистрироваться", "toggle_to_signup_pre": "Нет аккаунта?", "toggle_to_signup_link": "Зарегистрируйтесь", "toggle_to_signin_pre": "Уже есть аккаунт?", "toggle_to_signin_link": "Войдите", "contact_title": "Контакты", "contact_sub": "Есть вопрос или предложение? Напишите нам", "contact_name_ph": "Ваше имя", "contact_email_ph": "Email", "contact_msg_ph": "Ваше сообщение...", "contact_submit": "Отправить", "upgrade_title": "Бесплатный лимит на сегодня исчерпан", "upgrade_sub": "Доступно 5 бесплатных уроков в день. Станьте VIP для неограниченного доступа.", "upgrade_btn": "Стать VIP — $5/мес", "footer": "AI Academy — учитесь вместе с искусственным интеллектом", "lang_label": "Язык", "greeting": "Здравствуйте! Я ваш ИИ-репетитор по предмету «{subject}». С чего начнём? Напишите свой вопрос, или напишите «Хочу начать с нуля».", "leaderboard_title": "🏆 Рейтинг", "leaderboard_sub": "Ученики с наибольшим количеством баллов", "nickname_prompt": "Выберите имя, отображаемое в рейтинге:", "nickname_ph": "Ваш псевдоним", "save_btn": "Сохранить", "no_scores_yet": "Пока никто не набрал баллов.", "anonymous": "Аноним", "progress_title": "📊 Прогресс", "progress_sub": "Покажите эту страницу родителю или учителю", "streak_label": "🔥 Серия", "days_word": "дн.", "lessons_word": "урок", "modules_word": "модуль", "recent_exams": "Последние экзамены", "no_exams_yet": "Экзамены пока не сдавались.", "level_test_word": "Тест на уровень", "module_exam_word": "-й модуль (экзамен)", "schedule_title": "🗓 Недельное расписание", "schedule_sub": "Отметьте, какими предметами заниматься в какой день", "day1": "Понедельник", "day2": "Вторник", "day3": "Среда", "day4": "Четверг", "day5": "Пятница", "day6": "Суббота", "day0": "Воскресенье", "calendar_title": "📅 История активности", "cal_prev": "‹ Пред.", "cal_next": "След. ›", "m1": "Январь", "m2": "Февраль", "m3": "Март", "m4": "Апрель", "m5": "Май", "m6": "Июнь", "m7": "Июль", "m8": "Август", "m9": "Сентябрь", "m10": "Октябрь", "m11": "Ноябрь", "m12": "Декабрь", "cert_title": "Сертификат", "cert_org": "AI Academy", "cert_print_btn": "Печать / Сохранить PDF", "your_level": "Ваш уровень:", "correct_word": "верно", "recommendation": "Рекомендация:", "start_from_module": "-го модуля. В списке уроков этот модуль откроется автоматически.", "exam_passed": "✅ Экзамен сдан! (", "exam_failed": "❌ Не сдано (", "module_now_open": "-й модуль теперь открыт.", "course_complete_title": "🏆 Поздравляем! Курс завершён!", "course_complete_sub": "Теперь вы можете получить сертификат.", "need_min_score": "Нужно минимум 21/30. Ниже разбор ваших ошибок — изучите и попробуйте снова.", "final_exam_btn": "Финальный экзамен — получить сертификат", "open_module_btn_suffix": "-й модуль — экзамен для открытия", "usage_today_used": "Сегодня использовано ", "usage_free_lessons": " бесплатных уроков", "usage_vip_unlimited": "✦ Вы VIP — уроки без ограничений", "cert_body_template": "Этот сертификат подтверждает, что {name} успешно завершил(а) все 7 модулей по предмету «{subject}».", "level_beginner": "Начальный", "level_intermediate": "Средний", "level_advanced": "Высокий", "level_test_title": "Тест на уровень по предмету «{subject}» (25 вопросов)", "module_exam_title": "Экзамен модуля {n}: {module} (30 вопросов, 45 минут)", "your_answer_word": "Ваш ответ:", "correct_answer_word": "Правильный ответ:", "analyzing_word": "Готовим разбор...", "theme_picker_title": "🎨 Выберите тему фона", "theme_picker_sub": "3D-фон — выберите тот, что вам нравится", "theme_space": "🌌 Галактика", "theme_tech": "⚙️ Техно-герой", "comp_onboard_title": "🤗 Давайте познакомимся!", "comp_onboard_sub": "Эта информация нужна только для персонализации — её никто не увидит.", "comp_name_ph": "Ваше имя", "comp_age_ph": "Ваш возраст", "comp_gender_ph": "Ваш пол (необязательно)", "comp_personality_ph": "Какой вы человек? (характер)", "comp_goals_ph": "Какие у вас цели?", "comp_strengths_ph": "Ваши сильные стороны", "comp_weaknesses_ph": "Ваши слабые стороны", "comp_skills_ph": "Ваши способности", "comp_onboard_save": "Завершить знакомство", "comp_hub_title": "🤗 Друг", "comp_hub_sub": "Поболтаем или поиграем?", "comp_chat_btn": "💬 Чат", "comp_xo_btn": "⭕ Крестики-нолики", "comp_checkers_btn": "🔴 Шашки", "comp_chess_btn": "♟️ Шахматы", "comp_input_ph": "Напишите...", "game_restart_btn": "🔄 Начать заново", "comp_greeting": "Привет{name}! 😄 Я — твой Друг! Готов поболтать, ответить на вопросы или поиграть. Как дела?", "xo_your_turn": "Вы — X. Нажимайте!", "xo_you_win": "🎉 Вы выиграли!", "xo_bot_win": "🤖 Друг выиграл! Попробуйте ещё раз.", "xo_draw": "🤝 Ничья!", "checkers_your_turn": "Ваш ход (красные)", "checkers_you_win_nomove": "🎉 Вы выиграли! У Друга нет ходов.", "checkers_bot_win": "🤖 Друг выиграл!", "checkers_you_win": "🎉 Вы выиграли!", "chess_your_turn_start": "Вы играете белыми. Нажмите на фигуру, затем на клетку.", "chess_bot_mate": "🤖 Друг поставил мат!", "chess_you_mate": "🎉 Вы поставили мат, победа!", "chess_draw": "🤝 Ничья!", "chess_check": "⚠️ Шах королю!", "chess_your_turn": "Ваш ход (белые)", "chess_thinking": "Друг думает...", "image_sent_placeholder": "(изображение отправлено)"}, "en": {"dir": "ltr", "nav_contact": "Contact", "nav_install": "Install app", "auth_login": "Log in", "hero_eyebrow": "Free • All subjects • Powered by AI", "hero_title": "Learn every subject in one place", "hero_sub": "Pick a subject and ask your question — your AI tutor explains it step by step, in plain language.", "hint": "Each subject has its own color. Click and ask.", "core_label": "Choose a subject", "core_sub": "click one below", "chat_title_default": "No subject selected", "chat_desc_default": "Choose a subject above, then type your question", "input_placeholder_default": "Type your question...", "send_btn": "Send", "usage_login_prompt": "Log in to start lessons", "curriculum_bajarildi": "completed", "level_test_btn": "Take level test", "lesson_start_btn": "Start", "auth_welcome_title": "Welcome", "auth_welcome_sub": "Log in to continue", "auth_signup_title": "Sign up", "google_btn": "Continue with Google", "or_divider": "or", "email_ph": "Email", "password_ph": "Password", "submit_login": "Log in", "submit_signup": "Sign up", "toggle_to_signup_pre": "No account?", "toggle_to_signup_link": "Sign up", "toggle_to_signin_pre": "Already have an account?", "toggle_to_signin_link": "Log in", "contact_title": "Contact", "contact_sub": "Have a question or suggestion? Send it our way", "contact_name_ph": "Your name", "contact_email_ph": "Email", "contact_msg_ph": "Your message...", "contact_submit": "Send", "upgrade_title": "You've used today's free limit", "upgrade_sub": "5 free lessons are available per day. Become a VIP for unlimited lessons.", "upgrade_btn": "Go VIP — $5/mo", "footer": "AI Academy — learn with artificial intelligence", "lang_label": "Language", "greeting": "Hello! I'm your AI tutor for {subject}. Where should we start? Type your question, or write \"I want to start from scratch.\"", "leaderboard_title": "🏆 Leaderboard", "leaderboard_sub": "Students with the most points", "nickname_prompt": "Choose the name shown on the leaderboard:", "nickname_ph": "Your nickname", "save_btn": "Save", "no_scores_yet": "No one has scored points yet.", "anonymous": "Anonymous", "progress_title": "📊 Progress", "progress_sub": "Show this page to a parent or teacher", "streak_label": "🔥 Streak", "days_word": "days", "lessons_word": "lessons", "modules_word": "modules", "recent_exams": "Recent exams", "no_exams_yet": "No exams taken yet.", "level_test_word": "Level test", "module_exam_word": " module exam", "schedule_title": "🗓 Weekly study plan", "schedule_sub": "Mark which subject(s) to study on each day", "day1": "Monday", "day2": "Tuesday", "day3": "Wednesday", "day4": "Thursday", "day5": "Friday", "day6": "Saturday", "day0": "Sunday", "calendar_title": "📅 Activity history", "cal_prev": "‹ Prev", "cal_next": "Next ›", "m1": "January", "m2": "February", "m3": "March", "m4": "April", "m5": "May", "m6": "June", "m7": "July", "m8": "August", "m9": "September", "m10": "October", "m11": "November", "m12": "December", "cert_title": "Certificate", "cert_org": "AI Academy", "cert_print_btn": "Print / Save as PDF", "your_level": "Your level:", "correct_word": "correct", "recommendation": "Recommendation: start from module ", "start_from_module": ". This module will open automatically in your lesson list.", "exam_passed": "✅ Exam passed! (", "exam_failed": "❌ You did not pass (", "module_now_open": " module is now unlocked.", "course_complete_title": "🏆 Congratulations! Course complete!", "course_complete_sub": "You can now get your certificate.", "need_min_score": "You need at least 21/30. Below is a review of your mistakes — study it and try again.", "final_exam_btn": "Final exam — get certificate", "open_module_btn_suffix": " module exam to unlock", "usage_today_used": "Today you've used ", "usage_free_lessons": " free lessons", "usage_vip_unlimited": "✦ You're VIP — unlimited lessons", "cert_body_template": "This certifies that {name} has successfully completed all 7 modules of {subject}.", "level_beginner": "Beginner", "level_intermediate": "Intermediate", "level_advanced": "Advanced", "level_test_title": "{subject} level test (25 questions)", "module_exam_title": "Module {n} exam: {module} (30 questions, 45 minutes)", "your_answer_word": "Your answer:", "correct_answer_word": "Correct answer:", "analyzing_word": "Preparing analysis...", "theme_picker_title": "🎨 Choose a background theme", "theme_picker_sub": "3D background — pick the one you like", "theme_space": "🌌 Galaxy", "theme_tech": "⚙️ Tech Hero", "comp_onboard_title": "🤗 Let's get to know each other!", "comp_onboard_sub": "This info is only used to personalize — no one else sees it.", "comp_name_ph": "Your name", "comp_age_ph": "Your age", "comp_gender_ph": "Your gender (optional)", "comp_personality_ph": "What kind of person are you? (personality)", "comp_goals_ph": "What are your goals?", "comp_strengths_ph": "Your strengths", "comp_weaknesses_ph": "Your weaknesses", "comp_skills_ph": "Your skills", "comp_onboard_save": "Finish introduction", "comp_hub_title": "🤗 Buddy", "comp_hub_sub": "Want to chat or play?", "comp_chat_btn": "💬 Chat", "comp_xo_btn": "⭕ Tic-Tac-Toe", "comp_checkers_btn": "🔴 Checkers", "comp_chess_btn": "♟️ Chess", "comp_input_ph": "Type here...", "game_restart_btn": "🔄 Restart", "comp_greeting": "Hi{name}! 😄 I'm your Buddy! Ready to chat, answer questions, or play a game. What's up?", "xo_your_turn": "You're X. Click a cell!", "xo_you_win": "🎉 You won!", "xo_bot_win": "🤖 Buddy won! Try again.", "xo_draw": "🤝 It's a draw!", "checkers_your_turn": "Your turn (red)", "checkers_you_win_nomove": "🎉 You won! Buddy has no moves left.", "checkers_bot_win": "🤖 Buddy won!", "checkers_you_win": "🎉 You won!", "chess_your_turn_start": "You're playing white. Click a piece, then a square.", "chess_bot_mate": "🤖 Buddy checkmated you!", "chess_you_mate": "🎉 You checkmated Buddy, victory!", "chess_draw": "🤝 It's a draw!", "chess_check": "⚠️ Check!", "chess_your_turn": "Your turn (white)", "chess_thinking": "Buddy is thinking...", "image_sent_placeholder": "(image sent)"}, "zh": {"dir": "ltr", "nav_contact": "联系我们", "nav_install": "安装应用", "auth_login": "登录", "hero_eyebrow": "免费 • 全部学科 • AI驱动", "hero_title": "在这里学习所有学科", "hero_sub": "选择一个学科并提出问题 — AI老师会用简单易懂的语言逐步讲解。", "hint": "每个学科都有自己的颜色。点击并提问。", "core_label": "选择学科", "core_sub": "点击下方任意一个", "chat_title_default": "尚未选择学科", "chat_desc_default": "请先选择学科，然后输入您的问题", "input_placeholder_default": "输入您的问题...", "send_btn": "发送", "usage_login_prompt": "请登录以开始学习", "curriculum_bajarildi": "已完成", "level_test_btn": "进行水平测试", "lesson_start_btn": "开始", "auth_welcome_title": "欢迎", "auth_welcome_sub": "登录以继续", "auth_signup_title": "注册", "google_btn": "使用Google登录", "or_divider": "或", "email_ph": "电子邮箱", "password_ph": "密码", "submit_login": "登录", "submit_signup": "注册", "toggle_to_signup_pre": "还没有账户？", "toggle_to_signup_link": "立即注册", "toggle_to_signin_pre": "已有账户？", "toggle_to_signin_link": "登录", "contact_title": "联系我们", "contact_sub": "有问题或建议？请告诉我们", "contact_name_ph": "您的姓名", "contact_email_ph": "电子邮箱", "contact_msg_ph": "您的留言...", "contact_submit": "发送", "upgrade_title": "今日免费额度已用完", "upgrade_sub": "每天可享5节免费课程。成为VIP即可无限学习。", "upgrade_btn": "开通VIP — 每月$5", "footer": "AI Academy — 与人工智能一起学习", "lang_label": "语言", "greeting": "你好！我是你的{subject}AI老师。我们从哪里开始呢？请输入你的问题，或者输入\"我想从零开始\"。", "leaderboard_title": "🏆 排行榜", "leaderboard_sub": "得分最多的学生", "nickname_prompt": "选择在排行榜上显示的名字：", "nickname_ph": "你的昵称", "save_btn": "保存", "no_scores_yet": "还没有人获得积分。", "anonymous": "匿名", "progress_title": "📊 进度", "progress_sub": "将此页面展示给家长或老师", "streak_label": "🔥 连续天数", "days_word": "天", "lessons_word": "课", "modules_word": "模块", "recent_exams": "最近的考试", "no_exams_yet": "尚未参加过考试。", "level_test_word": "水平测试", "module_exam_word": "模块考试", "schedule_title": "🗓 每周学习计划", "schedule_sub": "标记每天要学习的科目", "day1": "星期一", "day2": "星期二", "day3": "星期三", "day4": "星期四", "day5": "星期五", "day6": "星期六", "day0": "星期日", "calendar_title": "📅 活动历史", "cal_prev": "‹ 上个月", "cal_next": "下个月 ›", "m1": "一月", "m2": "二月", "m3": "三月", "m4": "四月", "m5": "五月", "m6": "六月", "m7": "七月", "m8": "八月", "m9": "九月", "m10": "十月", "m11": "十一月", "m12": "十二月", "cert_title": "证书", "cert_org": "AI Academy", "cert_print_btn": "打印/保存为PDF", "your_level": "你的水平：", "correct_word": "正确", "recommendation": "建议从第", "start_from_module": "模块开始，课程列表中该模块将自动解锁。", "exam_passed": "✅ 考试通过！（", "exam_failed": "❌ 未通过（", "module_now_open": "模块现已解锁。", "course_complete_title": "🏆 恭喜！课程已完成！", "course_complete_sub": "现在您可以领取证书了。", "need_min_score": "至少需要21/30分。以下是您的错题分析——请复习后再试一次。", "final_exam_btn": "期末考试——获取证书", "open_module_btn_suffix": "模块解锁考试", "usage_today_used": "今天已使用 ", "usage_free_lessons": " 节免费课程", "usage_vip_unlimited": "✦ 您是VIP会员——无限学习", "cert_body_template": "本证书证明 {name} 已成功完成{subject}的全部7个模块。", "level_beginner": "初级", "level_intermediate": "中级", "level_advanced": "高级", "level_test_title": "{subject}水平测试（25题）", "module_exam_title": "第{n}模块考试：{module}（30题，45分钟）", "your_answer_word": "你的答案：", "correct_answer_word": "正确答案：", "analyzing_word": "正在准备分析...", "theme_picker_title": "🎨 选择背景主题", "theme_picker_sub": "3D背景——选择你喜欢的", "theme_space": "🌌 银河", "theme_tech": "⚙️ 科技英雄", "comp_onboard_title": "🤗 让我们互相认识一下！", "comp_onboard_sub": "这些信息仅用于个性化，不会被任何人看到。", "comp_name_ph": "你的名字", "comp_age_ph": "你的年龄", "comp_gender_ph": "你的性别（可选）", "comp_personality_ph": "你是什么样的人？（性格）", "comp_goals_ph": "你的目标是什么？", "comp_strengths_ph": "你的优点", "comp_weaknesses_ph": "你的缺点", "comp_skills_ph": "你的技能", "comp_onboard_save": "完成介绍", "comp_hub_title": "🤗 伙伴", "comp_hub_sub": "聊天还是玩游戏？", "comp_chat_btn": "💬 聊天", "comp_xo_btn": "⭕ 井字棋", "comp_checkers_btn": "🔴 跳棋", "comp_chess_btn": "♟️ 国际象棋", "comp_input_ph": "输入...", "game_restart_btn": "🔄 重新开始", "comp_greeting": "你好{name}！😄 我是你的伙伴！可以陪你聊天、回答问题或一起玩游戏。怎么样？", "xo_your_turn": "你是X，点击格子！", "xo_you_win": "🎉 你赢了！", "xo_bot_win": "🤖 伙伴赢了！再试一次吧。", "xo_draw": "🤝 平局！", "checkers_your_turn": "轮到你了（红方）", "checkers_you_win_nomove": "🎉 你赢了！伙伴无棋可走。", "checkers_bot_win": "🤖 伙伴赢了！", "checkers_you_win": "🎉 你赢了！", "chess_your_turn_start": "你执白棋。先点棋子，再点目标格。", "chess_bot_mate": "🤖 伙伴将死了你！", "chess_you_mate": "🎉 你将死了伙伴，胜利！", "chess_draw": "🤝 平局！", "chess_check": "⚠️ 将军！", "chess_your_turn": "轮到你了（白方）", "chess_thinking": "伙伴正在思考...", "image_sent_placeholder": "（已发送图片）"}, "ja": {"dir": "ltr", "nav_contact": "お問い合わせ", "nav_install": "アプリをインストール", "auth_login": "ログイン", "hero_eyebrow": "無料 • 全教科 • AI搭載", "hero_title": "すべての教科をここで学ぶ", "hero_sub": "教科を選んで質問するだけ — AI講師がわかりやすく段階的に説明します。", "hint": "教科ごとに色が異なります。クリックして質問しましょう。", "core_label": "教科を選択", "core_sub": "下から選んでください", "chat_title_default": "教科が選択されていません", "chat_desc_default": "上で教科を選び、質問を入力してください", "input_placeholder_default": "質問を入力してください...", "send_btn": "送信", "usage_login_prompt": "レッスンを始めるにはログインしてください", "curriculum_bajarildi": "完了", "level_test_btn": "レベル診断を受ける", "lesson_start_btn": "開始", "auth_welcome_title": "ようこそ", "auth_welcome_sub": "続けるにはログインしてください", "auth_signup_title": "新規登録", "google_btn": "Googleでログイン", "or_divider": "または", "email_ph": "メールアドレス", "password_ph": "パスワード", "submit_login": "ログイン", "submit_signup": "登録", "toggle_to_signup_pre": "アカウントをお持ちでないですか？", "toggle_to_signup_link": "新規登録", "toggle_to_signin_pre": "すでにアカウントをお持ちですか？", "toggle_to_signin_link": "ログイン", "contact_title": "お問い合わせ", "contact_sub": "ご質問やご提案がありましたらお送りください", "contact_name_ph": "お名前", "contact_email_ph": "メールアドレス", "contact_msg_ph": "メッセージ...", "contact_submit": "送信", "upgrade_title": "本日の無料枠を使い切りました", "upgrade_sub": "1日5レッスンまで無料です。VIPになると無制限に学習できます。", "upgrade_btn": "VIPになる — 月$5", "footer": "AI Academy — 人工知能と一緒に学ぼう", "lang_label": "言語", "greeting": "こんにちは！私はあなたの{subject}のAI講師です。何から始めましょうか？質問を入力するか、「最初から始めたいです」と書いてください。", "leaderboard_title": "🏆 ランキング", "leaderboard_sub": "最もポイントを獲得した生徒", "nickname_prompt": "ランキングに表示する名前を選んでください：", "nickname_ph": "ニックネーム", "save_btn": "保存", "no_scores_yet": "まだ誰もポイントを獲得していません。", "anonymous": "匿名", "progress_title": "📊 進捗", "progress_sub": "このページを保護者や先生に見せてください", "streak_label": "🔥 連続記録", "days_word": "日", "lessons_word": "レッスン", "modules_word": "モジュール", "recent_exams": "最近の試験", "no_exams_yet": "まだ試験を受けていません。", "level_test_word": "レベル診断", "module_exam_word": "モジュール試験", "schedule_title": "🗓 週間学習プラン", "schedule_sub": "各曜日に学習する教科を選んでください", "day1": "月曜日", "day2": "火曜日", "day3": "水曜日", "day4": "木曜日", "day5": "金曜日", "day6": "土曜日", "day0": "日曜日", "calendar_title": "📅 活動履歴", "cal_prev": "‹ 前月", "cal_next": "次月 ›", "m1": "1月", "m2": "2月", "m3": "3月", "m4": "4月", "m5": "5月", "m6": "6月", "m7": "7月", "m8": "8月", "m9": "9月", "m10": "10月", "m11": "11月", "m12": "12月", "cert_title": "修了証", "cert_org": "AI Academy", "cert_print_btn": "印刷 / PDFで保存", "your_level": "あなたのレベル：", "correct_word": "正解", "recommendation": "モジュール", "start_from_module": "から始めることをお勧めします。レッスン一覧で自動的に開放されます。", "exam_passed": "✅ 試験に合格しました！（", "exam_failed": "❌ 不合格でした（", "module_now_open": "モジュールが解放されました。", "course_complete_title": "🏆 おめでとうございます！コース修了！", "course_complete_sub": "修了証を受け取ることができます。", "need_min_score": "最低21/30が必要です。以下の間違いの分析を確認し、再挑戦してください。", "final_exam_btn": "最終試験 — 修了証を取得", "open_module_btn_suffix": "モジュール解放試験", "usage_today_used": "本日 ", "usage_free_lessons": " 回の無料レッスンを使用", "usage_vip_unlimited": "✦ VIP会員 — レッスン無制限", "cert_body_template": "この証明書は、{name}様が{subject}の全7モジュールを修了したことを証明します。", "level_beginner": "初級", "level_intermediate": "中級", "level_advanced": "上級", "level_test_title": "{subject}レベル診断（25問）", "module_exam_title": "モジュール{n}試験：{module}（30問、45分）", "your_answer_word": "あなたの回答：", "correct_answer_word": "正解：", "analyzing_word": "分析を準備中...", "theme_picker_title": "🎨 背景テーマを選択", "theme_picker_sub": "3D背景 — お好きなものをお選びください", "theme_space": "🌌 銀河", "theme_tech": "⚙️ テックヒーロー", "comp_onboard_title": "🤗 自己紹介をしましょう！", "comp_onboard_sub": "この情報はパーソナライズのみに使用され、誰にも公開されません。", "comp_name_ph": "お名前", "comp_age_ph": "年齢", "comp_gender_ph": "性別（任意）", "comp_personality_ph": "どんな性格ですか？", "comp_goals_ph": "目標は何ですか？", "comp_strengths_ph": "あなたの長所", "comp_weaknesses_ph": "あなたの短所", "comp_skills_ph": "あなたのスキル", "comp_onboard_save": "紹介を完了", "comp_hub_title": "🤗 バディ", "comp_hub_sub": "おしゃべりしますか、それとも遊びますか？", "comp_chat_btn": "💬 チャット", "comp_xo_btn": "⭕ 三目並べ", "comp_checkers_btn": "🔴 チェッカー", "comp_chess_btn": "♟️ チェス", "comp_input_ph": "入力してください...", "game_restart_btn": "🔄 やり直す", "comp_greeting": "こんにちは{name}！😄 バディです！おしゃべりも質問もゲームもできますよ。どうしましたか？", "xo_your_turn": "あなたはXです。マスをクリック！", "xo_you_win": "🎉 あなたの勝ちです！", "xo_bot_win": "🤖 バディの勝ち！また挑戦してね。", "xo_draw": "🤝 引き分け！", "checkers_your_turn": "あなたの番です（赤）", "checkers_you_win_nomove": "🎉 あなたの勝ち！バディは動けません。", "checkers_bot_win": "🤖 バディの勝ち！", "checkers_you_win": "🎉 あなたの勝ち！", "chess_your_turn_start": "あなたは白番です。駒をクリックしてからマスをクリック。", "chess_bot_mate": "🤖 バディにチェックメイトされました！", "chess_you_mate": "🎉 チェックメイト、勝利です！", "chess_draw": "🤝 引き分け！", "chess_check": "⚠️ チェック！", "chess_your_turn": "あなたの番です（白）", "chess_thinking": "バディが考え中...", "image_sent_placeholder": "（画像を送信しました）"}, "ko": {"dir": "ltr", "nav_contact": "문의하기", "nav_install": "앱 설치", "auth_login": "로그인", "hero_eyebrow": "무료 • 전 과목 • AI 기반", "hero_title": "모든 과목을 한 곳에서 배우세요", "hero_sub": "과목을 선택하고 질문을 입력하세요 — AI 튜터가 단계별로 쉽게 설명해 드립니다.", "hint": "각 과목마다 고유한 색상이 있습니다. 클릭하고 질문하세요.", "core_label": "과목 선택", "core_sub": "아래에서 하나를 선택하세요", "chat_title_default": "선택된 과목 없음", "chat_desc_default": "위에서 과목을 선택한 후 질문을 입력하세요", "input_placeholder_default": "질문을 입력하세요...", "send_btn": "보내기", "usage_login_prompt": "수업을 시작하려면 로그인하세요", "curriculum_bajarildi": "완료", "level_test_btn": "레벨 테스트 응시", "lesson_start_btn": "시작", "auth_welcome_title": "환영합니다", "auth_welcome_sub": "계속하려면 로그인하세요", "auth_signup_title": "회원가입", "google_btn": "Google로 로그인", "or_divider": "또는", "email_ph": "이메일", "password_ph": "비밀번호", "submit_login": "로그인", "submit_signup": "회원가입", "toggle_to_signup_pre": "계정이 없으신가요?", "toggle_to_signup_link": "회원가입", "toggle_to_signin_pre": "이미 계정이 있으신가요?", "toggle_to_signin_link": "로그인", "contact_title": "문의하기", "contact_sub": "질문이나 제안이 있으시면 보내주세요", "contact_name_ph": "이름", "contact_email_ph": "이메일", "contact_msg_ph": "메시지...", "contact_submit": "보내기", "upgrade_title": "오늘의 무료 한도를 모두 사용했습니다", "upgrade_sub": "하루 5개의 무료 수업이 제공됩니다. VIP가 되어 무제한으로 이용하세요.", "upgrade_btn": "VIP 되기 — 월 $5", "footer": "AI Academy — 인공지능과 함께 배우세요", "lang_label": "언어", "greeting": "안녕하세요! 저는 당신의 {subject} AI 튜터입니다. 무엇부터 시작할까요? 질문을 입력하거나 \"처음부터 시작하고 싶어요\"라고 써주세요.", "leaderboard_title": "🏆 순위표", "leaderboard_sub": "가장 많은 포인트를 획득한 학생", "nickname_prompt": "순위표에 표시될 이름을 선택하세요:", "nickname_ph": "닉네임", "save_btn": "저장", "no_scores_yet": "아직 포인트를 획득한 사람이 없습니다.", "anonymous": "익명", "progress_title": "📊 진행 상황", "progress_sub": "이 페이지를 부모님이나 선생님께 보여주세요", "streak_label": "🔥 연속 기록", "days_word": "일", "lessons_word": "수업", "modules_word": "모듈", "recent_exams": "최근 시험", "no_exams_yet": "아직 시험을 본 적이 없습니다.", "level_test_word": "레벨 테스트", "module_exam_word": " 모듈 시험", "schedule_title": "🗓 주간 학습 계획", "schedule_sub": "각 요일에 공부할 과목을 선택하세요", "day1": "월요일", "day2": "화요일", "day3": "수요일", "day4": "목요일", "day5": "금요일", "day6": "토요일", "day0": "일요일", "calendar_title": "📅 활동 기록", "cal_prev": "‹ 이전", "cal_next": "다음 ›", "m1": "1월", "m2": "2월", "m3": "3월", "m4": "4월", "m5": "5월", "m6": "6월", "m7": "7월", "m8": "8월", "m9": "9월", "m10": "10월", "m11": "11월", "m12": "12월", "cert_title": "수료증", "cert_org": "AI Academy", "cert_print_btn": "인쇄 / PDF로 저장", "your_level": "당신의 레벨:", "correct_word": "정답", "recommendation": "추천: ", "start_from_module": "모듈부터 시작하세요. 수업 목록에서 자동으로 열립니다.", "exam_passed": "✅ 시험 통과! (", "exam_failed": "❌ 불합격 (", "module_now_open": " 모듈이 열렸습니다.", "course_complete_title": "🏆 축하합니다! 과정을 완료했습니다!", "course_complete_sub": "이제 수료증을 받을 수 있습니다.", "need_min_score": "최소 21/30점이 필요합니다. 아래 오답 분석을 확인하고 다시 시도하세요.", "final_exam_btn": "최종 시험 — 수료증 받기", "open_module_btn_suffix": " 모듈 개방 시험", "usage_today_used": "오늘 ", "usage_free_lessons": "개의 무료 수업을 사용했습니다", "usage_vip_unlimited": "✦ VIP 회원 — 무제한 수업", "cert_body_template": "이 수료증은 {name}님이 {subject} 과목의 전체 7개 모듈을 성공적으로 완료했음을 증명합니다.", "level_beginner": "초급", "level_intermediate": "중급", "level_advanced": "고급", "level_test_title": "{subject} 레벨 테스트 (25문항)", "module_exam_title": "{n}모듈 시험: {module} (30문항, 45분)", "your_answer_word": "당신의 답변:", "correct_answer_word": "정답:", "analyzing_word": "분석 준비 중...", "theme_picker_title": "🎨 배경 테마 선택", "theme_picker_sub": "3D 배경 — 마음에 드는 것을 선택하세요", "theme_space": "🌌 은하수", "theme_tech": "⚙️ 테크 히어로", "comp_onboard_title": "🤗 서로 알아가요!", "comp_onboard_sub": "이 정보는 맞춤화에만 사용되며 아무에게도 공개되지 않습니다.", "comp_name_ph": "이름", "comp_age_ph": "나이", "comp_gender_ph": "성별 (선택)", "comp_personality_ph": "어떤 성격이신가요?", "comp_goals_ph": "목표가 무엇인가요?", "comp_strengths_ph": "강점", "comp_weaknesses_ph": "약점", "comp_skills_ph": "능력", "comp_onboard_save": "소개 완료", "comp_hub_title": "🤗 친구", "comp_hub_sub": "대화할까요, 아니면 게임할까요?", "comp_chat_btn": "💬 대화", "comp_xo_btn": "⭕ 틱택토", "comp_checkers_btn": "🔴 체커", "comp_chess_btn": "♟️ 체스", "comp_input_ph": "입력하세요...", "game_restart_btn": "🔄 다시 시작", "comp_greeting": "안녕하세요{name}! 😄 저는 당신의 친구예요! 대화, 질문, 게임 모두 준비됐어요. 어떻게 지내세요?", "xo_your_turn": "당신은 X입니다. 칸을 클릭하세요!", "xo_you_win": "🎉 당신이 이겼습니다!", "xo_bot_win": "🤖 친구가 이겼어요! 다시 시도해보세요.", "xo_draw": "🤝 무승부!", "checkers_your_turn": "당신의 차례입니다 (빨강)", "checkers_you_win_nomove": "🎉 당신이 이겼습니다! 친구가 더 이상 움직일 수 없어요.", "checkers_bot_win": "🤖 친구가 이겼어요!", "checkers_you_win": "🎉 당신이 이겼습니다!", "chess_your_turn_start": "당신은 흰색입니다. 기물을 클릭한 후 칸을 클릭하세요.", "chess_bot_mate": "🤖 친구가 체크메이트했습니다!", "chess_you_mate": "🎉 체크메이트, 승리했습니다!", "chess_draw": "🤝 무승부!", "chess_check": "⚠️ 체크!", "chess_your_turn": "당신의 차례입니다 (흰색)", "chess_thinking": "친구가 생각 중...", "image_sent_placeholder": "(이미지 전송됨)"}, "ar": {"dir": "rtl", "nav_contact": "تواصل معنا", "nav_install": "تثبيت التطبيق", "auth_login": "تسجيل الدخول", "hero_eyebrow": "مجاني • جميع المواد • مدعوم بالذكاء الاصطناعي", "hero_title": "تعلّم جميع المواد في مكان واحد", "hero_sub": "اختر مادة واطرح سؤالك — سيشرح لك المعلم الذكي خطوة بخطوة وبلغة بسيطة.", "hint": "لكل مادة لونها الخاص. اضغط واسأل.", "core_label": "اختر مادة", "core_sub": "اضغط على إحدى المواد أدناه", "chat_title_default": "لم يتم اختيار مادة", "chat_desc_default": "اختر مادة أعلاه، ثم اكتب سؤالك", "input_placeholder_default": "اكتب سؤالك...", "send_btn": "إرسال", "usage_login_prompt": "سجّل الدخول لبدء الدروس", "curriculum_bajarildi": "مكتمل", "level_test_btn": "حدّد مستواك", "lesson_start_btn": "ابدأ", "auth_welcome_title": "مرحباً بك", "auth_welcome_sub": "سجّل الدخول للمتابعة", "auth_signup_title": "إنشاء حساب", "google_btn": "المتابعة عبر Google", "or_divider": "أو", "email_ph": "البريد الإلكتروني", "password_ph": "كلمة المرور", "submit_login": "تسجيل الدخول", "submit_signup": "إنشاء حساب", "toggle_to_signup_pre": "ليس لديك حساب؟", "toggle_to_signup_link": "أنشئ حساباً", "toggle_to_signin_pre": "لديك حساب بالفعل؟", "toggle_to_signin_link": "تسجيل الدخول", "contact_title": "تواصل معنا", "contact_sub": "هل لديك سؤال أو اقتراح؟ أرسله لنا", "contact_name_ph": "اسمك", "contact_email_ph": "البريد الإلكتروني", "contact_msg_ph": "رسالتك...", "contact_submit": "إرسال", "upgrade_title": "لقد استنفدت الحد المجاني لليوم", "upgrade_sub": "يتوفر 5 دروس مجانية يومياً. اشترك في VIP للحصول على دروس غير محدودة.", "upgrade_btn": "اشترك في VIP — 5$/شهر", "footer": "AI Academy — تعلّم مع الذكاء الاصطناعي", "lang_label": "اللغة", "greeting": "مرحباً! أنا معلمك الذكي لمادة {subject}. من أين نبدأ؟ اكتب سؤالك، أو اكتب \"أريد أن أبدأ من الصفر\".", "leaderboard_title": "🏆 لوحة المتصدرين", "leaderboard_sub": "الطلاب الأعلى نقاطاً", "nickname_prompt": "اختر الاسم الذي سيظهر في لوحة المتصدرين:", "nickname_ph": "اسمك المستعار", "save_btn": "حفظ", "no_scores_yet": "لم يحصل أحد على نقاط بعد.", "anonymous": "مجهول", "progress_title": "📊 التقدم", "progress_sub": "اعرض هذه الصفحة على ولي الأمر أو المعلم", "streak_label": "🔥 سلسلة الأيام", "days_word": "يوم", "lessons_word": "درس", "modules_word": "وحدة", "recent_exams": "آخر الاختبارات", "no_exams_yet": "لم يتم إجراء أي اختبار بعد.", "level_test_word": "اختبار تحديد المستوى", "module_exam_word": " اختبار الوحدة", "schedule_title": "🗓 الجدول الأسبوعي", "schedule_sub": "حدد المواد التي ستدرسها في كل يوم", "day1": "الاثنين", "day2": "الثلاثاء", "day3": "الأربعاء", "day4": "الخميس", "day5": "الجمعة", "day6": "السبت", "day0": "الأحد", "calendar_title": "📅 سجل النشاط", "cal_prev": "‹ السابق", "cal_next": "التالي ›", "m1": "يناير", "m2": "فبراير", "m3": "مارس", "m4": "أبريل", "m5": "مايو", "m6": "يونيو", "m7": "يوليو", "m8": "أغسطس", "m9": "سبتمبر", "m10": "أكتوبر", "m11": "نوفمبر", "m12": "ديسمبر", "cert_title": "شهادة", "cert_org": "AI Academy", "cert_print_btn": "طباعة / حفظ كملف PDF", "your_level": "مستواك:", "correct_word": "صحيح", "recommendation": "التوصية: ابدأ من الوحدة ", "start_from_module": ". ستُفتح هذه الوحدة تلقائياً في قائمة الدروس.", "exam_passed": "✅ تم اجتياز الاختبار! (", "exam_failed": "❌ لم تنجح (", "module_now_open": " الوحدة مفتوحة الآن.", "course_complete_title": "🏆 تهانينا! تم إكمال الدورة!", "course_complete_sub": "يمكنك الآن الحصول على شهادتك.", "need_min_score": "تحتاج إلى 21/30 على الأقل. فيما يلي تحليل لأخطائك — راجعها وحاول مرة أخرى.", "final_exam_btn": "الاختبار النهائي — الحصول على الشهادة", "open_module_btn_suffix": " اختبار فتح الوحدة", "usage_today_used": "اليوم استخدمت ", "usage_free_lessons": " دروس مجانية", "usage_vip_unlimited": "✦ أنت عضو VIP — دروس غير محدودة", "cert_body_template": "تشهد هذه الشهادة بأن {name} قد أكمل بنجاح جميع الوحدات السبع لمادة {subject}.", "level_beginner": "مبتدئ", "level_intermediate": "متوسط", "level_advanced": "متقدم", "level_test_title": "اختبار تحديد المستوى لمادة {subject} (25 سؤالاً)", "module_exam_title": "اختبار الوحدة {n}: {module} (30 سؤالاً، 45 دقيقة)", "your_answer_word": "إجابتك:", "correct_answer_word": "الإجابة الصحيحة:", "analyzing_word": "جارٍ تحضير التحليل...", "theme_picker_title": "🎨 اختر خلفية", "theme_picker_sub": "خلفية ثلاثية الأبعاد — اختر ما يعجبك", "theme_space": "🌌 المجرة", "theme_tech": "⚙️ بطل تقني", "comp_onboard_title": "🤗 لنتعرف على بعضنا!", "comp_onboard_sub": "تُستخدم هذه المعلومات فقط للتخصيص — لن يراها أحد.", "comp_name_ph": "اسمك", "comp_age_ph": "عمرك", "comp_gender_ph": "جنسك (اختياري)", "comp_personality_ph": "كيف تصف شخصيتك؟", "comp_goals_ph": "ما هي أهدافك؟", "comp_strengths_ph": "نقاط قوتك", "comp_weaknesses_ph": "نقاط ضعفك", "comp_skills_ph": "مهاراتك", "comp_onboard_save": "إنهاء التعارف", "comp_hub_title": "🤗 الصديق", "comp_hub_sub": "هل نتحدث أم نلعب؟", "comp_chat_btn": "💬 محادثة", "comp_xo_btn": "⭕ إكس أو", "comp_checkers_btn": "🔴 الداما", "comp_chess_btn": "♟️ الشطرنج", "comp_input_ph": "اكتب هنا...", "game_restart_btn": "🔄 إعادة البدء", "comp_greeting": "مرحباً{name}! 😄 أنا صديقك! مستعد للدردشة أو الإجابة على الأسئلة أو اللعب. كيف الحال؟", "xo_your_turn": "أنت X. اضغط على مربع!", "xo_you_win": "🎉 لقد فزت!", "xo_bot_win": "🤖 فاز الصديق! حاول مرة أخرى.", "xo_draw": "🤝 تعادل!", "checkers_your_turn": "دورك (الأحمر)", "checkers_you_win_nomove": "🎉 لقد فزت! لا توجد حركات للصديق.", "checkers_bot_win": "🤖 فاز الصديق!", "checkers_you_win": "🎉 لقد فزت!", "chess_your_turn_start": "أنت تلعب بالأبيض. اضغط على قطعة ثم مربع.", "chess_bot_mate": "🤖 كش ملك من الصديق!", "chess_you_mate": "🎉 كش ملك، لقد فزت!", "chess_draw": "🤝 تعادل!", "chess_check": "⚠️ كش!", "chess_your_turn": "دورك (الأبيض)", "chess_thinking": "الصديق يفكر...", "image_sent_placeholder": "(تم إرسال صورة)"}};
const SUBJECTS_I18N = {"uz": {"coding": {"label": "Kodlash", "desc": "Dasturlash asoslarini o'rgatuvchi AI ustoz"}, "math": {"label": "Matematika", "desc": "Matematik tushunchalarni asosdan tushuntiruvchi AI ustoz"}, "physics": {"label": "Fizika", "desc": "Fizik hodisalarni tushunarli tilda tushuntiruvchi AI ustoz"}, "chemistry": {"label": "Kimyo", "desc": "Kimyoviy jarayonlarni sodda tilda tushuntiruvchi AI ustoz"}, "biology": {"label": "Biologiya", "desc": "Tirik tabiat sirlarini tushuntiruvchi AI ustoz"}, "psychology": {"label": "Psixologiya", "desc": "Inson xatti-harakati va ongini tushuntiruvchi AI ustoz"}}, "ru": {"coding": {"label": "Программирование", "desc": "ИИ-учитель, обучающий основам программирования"}, "math": {"label": "Математика", "desc": "ИИ-учитель, объясняющий математику с основ"}, "physics": {"label": "Физика", "desc": "ИИ-учитель, объясняющий физические явления понятным языком"}, "chemistry": {"label": "Химия", "desc": "ИИ-учитель, объясняющий химические процессы простым языком"}, "biology": {"label": "Биология", "desc": "ИИ-учитель, раскрывающий тайны живой природы"}, "psychology": {"label": "Психология", "desc": "ИИ-учитель о поведении и сознании человека"}}, "en": {"coding": {"label": "Coding", "desc": "An AI tutor that teaches programming fundamentals"}, "math": {"label": "Math", "desc": "An AI tutor that explains math from the ground up"}, "physics": {"label": "Physics", "desc": "An AI tutor that explains physical phenomena clearly"}, "chemistry": {"label": "Chemistry", "desc": "An AI tutor that explains chemical processes simply"}, "biology": {"label": "Biology", "desc": "An AI tutor exploring the secrets of living nature"}, "psychology": {"label": "Psychology", "desc": "An AI tutor on human behavior and the mind"}}, "zh": {"coding": {"label": "编程", "desc": "教授编程基础的AI老师"}, "math": {"label": "数学", "desc": "从基础讲解数学概念的AI老师"}, "physics": {"label": "物理", "desc": "用通俗语言讲解物理现象的AI老师"}, "chemistry": {"label": "化学", "desc": "用简单语言讲解化学过程的AI老师"}, "biology": {"label": "生物", "desc": "讲解生命奥秘的AI老师"}, "psychology": {"label": "心理学", "desc": "讲解人类行为与心理的AI老师"}}, "ja": {"coding": {"label": "プログラミング", "desc": "プログラミングの基礎を教えるAI講師"}, "math": {"label": "数学", "desc": "基礎から数学を説明するAI講師"}, "physics": {"label": "物理", "desc": "物理現象をわかりやすく説明するAI講師"}, "chemistry": {"label": "化学", "desc": "化学反応をやさしく説明するAI講師"}, "biology": {"label": "生物学", "desc": "生命の神秘を解説するAI講師"}, "psychology": {"label": "心理学", "desc": "人間の行動と心について教えるAI講師"}}, "ko": {"coding": {"label": "코딩", "desc": "프로그래밍 기초를 가르치는 AI 튜터"}, "math": {"label": "수학", "desc": "기초부터 수학을 설명하는 AI 튜터"}, "physics": {"label": "물리", "desc": "물리 현상을 쉽게 설명하는 AI 튜터"}, "chemistry": {"label": "화학", "desc": "화학 과정을 쉽게 설명하는 AI 튜터"}, "biology": {"label": "생물", "desc": "생명의 신비를 탐구하는 AI 튜터"}, "psychology": {"label": "심리학", "desc": "인간의 행동과 마음에 관한 AI 튜터"}}, "ar": {"coding": {"label": "البرمجة", "desc": "معلم ذكاء اصطناعي يعلّم أساسيات البرمجة"}, "math": {"label": "الرياضيات", "desc": "معلم ذكاء اصطناعي يشرح الرياضيات من الأساس"}, "physics": {"label": "الفيزياء", "desc": "معلم ذكاء اصطناعي يشرح الظواهر الفيزيائية بوضوح"}, "chemistry": {"label": "الكيمياء", "desc": "معلم ذكاء اصطناعي يشرح العمليات الكيميائية ببساطة"}, "biology": {"label": "الأحياء", "desc": "معلم ذكاء اصطناعي يستكشف أسرار الطبيعة الحية"}, "psychology": {"label": "علم النفس", "desc": "معلم ذكاء اصطناعي عن سلوك الإنسان وعقله"}}};
const LANG_ENGLISH_NAMES = {"uz": "Uzbek", "ru": "Russian", "en": "English", "zh": "Chinese", "ja": "Japanese", "ko": "Korean", "ar": "Arabic"};
SUBJECTS_I18N['uz']['grammar'] = {"label": "Grammar", "desc": "Ingliz tili grammatikasini o'rgatuvchi AI ustoz"};
SUBJECTS_I18N['uz']['history'] = {"label": "Tarix", "desc": "Jahon va O'zbekiston tarixini o'rgatuvchi AI ustoz"};
SUBJECTS_I18N['ru']['grammar'] = {"label": "Грамматика", "desc": "ИИ-учитель английской грамматики"};
SUBJECTS_I18N['ru']['history'] = {"label": "История", "desc": "ИИ-учитель всемирной истории"};
SUBJECTS_I18N['en']['grammar'] = {"label": "Grammar", "desc": "An AI tutor for English grammar"};
SUBJECTS_I18N['en']['history'] = {"label": "History", "desc": "An AI tutor for world history"};
SUBJECTS_I18N['zh']['grammar'] = {"label": "语法", "desc": "教授英语语法的AI老师"};
SUBJECTS_I18N['zh']['history'] = {"label": "历史", "desc": "教授世界历史的AI老师"};
SUBJECTS_I18N['ja']['grammar'] = {"label": "文法", "desc": "英文法を教えるAI講師"};
SUBJECTS_I18N['ja']['history'] = {"label": "歴史", "desc": "世界史を教えるAI講師"};
SUBJECTS_I18N['ko']['grammar'] = {"label": "문법", "desc": "영어 문법을 가르치는 AI 튜터"};
SUBJECTS_I18N['ko']['history'] = {"label": "역사", "desc": "세계사를 가르치는 AI 튜터"};
SUBJECTS_I18N['ar']['grammar'] = {"label": "القواعد", "desc": "معلم ذكاء اصطناعي لقواعد اللغة الإنجليزية"};
SUBJECTS_I18N['ar']['history'] = {"label": "التاريخ", "desc": "معلم ذكاء اصطناعي للتاريخ العالمي"};

CURRICULA['grammar'] = [{"module": "Asoslar", "lessons": ["Ingliz alifbosi va talaffuz", "Ot (Noun) turlari", "Artikllar (a/an/the)", "Ko'plik son", "Kishilik olmoshlari", "Egalik olmoshlari", "Ko'rsatish olmoshlari", "Sifat (Adjective) asoslari", "Son (Numeral)", "1-modul mashqlari"]}, {"module": "Fe'l zamonlari: Present", "lessons": ["Present Simple", "Present Continuous", "Present Perfect", "Present Perfect Continuous", "Stative fe'llar", "Fe'l + -ing yoki infinitive", "Savol shakllari (Present)", "Inkor shakllari (Present)", "Amaliy misollar", "2-modul mashqlari"]}, {"module": "Fe'l zamonlari: Past", "lessons": ["Past Simple", "Past Continuous", "Past Perfect", "Past Perfect Continuous", "Used to / would", "Irregular verbs", "Savol va inkor (Past)", "Reported speech kirish", "Amaliy misollar", "3-modul mashqlari"]}, {"module": "Fe'l zamonlari: Future", "lessons": ["Future Simple (will)", "Be going to", "Future Continuous", "Future Perfect", "Zamonlarni taqqoslash", "Conditional sentences (0 va 1)", "Conditional sentences (2 va 3)", "Amaliy misollar", "Zamonlar bo'yicha takrorlash", "4-modul mashqlari"]}, {"module": "Gap tuzilishi", "lessons": ["Gap bo'laklari", "Sodda gaplar", "Qo'shma gaplar (and/but/or)", "Ergash gapli qo'shma gaplar", "Bog'lovchilar", "Predloglar (Prepositions)", "Modal fe'llar (can/must/should)", "Passive voice", "Amaliy misollar", "5-modul mashqlari"]}, {"module": "Yozma nutq", "lessons": ["Ravishlar (Adverbs)", "Sifat darajalari", "Gerund va Infinitive", "Relative clauses", "Punktuatsiya qoidalari", "Xat yozish qoidalari", "Insho tuzilishi", "Umumiy xatolar", "Amaliy mashqlar", "6-modul mashqlari"]}, {"module": "So'zlashuv va amaliyot", "lessons": ["Kundalik iboralar", "Rasmiy va norasmiy nutq", "Phrasal verbs", "Idiomalar", "Sinonim va antonimlar", "Tinglab tushunish mashqlari", "Gapirish amaliyoti", "Test topshirish strategiyalari", "Yakuniy takrorlash", "Yakuniy loyiha"]}];
CURRICULA['history'] = [{"module": "Tarixga kirish", "lessons": ["Tarix fani nima", "Tarixiy manbalar", "Davrlashtirish", "Arxeologiya asoslari", "Birinchi odamlar", "Ibtidoiy jamiyat", "O'troq hayotga o'tish", "Yozuvning paydo bo'lishi", "Tarixni o'rganish usullari", "1-modul mashqlari"]}, {"module": "Qadimgi dunyo", "lessons": ["Qadimgi Misr", "Mesopotamiya", "Qadimgi Hindiston", "Qadimgi Xitoy", "Qadimgi Yunoniston", "Qadimgi Rim", "Qadimgi Markaziy Osiyo", "Buyuk ipak yo'li kirish", "Qadimgi dinlar", "2-modul mashqlari"]}, {"module": "O'rta asrlar", "lessons": ["Buyuk xalqlar ko'chishi", "Arab xalifaligi", "Islom tsivilizatsiyasi", "Amir Temur va Temuriylar", "O'rta asr Yevropasi", "Salib yurishlari", "Mo'g'ullar bosqini", "O'rta asr shaharlari", "O'rta Osiyo uyg'onish davri", "3-modul mashqlari"]}, {"module": "Buyuk kashfiyotlar davri", "lessons": ["Geografik kashfiyotlar", "Yevropa Uyg'onish davri", "Reformatsiya", "Mustamlakachilik boshlanishi", "Ilmiy inqilob", "Absolyut monarxiyalar", "Savdo yo'llari o'zgarishi", "Yangi dunyo tsivilizatsiyalari", "Amaliy misollar", "4-modul mashqlari"]}, {"module": "Yangi davr", "lessons": ["Sanoat inqilobi", "Fransuz inqilobi", "Amerika mustaqillik urushi", "Millatchilik g'oyalari", "Mustamlakachilik kengayishi", "XIX asr islohotlari", "Turkiston Rossiya tarkibida", "Jadidchilik harakati", "Amaliy misollar", "5-modul mashqlari"]}, {"module": "XX asr", "lessons": ["Birinchi jahon urushi", "Rossiya inqilobi", "Sovet davri boshlanishi", "Ikkinchi jahon urushi", "Urushdan keyingi dunyo", "Sovuq urush", "Mustamlakachilikning tugashi", "O'zbekiston SSR davri", "Amaliy misollar", "6-modul mashqlari"]}, {"module": "Zamonaviy davr", "lessons": ["Sovet Ittifoqining tarqalishi", "O'zbekiston mustaqilligi", "Mustaqillik yillari islohotlari", "Globallashuv jarayonlari", "Zamonaviy xalqaro munosabatlar", "Texnologiya va jamiyat", "Zamonaviy dunyo muammolari", "Tarixdan saboqlar", "Yakuniy takrorlash", "Yakuniy loyiha"]}];

const orbitWrap = document.getElementById('orbit');
const radius = orbitWrap.clientWidth * 0.5 * 0.78 || 220;

SUBJECTS.forEach((s, i) => {
  const angle = (i / SUBJECTS.length) * 2 * Math.PI - Math.PI/2;
  const node = document.createElement('div');
  node.className = 'node n' + (i+1);
  node.id = 'node-' + s.id;
  node.style.left = '50%';
  node.style.top = '50%';
  node.innerHTML = `<div class="node-icon">${s.icon}</div><div class="node-label">${s.label}</div>`;
  node.addEventListener('click', () => selectSubject(s.id));
  orbitWrap.appendChild(node);

  function place(){
    const r = orbitWrap.clientWidth * 0.5 * 0.78;
    const x = Math.cos(angle) * r;
    const y = Math.sin(angle) * r;
    node.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
  }
  place();
  window.addEventListener('resize', place);
});

let currentSubject = null;
let history = [];

function selectSubject(id){
  currentSubject = SUBJECTS.find(s => s.id === id);
  document.querySelectorAll('.node').forEach(n => n.classList.remove('active'));
  document.getElementById('node-' + id).classList.add('active');

  document.documentElement.style.setProperty('--accent', currentSubject.color);
  document.getElementById('core-label').textContent = subjectLabel(currentSubject);
  document.getElementById('chat-title').textContent = subjectLabel(currentSubject);
  document.getElementById('chat-desc').textContent = subjectDesc(currentSubject);
  document.getElementById('chat-badge').textContent = currentSubject.icon;

  history = [];
  const messages = document.getElementById('messages');
  messages.innerHTML = `<div class="msg assistant">${t('greeting').replace('{subject}', subjectLabel(currentSubject).toLowerCase())}</div>`;

  const input = document.getElementById('input');
  input.disabled = false;
  input.placeholder = currentSubject.label + ' bo\'yicha savolingizni yozing...';
  document.getElementById('send').disabled = false;
  document.getElementById('image-attach-btn').disabled = false;
  input.focus();
  renderCurriculum(currentSubject.id);
  loadChatHistory(id);
}

async function loadChatHistory(subjectId){
  if(!sb || !currentUser) return;
  try{
    const { data, error } = await sb.from('chat_history').select('messages').eq('user_id', currentUser.id).eq('subject_id', subjectId).maybeSingle();
    if(error || !data || !data.messages || data.messages.length === 0) return;
    if(!currentSubject || currentSubject.id !== subjectId) return; // foydalanuvchi shu orada boshqa fanga o'tgan bo'lishi mumkin

    history = data.messages;
    const messagesEl2 = document.getElementById('messages');
    messagesEl2.innerHTML = '';
    history.forEach(m => {
      const role = m.role === 'assistant' ? 'assistant' : 'user';
      const textContent = typeof m.content === 'string' ? m.content : (m.content.find(c => c.type === 'text') || {}).text || '';
      addMessage(role, textContent);
    });
  }catch(err){ console.error(err); }
}

async function saveChatHistory(subjectId){
  if(!sb || !currentUser) return;
  try{
    await sb.from('chat_history').upsert({
      user_id: currentUser.id, subject_id: subjectId, messages: history, updated_at: new Date().toISOString()
    }, { onConflict: 'user_id,subject_id' });
  }catch(err){ console.error(err); }
}

const messagesEl = document.getElementById('messages');
const inputEl = document.getElementById('input');
const sendBtn = document.getElementById('send');

function addMessage(role, text, imageDataUrl){
  const div = document.createElement('div');
  div.className = 'msg ' + role;
  div.textContent = text;
  if(imageDataUrl){
    const img = document.createElement('img');
    img.className = 'chat-img';
    img.src = imageDataUrl;
    div.appendChild(img);
  }
  messagesEl.appendChild(div);
  messagesEl.scrollTop = messagesEl.scrollHeight;
  return div;
}

function addTyping(){
  const div = document.createElement('div');
  div.className = 'msg assistant typing-wrap';
  div.innerHTML = '<div class="typing"><span></span><span></span><span></span></div>';
  messagesEl.appendChild(div);
  messagesEl.scrollTop = messagesEl.scrollHeight;
  return div;
}

// ---- Rasm biriktirish ----
let pendingImage = null; // { mimeType, data (base64, no prefix), dataUrl }

document.getElementById('image-attach-btn').addEventListener('click', () => {
  document.getElementById('image-input').click();
});

document.getElementById('image-input').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const dataUrl = reader.result;
    const base64 = dataUrl.split(',')[1];
    pendingImage = { mimeType: file.type, data: base64, dataUrl };
    document.getElementById('image-preview-thumb').src = dataUrl;
    document.getElementById('image-preview-row').style.display = 'flex';
  };
  reader.readAsDataURL(file);
  e.target.value = '';
});

document.getElementById('image-preview-remove').addEventListener('click', () => {
  pendingImage = null;
  document.getElementById('image-preview-row').style.display = 'none';
});

async function sendMessage(){
  const text = inputEl.value.trim();
  const imageToSend = pendingImage;
  if(!text && !imageToSend) return;
  if(!currentSubject) return;

  if(imageToSend && sb){
    if(!currentUser){
      openAuth();
      return;
    }
    const { data, error } = await sb.rpc('check_and_increment_image', { daily_limit: 5 });
    if(error){
      alert('Xatolik: ' + error.message);
      return;
    }
    if(!data.allowed){
      document.getElementById('upgrade-overlay').classList.add('open');
      return;
    }
  }

  addMessage('user', text || t('image_sent_placeholder'), imageToSend ? imageToSend.dataUrl : null);
  history.push({ role:'user', content: text || 'Ushbu rasmni tushuntiring.' });
  inputEl.value = '';
  inputEl.style.height = '46px';
  sendBtn.disabled = true;
  inputEl.disabled = true;
  pendingImage = null;
  document.getElementById('image-preview-row').style.display = 'none';

  const typingEl = addTyping();

  try{
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system: withLanguage(currentSubject.system),
        messages: history,
        image: imageToSend ? { mimeType: imageToSend.mimeType, data: imageToSend.data } : undefined
      })
    });
    const data = await response.json();
    typingEl.remove();

    if (!response.ok) {
      throw new Error((data && data.error) ? JSON.stringify(data.error) : 'Server error');
    }

    const textBlock = (data.content || []).find(b => b.type === 'text');
    const reply = textBlock ? textBlock.text : 'Kechirasiz, javob olishda xatolik yuz berdi. Qayta urinib ko\'ring.';
    addMessage('assistant', reply);
    history.push({ role:'assistant', content: reply });
    saveChatHistory(currentSubject.id);
  }catch(err){
    typingEl.remove();
    addMessage('assistant', 'Kechirasiz, ulanishda xatolik yuz berdi. Internetni tekshirib, qayta urinib ko\'ring.');
    console.error(err);
  }finally{
    sendBtn.disabled = false;
    inputEl.disabled = false;
    inputEl.focus();
  }
}


// ---- Hisobga bog'langan progress (barcha qurilmalarda bir xil) ----
let remoteProgress = null;   // { subjectId: {unlocked_module, completed_lessons, certified, level_label} }
let remoteSchedule = null;   // { 0: [subjectId,...], ..., 6: [...] }
let activityDates = null;    // Set('YYYY-MM-DD') -- barcha fanlar bo'yicha, streak uchun
let activityBySubjectDate = null; // { 'YYYY-MM-DD': Set(subjectId) } -- kalendar uchun

function todayStr(){ return new Date().toISOString().slice(0,10); }

async function loadRemoteData(){
  if(!sb || !currentUser) return;
  try{
    const [progRes, schedRes, actRes] = await Promise.all([
      sb.from('subject_progress').select('*').eq('user_id', currentUser.id),
      sb.from('weekly_schedule').select('*').eq('user_id', currentUser.id),
      sb.from('lesson_activity').select('*').eq('user_id', currentUser.id).order('activity_date', { ascending:false }).limit(400)
    ]);

    if(progRes.error || schedRes.error || actRes.error){
      // Jadvallar hali yaratilmagan yoki ulanish xatoligi bo'lsa — mahalliy (localStorage)
      // progressni buzib qo'ymaslik uchun remote holatni null qilib qo'yamiz.
      console.error('Supabase progress xatoligi (SQL qayta ishga tushirilganmi tekshiring):', progRes.error || schedRes.error || actRes.error);
      remoteProgress = null;
      remoteSchedule = null;
      activityDates = null;
      activityBySubjectDate = null;
      return;
    }

    remoteProgress = {};
    (progRes.data || []).forEach(r => { remoteProgress[r.subject_id] = r; });

    remoteSchedule = {0:[],1:[],2:[],3:[],4:[],5:[],6:[]};
    (schedRes.data || []).forEach(r => { remoteSchedule[r.day_of_week].push(r.subject_id); });

    activityDates = new Set();
    activityBySubjectDate = {};
    (actRes.data || []).forEach(r => {
      activityDates.add(r.activity_date);
      if(!activityBySubjectDate[r.activity_date]) activityBySubjectDate[r.activity_date] = new Set();
      activityBySubjectDate[r.activity_date].add(r.subject_id);
    });

    // Birinchi marta sinxronlash: agar shu qurilmada (localStorage) progress bor,
    // lekin hisobda hali yo'q bo'lsa — uni hisobga ko'chiramiz (yo'qotib qo'ymaslik uchun).
    for(const s of SUBJECTS){
      if(remoteProgress[s.id]) continue;
      const localUnlocked = parseInt(localStorage.getItem('aiacademy_unlocked_' + s.id) || '1', 10);
      let localDone = [];
      try{ localDone = JSON.parse(localStorage.getItem('aiacademy_progress_' + s.id) || '[]'); }catch(e){}
      const localCert = !!localStorage.getItem('aiacademy_certified_' + s.id);
      if(localUnlocked > 1 || localDone.length > 0 || localCert){
        const row = { user_id: currentUser.id, subject_id: s.id, unlocked_module: localUnlocked, completed_lessons: localDone, certified: localCert };
        remoteProgress[s.id] = row;
        sb.from('subject_progress').upsert(row, { onConflict: 'user_id,subject_id' }).then(({error}) => { if(error) console.error(error); });
      }
    }

    updateStreak();
    if(currentSubject) renderCurriculum(currentSubject.id);
  }catch(err){
    console.error('loadRemoteData xatoligi', err);
    remoteProgress = null;
    remoteSchedule = null;
    activityDates = null;
    activityBySubjectDate = null;
  }
}

async function logExamAttempt(subjectId, examType, moduleIdx, score, total, passed){
  if(!sb || !currentUser) return;
  try{
    await sb.from('exam_attempts').insert({
      user_id: currentUser.id, subject_id: subjectId, exam_type: examType,
      module_idx: moduleIdx, score, total, passed
    });
  }catch(err){ console.error(err); }
}

async function logActivity(subjectId){
  if(!sb || !currentUser) return;
  const date = todayStr();
  if(!activityDates) activityDates = new Set();
  if(!activityBySubjectDate) activityBySubjectDate = {};
  activityDates.add(date);
  if(!activityBySubjectDate[date]) activityBySubjectDate[date] = new Set();
  activityBySubjectDate[date].add(subjectId);
  try{
    await sb.from('lesson_activity').upsert({ user_id: currentUser.id, subject_id: subjectId, activity_date: date }, { onConflict: 'user_id,subject_id,activity_date' });
  }catch(err){ console.error(err); }
  updateStreak();
}

function getProgress(subjectId){
  if(remoteProgress){
    return (remoteProgress[subjectId] && remoteProgress[subjectId].completed_lessons) || [];
  }
  try{
    return JSON.parse(localStorage.getItem('aiacademy_progress_' + subjectId) || '[]');
  }catch(e){ return []; }
}
function setProgress(subjectId, arr){
  localStorage.setItem('aiacademy_progress_' + subjectId, JSON.stringify(arr));
  if(remoteProgress && sb && currentUser){
    if(!remoteProgress[subjectId]) remoteProgress[subjectId] = { subject_id: subjectId, unlocked_module: 1, completed_lessons: [], certified: false };
    remoteProgress[subjectId].completed_lessons = arr;
    sb.from('subject_progress').upsert({
      user_id: currentUser.id, subject_id: subjectId,
      unlocked_module: remoteProgress[subjectId].unlocked_module || 1,
      completed_lessons: arr,
      certified: remoteProgress[subjectId].certified || false,
      level_label: remoteProgress[subjectId].level_label || null
    }, { onConflict: 'user_id,subject_id' }).then(({error}) => { if(error) console.error(error); });
  }
}

async function renderCurriculum(subjectId){
  const subject = SUBJECTS.find(s => s.id === subjectId);
  let modules = CURRICULA[subjectId];
  const section = document.getElementById('curriculum-section');
  const body = document.getElementById('curriculum-body');
  const title = document.getElementById('curriculum-title');
  const progressLabel = document.getElementById('curriculum-progress');

  section.style.display = 'block';
  title.textContent = subjectLabel(subject) + ' (70)';
  document.getElementById('cert-btn').style.display = isCertified(subjectId) ? 'inline-block' : 'none';

  const done = getProgress(subjectId);
  progressLabel.textContent = done.length + '/70 ' + t('curriculum_bajarildi');

  if(currentLang !== 'uz'){
    const cacheKey = 'aiacademy_curr_i18n_' + subjectId + '_' + currentLang;
    const cached = localStorage.getItem(cacheKey);
    if(cached){
      try{ modules = JSON.parse(cached); }catch(e){ modules = CURRICULA[subjectId]; }
    } else {
      const loadingId = 'curr-loading-' + Date.now();
      body.innerHTML = '<div class="hint" style="text-align:center; padding:20px 0;" id="' + loadingId + '">⏳ ...</div>';
      try{
        const sys = 'You are a precise JSON translator. Output ONLY valid JSON, nothing else, no markdown fences.';
        const userPrompt = 'Translate the "module" and each item in "lessons" into ' + LANG_ENGLISH_NAMES[currentLang] + '. Keep the exact same JSON array structure, same number of modules and lessons, same order. Do not add or remove anything. JSON to translate: ' + JSON.stringify(modules);
        const res = await callAI(sys, userPrompt);
        let text = res.trim().replace(/```json/gi, '').replace(/```/g, '').trim();
        const first = text.indexOf('[');
        const last = text.lastIndexOf(']');
        text = text.slice(first, last + 1);
        const translated = JSON.parse(text);
        if(Array.isArray(translated) && translated.length === modules.length){
          modules = translated;
          localStorage.setItem(cacheKey, JSON.stringify(modules));
        }
      }catch(err){
        console.error('Curriculum translation failed', err);
      }
    }
  }

  body.innerHTML = '';
  const unlockedModule = getUnlockedModule(subjectId);
  let lessonIndex = 0;
  modules.forEach((mod, mIdx) => {
    const moduleNum = mIdx + 1;
    const isLocked = moduleNum > unlockedModule;
    const modDiv = document.createElement('div');
    modDiv.className = 'module' + (isLocked ? ' module-locked' : '');
    const head = document.createElement('div');
    head.className = 'module-head';
    head.innerHTML = '<span class="module-title">' + (isLocked ? '\ud83d\udd12 ' : '') + moduleNum + '. ' + mod.module + '</span><span class="module-caret">▸</span>';
    if(!isLocked){
      head.addEventListener('click', () => { modDiv.classList.toggle('open'); });
    }

    const lessonsWrap = document.createElement('div');
    lessonsWrap.className = 'module-lessons';

    mod.lessons.forEach((lessonTitle) => {
      const idx = lessonIndex;
      lessonIndex++;
      const row = document.createElement('div');
      row.className = 'lesson-row';

      const check = document.createElement('input');
      check.type = 'checkbox';
      check.className = 'lesson-check';
      check.checked = done.includes(idx);
      check.disabled = isLocked;
      check.addEventListener('change', () => {
        let d = getProgress(subjectId);
        if(check.checked){ if(!d.includes(idx)) d.push(idx); }
        else { d = d.filter(x => x !== idx); }
        setProgress(subjectId, d);
        progressLabel.textContent = d.length + '/70 ' + t('curriculum_bajarildi');
        labelSpan.classList.toggle('done', check.checked);
      });

      const labelSpan = document.createElement('span');
      labelSpan.className = 'lesson-title' + (done.includes(idx) ? ' done' : '');
      labelSpan.textContent = (idx+1) + '. ' + lessonTitle;

      const startBtn = document.createElement('button');
      startBtn.className = 'lesson-start';
      startBtn.textContent = t('lesson_start_btn');
      startBtn.disabled = isLocked;
      startBtn.addEventListener('click', () => startLesson(subjectId, idx+1, lessonTitle));

      row.appendChild(check);
      row.appendChild(labelSpan);
      row.appendChild(startBtn);
      lessonsWrap.appendChild(row);
    });

    if(!isLocked && !(moduleNum === 7 && isCertified(subjectId))){
      const examRow = document.createElement('div');
      examRow.style.padding = '12px 4px';
      examRow.style.borderTop = '1px dashed var(--line)';
      examRow.style.marginTop = '6px';
      const examBtn = document.createElement('button');
      examBtn.className = 'level-btn';
      examBtn.textContent = moduleNum === 7 ? t('final_exam_btn') : ((moduleNum + 1) + t('open_module_btn_suffix'));
      examBtn.addEventListener('click', () => startModuleExam(subjectId, moduleNum));
      examRow.appendChild(examBtn);
      lessonsWrap.appendChild(examRow);
    }

    modDiv.appendChild(head);
    modDiv.appendChild(lessonsWrap);
    body.appendChild(modDiv);
  });
}

async function startLesson(subjectId, lessonNumber, lessonTitle){
  if(!currentSubject || currentSubject.id !== subjectId){
    selectSubject(subjectId);
  }

  if(sb){
    if(!currentUser){
      openAuth();
      return;
    }
    const { data, error } = await sb.rpc('check_and_increment_lesson', { daily_limit: 5 });
    if(error){
      alert('Xatolik: ' + error.message);
      return;
    }
    updateUsageBanner(data);
    if(!data.allowed){
      document.getElementById('upgrade-overlay').classList.add('open');
      return;
    }
    awardPoints(5);
    logActivity(subjectId);
  }

  const prompt = lessonNumber + '-dars: "' + lessonTitle + '" mavzusini menga chuqur va puxta o\'rgating — bu keyinchalik qiyin imtihonda so\'raladigan darajada bo\'lishi kerak, shuning uchun yuzaki tushuntirmang. Quyidagi tuzilishda bering: 1) Mavzuning to\'liq va aniq ta\'rifi/tushuntirishi (boshidan, lekin chuqur), 2) Kamida 3-4 ta aniq misol, oddiy-dan murakkabgacha, 3) Nozik jihatlar, chalkashtiradigan holatlar va o\'quvchilar ko\'p qiladigan xatolar, 4) Mavzuning chuqurroq/ilg\'or qirralari (nafaqat asoslar), 5) Oxirida shu mavzu bo\'yicha 1 ta amaliy, imtihon darajasidagi mashq (javobini keyin so\'rasam beraman deb yozing).';
  inputEl.value = prompt;
  document.querySelector('.chat-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
  sendMessage();
}


// ---- Sozlamalar: Supabase va Formspree ma'lumotlarini shu yerga qo'ying ----
const SUPABASE_URL = "YOUR_SUPABASE_URL";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
// ---------------------------------------------------------------------------

let sb = null;
if (SUPABASE_URL !== "YOUR_SUPABASE_URL" && window.supabase) {
  sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

let authMode = 'signin';
const authOverlay = document.getElementById('auth-overlay');
const authOpenBtn = document.getElementById('auth-open-btn');
const authCloseBtn = document.getElementById('auth-close-btn');
const authMsg = document.getElementById('auth-msg');
const authArea = document.getElementById('auth-area');

function showAuthMsg(text, type){
  authMsg.textContent = text;
  authMsg.className = 'modal-msg' + (type ? ' ' + type : '');
}

function openAuth(){
  if(!sb){
    alert('Avval Supabase sozlamalarini kodga kiritishingiz kerak. README.md faylida qadamlar yozilgan.');
    return;
  }
  authOverlay.classList.add('open');
}
function closeAuth(){ authOverlay.classList.remove('open'); showAuthMsg(''); }

authOpenBtn.addEventListener('click', openAuth);
authCloseBtn.addEventListener('click', closeAuth);
authOverlay.addEventListener('click', (e) => { if(e.target === authOverlay) closeAuth(); });

document.getElementById('auth-switch').addEventListener('click', () => {
  authMode = authMode === 'signin' ? 'signup' : 'signin';
  document.getElementById('auth-title').textContent = authMode === 'signin' ? 'Xush kelibsiz' : 'Ro\'yxatdan o\'tish';
  document.getElementById('auth-submit-btn').textContent = authMode === 'signin' ? 'Kirish' : 'Ro\'yxatdan o\'tish';
  document.getElementById('auth-toggle').innerHTML = authMode === 'signin'
    ? 'Hisobingiz yo\'qmi? <a id="auth-switch2">Ro\'yxatdan o\'ting</a>'
    : 'Hisobingiz bormi? <a id="auth-switch2">Kiring</a>';
  document.getElementById('auth-switch2').addEventListener('click', () => document.getElementById('auth-switch').click());
});

document.getElementById('google-btn').addEventListener('click', async () => {
  if(!sb) return;
  const { error } = await sb.auth.signInWithOAuth({ provider: 'google' });
  if(error) showAuthMsg(error.message, 'error');
});

document.getElementById('auth-submit-btn').addEventListener('click', async () => {
  if(!sb) return;
  const email = document.getElementById('auth-email').value.trim();
  const password = document.getElementById('auth-password').value;
  if(!email || !password){ showAuthMsg('Email va parolni kiriting', 'error'); return; }

  const fn = authMode === 'signin' ? sb.auth.signInWithPassword.bind(sb.auth) : sb.auth.signUp.bind(sb.auth);
  const { error } = await fn({ email, password });
  if(error){ showAuthMsg(error.message, 'error'); return; }

  if(authMode === 'signup'){
    showAuthMsg('Ro\'yxatdan o\'tdingiz! Emailingizni tasdiqlang.', 'success');
  } else {
    closeAuth();
  }
});

let currentUser = null;

function updateUsageBanner(data){
  const banner = document.getElementById('usage-banner');
  if(!sb){ banner.textContent = ''; return; }
  if(!currentUser){
    banner.textContent = t('usage_login_prompt');
    return;
  }
  if(data && data.is_vip){
    banner.textContent = t('usage_vip_unlimited');
    return;
  }
  if(data){
    banner.textContent = t('usage_today_used') + data.lessons_used_today + '/' + data.daily_limit + t('usage_free_lessons');
  }
}

async function refreshProfile(){
  if(!sb || !currentUser) return;
  const { data } = await sb.from('profiles').select('*').eq('user_id', currentUser.id).single();
  if(data){
    updateUsageBanner({ is_vip: data.is_vip, lessons_used_today: data.lessons_used_today, daily_limit: 5 });
  }
}

function renderAuthArea(session){
  currentUser = session && session.user ? session.user : null;
  if(currentUser){
    const email = currentUser.email || 'Foydalanuvchi';
    const initial = email.charAt(0).toUpperCase();
    authArea.innerHTML = '<div class="user-chip"><span class="avatar">' + initial + '</span>' + email + ' <button id="signout-btn">Chiqish</button></div>';
    document.getElementById('signout-btn').addEventListener('click', async () => {
      await sb.auth.signOut();
    });
    refreshProfile();
    loadRemoteData();
  } else {
    authArea.innerHTML = '<button class="auth-btn" id="auth-open-btn">Kirish</button>';
    document.getElementById('auth-open-btn').addEventListener('click', openAuth);
    updateUsageBanner(null);
    remoteProgress = null;
    remoteSchedule = null;
    activityDates = null;
    activityBySubjectDate = null;
  }
  document.getElementById('progress-link').style.display = currentUser ? 'inline' : 'none';
  document.getElementById('schedule-link').style.display = currentUser ? 'inline' : 'none';
  document.getElementById('companion-link').style.display = currentUser ? 'inline' : 'none';
  document.getElementById('calendar-link').style.display = currentUser ? 'inline' : 'none';
}

// ---- VIP to'lov (Stripe) ----
const upgradeOverlay = document.getElementById('upgrade-overlay');
document.getElementById('upgrade-close-btn').addEventListener('click', () => upgradeOverlay.classList.remove('open'));
upgradeOverlay.addEventListener('click', (e) => { if(e.target === upgradeOverlay) upgradeOverlay.classList.remove('open'); });

document.getElementById('upgrade-btn').addEventListener('click', async () => {
  if(!currentUser) return;
  const msgEl = document.getElementById('upgrade-msg');
  msgEl.textContent = 'Yuklanmoqda...';
  msgEl.className = 'modal-msg';
  try{
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: currentUser.id, email: currentUser.email })
    });
    const data = await res.json();
    if(!res.ok || !data.url){
      msgEl.textContent = 'Xatolik: to\'lov tizimi hali sozlanmagan.';
      msgEl.className = 'modal-msg error';
      return;
    }
    window.location.href = data.url;
  }catch(err){
    msgEl.textContent = 'Ulanishda xatolik yuz berdi.';
    msgEl.className = 'modal-msg error';
  }
});

if(sb){
  sb.auth.getSession().then(({ data }) => renderAuthArea(data.session));
  sb.auth.onAuthStateChange((_event, session) => renderAuthArea(session));
}

// ---- Aloqa (contact) formasi ----
const contactOverlay = document.getElementById('contact-overlay');
document.getElementById('contact-link').addEventListener('click', () => contactOverlay.classList.add('open'));
document.getElementById('contact-close-btn').addEventListener('click', () => contactOverlay.classList.remove('open'));
contactOverlay.addEventListener('click', (e) => { if(e.target === contactOverlay) contactOverlay.classList.remove('open'); });

document.getElementById('contact-submit-btn').addEventListener('click', async () => {
  const name = document.getElementById('contact-name').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const message = document.getElementById('contact-message').value.trim();
  const msgEl = document.getElementById('contact-msg');

  if(!name || !email || !message){
    msgEl.textContent = 'Barcha maydonlarni to\'ldiring';
    msgEl.className = 'modal-msg error';
    return;
  }
  if(FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID')){
    msgEl.textContent = 'Avval Formspree sozlamalarini kodga kiritishingiz kerak (README.md).';
    msgEl.className = 'modal-msg error';
    return;
  }

  try{
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ name, email, message })
    });
    if(res.ok){
      msgEl.textContent = 'Xabaringiz yuborildi, rahmat!';
      msgEl.className = 'modal-msg success';
      document.getElementById('contact-name').value = '';
      document.getElementById('contact-email').value = '';
      document.getElementById('contact-message').value = '';
    } else {
      msgEl.textContent = 'Xatolik yuz berdi, qayta urinib ko\'ring.';
      msgEl.className = 'modal-msg error';
    }
  }catch(err){
    msgEl.textContent = 'Ulanishda xatolik yuz berdi.';
    msgEl.className = 'modal-msg error';
  }
});

// ---- PWA: ilova sifatida o'rnatish ----
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}
let deferredInstallPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  document.getElementById('install-link').style.display = 'inline';
});
document.getElementById('install-link').addEventListener('click', async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  document.getElementById('install-link').style.display = 'none';
});


async function callAI(systemPrompt, userText, historyMessages){
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      system: systemPrompt,
      messages: historyMessages && historyMessages.length ? historyMessages : [{ role: "user", content: userText }]
    })
  });
  const data = await response.json();
  const block = (data.content || []).find(b => b.type === 'text');
  return block ? block.text : '';
}

// ---- Daraja aniqlash testi (placement test) ----
let currentLevelQuiz = null;
let quizMode = 'level';
let examModuleIdx = null;

function getUnlockedModule(subjectId){
  if(remoteProgress){
    return (remoteProgress[subjectId] && remoteProgress[subjectId].unlocked_module) || 1;
  }
  const raw = localStorage.getItem('aiacademy_unlocked_' + subjectId);
  return raw ? parseInt(raw, 10) : 1;
}
function setUnlockedModule(subjectId, moduleNum){
  const current = getUnlockedModule(subjectId);
  if(moduleNum <= current) return;
  localStorage.setItem('aiacademy_unlocked_' + subjectId, String(moduleNum));
  if(remoteProgress && sb && currentUser){
    if(!remoteProgress[subjectId]) remoteProgress[subjectId] = { subject_id: subjectId, unlocked_module: 1, completed_lessons: [], certified: false };
    remoteProgress[subjectId].unlocked_module = moduleNum;
    sb.from('subject_progress').upsert({
      user_id: currentUser.id, subject_id: subjectId,
      unlocked_module: moduleNum,
      completed_lessons: remoteProgress[subjectId].completed_lessons || [],
      certified: remoteProgress[subjectId].certified || false,
      level_label: remoteProgress[subjectId].level_label || null
    }, { onConflict: 'user_id,subject_id' }).then(({error}) => { if(error) console.error(error); });
  }
}

document.getElementById('level-test-btn').addEventListener('click', () => {
  if(!currentSubject) return;
  startLevelTest(currentSubject.id);
});
document.getElementById('level-quiz-close').addEventListener('click', () => {
  document.getElementById('level-quiz-section').style.display = 'none';
});

async function startLevelTest(subjectId){
  quizMode = 'level';
  const subject = SUBJECTS.find(s => s.id === subjectId);
  const section = document.getElementById('level-quiz-section');
  const card = document.getElementById('level-quiz-card');
  const loading = document.getElementById('level-loading');
  const body = document.getElementById('level-quiz-body');
  const submitBtn = document.getElementById('level-quiz-submit');
  const result = document.getElementById('level-result');

  section.style.display = 'block';
  section.scrollIntoView({ behavior:'smooth', block:'start' });
  document.getElementById('level-quiz-title').textContent = t('level_test_title').replace('{subject}', subjectLabel(subject));
  loading.classList.add('open');
  body.innerHTML = '';
  submitBtn.style.display = 'none';
  result.classList.remove('open');

  const sys = withLanguage('Sen ta\'lim platformasi uchun test tuzuvchisan. Faqat berilgan JSON formatda javob ber, boshqa hech qanday matn, izoh yoki markdown belgilarisiz.');
  const userPrompt = subject.label + ' fanidan 25 ta QIYIN va chuqur bilim talab qiladigan test savoli tuzib ber. Bu oddiy emas, chinakam bilim darajasini sinovdan o\'tkazuvchi savollar bo\'lsin — yuzaki yoki juda oddiy savollardan qat\'iy saqlaning. Savollar 1-savoldan 25-savolgacha asta-sekin yanada qiyinlashib borsin (1-savol nisbatan oson, lekin baribir jiddiy, 25-savol juda qiyin, tahlil va chuqur tushunish talab qiladi). Har bir savolda 4 ta variant bo\'lsin, ular orasida chalg\'ituvchi (yaqin, lekin noto\'g\'ri) variantlar ham bo\'lsin, faqat bittasi to\'g\'ri. Javobni FAQAT quyidagi JSON formatda ber, boshqa hech narsa yozma: {"questions":[{"q":"savol matni","options":["A","B","C","D"],"correct":0}]}. Massivda aynan 25 ta element bo\'lsin.';

  try{
    const res = await callAI(sys, userPrompt);
    let text = res.trim();
    text = text.replace(/```json/gi, '').replace(/```/g, '').trim();
    const firstBrace = text.indexOf('{');
    const lastBrace = text.lastIndexOf('}');
    text = text.slice(firstBrace, lastBrace + 1);
    const parsed = JSON.parse(text);
    currentLevelQuiz = { subjectId, questions: parsed.questions };

    loading.classList.remove('open');
    body.innerHTML = '';
    parsed.questions.forEach((q, i) => {
      const qDiv = document.createElement('div');
      qDiv.className = 'level-q';
      let optsHtml = '';
      q.options.forEach((opt, oi) => {
        optsHtml += '<label class="level-q-opt"><input type="radio" name="lq-' + i + '" value="' + oi + '"> ' + opt + '</label>';
      });
      qDiv.innerHTML = '<div class="level-q-text">' + (i+1) + '. ' + q.q + '</div>' + optsHtml;
      body.appendChild(qDiv);
    });
    submitBtn.style.display = 'block';
  }catch(err){
    loading.classList.remove('open');
    body.innerHTML = '<div class="modal-msg error">Test tuzishda xatolik yuz berdi. Qayta urinib ko\'ring.</div>';
    console.error(err);
  }
}

document.getElementById('level-quiz-submit').addEventListener('click', async () => {
  if(quizMode === 'exam'){
    handleExamSubmit();
    return;
  }
  if(!currentLevelQuiz) return;
  const { subjectId, questions } = currentLevelQuiz;
  let correct = 0;
  const wrongOnes = [];
  questions.forEach((q, i) => {
    const picked = document.querySelector('input[name="lq-' + i + '"]:checked');
    const pickedIdx = picked ? parseInt(picked.value, 10) : null;
    if(pickedIdx === q.correct){
      correct++;
    } else {
      wrongOnes.push({
        q: q.q,
        options: q.options,
        yourAnswer: pickedIdx !== null ? q.options[pickedIdx] : '(javob berilmagan)',
        correctAnswer: q.options[q.correct]
      });
    }
  });

  let levelLabel, recommendedModule;
  if(correct <= 8){ levelLabel = t('level_beginner'); recommendedModule = 1; }
  else if(correct <= 17){ levelLabel = t('level_intermediate'); recommendedModule = 4; }
  else { levelLabel = t('level_advanced'); recommendedModule = 6; }

  localStorage.setItem('aiacademy_level_' + subjectId, JSON.stringify({ levelLabel, recommendedModule, correct }));
  logExamAttempt(subjectId, 'level', null, correct, 25, true);
  setUnlockedModule(subjectId, recommendedModule);

  document.getElementById('level-quiz-body').innerHTML = '';
  document.getElementById('level-quiz-submit').style.display = 'none';
  const result = document.getElementById('level-result');
  result.classList.add('open');
  document.getElementById('level-result-title').textContent = t('your_level') + ' ' + levelLabel + ' (' + correct + '/25 ' + t('correct_word') + ')';
  document.getElementById('level-result-detail').textContent = t('recommendation') + ' ' + recommendedModule + t('start_from_module');

  await showAnswerReview(wrongOnes);

  if(currentSubject && currentSubject.id === subjectId){
    renderCurriculum(subjectId);
    setTimeout(() => {
      const modules = document.querySelectorAll('#curriculum-body .module');
      if(modules[recommendedModule - 1]){
        modules[recommendedModule - 1].classList.add('open');
        modules[recommendedModule - 1].scrollIntoView({ behavior:'smooth', block:'center' });
      }
    }, 100);
  }
});

// ---- Modul imtihoni (module exam — keyingi modulni ochish uchun) ----
let examTimerInterval = null;
let examTimeLeft = 0;

function stopExamTimer(){
  if(examTimerInterval){ clearInterval(examTimerInterval); examTimerInterval = null; }
  document.getElementById('exam-timer').style.display = 'none';
}

function startExamTimer(totalSeconds){
  examTimeLeft = totalSeconds;
  const timerEl = document.getElementById('exam-timer');
  timerEl.style.display = 'inline';
  const render = () => {
    const m = Math.floor(examTimeLeft / 60);
    const s = examTimeLeft % 60;
    timerEl.textContent = '⏱ ' + m + ':' + (s < 10 ? '0' : '') + s;
  };
  render();
  examTimerInterval = setInterval(() => {
    examTimeLeft--;
    render();
    if(examTimeLeft <= 0){
      stopExamTimer();
      handleExamSubmit();
    }
  }, 1000);
}

async function startModuleExam(subjectId, moduleIdx){
  quizMode = 'exam';
  examModuleIdx = moduleIdx;
  const subject = SUBJECTS.find(s => s.id === subjectId);
  const mod = CURRICULA[subjectId][moduleIdx - 1];

  const section = document.getElementById('level-quiz-section');
  const loading = document.getElementById('level-loading');
  const body = document.getElementById('level-quiz-body');
  const submitBtn = document.getElementById('level-quiz-submit');
  const result = document.getElementById('level-result');

  stopExamTimer();
  section.style.display = 'block';
  section.scrollIntoView({ behavior:'smooth', block:'start' });
  document.getElementById('level-quiz-title').textContent = t('module_exam_title').replace('{n}', moduleIdx).replace('{module}', mod.module);
  loading.classList.add('open');
  body.innerHTML = '';
  submitBtn.style.display = 'none';
  result.classList.remove('open');
  document.getElementById('level-review').innerHTML = '';

  const sys = withLanguage('Sen ta\'lim platformasi uchun test tuzuvchisan. Faqat berilgan JSON formatda javob ber, boshqa hech qanday matn, izoh yoki markdown belgilarisiz.');
  const userPrompt = subject.label + ' fanining "' + mod.module + '" moduli bo\'yicha 30 ta QIYIN, chuqur bilim va tahlil talab qiladigan test savoli tuzib ber. Bu chinakam bilim darajasini sinovdan o\'tkazuvchi savollar bo\'lsin, yuzaki yoki juda oddiy savollardan qat\'iy saqlaning. Mavzular: ' + mod.lessons.join(', ') + '. Savollar qiyinlik darajasi bo\'yicha aniq bosqichlarga bo\'lingan bo\'lsin (lekin har biri baribir jiddiy bo\'lsin): 1-5-savollar NISBATAN OSON, 6-10-savollar O\'RTA, 11-15-savollar QIYIN, 16-20-savollar JUDA QIYIN, 21-30-savollar ENG QIYIN (real hayotiy vaziyat yoki chuqur tahlil talab qiladigan). Har bir savolda 4 ta variant bo\'lsin, ular orasida chalg\'ituvchi (yaqin, lekin noto\'g\'ri) variantlar ham bo\'lsin, faqat bittasi to\'g\'ri. Javobni FAQAT quyidagi JSON formatda ber, boshqa hech narsa yozma: {"questions":[{"q":"savol matni","options":["A","B","C","D"],"correct":0}]}. Massivda aynan 30 ta element bo\'lsin.';

  try{
    const res = await callAI(sys, userPrompt);
    let text = res.trim();
    text = text.replace(/```json/gi, '').replace(/```/g, '').trim();
    const firstBrace = text.indexOf('{');
    const lastBrace = text.lastIndexOf('}');
    text = text.slice(firstBrace, lastBrace + 1);
    const parsed = JSON.parse(text);
    currentLevelQuiz = { subjectId, questions: parsed.questions };

    loading.classList.remove('open');
    body.innerHTML = '';
    parsed.questions.forEach((q, i) => {
      const qDiv = document.createElement('div');
      qDiv.className = 'level-q';
      let optsHtml = '';
      q.options.forEach((opt, oi) => {
        optsHtml += '<label class="level-q-opt"><input type="radio" name="lq-' + i + '" value="' + oi + '"> ' + opt + '</label>';
      });
      qDiv.innerHTML = '<div class="level-q-text">' + (i+1) + '. ' + q.q + '</div>' + optsHtml;
      body.appendChild(qDiv);
    });
    submitBtn.style.display = 'block';
    startExamTimer(45 * 60);
  }catch(err){
    loading.classList.remove('open');
    body.innerHTML = '<div class="modal-msg error">Imtihon tuzishda xatolik yuz berdi. Qayta urinib ko\'ring.</div>';
    console.error(err);
  }
}

async function handleExamSubmit(){
  if(!currentLevelQuiz) return;
  stopExamTimer();
  const { subjectId, questions } = currentLevelQuiz;
  let correct = 0;
  const wrongOnes = [];
  questions.forEach((q, i) => {
    const picked = document.querySelector('input[name="lq-' + i + '"]:checked');
    const pickedIdx = picked ? parseInt(picked.value, 10) : null;
    if(pickedIdx === q.correct){
      correct++;
    } else {
      wrongOnes.push({
        q: q.q,
        options: q.options,
        yourAnswer: pickedIdx !== null ? q.options[pickedIdx] : '(javob berilmagan)',
        correctAnswer: q.options[q.correct]
      });
    }
  });

  const passed = correct >= 21;
  logExamAttempt(subjectId, 'module', examModuleIdx, correct, 30, passed);
  document.getElementById('level-quiz-body').innerHTML = '';
  document.getElementById('level-quiz-submit').style.display = 'none';
  const result = document.getElementById('level-result');
  result.classList.add('open');

  if(passed){
    if(examModuleIdx === 7){
      setCertified(subjectId);
      awardPoints(100);
      document.getElementById('level-result-title').textContent = t('course_complete_title');
      document.getElementById('level-result-detail').textContent = t('course_complete_sub');
    } else {
      setUnlockedModule(subjectId, examModuleIdx + 1);
      awardPoints(30);
      document.getElementById('level-result-title').textContent = t('exam_passed') + correct + '/30)';
      document.getElementById('level-result-detail').textContent = (examModuleIdx + 1) + t('module_now_open');
    }
  } else {
    document.getElementById('level-result-title').textContent = t('exam_failed') + correct + '/30)';
    document.getElementById('level-result-detail').textContent = t('need_min_score');
  }

  const reviewEl = document.getElementById('level-review');
  reviewEl.innerHTML = '';
  await showAnswerReview(wrongOnes);

  if(currentSubject && currentSubject.id === subjectId){
    renderCurriculum(subjectId);
  }
}

async function showAnswerReview(wrongOnes){
  const reviewEl = document.getElementById('level-review');
  reviewEl.innerHTML = '';
  if(wrongOnes.length === 0) return;

  reviewEl.innerHTML = '<div class="hint" style="text-align:center; padding:14px 0;">⏳ ' + t('analyzing_word') + '</div>';
  try{
    const sys = withLanguage('Sen ta\'lim platformasi uchun tushuntiruvchi ekspertsan. Faqat berilgan JSON formatda javob ber, boshqa hech qanday matn yozma.');
    const userPrompt = 'Quyidagi savollarda talaba xato javob bergan. Har biri uchun, nega talabaning javobi noto\'g\'ri va nega to\'g\'ri javob to\'g\'ri ekanini 1-2 jumlada tushuntir. JSON massiv qaytar: {"explanations":["...", "..."]} — aynan ' + wrongOnes.length + ' ta element, savollar tartibida. Savollar: ' + JSON.stringify(wrongOnes.map(w => ({q: w.q, yourAnswer: w.yourAnswer, correctAnswer: w.correctAnswer})));
    const res = await callAI(sys, userPrompt);
    let text = res.trim().replace(/```json/gi, '').replace(/```/g, '').trim();
    const first = text.indexOf('{');
    const last = text.lastIndexOf('}');
    text = text.slice(first, last + 1);
    const parsed = JSON.parse(text);
    const explanations = (parsed.explanations && parsed.explanations.length === wrongOnes.length)
      ? parsed.explanations
      : wrongOnes.map(() => '');

    reviewEl.innerHTML = '';
    wrongOnes.forEach((w, i) => {
      const item = document.createElement('div');
      item.className = 'review-item';
      item.innerHTML =
        '<div class="rq">' + w.q + '</div>' +
        '<div class="ryour">' + t('your_answer_word') + ' ' + w.yourAnswer + '</div>' +
        '<div class="rcorrect">' + t('correct_answer_word') + ' ' + w.correctAnswer + '</div>' +
        '<div class="rexplain">' + (explanations[i] || '') + '</div>';
      reviewEl.appendChild(item);
    });
  }catch(err){
    reviewEl.innerHTML = '';
    wrongOnes.forEach((w) => {
      const item = document.createElement('div');
      item.className = 'review-item';
      item.innerHTML =
        '<div class="rq">' + w.q + '</div>' +
        '<div class="ryour">' + t('your_answer_word') + ' ' + w.yourAnswer + '</div>' +
        '<div class="rcorrect">' + t('correct_answer_word') + ' ' + w.correctAnswer + '</div>';
      reviewEl.appendChild(item);
    });
    console.error(err);
  }
}

// ---- Til tanlash (i18n) ----
let currentLang = localStorage.getItem('aiacademy_lang') || 'en';

function t(key){
  return (I18N[currentLang] && I18N[currentLang][key]) || I18N['uz'][key] || key;
}
function subjectLabel(subject){
  const o = SUBJECTS_I18N[currentLang] && SUBJECTS_I18N[currentLang][subject.id];
  return o ? o.label : subject.label;
}
function subjectDesc(subject){
  const o = SUBJECTS_I18N[currentLang] && SUBJECTS_I18N[currentLang][subject.id];
  return o ? o.desc : subject.desc;
}

function applyLanguage(lang){
  currentLang = lang;
  localStorage.setItem('aiacademy_lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = t('dir') === 'rtl' ? 'rtl' : 'ltr';
  document.getElementById('lang-select').value = lang;

  document.getElementById('nav-install-text') && (document.getElementById('nav-install-text').textContent = t('nav_install'));
  document.getElementById('install-link').textContent = t('nav_install');
  document.getElementById('contact-link').textContent = t('nav_contact');
  if(!currentUser || !sb){
    const btn = document.getElementById('auth-open-btn');
    if(btn) btn.textContent = t('auth_login');
  }
  document.getElementById('hero-eyebrow').textContent = t('hero_eyebrow');
  document.getElementById('hero-title').textContent = t('hero_title');
  document.getElementById('hero-sub').textContent = t('hero_sub');
  document.getElementById('hero-hint').textContent = t('hint');
  if(!currentSubject){
    document.getElementById('core-label').textContent = t('core_label');
  }
  document.querySelector('.core-sub').textContent = t('core_sub');
  if(!currentSubject){
    document.getElementById('chat-title').textContent = t('chat_title_default');
    document.getElementById('chat-desc').textContent = t('chat_desc_default');
    document.getElementById('input').placeholder = t('input_placeholder_default');
  }
  document.getElementById('send').textContent = t('send_btn');

  document.getElementById('auth-title').textContent = authMode === 'signin' ? t('auth_welcome_title') : t('auth_signup_title');
  document.getElementById('auth-sub').textContent = t('auth_welcome_sub');
  document.getElementById('google-btn').textContent = t('google_btn');
  document.querySelector('.modal-divider').textContent = t('or_divider');
  document.getElementById('auth-email').placeholder = t('email_ph');
  document.getElementById('auth-password').placeholder = t('password_ph');
  document.getElementById('auth-submit-btn').textContent = authMode === 'signin' ? t('submit_login') : t('submit_signup');
  document.getElementById('auth-toggle').innerHTML = authMode === 'signin'
    ? t('toggle_to_signup_pre') + ' <a id="auth-switch">' + t('toggle_to_signup_link') + '</a>'
    : t('toggle_to_signin_pre') + ' <a id="auth-switch">' + t('toggle_to_signin_link') + '</a>';
  document.getElementById('auth-switch').addEventListener('click', () => {
    authMode = authMode === 'signin' ? 'signup' : 'signin';
    applyLanguage(currentLang);
  });

  document.querySelector('#contact-overlay .modal-title').textContent = t('contact_title');
  document.querySelector('#contact-overlay .modal-sub').textContent = t('contact_sub');
  document.getElementById('contact-name').placeholder = t('contact_name_ph');
  document.getElementById('contact-email').placeholder = t('contact_email_ph');
  document.getElementById('contact-message').placeholder = t('contact_msg_ph');
  document.getElementById('contact-submit-btn').textContent = t('contact_submit');

  document.querySelector('#upgrade-overlay .modal-title').textContent = t('upgrade_title');
  document.querySelector('#upgrade-overlay .modal-sub').textContent = t('upgrade_sub');
  document.getElementById('upgrade-btn').textContent = t('upgrade_btn');

  document.getElementById('level-test-btn').textContent = t('level_test_btn');
  document.querySelector('footer').textContent = t('footer');

  document.getElementById('leaderboard-title-el').textContent = t('leaderboard_title');
  document.getElementById('leaderboard-sub-el').textContent = t('leaderboard_sub');
  document.getElementById('nickname-prompt-el').textContent = t('nickname_prompt');
  document.getElementById('nickname-input').placeholder = t('nickname_ph');
  document.getElementById('nickname-save-btn').textContent = t('save_btn');

  document.getElementById('schedule-title-el').textContent = t('schedule_title');
  document.getElementById('schedule-sub-el').textContent = t('schedule_sub');
  document.getElementById('schedule-save-btn').textContent = t('save_btn');

  document.getElementById('calendar-title-el').textContent = t('calendar_title');
  document.getElementById('calendar-prev-btn').textContent = t('cal_prev');
  document.getElementById('calendar-next-btn').textContent = t('cal_next');

  document.getElementById('progress-title-el').textContent = t('progress_title');
  document.getElementById('progress-sub-el').textContent = t('progress_sub');

  document.getElementById('cert-org-el').textContent = t('cert_org');

  document.getElementById('theme-picker-title-el').textContent = t('theme_picker_title');
  document.getElementById('theme-picker-sub-el').textContent = t('theme_picker_sub');
  document.getElementById('theme-name-space').textContent = t('theme_space');
  document.getElementById('theme-name-tech').textContent = t('theme_tech');
  document.getElementById('cert-title-el').textContent = t('cert_title');
  document.getElementById('certificate-print-btn').textContent = t('cert_print_btn');

  document.getElementById('comp-onboard-title-el').textContent = t('comp_onboard_title');
  document.getElementById('comp-onboard-sub-el').textContent = t('comp_onboard_sub');
  document.getElementById('comp-name').placeholder = t('comp_name_ph');
  document.getElementById('comp-age').placeholder = t('comp_age_ph');
  document.getElementById('comp-gender').placeholder = t('comp_gender_ph');
  document.getElementById('comp-personality').placeholder = t('comp_personality_ph');
  document.getElementById('comp-goals').placeholder = t('comp_goals_ph');
  document.getElementById('comp-strengths').placeholder = t('comp_strengths_ph');
  document.getElementById('comp-weaknesses').placeholder = t('comp_weaknesses_ph');
  document.getElementById('comp-skills').placeholder = t('comp_skills_ph');
  document.getElementById('comp-onboard-save-btn').textContent = t('comp_onboard_save');
  document.getElementById('comp-hub-title-el').textContent = t('comp_hub_title');
  document.getElementById('comp-hub-sub-el').textContent = t('comp_hub_sub');
  document.getElementById('comp-open-chat-btn').textContent = t('comp_chat_btn');
  document.getElementById('comp-open-xo-btn').textContent = t('comp_xo_btn');
  document.getElementById('comp-open-checkers-btn').textContent = t('comp_checkers_btn');
  document.getElementById('comp-open-chess-btn').textContent = t('comp_chess_btn');
  document.getElementById('comp-input').placeholder = t('comp_input_ph');
  document.getElementById('comp-send').textContent = t('send_btn');
  document.getElementById('game-restart-btn').textContent = t('game_restart_btn');

  document.querySelectorAll('.node').forEach((node) => {
    const subjectId = node.id.replace('node-', '');
    const subj = SUBJECTS.find(s => s.id === subjectId);
    if(subj) node.querySelector('.node-label').textContent = subjectLabel(subj);
  });

  if(currentSubject){
    document.getElementById('chat-title').textContent = subjectLabel(currentSubject) + (I18N[currentLang]['auth_login'] ? '' : '');
    document.getElementById('chat-desc').textContent = subjectDesc(currentSubject);
  }
  if(sb && currentUser){ refreshProfile(); } else { updateUsageBanner(null); }
  if(currentSubject){ renderCurriculum(currentSubject.id); }
}

document.getElementById('lang-select').addEventListener('change', (e) => applyLanguage(e.target.value));

function withLanguage(systemPrompt){
  return systemPrompt + ' Always respond ENTIRELY in ' + LANG_ENGLISH_NAMES[currentLang] + ' \u2014 every single word (explanations, examples, headings, everything), with no mixing of other languages, unless the user explicitly writes in a different language first. If the site language is Arabic, use standard modern Arabic throughout. ACCURACY IS CRITICAL: only state facts, dates, numbers, names, and formulas you are confident are correct; never guess or invent information. If you are not fully certain about something, say so explicitly rather than presenting a guess as fact. Double-check calculations step by step before giving a final numeric answer. Prefer precise, verifiable, textbook-accurate explanations over approximate ones. IMPORTANT: this is a plain-text chat that cannot render LaTeX or markdown math. NEVER use LaTeX syntax (no $...$, no \\frac, \\sum, \\lim, \\int, \\sqrt, ^{}, _{} etc.). Write all mathematical expressions in plain, readable text using normal keyboard symbols and words instead \u2014 for example write "lim as x approaches 0 of ln(cos x) / x^2" or "the sum from n=1 to infinity of 1/(n(n+1)(n+2))", and use symbols like x^2, sqrt(x), \u00d7, \u00f7, \u2192, \u221e, \u03c0 where natural.';
}

applyLanguage(currentLang);
updateStreak();

// ---- Kunlik streak ----
function updateStreak(){
  let count;
  if(activityDates){
    // Hisobga bog'langan faollik asosida ketma-ket kunlarni hisoblash
    count = 0;
    let d = new Date();
    while(true){
      const ds = d.toISOString().slice(0,10);
      if(activityDates.has(ds)){
        count++;
        d.setDate(d.getDate() - 1);
      } else if(ds === todayStr()){
        // bugun hali dars boshlanmagan bo'lishi mumkin, kechagidan davom etamiz
        d.setDate(d.getDate() - 1);
      } else {
        break;
      }
    }
  } else {
    const today = new Date().toISOString().slice(0,10);
    let data;
    try{ data = JSON.parse(localStorage.getItem('aiacademy_streak') || '{"count":0,"lastDate":null}'); }
    catch(e){ data = {count:0, lastDate:null}; }
    if(data.lastDate !== today){
      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0,10);
      data.count = (data.lastDate === yesterday) ? data.count + 1 : 1;
      data.lastDate = today;
      localStorage.setItem('aiacademy_streak', JSON.stringify(data));
    }
    count = data.count;
  }
  const badge = document.getElementById('streak-badge');
  if(count > 0){
    badge.style.display = 'inline';
    badge.textContent = '🔥 ' + count;
  } else {
    badge.style.display = 'none';
  }
  return count;
}

// ---- Sertifikat ----
function isCertified(subjectId){
  if(remoteProgress){
    return !!(remoteProgress[subjectId] && remoteProgress[subjectId].certified);
  }
  return !!localStorage.getItem('aiacademy_certified_' + subjectId);
}
function setCertified(subjectId){
  localStorage.setItem('aiacademy_certified_' + subjectId, JSON.stringify({ date: new Date().toISOString() }));
  if(remoteProgress && sb && currentUser){
    if(!remoteProgress[subjectId]) remoteProgress[subjectId] = { subject_id: subjectId, unlocked_module: 7, completed_lessons: [], certified: false };
    remoteProgress[subjectId].certified = true;
    sb.from('subject_progress').upsert({
      user_id: currentUser.id, subject_id: subjectId,
      unlocked_module: remoteProgress[subjectId].unlocked_module || 7,
      completed_lessons: remoteProgress[subjectId].completed_lessons || [],
      certified: true,
      level_label: remoteProgress[subjectId].level_label || null
    }, { onConflict: 'user_id,subject_id' }).then(({error}) => { if(error) console.error(error); });
  }
}
function showCertificate(subjectId){
  const subject = SUBJECTS.find(s => s.id === subjectId);
  const raw = localStorage.getItem('aiacademy_certified_' + subjectId);
  const data = raw ? JSON.parse(raw) : { date: new Date().toISOString() };
  const name = (sb && currentUser && currentUser.email) ? currentUser.email.split('@')[0] : 'O\'quvchi';
  document.getElementById('cert-body-text').textContent =
    t('cert_body_template').replace('{name}', name).replace('{subject}', subjectLabel(subject));
  document.getElementById('cert-date-text').textContent = new Date(data.date).toLocaleDateString();
  document.getElementById('certificate-overlay').classList.add('open');
}
document.getElementById('certificate-close-btn').addEventListener('click', () => {
  document.getElementById('certificate-overlay').classList.remove('open');
});
document.getElementById('certificate-print-btn').addEventListener('click', () => window.print());
document.getElementById('cert-btn').addEventListener('click', () => {
  if(currentSubject) showCertificate(currentSubject.id);
});

// ---- Ball va reyting (Supabase) ----
async function awardPoints(amount){
  if(!sb || !currentUser) return;
  try{ await sb.rpc('award_exam_points', { amount }); }catch(e){ console.error(e); }
}

const leaderboardOverlay = document.getElementById('leaderboard-overlay');
document.getElementById('leaderboard-link').addEventListener('click', () => openLeaderboard());
document.getElementById('leaderboard-close-btn').addEventListener('click', () => leaderboardOverlay.classList.remove('open'));
leaderboardOverlay.addEventListener('click', (e) => { if(e.target === leaderboardOverlay) leaderboardOverlay.classList.remove('open'); });

async function openLeaderboard(){
  leaderboardOverlay.classList.add('open');
  const body = document.getElementById('leaderboard-body');
  const nicknameSetup = document.getElementById('nickname-setup');
  body.innerHTML = '<div class="hint" style="text-align:center; padding:16px 0;">⏳ ...</div>';

  if(!sb){
    body.innerHTML = '<div class="modal-msg error">Reyting tizimi hali sozlanmagan.</div>';
    return;
  }

  try{
    const { data, error } = await sb.from('public_leaderboard').select('*').order('points', { ascending:false }).limit(20);
    if(error) throw error;
    if(!data || data.length === 0){
      body.innerHTML = '<div class="hint" style="text-align:center; padding:16px 0;">' + t('no_scores_yet') + '</div>';
    } else {
      body.innerHTML = '';
      data.forEach((row, i) => {
        const div = document.createElement('div');
        div.className = 'lb-row';
        div.innerHTML = '<span class="lb-rank">' + (i+1) + '</span><span class="lb-name">' + (row.nickname || t('anonymous')) + '</span><span class="lb-points">' + row.points + '</span>';
        body.appendChild(div);
      });
    }
  }catch(err){
    body.innerHTML = '<div class="modal-msg error">Reytingni yuklab bo\'lmadi.</div>';
    console.error(err);
  }

  if(currentUser){
    nicknameSetup.style.display = 'block';
  } else {
    nicknameSetup.style.display = 'none';
  }
}

document.getElementById('nickname-save-btn').addEventListener('click', async () => {
  if(!sb || !currentUser) return;
  const val = document.getElementById('nickname-input').value.trim();
  if(!val) return;
  try{
    await sb.from('profiles').update({ nickname: val }).eq('user_id', currentUser.id);
    openLeaderboard();
  }catch(err){ console.error(err); }
});

// ---- Progress panel (ota-ona/o'qituvchi bilan ulashish uchun) ----
const progressOverlay = document.getElementById('progress-overlay');
document.getElementById('progress-link').addEventListener('click', () => openProgressPanel());
document.getElementById('progress-close-btn').addEventListener('click', () => progressOverlay.classList.remove('open'));
progressOverlay.addEventListener('click', (e) => { if(e.target === progressOverlay) progressOverlay.classList.remove('open'); });

function openProgressPanel(){
  progressOverlay.classList.add('open');
  const body = document.getElementById('progress-body');
  body.innerHTML = '';

  const streakRow = document.createElement('div');
  streakRow.className = 'progress-row';
  streakRow.innerHTML = '<span>' + t('streak_label') + '</span><span>' + updateStreak() + ' ' + t('days_word') + '</span>';
  body.appendChild(streakRow);

  SUBJECTS.forEach((s) => {
    const done = getProgress(s.id).length;
    const unlocked = getUnlockedModule(s.id);
    const cert = isCertified(s.id) ? ' 🏆' : '';
    const row = document.createElement('div');
    row.className = 'progress-row';
    row.innerHTML = '<span>' + subjectLabel(s) + cert + '</span><span>' + done + '/70 ' + t('lessons_word') + ' \u00b7 ' + unlocked + '/7 ' + t('modules_word') + '</span>';
    body.appendChild(row);
  });

  loadExamHistory(body);
}

async function loadExamHistory(body){
  if(!sb || !currentUser) return;
  const heading = document.createElement('div');
  heading.style.cssText = 'font-family:Space Grotesk,sans-serif; font-weight:700; font-size:13px; margin:16px 0 6px;';
  heading.textContent = t('recent_exams');
  body.appendChild(heading);
  const list = document.createElement('div');
  body.appendChild(list);
  list.innerHTML = '<div class="hint" style="padding:8px 0;">⏳ ...</div>';

  try{
    const { data, error } = await sb.from('exam_attempts').select('*').eq('user_id', currentUser.id).order('created_at', { ascending:false }).limit(10);
    if(error || !data || data.length === 0){
      list.innerHTML = '<div class="hint" style="padding:4px 0;">' + t('no_exams_yet') + '</div>';
      return;
    }
    list.innerHTML = '';
    data.forEach(a => {
      const subj = SUBJECTS.find(s => s.id === a.subject_id);
      const label = subj ? subjectLabel(subj) : a.subject_id;
      const typeLabel = a.exam_type === 'level' ? t('level_test_word') : (a.module_idx + t('module_exam_word'));
      const row = document.createElement('div');
      row.className = 'progress-row';
      row.innerHTML = '<span>' + label + ' \u2014 ' + typeLabel + '</span><span>' + (a.passed ? '\u2705' : '\u274c') + ' ' + a.score + '/' + a.total + '</span>';
      list.appendChild(row);
    });
  }catch(err){
    list.innerHTML = '<div class="modal-msg error">' + (t('no_exams_yet')) + '</div>';
    console.error(err);
  }
}


// ---- Haftalik jadval ----
const DAY_ORDER = [1,2,3,4,5,6,0]; // Dushanba...Yakshanba (JS getDay(): 0=Yakshanba)
const DAY_LABELS_UZ = {1:'Dushanba',2:'Seshanba',3:'Chorshanba',4:'Payshanba',5:'Juma',6:'Shanba',0:'Yakshanba'};

const scheduleOverlay = document.getElementById('schedule-overlay');
document.getElementById('schedule-link').addEventListener('click', () => openSchedule());
document.getElementById('schedule-close-btn').addEventListener('click', () => scheduleOverlay.classList.remove('open'));
scheduleOverlay.addEventListener('click', (e) => { if(e.target === scheduleOverlay) scheduleOverlay.classList.remove('open'); });

let scheduleDraft = null; // { dow: Set(subjectId) }

function openSchedule(){
  if(!sb || !currentUser){ openAuth(); return; }
  scheduleOverlay.classList.add('open');
  scheduleDraft = {};
  DAY_ORDER.forEach(d => { scheduleDraft[d] = new Set((remoteSchedule && remoteSchedule[d]) || []); });

  const body = document.getElementById('schedule-body');
  body.innerHTML = '';
  DAY_ORDER.forEach(d => {
    const dayDiv = document.createElement('div');
    dayDiv.className = 'sched-day';
    const label = document.createElement('div');
    label.className = 'sched-day-label';
    label.textContent = t('day' + d);
    const chipRow = document.createElement('div');
    chipRow.className = 'sched-chip-row';
    SUBJECTS.forEach(s => {
      const chip = document.createElement('div');
      chip.className = 'sched-chip' + (scheduleDraft[d].has(s.id) ? ' on' : '');
      chip.textContent = subjectLabel(s);
      chip.addEventListener('click', () => {
        if(scheduleDraft[d].has(s.id)){ scheduleDraft[d].delete(s.id); chip.classList.remove('on'); }
        else { scheduleDraft[d].add(s.id); chip.classList.add('on'); }
      });
      chipRow.appendChild(chip);
    });
    dayDiv.appendChild(label);
    dayDiv.appendChild(chipRow);
    body.appendChild(dayDiv);
  });
}

document.getElementById('schedule-save-btn').addEventListener('click', async () => {
  if(!sb || !currentUser || !scheduleDraft) return;
  const rows = [];
  DAY_ORDER.forEach(d => {
    scheduleDraft[d].forEach(subjectId => {
      rows.push({ user_id: currentUser.id, day_of_week: d, subject_id: subjectId });
    });
  });
  try{
    await sb.from('weekly_schedule').delete().eq('user_id', currentUser.id);
    if(rows.length > 0){
      await sb.from('weekly_schedule').insert(rows);
    }
    remoteSchedule = {0:[],1:[],2:[],3:[],4:[],5:[],6:[]};
    DAY_ORDER.forEach(d => { remoteSchedule[d] = Array.from(scheduleDraft[d]); });
    scheduleOverlay.classList.remove('open');
  }catch(err){ console.error(err); alert('Saqlashda xatolik yuz berdi.'); }
});

// ---- Kalendar (faollik tarixi) ----
const calendarOverlay = document.getElementById('calendar-overlay');
document.getElementById('calendar-link').addEventListener('click', () => openCalendar());
document.getElementById('calendar-close-btn').addEventListener('click', () => calendarOverlay.classList.remove('open'));
calendarOverlay.addEventListener('click', (e) => { if(e.target === calendarOverlay) calendarOverlay.classList.remove('open'); });

let calendarViewDate = new Date();
calendarViewDate.setDate(1);

const MONTH_NAMES_UZ = ['Yanvar','Fevral','Mart','Aprel','May','Iyun','Iyul','Avgust','Sentabr','Oktabr','Noyabr','Dekabr'];

function openCalendar(){
  if(!sb || !currentUser){ openAuth(); return; }
  calendarOverlay.classList.add('open');
  renderCalendar();
}

document.getElementById('calendar-prev-btn').addEventListener('click', () => {
  calendarViewDate.setMonth(calendarViewDate.getMonth() - 1);
  renderCalendar();
});
document.getElementById('calendar-next-btn').addEventListener('click', () => {
  calendarViewDate.setMonth(calendarViewDate.getMonth() + 1);
  renderCalendar();
});

function renderCalendar(){
  document.getElementById('calendar-month-label').textContent = t('m' + (calendarViewDate.getMonth() + 1)) + ' ' + calendarViewDate.getFullYear();
  const body = document.getElementById('calendar-body');
  body.innerHTML = '';
  const grid = document.createElement('div');
  grid.className = 'cal-grid';

  const year = calendarViewDate.getFullYear();
  const month = calendarViewDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const startOffset = (firstDay.getDay() + 6) % 7; // Dushanba=0 boshlanadigan qilib
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const todayDs = todayStr();

  for(let i = 0; i < startOffset; i++){
    const empty = document.createElement('div');
    empty.className = 'cal-cell empty';
    grid.appendChild(empty);
  }

  for(let day = 1; day <= daysInMonth; day++){
    const dateObj = new Date(year, month, day);
    const ds = dateObj.toISOString().slice(0,10);
    const dow = dateObj.getDay();
    const cell = document.createElement('div');
    cell.className = 'cal-cell';

    const numEl = document.createElement('div');
    numEl.className = 'num';
    numEl.textContent = day;
    cell.appendChild(numEl);

    const scheduled = (remoteSchedule && remoteSchedule[dow]) || [];
    if(scheduled.length > 0 && ds <= todayDs){
      const doneSet = (activityBySubjectDate && activityBySubjectDate[ds]) || new Set();
      const dotRow = document.createElement('div');
      dotRow.className = 'cal-dot-row';
      scheduled.forEach(subjectId => {
        const dot = document.createElement('div');
        dot.className = 'cal-dot ' + (doneSet.has(subjectId) ? 'done' : 'missed');
        dot.title = subjectLabel(SUBJECTS.find(s => s.id === subjectId) || {id:subjectId, label:subjectId});
        dotRow.appendChild(dot);
      });
      cell.appendChild(dotRow);
    }

    if(ds === todayDs){ cell.style.borderColor = 'var(--accent)'; }
    grid.appendChild(cell);
  }

  body.appendChild(grid);
}


// ==================== 3D Fon tizimi (Three.js) ====================
let themeRenderer = null, themeScene = null, themeCamera = null;
let themeComposer = null, themeBloomPass = null;
let themeParticles = null, themeExtras = [];
let themeAnimId = null;
let themeClock = 0;

function initThemeRenderer(){
  const canvas = document.getElementById('theme-canvas');
  if(!canvas || typeof THREE === 'undefined') return false;
  themeRenderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  themeRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  themeRenderer.setSize(window.innerWidth, window.innerHeight);
  themeCamera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
  themeCamera.position.set(0, 0, 22);

  if(typeof THREE.EffectComposer !== 'undefined'){
    themeComposer = new THREE.EffectComposer(themeRenderer);
    themeBloomPass = new THREE.UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.4, 0.7, 0.15);
  }

  window.addEventListener('resize', () => {
    if(!themeRenderer || !themeCamera) return;
    themeCamera.aspect = window.innerWidth / window.innerHeight;
    themeCamera.updateProjectionMatrix();
    themeRenderer.setSize(window.innerWidth, window.innerHeight);
    if(themeComposer) themeComposer.setSize(window.innerWidth, window.innerHeight);
    if(themeBloomPass) themeBloomPass.setSize(window.innerWidth, window.innerHeight);
  });
  return true;
}

function setupComposerForScene(){
  if(!themeComposer) return;
  themeComposer.passes = [];
  const renderPass = new THREE.RenderPass(themeScene, themeCamera);
  themeComposer.addPass(renderPass);
  if(themeBloomPass) themeComposer.addPass(themeBloomPass);
}

function makeParticleField(count, colorChoices, spread, size){
  const geo = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const col = new THREE.Color();
  for(let i = 0; i < count; i++){
    positions[i*3] = (Math.random() - 0.5) * spread;
    positions[i*3+1] = (Math.random() - 0.5) * spread;
    positions[i*3+2] = (Math.random() - 0.5) * spread * 0.6 - 5;
    col.set(colorChoices[Math.floor(Math.random() * colorChoices.length)]);
    colors[i*3] = col.r; colors[i*3+1] = col.g; colors[i*3+2] = col.b;
  }
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const mat = new THREE.PointsMaterial({ size, vertexColors: true, transparent: true, opacity: 1, depthWrite: false, blending: THREE.AdditiveBlending });
  return new THREE.Points(geo, mat);
}

function clearThemeScene(){
  if(themeAnimId) cancelAnimationFrame(themeAnimId);
  themeScene = new THREE.Scene();
  themeExtras = [];
  themeParticles = null;
}

function buildSpaceTheme(){
  clearThemeScene();
  themeScene.background = new THREE.Color(0x0a1440);
  themeScene.fog = new THREE.FogExp2(0x0a1440, 0.007);
  themeParticles = makeParticleField(2600, [0xffffff, 0xa8c8ff, 0xd6b8ff, 0x8be8ff, 0xffe08a], 80, 0.28);
  themeScene.add(themeParticles);

  const planetDefs = [
    { color: 0x6fa8ff, size: 3.4, pos: [8, 4, -20], ring: 0x9fd3ff, spin: 0.002 },
    { color: 0xff9d6f, size: 2.1, pos: [-9, -3, -16], ring: null, spin: 0.003 },
    { color: 0xc77dff, size: 2.7, pos: [-4, 6, -26], ring: 0xe0b3ff, spin: 0.0018 },
    { color: 0x7ee08c, size: 1.4, pos: [10, -4, -12], ring: null, spin: 0.004 },
  ];
  planetDefs.forEach(def => {
    const geo = new THREE.SphereGeometry(def.size, 40, 40);
    const mat = new THREE.MeshStandardMaterial({ color: def.color, emissive: def.color, emissiveIntensity: 0.55, roughness: 0.5, metalness: 0.2 });
    const planet = new THREE.Mesh(geo, mat);
    planet.position.set(...def.pos);
    themeScene.add(planet);
    themeExtras.push({ obj: planet, spin: def.spin });
    if(def.ring){
      const ringGeo = new THREE.TorusGeometry(def.size * 1.6, 0.1, 8, 60);
      const ringMat = new THREE.MeshBasicMaterial({ color: def.ring, transparent: true, opacity: 0.7 });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2.4;
      ring.position.copy(planet.position);
      themeScene.add(ring);
      themeExtras.push({ obj: ring, spin: def.spin * 1.6 });
    }
  });

  const sun = new THREE.PointLight(0xffffff, 1.4, 100);
  sun.position.set(0, 10, 10);
  themeScene.add(sun);
  themeScene.add(new THREE.AmbientLight(0x3a3f7a, 0.6));
}


function buildTechTheme(){
  clearThemeScene();
  themeScene.background = new THREE.Color(0x3a0a0a);
  themeScene.fog = new THREE.FogExp2(0x3a0a0a, 0.012);
  themeParticles = makeParticleField(1000, [0xff4d4d, 0xffb347, 0xffe08a], 58, 0.24);
  themeScene.add(themeParticles);

  const coreGeo = new THREE.IcosahedronGeometry(2.4, 1);
  const coreMat = new THREE.MeshBasicMaterial({ color: 0xff5c3d, wireframe: true, transparent: true, opacity: 0.65 });
  const core = new THREE.Mesh(coreGeo, coreMat);
  core.position.set(0, 0, -12);
  themeScene.add(core);
  themeExtras.push({ obj: core, spin: 0.006 });

  const gridGeo = new THREE.PlaneGeometry(60, 60, 20, 20);
  const gridMat = new THREE.MeshBasicMaterial({ color: 0x8a2e2e, wireframe: true, transparent: true, opacity: 0.35 });
  const grid = new THREE.Mesh(gridGeo, gridMat);
  grid.rotation.x = Math.PI / 2.2;
  grid.position.set(0, -10, -20);
  themeScene.add(grid);
  themeExtras.push({ obj: grid, spin: 0.0004 });
}

const THEME_BUILDERS = {
  space: buildSpaceTheme, tech: buildTechTheme
};

function animateTheme(){
  themeAnimId = requestAnimationFrame(animateTheme);
  themeClock += 0.016;
  if(themeParticles){
    themeParticles.rotation.y += 0.0006;
    themeParticles.rotation.x += 0.0002;
  }
  themeExtras.forEach(e => {
    if(e.spin) e.obj.rotation.y += e.spin;
    if(e.floatBase !== undefined && !e.rock){
      e.obj.position.y = e.floatBase + Math.sin(themeClock * (e.floatSpeed || 0.5)) * 0.6;
    }
    if(e.rock){
      e.obj.rotation.z = Math.sin(themeClock * 0.5) * 0.05;
      e.obj.position.y = e.floatBase + Math.sin(themeClock * 0.6) * 0.3;
    }
    if(e.isWaterfall){
      const pos = e.obj.geometry.attributes.position;
      for(let i = 0; i < pos.count; i++){
        let y = pos.getY(i) - 0.15;
        if(y < -8) y = 8;
        pos.setY(i, y);
      }
      pos.needsUpdate = true;
    }
  });
  if(themeRenderer && themeScene && themeCamera){
    if(themeComposer && themeComposer.passes.length > 0){
      themeComposer.render();
    } else {
      themeRenderer.render(themeScene, themeCamera);
    }
  }
}

// Sayt rangi (oq/yorug' dizayn) doimiy qoladi — mavzu faqat 3D fonni o'zgartiradi,
// kartochkalar, matn va tugmalar rangiga tegmaydi.
const THEME_COLORS = {
  space: { overlay:'rgba(10,20,60,0.05)' },
  tech: { overlay:'rgba(50,10,10,0.05)' },
};

function applyThemeColors(themeKey){
  const c = THEME_COLORS[themeKey];
  if(!c) return;
  document.getElementById('theme-canvas').style.filter = 'saturate(1.1) brightness(1.05)';
  const overlay = document.querySelector('.scene-overlay');
  if(overlay) overlay.style.background = c.overlay;
}

function setTheme(themeKey){
  if(!THEME_BUILDERS[themeKey]) themeKey = 'space';
  localStorage.setItem('aiacademy_theme', themeKey);
  document.querySelectorAll('.theme-option').forEach(el => {
    el.classList.toggle('active', el.dataset.theme === themeKey);
  });
  if(!themeRenderer){
    if(!initThemeRenderer()) return;
  }
  THEME_BUILDERS[themeKey]();
  setupComposerForScene();
  applyThemeColors(themeKey);
  if(typeof applyRobotStyle === 'function') applyRobotStyle(themeKey);
  if(!themeAnimId) animateTheme();
}

function initThemeSystem(){
  const saved = localStorage.getItem('aiacademy_theme');
  if(saved && THEME_BUILDERS[saved]){
    setTheme(saved);
  }
  // Mavzu hali tanlanmagan bo'lsa — fon sof oq holicha qoladi, 3D sahna ishga tushmaydi.
}

document.getElementById('theme-picker-link').addEventListener('click', () => {
  document.getElementById('theme-picker-overlay').classList.add('open');
});
document.getElementById('theme-picker-close-btn').addEventListener('click', () => {
  document.getElementById('theme-picker-overlay').classList.remove('open');
});
document.getElementById('theme-picker-overlay').addEventListener('click', (e) => {
  if(e.target.id === 'theme-picker-overlay') document.getElementById('theme-picker-overlay').classList.remove('open');
});
document.querySelectorAll('.theme-option').forEach(el => {
  el.addEventListener('click', () => setTheme(el.dataset.theme));
});

sendBtn.addEventListener('click', sendMessage);
inputEl.addEventListener('keydown', (e) => {
  if(e.key === 'Enter' && !e.shiftKey){
    e.preventDefault();
    sendMessage();
  }
});
inputEl.addEventListener('input', () => {
  inputEl.style.height = '46px';
  inputEl.style.height = Math.min(inputEl.scrollHeight, 120) + 'px';
});

// ==================== "Do'stim" (Support/Companion Bot) ====================
let companionProfile = null;
let companionHistory = [];

const companionOverlay = document.getElementById('companion-overlay');
document.getElementById('companion-link').addEventListener('click', () => openCompanion());
document.getElementById('companion-close-btn').addEventListener('click', () => companionOverlay.classList.remove('open'));
companionOverlay.addEventListener('click', (e) => { if(e.target === companionOverlay) companionOverlay.classList.remove('open'); });

async function openCompanion(){
  if(!sb || !currentUser){ openAuth(); return; }
  companionOverlay.classList.add('open');
  document.getElementById('companion-onboarding').style.display = 'none';
  document.getElementById('companion-hub').style.display = 'none';

  try{
    const { data, error } = await sb.from('companion_profile').select('*').eq('user_id', currentUser.id).maybeSingle();
    if(!error && data && data.onboarded){
      companionProfile = data;
      showCompanionHub();
    } else {
      document.getElementById('companion-onboarding').style.display = 'block';
    }
  }catch(err){
    console.error(err);
    document.getElementById('companion-onboarding').style.display = 'block';
  }
}

document.getElementById('comp-onboard-save-btn').addEventListener('click', async () => {
  if(!sb || !currentUser) return;
  const profile = {
    user_id: currentUser.id,
    name: document.getElementById('comp-name').value.trim(),
    age: parseInt(document.getElementById('comp-age').value, 10) || null,
    gender: document.getElementById('comp-gender').value.trim(),
    personality: document.getElementById('comp-personality').value.trim(),
    goals: document.getElementById('comp-goals').value.trim(),
    strengths: document.getElementById('comp-strengths').value.trim(),
    weaknesses: document.getElementById('comp-weaknesses').value.trim(),
    skills: document.getElementById('comp-skills').value.trim(),
    onboarded: true
  };
  try{
    await sb.from('companion_profile').upsert(profile, { onConflict: 'user_id' });
    companionProfile = profile;
    document.getElementById('companion-onboarding').style.display = 'none';
    showCompanionHub();
  }catch(err){ console.error(err); alert('Saqlashda xatolik.'); }
});

function companionSystemPrompt(){
  const p = companionProfile || {};
  return withLanguage('Sen "Do\'stim" nomli AI hamrohsan — quvnoq, hazilkash, samimiy, o\'ta qo\'llab-quvvatlovchi do\'st va murabbiy. Doim ijobiy, kulgili, lekin foydali javoblar ber. Foydalanuvchi haqida bilganlaring: Ism: ' + (p.name||'noma\'lum') + ', Yosh: ' + (p.age||'noma\'lum') + ', Jins: ' + (p.gender||'aytmagan') + ', Xarakteri: ' + (p.personality||'noma\'lum') + ', Maqsadlari: ' + (p.goals||'noma\'lum') + ', Kuchli tomonlari: ' + (p.strengths||'noma\'lum') + ', Zaif tomonlari: ' + (p.weaknesses||'noma\'lum') + ', Qobiliyatlari: ' + (p.skills||'noma\'lum') + '. Shu ma\'lumotlarga tayanib, unga shaxsiy, mos, hazil-mutoyibali tarzda murojaat qil. Zerikarli, rasmiy javoblar berma.');
}

function showCompanionHub(){
  document.getElementById('companion-hub').style.display = 'block';
  document.getElementById('companion-chat-view').style.display = 'none';
  document.getElementById('companion-game-view').style.display = 'none';
}

document.getElementById('comp-open-chat-btn').addEventListener('click', async () => {
  document.getElementById('companion-chat-view').style.display = 'block';
  document.getElementById('companion-game-view').style.display = 'none';
  if(companionHistory.length === 0){
    await loadCompanionHistory();
  }
});
async function loadCompanionHistory(){
  const msgsEl = document.getElementById('comp-messages');
  msgsEl.innerHTML = '';
  if(!sb || !currentUser) return;
  try{
    const { data } = await sb.from('chat_history').select('messages').eq('user_id', currentUser.id).eq('subject_id', 'companion_bot').maybeSingle();
    if(data && data.messages && data.messages.length > 0){
      companionHistory = data.messages;
      companionHistory.forEach(m => addCompanionMessage(m.role === 'assistant' ? 'assistant' : 'user', typeof m.content === 'string' ? m.content : ''));
      return;
    }
  }catch(err){ console.error(err); }
  const name = companionProfile && companionProfile.name ? companionProfile.name : '';
  addCompanionMessage('assistant', t('comp_greeting').replace('{name}', name ? ', ' + name : ''));
}

function addCompanionMessage(role, text){
  const div = document.createElement('div');
  div.className = 'msg ' + role;
  div.textContent = text;
  document.getElementById('comp-messages').appendChild(div);
  document.getElementById('comp-messages').scrollTop = document.getElementById('comp-messages').scrollHeight;
}

async function sendCompanionMessage(){
  const input = document.getElementById('comp-input');
  const text = input.value.trim();
  if(!text) return;
  addCompanionMessage('user', text);
  companionHistory.push({ role:'user', content:text });
  input.value = '';
  const typing = document.createElement('div');
  typing.className = 'msg assistant';
  typing.textContent = '...';
  document.getElementById('comp-messages').appendChild(typing);

  try{
    const reply = await callAI(companionSystemPrompt(), text, companionHistory);
    typing.remove();
    addCompanionMessage('assistant', reply);
    companionHistory.push({ role:'assistant', content: reply });
    if(sb && currentUser){
      sb.from('chat_history').upsert({ user_id: currentUser.id, subject_id: 'companion_bot', messages: companionHistory, updated_at: new Date().toISOString() }, { onConflict: 'user_id,subject_id' }).then(()=>{});
    }
  }catch(err){
    typing.remove();
    addCompanionMessage('assistant', 'Voy, birozgina muammo bo\'ldi 😅 qayta urinib ko\'ramizmi?');
    console.error(err);
  }
}
document.getElementById('comp-send').addEventListener('click', sendCompanionMessage);
document.getElementById('comp-input').addEventListener('keydown', (e) => {
  if(e.key === 'Enter' && !e.shiftKey){ e.preventDefault(); sendCompanionMessage(); }
});


// ---- O'yinlar hub navigatsiyasi ----
let currentGame = null;

function openGame(gameKey){
  document.getElementById('companion-chat-view').style.display = 'none';
  document.getElementById('companion-game-view').style.display = 'block';
  currentGame = gameKey;
  if(gameKey === 'xo') startXO();
  if(gameKey === 'checkers') startCheckers();
  if(gameKey === 'chess') startChess();
}
document.getElementById('comp-open-xo-btn').addEventListener('click', () => openGame('xo'));
document.getElementById('comp-open-checkers-btn').addEventListener('click', () => openGame('checkers'));
document.getElementById('comp-open-chess-btn').addEventListener('click', () => openGame('chess'));
document.getElementById('game-restart-btn').addEventListener('click', () => { if(currentGame) openGame(currentGame); });

// ==================== X/O (Tic-Tac-Toe) — minimax bilan, yutib bo'lmaydi ====================
let xoBoard = Array(9).fill(null);
function startXO(){
  xoBoard = Array(9).fill(null);
  document.getElementById('game-status').textContent = t('xo_your_turn');
  renderXO();
}
function renderXO(){
  const el = document.getElementById('game-board');
  el.innerHTML = '<div class="xo-grid"></div>';
  const grid = el.querySelector('.xo-grid');
  xoBoard.forEach((v, i) => {
    const cell = document.createElement('div');
    cell.className = 'xo-cell';
    cell.textContent = v || '';
    if(!v) cell.addEventListener('click', () => xoMove(i));
    grid.appendChild(cell);
  });
}
function xoWinner(b){
  const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  for(const [a,b2,c] of lines){ if(b[a] && b[a]===b[b2] && b[a]===b[c]) return b[a]; }
  if(b.every(x => x)) return 'draw';
  return null;
}
function xoMinimax(b, isMax){
  const w = xoWinner(b);
  if(w === 'X') return -10;
  if(w === 'O') return 10;
  if(w === 'draw') return 0;
  const scores = [];
  for(let i = 0; i < 9; i++){
    if(!b[i]){
      b[i] = isMax ? 'O' : 'X';
      scores.push(xoMinimax(b, !isMax));
      b[i] = null;
    }
  }
  return isMax ? Math.max(...scores) : Math.min(...scores);
}
function xoMove(i){
  if(xoBoard[i] || xoWinner(xoBoard)) return;
  xoBoard[i] = 'X';
  if(xoWinner(xoBoard)){ renderXO(); showXOResult(); return; }
  let bestScore = -Infinity, bestMove = null;
  for(let j = 0; j < 9; j++){
    if(!xoBoard[j]){
      xoBoard[j] = 'O';
      const score = xoMinimax(xoBoard, false);
      xoBoard[j] = null;
      if(score > bestScore){ bestScore = score; bestMove = j; }
    }
  }
  if(bestMove !== null) xoBoard[bestMove] = 'O';
  renderXO();
  showXOResult();
}
function showXOResult(){
  const w = xoWinner(xoBoard);
  const status = document.getElementById('game-status');
  if(w === 'X') status.textContent = t('xo_you_win');
  else if(w === 'O') status.textContent = t('xo_bot_win');
  else if(w === 'draw') status.textContent = t('xo_draw');
  else status.textContent = t('xo_your_turn');
}

// ==================== Shashka (Checkers) ====================
let checkersBoard = [];
let checkersSelected = null;
let checkersTurn = 'red'; // red = user (pastda), black = bot (yuqorida)

function initCheckersBoard(){
  const b = Array(8).fill(null).map(() => Array(8).fill(null));
  for(let r = 0; r < 3; r++) for(let c = 0; c < 8; c++) if((r+c)%2===1) b[r][c] = { color:'black', king:false };
  for(let r = 5; r < 8; r++) for(let c = 0; c < 8; c++) if((r+c)%2===1) b[r][c] = { color:'red', king:false };
  return b;
}
function startCheckers(){
  checkersBoard = initCheckersBoard();
  checkersSelected = null;
  checkersTurn = 'red';
  document.getElementById('game-status').textContent = t('checkers_your_turn');
  renderCheckers();
}
function checkersMovesFor(board, r, c){
  const piece = board[r][c];
  if(!piece) return [];
  const dirs = piece.king ? [[-1,-1],[-1,1],[1,-1],[1,1]] : (piece.color==='red' ? [[-1,-1],[-1,1]] : [[1,-1],[1,1]]);
  const moves = [];
  dirs.forEach(([dr,dc]) => {
    const nr=r+dr, nc=c+dc;
    if(nr>=0&&nr<8&&nc>=0&&nc<8&&!board[nr][nc]) moves.push({ to:[nr,nc], capture:null });
    const jr=r+dr*2, jc=c+dc*2;
    if(jr>=0&&jr<8&&jc>=0&&jc<8&&!board[jr][jc]&&board[nr]&&board[nr][nc]&&board[nr][nc].color!==piece.color){
      moves.push({ to:[jr,jc], capture:[nr,nc] });
    }
  });
  return moves;
}
function allCheckersMoves(board, color){
  const all = [];
  for(let r=0;r<8;r++) for(let c=0;c<8;c++){
    if(board[r][c] && board[r][c].color===color){
      checkersMovesFor(board,r,c).forEach(m => all.push({ from:[r,c], ...m }));
    }
  }
  const captures = all.filter(m => m.capture);
  return captures.length ? captures : all;
}
function renderCheckers(){
  const el = document.getElementById('game-board');
  el.innerHTML = '<div class="checkers-grid"></div>';
  const grid = el.querySelector('.checkers-grid');
  for(let r=0;r<8;r++) for(let c=0;c<8;c++){
    const cell = document.createElement('div');
    cell.className = 'board-cell ' + ((r+c)%2===0 ? 'light' : 'dark');
    if(checkersSelected && checkersSelected[0]===r && checkersSelected[1]===c) cell.classList.add('selected');
    const piece = checkersBoard[r][c];
    if(piece){
      const p = document.createElement('div');
      p.className = 'checker-piece ' + piece.color + (piece.king ? ' king' : '');
      cell.appendChild(p);
    }
    cell.addEventListener('click', () => checkersClick(r,c));
    grid.appendChild(cell);
  }
}
function checkersClick(r,c){
  if(checkersTurn !== 'red') return;
  const piece = checkersBoard[r][c];
  if(piece && piece.color==='red'){ checkersSelected = [r,c]; renderCheckers(); return; }
  if(checkersSelected){
    const moves = checkersMovesFor(checkersBoard, checkersSelected[0], checkersSelected[1]);
    const move = moves.find(m => m.to[0]===r && m.to[1]===c);
    if(move){
      applyCheckersMove(checkersSelected, move);
      checkersSelected = null;
      checkersTurn = 'black';
      renderCheckers();
      checkCheckersEnd();
      setTimeout(checkersBotMove, 500);
    }
  }
}
function applyCheckersMove(from, move){
  const [fr,fc] = from; const [tr,tc] = move.to;
  const piece = checkersBoard[fr][fc];
  checkersBoard[fr][fc] = null;
  if(move.capture) checkersBoard[move.capture[0]][move.capture[1]] = null;
  if(tr===0 || tr===7) piece.king = true;
  checkersBoard[tr][tc] = piece;
}
function checkersBotMove(){
  const moves = allCheckersMoves(checkersBoard, 'black');
  if(moves.length === 0){ document.getElementById('game-status').textContent = t('checkers_you_win_nomove'); return; }
  const move = moves[Math.floor(Math.random()*moves.length)];
  applyCheckersMove(move.from, move);
  checkersTurn = 'red';
  renderCheckers();
  document.getElementById('game-status').textContent = t('checkers_your_turn');
  checkCheckersEnd();
}
function checkCheckersEnd(){
  const redLeft = checkersBoard.flat().filter(p => p && p.color==='red').length;
  const blackLeft = checkersBoard.flat().filter(p => p && p.color==='black').length;
  if(redLeft===0) document.getElementById('game-status').textContent = t('checkers_bot_win');
  else if(blackLeft===0) document.getElementById('game-status').textContent = t('checkers_you_win');
}

// ==================== Shaxmat (chess.js kutubxonasi bilan) ====================
let chessGame = null;
let chessSelected = null;
const CHESS_UNICODE = {
  p:'♟', r:'♜', n:'♞', b:'♝', q:'♛', k:'♚',
  P:'♙', R:'♖', N:'♘', B:'♗', Q:'♕', K:'♔'
};
const PIECE_VALUE = { p:1, n:3, b:3, r:5, q:9, k:0 };

function startChess(){
  if(typeof Chess === 'undefined'){
    document.getElementById('game-status').textContent = 'Shaxmat kutubxonasi yuklanmadi. Internetni tekshiring.';
    return;
  }
  chessGame = new Chess();
  chessSelected = null;
  document.getElementById('game-status').textContent = t('chess_your_turn_start');
  renderChess();
}
function renderChess(){
  const el = document.getElementById('game-board');
  el.innerHTML = '<div class="chess-grid"></div>';
  const grid = el.querySelector('.chess-grid');
  const board = chessGame.board(); // 8x8, [0]=rank8...[7]=rank1
  for(let r = 0; r < 8; r++){
    for(let c = 0; c < 8; c++){
      const cell = document.createElement('div');
      const isLight = (r+c) % 2 === 0;
      cell.className = 'board-cell ' + (isLight ? 'light' : 'dark');
      const square = 'abcdefgh'[c] + (8 - r);
      if(chessSelected === square) cell.classList.add('selected');
      const p = board[r][c];
      if(p){
        const symbol = CHESS_UNICODE[p.color === 'w' ? p.type.toUpperCase() : p.type];
        cell.textContent = symbol;
        cell.style.color = p.color === 'w' ? '#1a1a1a' : '#7a1a1a';
      }
      cell.addEventListener('click', () => chessClick(square));
      grid.appendChild(cell);
    }
  }
}
function chessClick(square){
  if(chessGame.game_over() || chessGame.turn() !== 'w') return;
  if(chessSelected){
    const move = chessGame.move({ from: chessSelected, to: square, promotion: 'q' });
    chessSelected = null;
    if(move){
      renderChess();
      checkChessEnd();
      if(!chessGame.game_over()) setTimeout(chessBotMove, 450);
      return;
    }
  }
  const piece = chessGame.get(square);
  if(piece && piece.color === 'w'){ chessSelected = square; }
  renderChess();
}
function chessBotMove(){
  const moves = chessGame.moves({ verbose: true });
  if(moves.length === 0) return;
  let best = null, bestScore = -1;
  moves.forEach(m => {
    const score = m.captured ? (PIECE_VALUE[m.captured] || 1) : 0;
    if(score > bestScore || (score === bestScore && Math.random() < 0.3)){ bestScore = score; best = m; }
  });
  chessGame.move({ from: best.from, to: best.to, promotion: 'q' });
  renderChess();
  checkChessEnd();
}
function checkChessEnd(){
  const status = document.getElementById('game-status');
  if(chessGame.in_checkmate()){
    status.textContent = chessGame.turn() === 'w' ? t('chess_bot_mate') : t('chess_you_mate');
  } else if(chessGame.in_draw() || chessGame.in_stalemate()){
    status.textContent = t('chess_draw');
  } else if(chessGame.in_check()){
    status.textContent = t('chess_check');
  } else {
    status.textContent = chessGame.turn() === 'w' ? t('chess_your_turn') : t('chess_thinking');
  }
}

// ==================== AI Support robot avatari (doim chapda) ====================
let robotRenderer = null, robotScene = null, robotCamera = null;
let robotGroup = null, robotParts = {};
let robotClock = 0;
let robotStyle = 'default';

function initRobotAvatar(){
  const canvas = document.getElementById('robot-canvas');
  if(!canvas || typeof THREE === 'undefined') return false;
  robotRenderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  robotRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  const w = canvas.parentElement.clientWidth, h = canvas.parentElement.clientHeight;
  robotRenderer.setSize(w, h);
  robotScene = new THREE.Scene();
  robotCamera = new THREE.PerspectiveCamera(32, w / h, 0.1, 50);
  robotCamera.position.set(0, 0.3, 7);

  buildRobotModel();

  const key = new THREE.DirectionalLight(0xffffff, 1);
  key.position.set(3, 4, 5);
  robotScene.add(key);
  robotScene.add(new THREE.AmbientLight(0xffffff, 0.55));

  window.addEventListener('resize', () => {
    const w2 = canvas.parentElement.clientWidth, h2 = canvas.parentElement.clientHeight;
    robotRenderer.setSize(w2, h2);
    robotCamera.aspect = w2 / h2;
    robotCamera.updateProjectionMatrix();
  });

  document.getElementById('robot-avatar-wrap').addEventListener('click', () => openCompanion());

  animateRobot();
  return true;
}

function buildRobotModel(){
  robotGroup = new THREE.Group();
  robotParts = {};

  const bodyMat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.35, roughness: 0.4 });
  const accentMat = new THREE.MeshStandardMaterial({ color: 0x4F46E5, metalness: 0.3, roughness: 0.4, emissive: 0x4F46E5, emissiveIntensity: 0.25 });

  // Tana (torso) — to'rtburchak blok
  const torso = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.2, 0.7), bodyMat);
  torso.position.y = -0.15;
  robotGroup.add(torso);
  robotParts.torso = torso;

  // Ko'krak yorug'i (chest light) — kvadrat panel
  const chest = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.3, 0.04), accentMat);
  chest.position.set(0, 0.05, 0.37);
  robotGroup.add(chest);
  robotParts.chest = chest;

  // Bosh (head) — kub
  const head = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.66, 0.66), bodyMat);
  head.position.y = 1.05;
  robotGroup.add(head);
  robotParts.head = head;

  // Ko'zlar (eyes) — kvadrat
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0x4F46E5, emissive: 0x4F46E5, emissiveIntensity: 1.2 });
  const eyeGeo = new THREE.BoxGeometry(0.14, 0.1, 0.04);
  const eyeL = new THREE.Mesh(eyeGeo, eyeMat); eyeL.position.set(-0.19, 1.08, 0.34);
  const eyeR = new THREE.Mesh(eyeGeo, eyeMat); eyeR.position.set(0.19, 1.08, 0.34);
  robotGroup.add(eyeL, eyeR);
  robotParts.eyeL = eyeL; robotParts.eyeR = eyeR; robotParts.eyeMat = eyeMat;

  // Antenna
  const antennaStem = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.35, 0.05), bodyMat);
  antennaStem.position.set(0, 1.58, 0);
  const antennaTip = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.13, 0.13), accentMat);
  antennaTip.position.set(0, 1.78, 0);
  robotGroup.add(antennaStem, antennaTip);
  robotParts.antennaTip = antennaTip;

  // Qo'llar (kichik, to'rtburchak stub arms)
  const armGeo = new THREE.BoxGeometry(0.26, 0.6, 0.26);
  const armL = new THREE.Mesh(armGeo, bodyMat); armL.position.set(-0.72, -0.1, 0); armL.rotation.z = 0.25;
  const armR = new THREE.Mesh(armGeo, bodyMat); armR.position.set(0.72, -0.1, 0); armR.rotation.z = -0.25;
  robotGroup.add(armL, armR);
  robotParts.armL = armL; robotParts.armR = armR;

  // Mavzuga xos qo'shimcha qismlar (keyin qo'shiladi/olib tashlanadi)
  robotParts.extras = [];

  robotGroup.scale.setScalar(1.0);
  robotScene.add(robotGroup);
}

function clearRobotExtras(){
  (robotParts.extras || []).forEach(e => robotScene.remove(e));
  robotParts.extras = [];
}

function applyRobotStyle(themeKey){
  robotStyle = themeKey || 'default';
  clearRobotExtras();
  const bodyMat = robotParts.torso.material;
  const eyeMat = robotParts.eyeMat;

  if(themeKey === 'space'){
    bodyMat.color.set(0xe8edff);
    bodyMat.metalness = 0.6; bodyMat.roughness = 0.25;
    eyeMat.color.set(0x7fd4ff); eyeMat.emissive.set(0x7fd4ff);
    robotParts.chest.material.color.set(0x7fd4ff);
    robotParts.chest.material.emissive.set(0x7fd4ff);
    // Kosmik dubulg'a (shaffof shar)
    const helmet = new THREE.Mesh(
      new THREE.BoxGeometry(0.95, 0.9, 0.9),
      new THREE.MeshPhysicalMaterial({ color: 0x9fd3ff, transparent:true, opacity:0.22, roughness:0.1, metalness:0 })
    );
    helmet.position.copy(robotParts.head.position);
    robotScene.add(helmet);
    robotParts.extras.push(helmet);
  } else if(themeKey === 'tech'){
    bodyMat.color.set(0x2a1010);
    bodyMat.metalness = 0.7; bodyMat.roughness = 0.3;
    eyeMat.color.set(0xff5c3d); eyeMat.emissive.set(0xff5c3d);
    robotParts.chest.material.color.set(0xff5c3d);
    robotParts.chest.material.emissive.set(0xff5c3d);
    robotParts.chest.material.emissiveIntensity = 1.2;
    // Qizil-oltin "zirh" chiziqlari (yelka plastinkalari)
    const plateMat = new THREE.MeshStandardMaterial({ color: 0xffb347, metalness: 0.8, roughness: 0.3, emissive: 0xff5c3d, emissiveIntensity: 0.3 });
    [[-0.7, 0.35], [0.7, 0.35]].forEach(([x,y]) => {
      const plate = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.16, 0.36), plateMat);
      plate.position.set(x, y, 0.05);
      robotScene.add(plate);
      robotParts.extras.push(plate);
    });
  } else {
    bodyMat.color.set(0xffffff);
    bodyMat.metalness = 0.35; bodyMat.roughness = 0.4;
    eyeMat.color.set(0x4F46E5); eyeMat.emissive.set(0x4F46E5);
    robotParts.chest.material.color.set(0x4F46E5);
    robotParts.chest.material.emissive.set(0x4F46E5);
  }
}

function animateRobot(){
  requestAnimationFrame(animateRobot);
  if(!robotRenderer || !robotGroup) return;
  robotClock += 0.016;
  robotGroup.position.y = Math.sin(robotClock * 1.1) * 0.08;
  robotGroup.rotation.y = Math.sin(robotClock * 0.5) * 0.25;
  if(robotParts.antennaTip){
    robotParts.antennaTip.scale.setScalar(1 + Math.sin(robotClock * 3) * 0.15);
  }
  if(robotParts.eyeMat){
    robotParts.eyeMat.emissiveIntensity = 0.9 + Math.sin(robotClock * 2.2) * 0.4;
  }
  if(robotParts.armL) robotParts.armL.rotation.z = 0.35 + Math.sin(robotClock * 1.3) * 0.06;
  if(robotParts.armR) robotParts.armR.rotation.z = -0.35 - Math.sin(robotClock * 1.3) * 0.06;
  robotRenderer.render(robotScene, robotCamera);
}

if(!initRobotAvatar()){
  // Three.js hali yuklanmagan bo'lsa, biroz kutib qayta urinamiz
  const retry = setInterval(() => { if(initRobotAvatar()) clearInterval(retry); }, 300);
}

initThemeSystem();
