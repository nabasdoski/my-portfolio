/**
 * Earlier projects that are no longer online (2016-2018).
 * To add a project: copy one block below and edit the text.
 * To remove one: delete its block.
 */

export type Locale = "en" | "ar" | "ku";
export type Localized = Record<Locale, string>;
export type ProjectIcon = "bank" | "health" | "gym" | "building";

export type ClientProject = {
  id: string;
  icon: ProjectIcon;
  name: string;
  years: string;
  category: Localized;
  summary: Localized;
  role: Localized;
  technologies: string[];
};

/** Section text, in all three site languages. */
export const clientProjectsCopy = {
  eyebrow: {
    en: "Archive",
    ar: "الأرشيف",
    ku: "ئەرشیف",
  },
  heading: {
    en: "Earlier projects",
    ar: "مشاريع سابقة",
    ku: "پڕۆژە پێشووەکان",
  },
  sub: {
    en: "Selected projects from 2016–2018. Some were commissioned by clients and others were built for university exhibitions. They are now archived, so they are described here rather than linked.",
    ar: "مشاريع مختارة من 2016 إلى 2018. بعضها نُفذ بتكليف من عملاء وبعضها لمعارض جامعية. أصبحت مؤرشفة، لذلك تُعرض هنا بالوصف بدلاً من الروابط.",
    ku: "پڕۆژە هەڵبژێردراوەکان لە ٢٠١٦ تا ٢٠١٨. هەندێکیان بە داواکاری کڕیار و هەندێکی تر بۆ پێشانگای زانکۆیی دروستکراون. ئێستا ئەرشیف کراون، بۆیە لێرە بە وەسف نیشان دراون نەک بە لینک.",
  },
  roleLabel: {
    en: "My role",
    ar: "دوري",
    ku: "ڕۆڵی من",
  },
  badge: {
    en: "Archived project",
    ar: "مشروع مؤرشف",
    ku: "پڕۆژەی ئەرشیفکراو",
  },
} satisfies Record<string, Localized>;

const systemRole: Localized = {
  en: "Requirements analysis, database design, development and testing.",
  ar: "تحليل المتطلبات، تصميم قاعدة البيانات، التطوير والاختبار.",
  ku: "شیکردنەوەی پێداویستییەکان، دیزاینی داتابەیس، پەرەپێدان و تاقیکردنەوە.",
};

const websiteRole: Localized = {
  en: "Design and development.",
  ar: "التصميم والتطوير.",
  ku: "دیزاین و پەرەپێدان.",
};

export const clientProjects: ClientProject[] = [
  {
    id: "bank-management",
    icon: "bank",
    name: "Bank Management System",
    years: "2016–2018",
    category: {
      en: "Banking software",
      ar: "برمجيات مصرفية",
      ku: "نەرمەواڵەی بانکی",
    },
    summary: {
      en: "Bank management system developed for Cihan University's Software Exhibition, with an accompanying report.",
      ar: "نظام إدارة مصرفي طُوّر لمعرض البرمجيات في جامعة جيهان، مع تقرير مرافق.",
      ku: "سیستەمی بەڕێوەبردنی بانک کە بۆ پێشانگای سۆفتوێری زانکۆی جیهان دروستکرا، لەگەڵ ڕاپۆرتێکی هاوپێچ.",
    },
    role: systemRole,
    technologies: ["C#", "SQL Server"],
  },
  {
    id: "patient-management",
    icon: "health",
    name: "Patient Management System",
    years: "2016–2018",
    category: {
      en: "Healthcare software",
      ar: "برمجيات صحية",
      ku: "نەرمەواڵەی تەندروستی",
    },
    summary: {
      en: "Patient management system developed as an exhibition project for Cihan University.",
      ar: "نظام إدارة المرضى طُوّر كمشروع في معرض جامعة جيهان.",
      ku: "سیستەمی بەڕێوەبردنی نەخۆش کە وەک پڕۆژەیەک بۆ پێشانگای زانکۆی جیهان دروستکرا.",
    },
    role: systemRole,
    technologies: ["C#", "SQL Server"],
  },
  {
    id: "gym-management",
    icon: "gym",
    name: "Gym Management System",
    years: "2016–2018",
    category: {
      en: "Fitness software",
      ar: "برمجيات رياضية",
      ku: "نەرمەواڵەی وەرزشی",
    },
    summary: {
      en: "Management system for a gym, developed independently as a commissioned project for a client.",
      ar: "نظام إدارة لصالة رياضية، طُوّر بشكل مستقل كمشروع مكلَّف به من عميل.",
      ku: "سیستەمی بەڕێوەبردن بۆ هۆڵێکی وەرزشی، کە بە سەربەخۆیی وەک پڕۆژەیەکی داواکراو بۆ کڕیارێک دروستکرا.",
    },
    role: systemRole,
    technologies: ["C#", "SQL Server"],
  },
  {
    id: "goldengate-website",
    icon: "building",
    name: "GoldenGate Company Website",
    years: "2016–2018",
    category: {
      en: "Corporate website",
      ar: "موقع شركة",
      ku: "ماڵپەڕی کۆمپانیا",
    },
    summary: {
      en: "Official corporate website for GoldenGate for General Contracting, which I designed and developed.",
      ar: "الموقع الرسمي لشركة GoldenGate للمقاولات العامة، قمت بتصميمه وتطويره.",
      ku: "ماڵپەڕی فەرمی کۆمپانیای GoldenGate بۆ پەیمانکاری گشتی، کە دیزاینم کرد و پەرەم پێدا.",
    },
    role: websiteRole,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "swar-website",
    icon: "building",
    name: "SWAR Company Website",
    years: "2016–2018",
    category: {
      en: "Corporate website",
      ar: "موقع شركة",
      ku: "ماڵپەڕی کۆمپانیا",
    },
    summary: {
      en: "Official corporate website for SWAR Company for General Contracting, which I designed and developed.",
      ar: "الموقع الرسمي لشركة SWAR للمقاولات العامة، قمت بتصميمه وتطويره.",
      ku: "ماڵپەڕی فەرمی کۆمپانیای SWAR بۆ پەیمانکاری گشتی، کە دیزاینم کرد و پەرەم پێدا.",
    },
    role: websiteRole,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];