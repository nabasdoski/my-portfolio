import type { Language } from "@/components/LanguageProvider";

/**
 * English is the source of truth. `Copy` is derived from it, so TypeScript
 * will fail the build if Arabic or Kurdish is missing a key.
 *
 * NOTE: ar and ku are first-pass translations. Have a native reader review
 * them (especially Kurdish Sorani) before shipping.
 */
export const en = {
  nav: {
    products: "Products",
    about: "About",
    contact: "Contact",
    letsTalk: "Let's talk",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
  },
  hero: {
    badge: "Software · AI · Digital Products",
    title1: "I build digital",
    title2: "products that",
    title3: "solve real problems.",
    intro:
      "I design and develop practical software products combining modern engineering, artificial intelligence and secure digital experiences.",
    ctaProducts: "Explore my products",
    ctaAbout: "About me",
    stats: [
      { value: "02+", label: "Digital products" },
      { value: "AI", label: "Built into products" },
      { value: "Iraq", label: "Primary market" },
    ],
  },
  products: {
    eyebrow: "Selected work",
    heading: "Products I've built.",
    sub: "Real products designed around real users, markets and problems.",
    cta: "View case study",
    akuzzle: {
      category: "Digital Marketplace",
      description:
        "A modern marketplace built specifically for Iraq, connecting people and businesses across real estate, vehicles, electronics, jobs, services and more.",
    },
    medicine: {
      category: "Healthcare Technology",
      description:
        "A multilingual healthcare platform connecting users, pharmacies and healthcare businesses through discovery, messaging and intelligent tools.",
    },
  },
  about: {
    eyebrow: "About me",
    heading: "I build digital products that solve real problems.",
    p1: "I am a software developer and technology professional focused on building practical digital products, intelligent systems, and technology solutions that can be used in the real world.",
    p2: "My work combines software engineering with artificial intelligence, cybersecurity, data, and digital transformation. I enjoy taking an idea from a real problem to a working product — designing the system, building the software, and thinking about how people and businesses will actually use it.",
    p3: "I have worked across software development, information systems, international projects, and business operations. This combination has taught me to look beyond code and understand the wider problem a technology solution needs to solve.",
    p4Before: "Today, I am particularly interested in the intersection of ",
    p4Highlight: "AI, cybersecurity, and digital transformation",
    p4After:
      " — building technology that is useful, secure, and capable of growing beyond a single project or market.",
    cards: [
      {
        title: "Software Engineering",
        text: "Web, mobile and business applications",
      },
      {
        title: "Artificial Intelligence",
        text: "Practical AI features inside real products",
      },
      {
        title: "Cybersecurity",
        text: "Secure systems, access and data protection",
      },
      {
        title: "Digital Transformation",
        text: "Turning real-world processes into digital solutions",
      },
    ],
  },
  contact: {
    eyebrow: "Let's talk",
    heading: "Have an idea, project, or problem worth solving?",
    intro:
      "I'm interested in building useful digital products, intelligent systems, and technology solutions. If you have a project, collaboration, or idea you would like to discuss, get in touch.",
    emailLabel: "Email",
    emailCta: "Send an email",
    linkedinLabel: "LinkedIn",
    linkedinTitle: "Professional profile",
    linkedinCta: "View profile",
  },
  form: {
    honeypot: "Leave this field empty",
    name: "Your name",
    namePlaceholder: "Enter your name",
    email: "Email address",
    emailPlaceholder: "you@example.com",
    subject: "Subject (optional)",
    subjectPlaceholder: "What would you like to discuss?",
    message: "Message",
    messagePlaceholder: "Tell me about your idea or project...",
    send: "Send message",
    sending: "Sending...",
    successTitle: "Message sent successfully",
    warningTitle: "Please wait a moment",
    errorTitle: "Message could not be sent",
    success:
      "Thank you for reaching out! Your message has been received. I'll get back to you as soon as possible.",
    rateLimited:
      "You've sent several messages in a short time. Please wait one minute before trying again.",
    genericError: "Your message could not be sent. Please try again.",
    networkError:
      "Something went wrong while sending your message. Please try again later.",
  },

  akuzzle: {
    nav: {
      overview: "Overview",
      technology: "Technology",
      projects: "All projects",
      aiWorkflow: "AI listing workflow",
      security: "Security & trust",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
    },
    hero: {
      category: "Digital Marketplace",
      tagline: "A flexible digital marketplace built for Iraq.",
      intro:
        "A modern marketplace platform connecting people, businesses and communities through a flexible listing experience enhanced with artificial intelligence.",
      explore: "Explore project",
      viewTechnology: "View technology",
      availableOn: "Available on",
      web: "Web",
      ios: "iOS",
      android: "Android",
      soon: "Soon",
      platform: "Platform",
      platformValue: "AI-powered marketplace",
      scroll: "Scroll to explore",
    },
    facts: [
      { label: "Product", value: "Mobile Application" },
      { label: "Market", value: "Iraq" },
      { label: "AI", value: "Listing Assistance" },
      { label: "Architecture", value: "Full-stack Platform" },
    ],
    screenshots: {
      eyebrow: "Product experience",
      title: "Designed around the user.",
      description:
        "A closer look at the Akuzzle mobile experience, from discovering listings to creating and managing advertisements.",
    },
    overview: {
      eyebrow: "Overview",
      kicker: "Product case study",
      title: "One platform for buying, selling, discovering and connecting.",
      paragraphs: [
        "Akuzzle is a digital marketplace built specifically for the Iraqi market. It brings individuals, businesses and communities together through a single platform where different types of products, services and opportunities can be discovered and shared.",
        "Rather than restricting the platform to a fixed set of categories, Akuzzle is designed to remain flexible as the marketplace grows. New categories, listing types and use cases can be introduced as user and business needs evolve.",
        "Artificial intelligence is also integrated into the experience to help users create advertisements more efficiently, turning a product photo into a starting point for a marketplace listing.",
      ],
      highlights: [
        "Flexible marketplace",
        "AI-assisted listings",
        "Built for Iraq",
      ],
    },
    challenge: {
      eyebrow: "The challenge",
      title: "A fragmented digital marketplace.",
      paragraphs: [
        "Buying and selling, finding services, discovering opportunities and connecting with businesses can happen across many different platforms and communication channels.",
        "Akuzzle was created to provide a more localized digital marketplace for users in Iraq, bringing these interactions together in one accessible experience.",
      ],
    },
    solution: {
      eyebrow: "The solution",
      title: "One flexible platform.",
      paragraphs: [
        "Akuzzle brings different marketplace experiences together while keeping the platform flexible enough to support new categories, listing types and use cases.",
        "The goal is not simply to create another classifieds application, but to build a foundation that can evolve with users, businesses and the wider digital economy in Iraq.",
      ],
      coreLabel: "Core idea",
      coreText:
        "Build the marketplace around the needs of its users — rather than forcing users into a rigid marketplace structure.",
    },
    ai: {
      eyebrow: "Artificial intelligence",
      title: "From a photo",
      titleAccent: "to a marketplace listing.",
      description:
        "Akuzzle uses artificial intelligence to help users create advertisements faster. A product photo becomes the starting point for generating useful information that can be reviewed and adjusted before publication.",
      steps: [
        { title: "Capture", description: "Take a photo of the item." },
        {
          title: "Analyze",
          description: "AI analyzes the image and its visible details.",
        },
        {
          title: "Generate",
          description: "Useful listing information is prepared.",
        },
        {
          title: "Review",
          description: "The user checks and adjusts the information.",
        },
        {
          title: "Publish",
          description: "The completed listing can be published.",
        },
      ],
      humanLabel: "Human in the loop",
      humanTitle: "AI assists. The user stays in control.",
      humanDescription:
        "The generated information is not treated as the final answer. Users can review and modify the details before publishing their advertisement.",
      speedLabel: "Designed for speed",
      speedText: "Reduce the effort required to create a listing.",
    },
    growth: {
      eyebrow: "Built to grow",
      title: "A marketplace that can grow with its users.",
      paragraphs: [
        "Akuzzle is designed as a flexible marketplace platform rather than a system restricted to a predefined set of categories.",
        "Its structure allows new types of listings, categories and use cases to be introduced as the platform and its community evolve.",
      ],
      capabilities: [
        {
          title: "Flexible categories",
          description:
            "The platform can support different categories and expand into new areas as requirements change.",
        },
        {
          title: "Different listing types",
          description:
            "The marketplace can accommodate different kinds of products, services and opportunities.",
        },
        {
          title: "Expandable architecture",
          description:
            "The system is designed to evolve as new marketplace requirements and features are introduced.",
        },
        {
          title: "Local focus",
          description:
            "The experience is designed around users, businesses and digital commerce in Iraq.",
        },
      ],
    },
    security: {
      eyebrow: "Security & trust",
      title: "Trust is part of the product.",
      paragraphs: [
        "A marketplace depends on people feeling confident about the platform, their accounts and the information they share.",
        "Akuzzle is designed with security and responsible handling of user information as important parts of the overall product experience.",
      ],
      principles: [
        {
          title: "Account security",
          description:
            "User accounts and authentication are treated as a core part of the marketplace experience.",
        },
        {
          title: "Trust between users",
          description:
            "The platform is designed to support more reliable interactions between individuals, businesses and organizations.",
        },
        {
          title: "Controlled administration",
          description:
            "Administrative functionality is separated from the public marketplace experience.",
        },
        {
          title: "Responsible data handling",
          description:
            "User and marketplace information is treated as an important part of the platform's design and development.",
        },
      ],
    },
    privacy: {
      eyebrow: "Privacy & legal",
      title: "Built with trust and transparency in mind.",
      description:
        "Akuzzle provides published privacy and service terms explaining how user information is handled, how the platform may be used, and the responsibilities of users and the platform.",
      policy: "Privacy Policy",
      terms: "Terms of Service",
    },
    technology: {
      eyebrow: "Technology",
      title: "A modern foundation for a growing platform.",
      paragraphs: [
        "The technology choices provide a flexible foundation for the product, allowing new features and services to be introduced as the platform evolves.",
        "The stack supports product development while keeping room for future features and services.",
      ],
      items: [
        {
          role: "Mobile application",
          description: "Used to build the cross-platform mobile experience.",
        },
        {
          role: "Application platform",
          description:
            "Provides the development foundation for the React Native application.",
        },
        {
          role: "Backend",
          description:
            "Powers server-side functionality and application services.",
        },
        {
          role: "Database",
          description: "Stores structured application and marketplace data.",
        },
      ],
      flow: "Platform flow",
      flowItems: ["Mobile App", "Backend", "Database"],
    },
    features: {
      eyebrow: "Core capabilities",
      title: "Built around the marketplace experience.",
      description:
        "Akuzzle brings together the essential capabilities needed to create, discover and manage marketplace activity through one connected platform.",
      items: [
        {
          title: "Marketplace listings",
          description:
            "Create and discover listings for different products, services and opportunities.",
        },
        {
          title: "AI-assisted creation",
          description:
            "Use a product photo as the starting point for generating useful advertisement information.",
        },
        {
          title: "Search & discovery",
          description:
            "Help users find relevant listings and opportunities within the marketplace.",
        },
        {
          title: "User accounts",
          description:
            "Provide users with a personalized experience for interacting with the platform.",
        },
        {
          title: "Business participation",
          description:
            "Allow businesses and organizations to participate alongside individual users.",
        },
        {
          title: "Expandable platform",
          description:
            "Keep the platform flexible enough to introduce new categories, listing types and use cases.",
        },
      ],
    },
    closing: {
      title: "Building a more connected digital marketplace for Iraq.",
      back: "Back to portfolio",
    },
  },
  medicineFinder: {
    nav: {
      overview: "Overview",
      howItWorks: "How it works",
      discovery: "Find pharmacies",
      ai: "AI prescription reader",
      business: "Healthcare businesses",
      pharmacy: "Pharmacy workspace",
      learning: "Learning",
      admin: "Admin panel",
      security: "Security",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
    },
    hero: {
      category: "Healthcare Technology",
      title: "A smarter way to find medicine and connect healthcare.",
      intro:
        "A multilingual healthcare platform connecting people, pharmacies and healthcare businesses through medicine requests, pharmacy discovery, messaging and AI-assisted tools.",
      explore: "Explore the platform",
      viewFeatures: "Explore features",
      platform: "Platform",
      platformValue: "Connected healthcare ecosystem",
      availableOn: "Available on",
      web: "Web",
      ios: "iOS",
      android: "Android",
      scroll: "Scroll to explore",
    },
    overview: {
      eyebrow: "Overview",
      title: "Connecting people with healthcare providers.",
      description:
        "Medicine Finder is a multilingual healthcare platform designed to make it easier to find medicines, contact pharmacies and connect healthcare businesses through one connected experience.",
      rolesTitle: "One platform, different roles",
      rolesDescription:
        "Users, pharmacies, suppliers and administrators have dedicated tools suited to their needs.",
      roles: [
        {
          title: "Users",
          description:
            "Search for medicines, send requests to pharmacies and communicate with healthcare providers.",
        },
        {
          title: "Pharmacies",
          description:
            "Receive medicine requests, respond to users and manage communication.",
        },
        {
          title: "Suppliers",
          description:
            "Participate in the healthcare supply network and manage relevant business information.",
        },
        {
          title: "Administrators",
          description:
            "Manage platform activity, verify entities and oversee content and user activity.",
        },
      ],
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "From a medicine search to a response.",
      description:
        "Users can request a medicine from pharmacies or discover nearby pharmacies and contact them directly.",
      steps: [
        {
          title: "Search",
          description:
            "Search by medicine name, package photo or prescription photo.",
        },
        {
          title: "Send a request",
          description: "Send a medicine request to participating pharmacies.",
        },
        {
          title: "Receive responses",
          description: "Pharmacies can respond to requests and contact users.",
        },
        {
          title: "Continue the conversation",
          description:
            "Communicate through messages, photos or available calling features.",
        },
      ],
      requestTitle: "A request that stays active",
      requestDescription:
        "While a request remains active, it can be sent or updated periodically so participating pharmacies have an opportunity to respond. Users can stop the request when they no longer need it.",
      stopRequest: "Users can stop a request at any time.",
    },
    discovery: {
      eyebrow: "Pharmacy discovery",
      title: "Find nearby pharmacies and contact them directly.",
      description:
        "Users can discover pharmacies around them and contact a pharmacy directly instead of sending a request to multiple pharmacies.",
      searchTitle: "Search your way",
      searchDescription:
        "Find pharmacies and use the available contact options to ask about a medicine.",
      features: [
        {
          title: "Nearby pharmacies",
          description: "Discover pharmacies based on location.",
        },
        {
          title: "Direct contact",
          description: "Contact a selected pharmacy directly.",
        },
        {
          title: "Messaging",
          description:
            "Continue the conversation through supported communication features.",
        },
      ],
    },
    ai: {
      eyebrow: "Artificial intelligence",
      title: "Prescription images, assisted by AI.",
      description:
        "An AI-assisted prescription reader helps pharmacists interpret information from prescription images as part of their workflow.",
      steps: [
        {
          title: "Upload an image",
          description: "Provide a prescription image for assistance.",
        },
        {
          title: "AI-assisted reading",
          description: "AI helps identify visible information in the image.",
        },
        {
          title: "Professional review",
          description:
            "The pharmacist reviews the extracted information before using it.",
        },
      ],
      noteTitle: "Designed to assist professionals",
      noteDescription:
        "AI-generated results should be reviewed by a qualified pharmacist. The feature supports professional work and does not replace clinical judgement.",
    },
    business: {
      eyebrow: "Healthcare businesses",
      title: "Tools for pharmacies and healthcare companies.",
      description:
        "Medicine Finder supports different types of healthcare entities, with registration and verification processes designed to help protect the platform and its users.",
      features: [
        {
          title: "Entity registration",
          description:
            "Healthcare businesses can register and provide their relevant information.",
        },
        {
          title: "Verification",
          description:
            "Entity details can be reviewed to support platform trust and accountability.",
        },
        {
          title: "Business participation",
          description:
            "Approved entities can take part in the connected healthcare ecosystem.",
        },
      ],
    },
    pharmacy: {
      eyebrow: "Pharmacy workspace",
      title: "A dedicated workspace for pharmacy activity.",
      description:
        "Pharmacies can receive medicine requests, respond to users and continue conversations through the platform's communication tools.",
      features: [
        {
          title: "Request management",
          description:
            "Review incoming medicine requests and respond when appropriate.",
        },
        {
          title: "Quick responses",
          description:
            "Use convenient response options when a medicine is available.",
        },
        {
          title: "Messaging and calls",
          description:
            "Communicate with users through supported text, image and calling features.",
        },
        {
          title: "Pharmacy information",
          description:
            "Manage relevant pharmacy details through the available platform tools.",
        },
      ],
    },
    learning: {
      eyebrow: "Learning and education",
      title: "Healthcare knowledge beyond medicine search.",
      description:
        "The platform includes learning features that support access to educational content and activities.",
      features: [
        { title: "Courses", description: "Browse available learning courses." },
        {
          title: "Course registration",
          description: "Register for supported courses through the platform.",
        },
        {
          title: "Quizzes",
          description: "Use quizzes to engage with learning material.",
        },
        {
          title: "Articles and resources",
          description: "Access available educational content and resources.",
        },
      ],
    },
    admin: {
      eyebrow: "Administration",
      title: "Centralised control of the platform.",
      description:
        "The administrative control panel provides tools to oversee platform content, users, healthcare entities and operational activity.",
      features: [
        {
          title: "User management",
          description: "Review and manage user-related information.",
        },
        {
          title: "Entity verification",
          description:
            "Review pharmacies, suppliers and other healthcare entities.",
        },
        {
          title: "Content management",
          description:
            "Manage courses, articles, quizzes and other platform content.",
        },
        {
          title: "Translations",
          description:
            "Manage multilingual content across supported languages.",
        },
        {
          title: "Analytics",
          description:
            "Review available platform activity and performance information.",
        },
      ],
    },
    security: {
      eyebrow: "Security and privacy",
      title: "Protecting accounts and sensitive information.",
      description:
        "Healthcare platforms handle information that deserves careful treatment. Medicine Finder incorporates security-conscious workflows for accounts, communications and healthcare entity verification.",
      principles: [
        {
          title: "Account protection",
          description:
            "Protect user accounts and authentication-related information.",
        },
        {
          title: "Entity verification",
          description:
            "Review healthcare entities to support trust and reduce misuse.",
        },
        {
          title: "Controlled administration",
          description:
            "Provide dedicated administrative tools for managing platform activity.",
        },
        {
          title: "Responsible data handling",
          description:
            "Treat personal and sensitive information with care throughout the platform experience.",
        },
      ],
      disclaimer:
        "Medicine Finder supports medicine discovery and communication. Users should confirm medicine availability, suitability and treatment decisions with a qualified healthcare professional.",
    },
    technology: {
      eyebrow: "Technology",
      title: "A connected, multilingual healthcare platform.",
      description:
        "The platform combines mobile and web experiences, backend services, communication features and AI-assisted tools to support its healthcare workflows.",
      items: [
        {
          title: "Mobile application",
          description:
            "A mobile experience for users and healthcare providers.",
        },
        {
          title: "Web platform",
          description: "Web-based access to platform services and tools.",
        },
        {
          title: "Backend services",
          description: "Support application logic, requests and communication.",
        },
        {
          title: "Administrative control panel",
          description:
            "Tools for managing users, entities, content and platform activity.",
        },
        {
          title: "AI-assisted features",
          description:
            "Support specific workflows such as reading prescription images.",
        },
      ],
    },
    closing: {
      title: "Making medicine discovery and healthcare connections easier.",
      description:
        "Medicine Finder brings users, pharmacies and healthcare businesses into one connected digital experience.",
      back: "Back to portfolio",
      explore: "Explore the platform",
    },
  },
};

export type Copy = typeof en;

const ar: Copy = {
  nav: {
    products: "المنتجات",
    about: "نبذة عني",
    contact: "تواصل",
    letsTalk: "لنتحدث",
    openMenu: "فتح قائمة التنقل",
    closeMenu: "إغلاق قائمة التنقل",
  },
  hero: {
    badge: "البرمجيات · الذكاء الاصطناعي · المنتجات الرقمية",
    title1: "أبني منتجات",
    title2: "رقمية",
    title3: "تحل مشكلات حقيقية.",
    intro:
      "أصمّم وأطوّر منتجات برمجية عملية تجمع بين الهندسة الحديثة والذكاء الاصطناعي والتجارب الرقمية الآمنة.",
    ctaProducts: "استكشف منتجاتي",
    ctaAbout: "نبذة عني",
    stats: [
      { value: "02+", label: "منتجات رقمية" },
      { value: "AI", label: "مدمج في المنتجات" },
      { value: "العراق", label: "السوق الرئيسي" },
    ],
  },
  products: {
    eyebrow: "أعمال مختارة",
    heading: "منتجات قمت ببنائها.",
    sub: "منتجات حقيقية صُمّمت حول مستخدمين وأسواق ومشكلات حقيقية.",
    cta: "عرض دراسة الحالة",
    akuzzle: {
      category: "سوق رقمي",
      description:
        "سوق حديث مصمَّم خصيصًا للعراق، يربط الأفراد والشركات في مجالات العقارات والسيارات والإلكترونيات والوظائف والخدمات وغيرها.",
    },
    medicine: {
      category: "تكنولوجيا الرعاية الصحية",
      description:
        "منصة صحية متعددة اللغات تربط المستخدمين والصيدليات وأعمال الرعاية الصحية من خلال الاكتشاف والمراسلة والأدوات الذكية.",
    },
  },
  about: {
    eyebrow: "نبذة عني",
    heading: "أبني منتجات رقمية تحل مشكلات حقيقية.",
    p1: "أنا مطوّر برمجيات ومتخصص في التقنية، أركّز على بناء منتجات رقمية عملية وأنظمة ذكية وحلول تقنية يمكن استخدامها في الواقع.",
    p2: "يجمع عملي بين هندسة البرمجيات والذكاء الاصطناعي والأمن السيبراني والبيانات والتحول الرقمي. أستمتع بنقل الفكرة من مشكلة حقيقية إلى منتج يعمل — بتصميم النظام وبناء البرمجيات والتفكير في كيفية استخدام الأفراد والشركات له فعلًا.",
    p3: "عملت في تطوير البرمجيات ونظم المعلومات والمشاريع الدولية وعمليات الأعمال. علّمني هذا التنوع أن أنظر إلى ما هو أبعد من الكود، وأن أفهم المشكلة الأوسع التي يجب أن يحلّها الحل التقني.",
    p4Before: "أهتم اليوم بشكل خاص بالتقاطع بين ",
    p4Highlight: "الذكاء الاصطناعي والأمن السيبراني والتحول الرقمي",
    p4After:
      " — لبناء تقنية مفيدة وآمنة وقادرة على النمو إلى ما هو أبعد من مشروع أو سوق واحد.",
    cards: [
      {
        title: "هندسة البرمجيات",
        text: "تطبيقات الويب والجوال وتطبيقات الأعمال",
      },
      {
        title: "الذكاء الاصطناعي",
        text: "ميزات ذكاء اصطناعي عملية داخل منتجات حقيقية",
      },
      {
        title: "الأمن السيبراني",
        text: "أنظمة آمنة وحماية للوصول والبيانات",
      },
      {
        title: "التحول الرقمي",
        text: "تحويل العمليات الواقعية إلى حلول رقمية",
      },
    ],
  },
  contact: {
    eyebrow: "لنتحدث",
    heading: "هل لديك فكرة أو مشروع أو مشكلة تستحق الحل؟",
    intro:
      "أهتم ببناء منتجات رقمية مفيدة وأنظمة ذكية وحلول تقنية. إذا كان لديك مشروع أو تعاون أو فكرة تودّ مناقشتها، تواصل معي.",
    emailLabel: "البريد الإلكتروني",
    emailCta: "أرسل بريدًا إلكترونيًا",
    linkedinLabel: "LinkedIn",
    linkedinTitle: "الملف المهني",
    linkedinCta: "عرض الملف",
  },
  form: {
    honeypot: "اترك هذا الحقل فارغًا",
    name: "الاسم",
    namePlaceholder: "أدخل اسمك",
    email: "البريد الإلكتروني",
    emailPlaceholder: "you@example.com",
    subject: "الموضوع (اختياري)",
    subjectPlaceholder: "ما الذي تودّ مناقشته؟",
    message: "الرسالة",
    messagePlaceholder: "أخبرني عن فكرتك أو مشروعك...",
    send: "إرسال الرسالة",
    sending: "جارٍ الإرسال...",
    successTitle: "تم إرسال الرسالة بنجاح",
    warningTitle: "يرجى الانتظار قليلًا",
    errorTitle: "تعذّر إرسال الرسالة",
    success: "شكرًا لتواصلك! تم استلام رسالتك وسأرد عليك في أقرب وقت ممكن.",
    rateLimited:
      "لقد أرسلت عدة رسائل خلال وقت قصير. يرجى الانتظار دقيقة قبل المحاولة مرة أخرى.",
    genericError: "تعذّر إرسال رسالتك. يرجى المحاولة مرة أخرى.",
    networkError: "حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة لاحقًا.",
  },

  akuzzle: {
    nav: {
      overview: "نظرة عامة",
      technology: "التقنيات",
      projects: "جميع المشاريع",
      aiWorkflow: "خطوات إنشاء الإعلان بالذكاء الاصطناعي",
      security: "الأمان والثقة",
      openMenu: "فتح قائمة التنقل",
      closeMenu: "إغلاق قائمة التنقل",
    },
    hero: {
      category: "سوق رقمي",
      tagline: "سوق رقمي مرن مصمم للعراق.",
      intro:
        "منصة سوق حديثة تربط الأفراد والشركات والمجتمعات من خلال تجربة إعلانات مرنة مدعومة بالذكاء الاصطناعي.",
      explore: "استكشف المشروع",
      viewTechnology: "عرض التقنيات",
      availableOn: "متاح على",
      web: "الويب",
      ios: "iOS",
      android: "Android",
      soon: "قريبًا",
      platform: "المنصة",
      platformValue: "سوق مدعوم بالذكاء الاصطناعي",
      scroll: "مرّر لاستكشاف المزيد",
    },
    facts: [
      { label: "المنتج", value: "تطبيق للهواتف" },
      { label: "السوق", value: "العراق" },
      { label: "الذكاء الاصطناعي", value: "المساعدة في إنشاء الإعلانات" },
      { label: "البنية", value: "منصة متكاملة" },
    ],
    screenshots: {
      eyebrow: "تجربة المنتج",
      title: "مصمم حول احتياجات المستخدم.",
      description:
        "نظرة أقرب إلى تجربة Akuzzle على الهاتف، من استكشاف الإعلانات إلى إنشاء الإعلانات وإدارتها.",
    },
    overview: {
      eyebrow: "نظرة عامة",
      kicker: "دراسة حالة المنتج",
      title: "منصة واحدة للبيع والشراء والاستكشاف والتواصل.",
      paragraphs: [
        "Akuzzle سوق رقمي صُمم خصيصًا للسوق العراقي. يجمع الأفراد والشركات والمجتمعات في منصة واحدة لاكتشاف المنتجات والخدمات والفرص المختلفة ومشاركتها.",
        "بدلًا من حصر المنصة في مجموعة ثابتة من الفئات، صُممت Akuzzle لتبقى مرنة مع نمو السوق. ويمكن إضافة فئات وأنواع إعلانات واستخدامات جديدة مع تطور احتياجات المستخدمين والشركات.",
        "يدمج المنتج الذكاء الاصطناعي لمساعدة المستخدمين على إنشاء الإعلانات بكفاءة أكبر، بحيث تصبح صورة المنتج نقطة البداية لإنشاء إعلان في السوق.",
      ],
      highlights: [
        "سوق مرن",
        "إعلانات بمساعدة الذكاء الاصطناعي",
        "مصمم للعراق",
      ],
    },
    challenge: {
      eyebrow: "التحدي",
      title: "سوق رقمي متفرق.",
      paragraphs: [
        "قد تتم عمليات البيع والشراء والعثور على الخدمات واكتشاف الفرص والتواصل مع الشركات عبر منصات وقنوات اتصال متعددة.",
        "أُنشئت Akuzzle لتوفير سوق رقمي أقرب إلى احتياجات المستخدمين في العراق، يجمع هذه الأنشطة ضمن تجربة واحدة سهلة الوصول.",
      ],
    },
    solution: {
      eyebrow: "الحل",
      title: "منصة واحدة ومرنة.",
      paragraphs: [
        "تجمع Akuzzle تجارب السوق المختلفة مع الحفاظ على المرونة اللازمة لدعم فئات وأنواع إعلانات واستخدامات جديدة.",
        "الهدف ليس إنشاء تطبيق إعلانات مبوبة آخر فحسب، بل بناء أساس يتطور مع المستخدمين والشركات والاقتصاد الرقمي في العراق.",
      ],
      coreLabel: "الفكرة الأساسية",
      coreText:
        "بناء السوق حول احتياجات المستخدمين بدلًا من إجبارهم على التكيف مع هيكل جامد.",
    },
    ai: {
      eyebrow: "الذكاء الاصطناعي",
      title: "من صورة",
      titleAccent: "إلى إعلان في السوق.",
      description:
        "تستخدم Akuzzle الذكاء الاصطناعي لمساعدة المستخدمين على إنشاء الإعلانات بسرعة أكبر. تصبح صورة المنتج نقطة البداية لإنشاء معلومات مفيدة يمكن مراجعتها وتعديلها قبل النشر.",
      steps: [
        { title: "التقاط الصورة", description: "التقط صورة للمنتج." },
        {
          title: "التحليل",
          description: "يحلل الذكاء الاصطناعي الصورة والتفاصيل الظاهرة فيها.",
        },
        {
          title: "إنشاء المعلومات",
          description: "تُجهز معلومات مفيدة للإعلان.",
        },
        { title: "المراجعة", description: "يراجع المستخدم المعلومات ويعدلها." },
        { title: "النشر", description: "يمكن نشر الإعلان بعد إكماله." },
      ],
      humanLabel: "إشراف المستخدم",
      humanTitle: "الذكاء الاصطناعي يساعد، والمستخدم يظل مسيطرًا.",
      humanDescription:
        "لا تُعتبر المعلومات المُنشأة إجابة نهائية؛ إذ يمكن للمستخدم مراجعة التفاصيل وتعديلها قبل نشر الإعلان.",
      speedLabel: "مصمم للسرعة",
      speedText: "تقليل الجهد المطلوب لإنشاء الإعلان.",
    },
    growth: {
      eyebrow: "مصمم للنمو",
      title: "سوق ينمو مع مستخدميه.",
      paragraphs: [
        "صُممت Akuzzle كمنصة سوق مرنة، وليست نظامًا مقيدًا بمجموعة محددة مسبقًا من الفئات.",
        "تسمح بنيتها بإضافة أنواع جديدة من الإعلانات والفئات والاستخدامات مع تطور المنصة ومجتمعها.",
      ],
      capabilities: [
        {
          title: "فئات مرنة",
          description:
            "تدعم المنصة فئات مختلفة ويمكن توسيعها لتشمل مجالات جديدة عند تغير الاحتياجات.",
        },
        {
          title: "أنواع مختلفة من الإعلانات",
          description:
            "تستوعب المنصة أنواعًا متعددة من المنتجات والخدمات والفرص.",
        },
        {
          title: "بنية قابلة للتوسع",
          description:
            "صُمم النظام ليتطور مع إضافة متطلبات وميزات جديدة للسوق.",
        },
        {
          title: "تركيز محلي",
          description:
            "تراعي التجربة المستخدمين والشركات والتجارة الرقمية في العراق.",
        },
      ],
    },
    security: {
      eyebrow: "الأمان والثقة",
      title: "الثقة جزء من المنتج.",
      paragraphs: [
        "يعتمد نجاح السوق على شعور المستخدمين بالثقة في المنصة وحساباتهم والمعلومات التي يشاركونها.",
        "تُعد حماية المعلومات والتعامل المسؤول مع بيانات المستخدمين جزءًا مهمًا من تجربة Akuzzle.",
      ],
      principles: [
        {
          title: "أمان الحسابات",
          description:
            "تُعد حسابات المستخدمين والمصادقة جزءًا أساسيًا من تجربة السوق.",
        },
        {
          title: "الثقة بين المستخدمين",
          description:
            "صُممت المنصة لدعم تفاعلات أكثر موثوقية بين الأفراد والشركات والمؤسسات.",
        },
        {
          title: "إدارة إدارية منفصلة",
          description: "تُفصل وظائف الإدارة عن تجربة السوق العامة.",
        },
        {
          title: "التعامل المسؤول مع البيانات",
          description:
            "تُعامل بيانات المستخدمين والسوق بوصفها جزءًا مهمًا من تصميم المنصة وتطويرها.",
        },
      ],
    },
    privacy: {
      eyebrow: "الخصوصية والشؤون القانونية",
      title: "بُنيت مع مراعاة الثقة والشفافية.",
      description:
        "تنشر Akuzzle سياسة الخصوصية وشروط الخدمة لتوضيح كيفية التعامل مع معلومات المستخدمين، وطريقة استخدام المنصة، ومسؤوليات المستخدمين والمنصة.",
      policy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
    },
    technology: {
      eyebrow: "التقنيات",
      title: "أساس حديث لمنصة قابلة للنمو.",
      paragraphs: [
        "توفر الخيارات التقنية أساسًا مرنًا للمنتج، وتسمح بإضافة ميزات وخدمات جديدة مع تطور المنصة.",
        "تدعم البنية التقنية تطوير المنتج مع إبقاء المجال مفتوحًا لميزات وخدمات مستقبلية.",
      ],
      items: [
        {
          role: "تطبيق الهاتف",
          description: "يُستخدم لبناء تجربة تطبيق تعمل على منصات متعددة.",
        },
        {
          role: "منصة التطبيق",
          description: "توفر أساس التطوير لتطبيق React Native.",
        },
        {
          role: "الخادم الخلفي",
          description: "يدعم وظائف الخادم وخدمات التطبيق.",
        },
        {
          role: "قاعدة البيانات",
          description: "تخزن بيانات التطبيق والسوق المنظمة.",
        },
      ],
      flow: "تدفق المنصة",
      flowItems: ["تطبيق الهاتف", "الخادم الخلفي", "قاعدة البيانات"],
    },
    features: {
      eyebrow: "القدرات الأساسية",
      title: "مصمم لتجربة السوق.",
      description:
        "تجمع Akuzzle القدرات الأساسية اللازمة لإنشاء أنشطة السوق واكتشافها وإدارتها ضمن منصة مترابطة.",
      items: [
        {
          title: "إعلانات السوق",
          description: "إنشاء إعلانات لمنتجات وخدمات وفرص مختلفة واستكشافها.",
        },
        {
          title: "الإنشاء بمساعدة الذكاء الاصطناعي",
          description:
            "استخدام صورة المنتج كنقطة بداية لإنشاء معلومات مفيدة للإعلان.",
        },
        {
          title: "البحث والاستكشاف",
          description:
            "مساعدة المستخدمين على العثور على الإعلانات والفرص المناسبة.",
        },
        {
          title: "حسابات المستخدمين",
          description: "توفير تجربة مخصصة للتفاعل مع المنصة.",
        },
        {
          title: "مشاركة الشركات",
          description: "إتاحة المشاركة للشركات والمؤسسات إلى جانب الأفراد.",
        },
        {
          title: "منصة قابلة للتوسع",
          description:
            "الحفاظ على مرونة المنصة لإضافة فئات وأنواع إعلانات واستخدامات جديدة.",
        },
      ],
    },
    closing: {
      title: "نبني سوقًا رقميًا أكثر ترابطًا للعراق.",
      back: "العودة إلى معرض الأعمال",
    },
  },
  medicineFinder: {
    nav: {
      overview: "نظرة عامة",
      howItWorks: "كيف يعمل",
      discovery: "البحث عن الصيدليات",
      ai: "قارئ الوصفات بالذكاء الاصطناعي",
      business: "الجهات الصحية",
      pharmacy: "مساحة عمل الصيدلية",
      learning: "التعلّم",
      admin: "لوحة الإدارة",
      security: "الأمان",
      openMenu: "فتح قائمة التنقل",
      closeMenu: "إغلاق قائمة التنقل",
    },
    hero: {
      category: "تكنولوجيا الرعاية الصحية",
      title: "طريقة أذكى للعثور على الأدوية والتواصل مع مقدمي الرعاية الصحية.",
      intro:
        "منصة صحية متعددة اللغات تربط الأشخاص والصيدليات والشركات الصحية من خلال طلبات الأدوية واكتشاف الصيدليات والمراسلة والأدوات المدعومة بالذكاء الاصطناعي.",
      explore: "استكشف المنصة",
      viewFeatures: "استكشف الميزات",
      platform: "المنصة",
      platformValue: "منظومة رعاية صحية مترابطة",
      availableOn: "متاح على",
      web: "الويب",
      ios: "iOS",
      android: "Android",
      scroll: "مرّر لاستكشاف المزيد",
    },
    overview: {
      eyebrow: "نظرة عامة",
      title: "ربط الأشخاص بمقدمي الرعاية الصحية.",
      description:
        "Medicine Finder منصة صحية متعددة اللغات تهدف إلى تسهيل العثور على الأدوية والتواصل مع الصيدليات وربط الشركات الصحية من خلال تجربة رقمية واحدة.",
      rolesTitle: "منصة واحدة بأدوار متعددة",
      rolesDescription:
        "توفر المنصة أدوات مخصصة للمستخدمين والصيدليات والموردين والمسؤولين وفقًا لاحتياجات كل فئة.",
      roles: [
        {
          title: "المستخدمون",
          description:
            "البحث عن الأدوية وإرسال الطلبات إلى الصيدليات والتواصل مع مقدمي الرعاية الصحية.",
        },
        {
          title: "الصيدليات",
          description:
            "استلام طلبات الأدوية والرد على المستخدمين وإدارة التواصل معهم.",
        },
        {
          title: "الموردون",
          description:
            "المشاركة في شبكة إمداد الرعاية الصحية وإدارة معلومات الأعمال ذات الصلة.",
        },
        {
          title: "المسؤولون",
          description:
            "إدارة نشاط المنصة والتحقق من الجهات والإشراف على المحتوى ونشاط المستخدمين.",
        },
      ],
    },
    howItWorks: {
      eyebrow: "كيف يعمل",
      title: "من البحث عن الدواء إلى تلقي الرد.",
      description:
        "يمكن للمستخدمين طلب دواء من الصيدليات أو اكتشاف الصيدليات القريبة والتواصل معها مباشرة.",
      steps: [
        {
          title: "البحث",
          description:
            "البحث باستخدام اسم الدواء أو صورة عبوته أو صورة الوصفة الطبية.",
        },
        {
          title: "إرسال الطلب",
          description: "إرسال طلب الدواء إلى الصيدليات المشاركة.",
        },
        {
          title: "تلقي الردود",
          description:
            "يمكن للصيدليات الرد على الطلبات والتواصل مع المستخدمين.",
        },
        {
          title: "متابعة المحادثة",
          description: "التواصل عبر الرسائل والصور وميزات الاتصال المتاحة.",
        },
      ],
      requestTitle: "طلب يظل نشطًا",
      requestDescription:
        "ما دام الطلب نشطًا، يمكن إرساله أو تحديثه دوريًا لإتاحة الفرصة للصيدليات المشاركة للرد. ويمكن للمستخدم إيقاف الطلب عندما لا يعود بحاجة إليه.",
      stopRequest: "يمكن للمستخدم إيقاف الطلب في أي وقت.",
    },
    discovery: {
      eyebrow: "اكتشاف الصيدليات",
      title: "اعثر على الصيدليات القريبة وتواصل معها مباشرة.",
      description:
        "يمكن للمستخدمين اكتشاف الصيدليات القريبة منهم والتواصل مباشرة مع صيدلية محددة بدلًا من إرسال طلب إلى عدة صيدليات.",
      searchTitle: "ابحث بالطريقة المناسبة لك",
      searchDescription:
        "اعثر على الصيدليات واستخدم خيارات التواصل المتاحة للاستفسار عن دواء.",
      features: [
        {
          title: "الصيدليات القريبة",
          description: "اكتشاف الصيدليات بحسب الموقع.",
        },
        {
          title: "التواصل المباشر",
          description: "التواصل مباشرة مع الصيدلية المختارة.",
        },
        {
          title: "المراسلة",
          description: "متابعة المحادثة من خلال ميزات التواصل المدعومة.",
        },
      ],
    },
    ai: {
      eyebrow: "الذكاء الاصطناعي",
      title: "مساعدة ذكية في قراءة صور الوصفات الطبية.",
      description:
        "تساعد أداة قراءة الوصفات المدعومة بالذكاء الاصطناعي الصيادلة على تفسير المعلومات الظاهرة في صور الوصفات ضمن سير عملهم.",
      steps: [
        {
          title: "رفع صورة",
          description: "إرفاق صورة للوصفة الطبية للحصول على المساعدة.",
        },
        {
          title: "القراءة بمساعدة الذكاء الاصطناعي",
          description:
            "يساعد الذكاء الاصطناعي في تحديد المعلومات الظاهرة في الصورة.",
        },
        {
          title: "مراجعة المختص",
          description: "يراجع الصيدلي المعلومات المستخرجة قبل استخدامها.",
        },
      ],
      noteTitle: "مصممة لمساعدة المختصين",
      noteDescription:
        "ينبغي أن يراجع صيدلي مؤهل النتائج التي يولدها الذكاء الاصطناعي. تدعم هذه الميزة العمل المهني ولا تحل محل الحكم السريري.",
    },
    business: {
      eyebrow: "الجهات الصحية",
      title: "أدوات للصيدليات والشركات الصحية.",
      description:
        "تدعم Medicine Finder أنواعًا مختلفة من الجهات الصحية، مع إجراءات للتسجيل والتحقق تهدف إلى حماية المنصة ومستخدميها.",
      features: [
        {
          title: "تسجيل الجهات",
          description: "يمكن للجهات الصحية التسجيل وتقديم المعلومات ذات الصلة.",
        },
        {
          title: "التحقق",
          description:
            "يمكن مراجعة بيانات الجهات لدعم الثقة والمساءلة داخل المنصة.",
        },
        {
          title: "المشاركة في المنصة",
          description:
            "يمكن للجهات المعتمدة المشاركة في منظومة الرعاية الصحية المترابطة.",
        },
      ],
    },
    pharmacy: {
      eyebrow: "مساحة عمل الصيدلية",
      title: "مساحة مخصصة لإدارة أنشطة الصيدلية.",
      description:
        "يمكن للصيدليات استلام طلبات الأدوية والرد على المستخدمين ومتابعة المحادثات عبر أدوات التواصل المتاحة في المنصة.",
      features: [
        {
          title: "إدارة الطلبات",
          description: "مراجعة طلبات الأدوية الواردة والرد عليها عند الحاجة.",
        },
        {
          title: "الردود السريعة",
          description: "استخدام خيارات رد مناسبة عند توفر الدواء.",
        },
        {
          title: "الرسائل والمكالمات",
          description:
            "التواصل مع المستخدمين عبر الرسائل النصية والصور وميزات الاتصال المدعومة.",
        },
        {
          title: "معلومات الصيدلية",
          description:
            "إدارة بيانات الصيدلية ذات الصلة من خلال أدوات المنصة المتاحة.",
        },
      ],
    },
    learning: {
      eyebrow: "التعلّم والتعليم",
      title: "معرفة صحية تتجاوز البحث عن الأدوية.",
      description:
        "تتضمن المنصة ميزات تعليمية تتيح الوصول إلى المحتوى والأنشطة التعليمية.",
      features: [
        { title: "الدورات", description: "تصفح الدورات التعليمية المتاحة." },
        {
          title: "التسجيل في الدورات",
          description: "التسجيل في الدورات المدعومة من خلال المنصة.",
        },
        {
          title: "الاختبارات",
          description: "استخدام الاختبارات للتفاعل مع المواد التعليمية.",
        },
        {
          title: "المقالات والموارد",
          description: "الوصول إلى المحتوى والموارد التعليمية المتاحة.",
        },
      ],
    },
    admin: {
      eyebrow: "الإدارة",
      title: "إدارة مركزية للمنصة.",
      description:
        "توفر لوحة التحكم الإدارية أدوات للإشراف على محتوى المنصة ومستخدميها والجهات الصحية والأنشطة التشغيلية.",
      features: [
        {
          title: "إدارة المستخدمين",
          description: "مراجعة المعلومات المتعلقة بالمستخدمين وإدارتها.",
        },
        {
          title: "التحقق من الجهات",
          description: "مراجعة الصيدليات والموردين وغيرهم من الجهات الصحية.",
        },
        {
          title: "إدارة المحتوى",
          description:
            "إدارة الدورات والمقالات والاختبارات ومحتوى المنصة الآخر.",
        },
        {
          title: "الترجمات",
          description: "إدارة المحتوى متعدد اللغات عبر اللغات المدعومة.",
        },
        {
          title: "التحليلات",
          description: "مراجعة المعلومات المتاحة عن نشاط المنصة وأدائها.",
        },
      ],
    },
    security: {
      eyebrow: "الأمان والخصوصية",
      title: "حماية الحسابات والمعلومات الحساسة.",
      description:
        "تتعامل المنصات الصحية مع معلومات تستحق عناية خاصة. تتضمن Medicine Finder إجراءات تراعي الأمان في الحسابات والتواصل والتحقق من الجهات الصحية.",
      principles: [
        {
          title: "حماية الحسابات",
          description: "حماية حسابات المستخدمين والمعلومات المرتبطة بالمصادقة.",
        },
        {
          title: "التحقق من الجهات",
          description:
            "مراجعة الجهات الصحية لدعم الثقة والحد من إساءة الاستخدام.",
        },
        {
          title: "إدارة مضبوطة",
          description: "توفير أدوات إدارية مخصصة لإدارة نشاط المنصة.",
        },
        {
          title: "التعامل المسؤول مع البيانات",
          description:
            "التعامل بعناية مع المعلومات الشخصية والحساسة في جميع مراحل استخدام المنصة.",
        },
      ],
      disclaimer:
        "تساعد Medicine Finder في اكتشاف الأدوية والتواصل. ينبغي للمستخدمين التأكد من توفر الدواء وملاءمته وقرارات العلاج مع مختص مؤهل في الرعاية الصحية.",
    },
    technology: {
      eyebrow: "التقنيات",
      title: "منصة صحية مترابطة ومتعددة اللغات.",
      description:
        "تجمع المنصة بين تطبيقات الهاتف والويب والخدمات الخلفية وميزات التواصل والأدوات المدعومة بالذكاء الاصطناعي لدعم سير العمل الصحي.",
      items: [
        {
          title: "تطبيق الهاتف",
          description: "تجربة للهواتف مخصصة للمستخدمين ومقدمي الرعاية الصحية.",
        },
        {
          title: "منصة الويب",
          description: "الوصول إلى خدمات المنصة وأدواتها عبر الويب.",
        },
        {
          title: "الخدمات الخلفية",
          description: "دعم منطق التطبيق والطلبات والتواصل.",
        },
        {
          title: "لوحة التحكم الإدارية",
          description: "أدوات لإدارة المستخدمين والجهات والمحتوى ونشاط المنصة.",
        },
        {
          title: "ميزات الذكاء الاصطناعي",
          description: "دعم مهام محددة مثل قراءة صور الوصفات الطبية.",
        },
      ],
    },
    closing: {
      title: "تسهيل العثور على الأدوية والتواصل في مجال الرعاية الصحية.",
      description:
        "تجمع Medicine Finder المستخدمين والصيدليات والشركات الصحية ضمن تجربة رقمية مترابطة.",
      back: "العودة إلى معرض الأعمال",
      explore: "استكشف المنصة",
    },
  },
};

const ku: Copy = {
  nav: {
    products: "بەرهەمەکان",
    about: "دەربارەی من",
    contact: "پەیوەندی",
    letsTalk: "با قسە بکەین",
    openMenu: "کردنەوەی مێنیوی گەڕان",
    closeMenu: "داخستنی مێنیوی گەڕان",
  },
  hero: {
    badge: "نەرمەکاڵا · زیرەکی دەستکرد · بەرهەمی دیجیتاڵ",
    title1: "بەرهەمی دیجیتاڵ",
    title2: "دروست دەکەم کە",
    title3: "کێشە ڕاستەقینەکان چارەسەر دەکەن.",
    intro:
      "بەرهەمی نەرمەکاڵای کاریگەر دیزاین و پەرەپێدەدەم کە ئەندازیاریی مۆدێرن و زیرەکی دەستکرد و ئەزموونی دیجیتاڵیی پارێزراو تێکەڵ دەکات.",
    ctaProducts: "بەرهەمەکانم ببینە",
    ctaAbout: "دەربارەی من",
    stats: [
      { value: "02+", label: "بەرهەمی دیجیتاڵ" },
      { value: "AI", label: "لەناو بەرهەمەکاندا" },
      { value: "عێراق", label: "بازاڕی سەرەکی" },
    ],
  },
  products: {
    eyebrow: "کارە هەڵبژێردراوەکان",
    heading: "ئەو بەرهەمانەی دروستم کردوون.",
    sub: "بەرهەمی ڕاستەقینە کە لەسەر بنەمای بەکارهێنەر و بازاڕ و کێشەی ڕاستەقینە دیزاین کراون.",
    cta: "بینینی لێکۆڵینەوەی کەیس",
    akuzzle: {
      category: "بازاڕی دیجیتاڵ",
      description:
        "بازاڕێکی مۆدێرن کە تایبەت بۆ عێراق دروست کراوە، خەڵک و کاروبار پێکەوە دەبەستێتەوە لە بواری موڵک، ئۆتۆمبێل، ئەلیکترۆنیات، کار، خزمەتگوزاری و زۆر شتی تر.",
    },
    medicine: {
      category: "تەکنەلۆژیای تەندروستی",
      description:
        "پلاتفۆرمێکی تەندروستیی فرەزمان کە بەکارهێنەران و دەرمانخانەکان و کاروبارە تەندروستییەکان لە ڕێگەی دۆزینەوە و نامەگۆڕینەوە و ئامرازی زیرەکەوە پێکەوە دەبەستێتەوە.",
    },
  },
  about: {
    eyebrow: "دەربارەی من",
    heading: "بەرهەمی دیجیتاڵ دروست دەکەم کە کێشە ڕاستەقینەکان چارەسەر دەکەن.",
    p1: "من گەشەپێدەری نەرمەکاڵا و پسپۆڕی تەکنەلۆژیام، تەرکیزم لەسەر دروستکردنی بەرهەمی دیجیتاڵیی کارا، سیستەمی زیرەک و چارەسەری تەکنەلۆژییە کە لە ژیانی ڕاستەقینەدا بەکار بهێنرێن.",
    p2: "کارەکەم ئەندازیاریی نەرمەکاڵا لەگەڵ زیرەکی دەستکرد، ئاسایشی سایبەر، داتا و گۆڕانکاریی دیجیتاڵ تێکەڵ دەکات. حەزم لێیە بیرۆکەیەک لە کێشەیەکی ڕاستەقینەوە بگەیەنمە بەرهەمێکی کارا — سیستەمەکە دیزاین بکەم، نەرمەکاڵاکە دروست بکەم و بیر لەوە بکەمەوە خەڵک و کاروبار چۆن بەڕاستی بەکاری دەهێنن.",
    p3: "لە بواری گەشەپێدانی نەرمەکاڵا، سیستەمی زانیاری، پڕۆژە نێودەوڵەتییەکان و کارگێڕیی بزنسدا کارم کردووە. ئەم تێکەڵییە فێری کردم لە کۆد زیاتر ببینم و کێشە فراوانترەکە تێبگەم کە چارەسەری تەکنەلۆژی دەبێت چارەسەری بکات.",
    p4Before: "ئێستا بەتایبەت حەزم لە بوارەکانی ",
    p4Highlight: "زیرەکی دەستکرد، ئاسایشی سایبەر و گۆڕانکاریی دیجیتاڵ",
    p4After:
      " — بۆ دروستکردنی تەکنەلۆژیایەکی بەسوود و پارێزراو کە بتوانێت لە پڕۆژە یان بازاڕێکی تاک گەورەتر بێت.",
    cards: [
      {
        title: "ئەندازیاریی نەرمەکاڵا",
        text: "ئەپی وێب و مۆبایل و کاروبار",
      },
      {
        title: "زیرەکی دەستکرد",
        text: "تایبەتمەندیی زیرەکی دەستکردی کارا لەناو بەرهەمی ڕاستەقینەدا",
      },
      {
        title: "ئاسایشی سایبەر",
        text: "سیستەمی پارێزراو، دەستپێگەیشتن و پاراستنی داتا",
      },
      {
        title: "گۆڕانکاریی دیجیتاڵ",
        text: "گۆڕینی پڕۆسەی ڕاستەقینە بۆ چارەسەری دیجیتاڵ",
      },
    ],
  },
  contact: {
    eyebrow: "با قسە بکەین",
    heading: "بیرۆکە، پڕۆژە یان کێشەیەکت هەیە کە شایەنی چارەسەرکردن بێت؟",
    intro:
      "حەزم لە دروستکردنی بەرهەمی دیجیتاڵی بەسوود، سیستەمی زیرەک و چارەسەری تەکنەلۆژییە. ئەگەر پڕۆژە، هاوکاری یان بیرۆکەیەکت هەیە و دەتەوێت گفتوگۆی لەسەر بکەین، پەیوەندیم پێوە بکە.",
    emailLabel: "ئیمەیڵ",
    emailCta: "ئیمەیڵێک بنێرە",
    linkedinLabel: "LinkedIn",
    linkedinTitle: "پرۆفایلی پیشەیی",
    linkedinCta: "بینینی پرۆفایل",
  },
  form: {
    honeypot: "ئەم خانەیە بەتاڵ بەجێبهێڵە",
    name: "ناوی تۆ",
    namePlaceholder: "ناوەکەت بنووسە",
    email: "ناونیشانی ئیمەیڵ",
    emailPlaceholder: "you@example.com",
    subject: "بابەت (ئارەزوومەندانە)",
    subjectPlaceholder: "دەتەوێت باسی چی بکەین؟",
    message: "نامە",
    messagePlaceholder: "دەربارەی بیرۆکە یان پڕۆژەکەت پێم بڵێ...",
    send: "ناردنی نامە",
    sending: "دەنێردرێت...",
    successTitle: "نامەکە بە سەرکەوتوویی نێردرا",
    warningTitle: "تکایە کەمێک چاوەڕێ بکە",
    errorTitle: "نامەکە نەنێردرا",
    success:
      "سوپاس بۆ پەیوەندیکردنت! نامەکەت گەیشت و بە زووترین کات وەڵامت دەدەمەوە.",
    rateLimited:
      "لە ماوەیەکی کورتدا چەند نامەیەکت ناردووە. تکایە یەک خولەک چاوەڕێ بکە پێش ئەوەی دووبارە هەوڵ بدەیتەوە.",
    genericError: "نامەکەت نەنێردرا. تکایە دووبارە هەوڵ بدەرەوە.",
    networkError:
      "کێشەیەک ڕوویدا لە کاتی ناردنی نامەکەت. تکایە دواتر هەوڵ بدەرەوە.",
  },

  akuzzle: {
    nav: {
      overview: "پوختە",
      technology: "تەکنەلۆژیا",
      projects: "هەموو پڕۆژەکان",
      aiWorkflow: "قۆناغەکانی دروستکردنی ڕیکلام بە زیرەکی دەستکرد",
      security: "ئاسایش و متمانە",
      openMenu: "کردنەوەی مێنیوی گەڕان",
      closeMenu: "داخستنی مێنیوی گەڕان",
    },
    hero: {
      category: "بازاڕی دیجیتاڵ",
      tagline: "بازاڕێکی دیجیتاڵی گونجاو کە بۆ عێراق دروست کراوە.",
      intro:
        "پلاتفۆرمێکی مۆدێرنی بازاڕ کە خەڵک و کاروبار و کۆمەڵگەکان پێکەوە دەبەستێتەوە، بە ئەزموونێکی نەرم و بە یارمەتیی زیرەکی دەستکرد.",
      explore: "پڕۆژەکە ببینە",
      viewTechnology: "بینینی تەکنەلۆژیا",
      availableOn: "بەردەستە لە",
      web: "وێب",
      ios: "iOS",
      android: "Android",
      soon: "بەم زووانە",
      platform: "پلاتفۆرم",
      platformValue: "بازاڕی بەهێزکراو بە زیرەکی دەستکرد",
      scroll: "بۆ بینینی زیاتر خوارەوە بڕۆ",
    },
    facts: [
      { label: "بەرهەم", value: "ئەپی مۆبایل" },
      { label: "بازاڕ", value: "عێراق" },
      { label: "AI", value: "یارمەتی بۆ دروستکردنی ڕیکلام" },
      { label: "پێکهاتە", value: "پلاتفۆرمی تەواو" },
    ],
    screenshots: {
      eyebrow: "ئەزموونی بەرهەم",
      title: "بەپێی پێویستیی بەکارهێنەر دیزاین کراوە.",
      description:
        "تێڕوانینێکی نزیک لە ئەزموونی مۆبایلی Akuzzle، لە دۆزینەوەی ڕیکلامەکانەوە تا دروستکردن و بەڕێوەبردنیان.",
    },
    overview: {
      eyebrow: "پوختە",
      kicker: "توێژینەوەی کەیسی بەرهەم",
      title: "یەک پلاتفۆرم بۆ کڕین و فرۆشتن و دۆزینەوە و پەیوەندیکردن.",
      paragraphs: [
        "Akuzzle بازاڕێکی دیجیتاڵە کە تایبەت بۆ بازاڕی عێراق دروست کراوە. تاکەکان و کاروبار و کۆمەڵگەکان لە پلاتفۆرمێکی یەکگرتوودا کۆدەکاتەوە بۆ دۆزینەوە و هاوبەشکردنی جۆرە جیاوازەکانی بەرهەم و خزمەتگوزاری و دەرفەت.",
        "لەبری ئەوەی پلاتفۆرمەکە بە ژمارەیەکی دیاریکراوی پۆل سنووردار بکرێت، Akuzzle بە شێوەیەک دیزاین کراوە کە لەگەڵ گەشەکردنی بازاڕدا نەرم و گونجاو بمێنێتەوە. پۆل و جۆری ڕیکلام و بەکارهێنانی نوێ دەتوانرێت زیاد بکرێت.",
        "زیرەکی دەستکردیش لە ئەزموونی بەکارهێنەر تێکەڵ کراوە بۆ ئەوەی دروستکردنی ڕیکلام ئاسانتر بێت؛ وێنەی بەرهەم دەبێتە خاڵی دەستپێک بۆ ئامادەکردنی ڕیکلام.",
      ],
      highlights: [
        "بازاڕێکی نەرم و گونجاو",
        "ڕیکلام بە یارمەتیی AI",
        "دروستکراو بۆ عێراق",
      ],
    },
    challenge: {
      eyebrow: "کێشەکە",
      title: "بازاڕێکی دیجیتاڵی پەرتەوازە.",
      paragraphs: [
        "کڕین و فرۆشتن، دۆزینەوەی خزمەتگوزاری و دەرفەت و پەیوەندیکردن بە کاروبار دەتوانێت لە چەندین پلاتفۆرم و کەناڵی پەیوەندیدا ڕووبدات.",
        "Akuzzle دروست کرا بۆ دابینکردنی بازاڕێکی دیجیتاڵی نزیکتر لە پێویستیی بەکارهێنەرانی عێراق و کۆکردنەوەی ئەم چالاکییانە لە ئەزموونێکی ئاساندا.",
      ],
    },
    solution: {
      eyebrow: "چارەسەر",
      title: "یەک پلاتفۆرمی نەرم و گونجاو.",
      paragraphs: [
        "Akuzzle ئەزموونە جیاوازەکانی بازاڕ لە یەک شوێندا کۆدەکاتەوە و هەمان کات نەرم و گونجاو دەمێنێتەوە بۆ پشتگیریکردنی پۆل و جۆری ڕیکلام و بەکارهێنانی نوێ.",
        "ئامانج تەنها دروستکردنی ئەپێکی تری ڕیکلامی پۆلێنکراو نییە؛ بەڵکو دروستکردنی بنەمایەکە کە لەگەڵ بەکارهێنەران و کاروبار و ئابووریی دیجیتاڵی عێراق گەشە بکات.",
      ],
      coreLabel: "بیرۆکەی سەرەکی",
      coreText:
        "بازاڕەکە لەسەر بنەمای پێویستیی بەکارهێنەران دروست بکە، نەک بەکارهێنەران ناچار بکە لەگەڵ پێکهاتەیەکی جێگیر بگونجێن.",
    },
    ai: {
      eyebrow: "زیرەکی دەستکرد",
      title: "لە وێنەیەکەوە",
      titleAccent: "بۆ ڕیکلامێکی بازاڕ.",
      description:
        "Akuzzle زیرەکی دەستکرد بەکاردەهێنێت بۆ ئەوەی بەکارهێنەران بە خێرایی ڕیکلام دروست بکەن. وێنەی بەرهەم دەبێتە دەستپێک بۆ دروستکردنی زانیاریی بەسوود کە پێش بڵاوکردنەوە دەتوانرێت پێداچوونەوەی بۆ بکرێت و دەستکاری بکرێت.",
      steps: [
        { title: "وێنەگرتن", description: "وێنەی بەرهەمەکە بگرە." },
        {
          title: "شیکردنەوە",
          description: "AI وێنەکە و وردەکارییە دیارەکانی شیدەکاتەوە.",
        },
        {
          title: "دروستکردن",
          description: "زانیاریی بەسوود بۆ ڕیکلامەکە ئامادە دەکرێت.",
        },
        {
          title: "پێداچوونەوە",
          description:
            "بەکارهێنەر زانیارییەکان دەبینێتەوە و دەستکارییان دەکات.",
        },
        {
          title: "بڵاوکردنەوە",
          description: "دوای تەواوکردن دەتوانرێت ڕیکلامەکە بڵاو بکرێتەوە.",
        },
      ],
      humanLabel: "بەشداریی مرۆڤ",
      humanTitle: "AI یارمەتی دەدات؛ بەکارهێنەر کۆنترۆڵ دەکات.",
      humanDescription:
        "زانیاریی دروستکراو وەک وەڵامی کۆتایی دانانرێت. بەکارهێنەر دەتوانێت پێش بڵاوکردنەوە وردەکارییەکان بپشکنێت و بیگۆڕێت.",
      speedLabel: "دیزاین کراوە بۆ خێرایی",
      speedText: "کەمکردنەوەی هەوڵی پێویست بۆ دروستکردنی ڕیکلام.",
    },
    growth: {
      eyebrow: "ئامادە بۆ گەشە",
      title: "بازاڕێک کە لەگەڵ بەکارهێنەرانی گەشە دەکات.",
      paragraphs: [
        "Akuzzle وەک پلاتفۆرمێکی نەرم و گونجاوی بازاڕ دیزاین کراوە، نەک سیستەمێک کە بە پۆلە پێشوەختە دیاریکراوەکان سنووردار بێت.",
        "پێکهاتەکەی ڕێگە دەدات جۆری نوێی ڕیکلام و پۆل و بەکارهێنان زیاد بکرێت، لەگەڵ ئەوەی پلاتفۆرم و کۆمەڵگەکەی گەشە دەکەن.",
      ],
      capabilities: [
        {
          title: "پۆلە نەرم و گونجاوەکان",
          description:
            "پلاتفۆرمەکە دەتوانێت پۆلی جیاواز پشتگیری بکات و بەپێی پێویستیی نوێ فراوان بێت.",
        },
        {
          title: "جۆری جیاوازی ڕیکلام",
          description:
            "بازاڕەکە دەتوانێت جۆرە جیاوازەکانی بەرهەم و خزمەتگوزاری و دەرفەت لەخۆ بگرێت.",
        },
        {
          title: "پێکهاتەی فراوانبوو",
          description:
            "سیستەمەکە بۆ گەشەکردن لەگەڵ زیادبوونی پێداویستی و تایبەتمەندییە نوێکان دیزاین کراوە.",
        },
        {
          title: "سەرنجی ناوخۆیی",
          description:
            "ئەزموونەکە بەپێی بەکارهێنەران و کاروبار و بازرگانیی دیجیتاڵی عێراق دیزاین کراوە.",
        },
      ],
    },
    security: {
      eyebrow: "ئاسایش و متمانە",
      title: "متمانە بەشێکە لە بەرهەمەکە.",
      paragraphs: [
        "سەرکەوتنی بازاڕ پەیوەندی بەوەوە هەیە کە خەڵک متمانەیان بە پلاتفۆرمەکە و هەژمارەکانیان و زانیارییە هاوبەشکراوەکانیان هەبێت.",
        "پاراستنی زانیاری و مامەڵەکردنی بەرپرسانە لەگەڵ داتای بەکارهێنەران بەشێکی گرنگی ئەزموونی Akuzzle ـە.",
      ],
      principles: [
        {
          title: "ئاسایشی هەژمار",
          description:
            "هەژماری بەکارهێنەران و پشتڕاستکردنەوەی ناسنامە بە بنەمای ئەزموونی بازاڕ دادەنرێن.",
        },
        {
          title: "متمانە لەنێوان بەکارهێنەران",
          description:
            "پلاتفۆرمەکە بۆ پشتگیریکردنی پەیوەندیی متمانەپێکراوتر لەنێوان تاک و کاروبار و دامەزراوەکان دیزاین کراوە.",
        },
        {
          title: "بەڕێوەبردنی کۆنترۆڵکراو",
          description:
            "تواناکانی بەڕێوەبردن لە ئەزموونی گشتیی بازاڕ جیاکراونەتەوە.",
        },
        {
          title: "مامەڵەی بەرپرسانە لەگەڵ داتا",
          description:
            "زانیاریی بەکارهێنەران و بازاڕ بە بەشێکی گرنگی دیزاین و پەرەپێدانی پلاتفۆرم دادەنرێت.",
        },
      ],
    },
    privacy: {
      eyebrow: "تایبەتمەندی و یاسایی",
      title: "لەسەر بنەمای متمانە و ڕوونی دروست کراوە.",
      description:
        "Akuzzle سیاسەتی تایبەتمەندی و مەرجەکانی خزمەتگوزاری بڵاو دەکاتەوە بۆ ڕوونکردنەوەی چۆنیەتی مامەڵەکردن لەگەڵ زانیاریی بەکارهێنەران، شێوازی بەکارهێنانی پلاتفۆرم و بەرپرسیارییەکان.",
      policy: "سیاسەتی تایبەتمەندی",
      terms: "مەرجەکانی خزمەتگوزاری",
    },
    technology: {
      eyebrow: "تەکنەلۆژیا",
      title: "بنەمایەکی مۆدێرن بۆ پلاتفۆرمێکی گەشەسەندوو.",
      paragraphs: [
        "هەڵبژاردە تەکنیکییەکان بنەمایەکی نەرم و گونجاو بۆ بەرهەمەکە دابین دەکەن و ڕێگە بە زیادکردنی تایبەتمەندی و خزمەتگوزاریی نوێ دەدەن.",
        "ئەم تەکنەلۆژیایانە پشتگیری لە پەرەپێدانی بەرهەم دەکەن و شوێن بۆ تایبەتمەندی و خزمەتگوزاریی داهاتوو دەھێڵنەوە.",
      ],
      items: [
        {
          role: "ئەپی مۆبایل",
          description:
            "بۆ دروستکردنی ئەزموونی ئەپ لەسەر چەندین پلاتفۆرم بەکاردێت.",
        },
        {
          role: "پلاتفۆرمی ئەپ",
          description: "بنەمای پەرەپێدان بۆ ئەپی React Native دابین دەکات.",
        },
        {
          role: "بەشی پاشەوە",
          description:
            "کارکردنی لای سێرڤەر و خزمەتگوزارییەکانی ئەپ بەڕێوە دەبات.",
        },
        {
          role: "بنکەی داتا",
          description: "داتای ڕێکخراوی ئەپ و بازاڕ هەڵدەگرێت.",
        },
      ],
      flow: "ڕەوتی پلاتفۆرم",
      flowItems: ["ئەپی مۆبایل", "بەشی پاشەوە", "بنکەی داتا"],
    },
    features: {
      eyebrow: "تواناکانی سەرەکی",
      title: "دیزاین کراوە بۆ ئەزموونی بازاڕ.",
      description:
        "Akuzzle تواناکانی پێویست بۆ دروستکردن و دۆزینەوە و بەڕێوەبردنی چالاکییەکانی بازاڕ لە پلاتفۆرمێکی یەکگرتوودا کۆدەکاتەوە.",
      items: [
        {
          title: "ڕیکلامەکانی بازاڕ",
          description:
            "دروستکردن و دۆزینەوەی ڕیکلام بۆ بەرهەم و خزمەتگوزاری و دەرفەتی جیاواز.",
        },
        {
          title: "دروستکردن بە یارمەتیی AI",
          description:
            "بەکارهێنانی وێنەی بەرهەم بۆ دەستپێکردنی دروستکردنی زانیاریی ڕیکلام.",
        },
        {
          title: "گەڕان و دۆزینەوە",
          description:
            "یارمەتیدانی بەکارهێنەران بۆ دۆزینەوەی ڕیکلام و دەرفەتی گونجاو.",
        },
        {
          title: "هەژماری بەکارهێنەر",
          description: "دابینکردنی ئەزموونێکی تایبەت بۆ بەکارهێنانی پلاتفۆرم.",
        },
        {
          title: "بەشداریی کاروبار",
          description:
            "ڕێگەدان بە کاروبار و دامەزراوەکان بۆ بەشداری لەگەڵ تاکەکان.",
        },
        {
          title: "پلاتفۆرمی فراوانبوو",
          description:
            "پاراستنی نەرم و گونجاویی پلاتفۆرم بۆ زیادکردنی پۆل و جۆری ڕیکلام و بەکارهێنانی نوێ.",
        },
      ],
    },
    closing: {
      title: "دروستکردنی بازاڕێکی دیجیتاڵی پەیوەستتر بۆ عێراق.",
      back: "گەڕانەوە بۆ پۆرتفۆلیۆ",
    },
  },
  medicineFinder: {
    nav: {
      overview: "پوختە",
      howItWorks: "چۆن کار دەکات",
      discovery: "دۆزینەوەی دەرمانخانەکان",
      ai: "خوێنەری ڕەچەتە بە زیرەکی دەستکرد",
      business: "دامەزراوە تەندروستییەکان",
      pharmacy: "شوێنی کاری دەرمانخانە",
      learning: "فێربوون",
      admin: "پانێڵی بەڕێوەبردن",
      security: "ئاسایش",
      openMenu: "کردنەوەی مێنیوی گەڕان",
      closeMenu: "داخستنی مێنیوی گەڕان",
    },
    hero: {
      category: "تەکنەلۆژیای تەندروستی",
      title:
        "ڕێگایەکی زیرەکتر بۆ دۆزینەوەی دەرمان و پەیوەندیکردن بە خزمەتگوزاریی تەندروستی.",
      intro:
        "پلاتفۆرمێکی تەندروستیی فرەزمان کە خەڵک و دەرمانخانەکان و کاروبارە تەندروستییەکان لە ڕێگەی داواکاریی دەرمان، دۆزینەوەی دەرمانخانە، نامەگۆڕینەوە و ئامرازی یارمەتیدراو بە زیرەکی دەستکردەوە پێکەوە دەبەستێتەوە.",
      explore: "پلاتفۆرمەکە ببینە",
      viewFeatures: "تایبەتمەندییەکان ببینە",
      platform: "پلاتفۆرم",
      platformValue: "ژینگەیەکی تەندروستیی پەیوەست",
      availableOn: "بەردەستە لە",
      web: "وێب",
      ios: "iOS",
      android: "Android",
      scroll: "بۆ بینینی زیاتر خوارەوە بڕۆ",
    },
    overview: {
      eyebrow: "پوختە",
      title: "پەیوەستکردنی خەڵک بە دابینکەرانی خزمەتگوزاریی تەندروستی.",
      description:
        "Medicine Finder پلاتفۆرمێکی تەندروستیی فرەزمانە کە ئامانجی ئاسانکردنی دۆزینەوەی دەرمان، پەیوەندیکردن بە دەرمانخانەکان و پەیوەستکردنی کاروبارە تەندروستییەکان لە ڕێگەی ئەزموونێکی دیجیتاڵیی یەکگرتووەوەیە.",
      rolesTitle: "یەک پلاتفۆرم، چەند ڕۆڵێک",
      rolesDescription:
        "پلاتفۆرمەکە ئامرازی تایبەت بە پێی پێویستیی بەکارهێنەران، دەرمانخانەکان، دابینکەران و بەڕێوەبەران دابین دەکات.",
      roles: [
        {
          title: "بەکارهێنەران",
          description:
            "گەڕان بەدوای دەرمان، ناردنی داواکاری بۆ دەرمانخانەکان و پەیوەندیکردن بە دابینکەرانی خزمەتگوزاریی تەندروستی.",
        },
        {
          title: "دەرمانخانەکان",
          description:
            "وەرگرتنی داواکاریی دەرمان، وەڵامدانەوەی بەکارهێنەران و بەڕێوەبردنی پەیوەندییەکان.",
        },
        {
          title: "دابینکەران",
          description:
            "بەشداری لە تۆڕی دابینکردنی تەندروستی و بەڕێوەبردنی زانیاریی پەیوەندیداری کاروبار.",
        },
        {
          title: "بەڕێوەبەران",
          description:
            "بەڕێوەبردنی چالاکیی پلاتفۆرم، پشتڕاستکردنەوەی دامەزراوەکان و چاودێریکردنی ناوەڕۆک و چالاکیی بەکارهێنەران.",
        },
      ],
    },
    howItWorks: {
      eyebrow: "چۆن کار دەکات",
      title: "لە گەڕان بەدوای دەرمانەوە تا وەرگرتنی وەڵام.",
      description:
        "بەکارهێنەران دەتوانن داواکاریی دەرمان بنێرن بۆ دەرمانخانەکان یان دەرمانخانە نزیکەکان بدۆزنەوە و ڕاستەوخۆ پەیوەندییان پێوە بکەن.",
      steps: [
        {
          title: "گەڕان",
          description: "گەڕان بە ناوی دەرمان، وێنەی پاکەت یان وێنەی ڕەچەتە.",
        },
        {
          title: "ناردنی داواکاری",
          description: "ناردنی داواکاریی دەرمان بۆ دەرمانخانە بەشدارەکان.",
        },
        {
          title: "وەرگرتنی وەڵام",
          description:
            "دەرمانخانەکان دەتوانن وەڵامی داواکارییەکان بدەنەوە و پەیوەندی بە بەکارهێنەرانەوە بکەن.",
        },
        {
          title: "بەردەوامبوون لە گفتوگۆ",
          description:
            "پەیوەندیکردن لە ڕێگەی نامە، وێنە و تایبەتمەندییەکانی پەیوەندیی بەردەستەوە.",
        },
      ],
      requestTitle: "داواکارییەک کە چالاک دەمێنێتەوە",
      requestDescription:
        "تا داواکارییەکە چالاک بێت، دەتوانرێت بە شێوەیەکی خولی بنێردرێتەوە یان نوێ بکرێتەوە بۆ ئەوەی دەرمانخانە بەشدارەکان بتوانن وەڵام بدەنەوە. بەکارهێنەر دەتوانێت کاتێک پێویستی نەما داواکارییەکە بوەستێنێت.",
      stopRequest: "بەکارهێنەران دەتوانن لە هەر کاتێکدا داواکارییەکە بوەستێنن.",
    },
    discovery: {
      eyebrow: "دۆزینەوەی دەرمانخانە",
      title: "دەرمانخانە نزیکەکان بدۆزەرەوە و ڕاستەوخۆ پەیوەندییان پێوە بکە.",
      description:
        "بەکارهێنەران دەتوانن دەرمانخانەکانی دەوروبەریان بدۆزنەوە و ڕاستەوخۆ پەیوەندی بە دەرمانخانەیەکی دیاریکراوەوە بکەن، لەبری ناردنی داواکاری بۆ چەند دەرمانخانەیەک.",
      searchTitle: "بەو شێوەیە بگەڕێ کە بۆت گونجاوە",
      searchDescription:
        "دەرمانخانەکان بدۆزەرەوە و بۆ پرسیارکردن دەربارەی دەرمان، هەڵبژاردەکانی پەیوەندی بەکاربهێنە.",
      features: [
        {
          title: "دەرمانخانە نزیکەکان",
          description: "دۆزینەوەی دەرمانخانەکان بەپێی شوێن.",
        },
        {
          title: "پەیوەندیی ڕاستەوخۆ",
          description: "ڕاستەوخۆ پەیوەندی بە دەرمانخانەی هەڵبژێردراوەوە بکە.",
        },
        {
          title: "نامەگۆڕینەوە",
          description:
            "گفتوگۆکە لە ڕێگەی تایبەتمەندییەکانی پەیوەندیی پشتگیریکراوەوە بەردەوام بکە.",
        },
      ],
    },
    ai: {
      eyebrow: "زیرەکی دەستکرد",
      title: "یارمەتیی زیرەک بۆ خوێندنەوەی وێنەی ڕەچەتە.",
      description:
        "خوێنەری ڕەچەتەی یارمەتیدراو بە زیرەکی دەستکرد یارمەتیی دەرمانسازان دەدات زانیاریی دیار لە وێنەی ڕەچەتەکان تێبگەن و لە کاری ڕۆژانەیاندا بەکاری بهێنن.",
      steps: [
        {
          title: "بارکردنی وێنە",
          description: "وێنەی ڕەچەتەکە دابنێ بۆ وەرگرتنی یارمەتی.",
        },
        {
          title: "خوێندنەوە بە یارمەتیی AI",
          description:
            "زیرەکی دەستکرد یارمەتی دەدات زانیاریی دیار لە وێنەکەدا بناسرێتەوە.",
        },
        {
          title: "پێداچوونەوەی پسپۆڕ",
          description:
            "دەرمانساز پێش بەکارهێنانی زانیارییە دەرکراوەکان پێداچوونەوەیان بۆ دەکات.",
        },
      ],
      noteTitle: "دروستکراوە بۆ یارمەتیدانی پسپۆڕان",
      noteDescription:
        "پێویستە دەرمانسازێکی شایستە ئەنجامەکانی زیرەکی دەستکرد بپشکنێت. ئەم تایبەتمەندییە پشتگیری لە کاری پیشەیی دەکات و جێگەی بڕیاری کلینیکی ناگرێتەوە.",
    },
    business: {
      eyebrow: "دامەزراوە تەندروستییەکان",
      title: "ئامراز بۆ دەرمانخانە و کۆمپانیا تەندروستییەکان.",
      description:
        "Medicine Finder پشتگیری لە جۆرە جیاوازەکانی دامەزراوە تەندروستییەکان دەکات، لەگەڵ پرۆسەی تۆمارکردن و پشتڕاستکردنەوە بۆ پاراستنی پلاتفۆرم و بەکارهێنەرانی.",
      features: [
        {
          title: "تۆمارکردنی دامەزراوە",
          description:
            "دامەزراوە تەندروستییەکان دەتوانن تۆمار ببن و زانیاریی پەیوەندیدار پێشکەش بکەن.",
        },
        {
          title: "پشتڕاستکردنەوە",
          description:
            "وردەکاریی دامەزراوەکان دەتوانرێت بپشکنرێت بۆ پشتگیریکردنی متمانە و بەرپرسیاری.",
        },
        {
          title: "بەشداریی کاروبار",
          description:
            "دامەزراوە پشتڕاستکراوەکان دەتوانن بەشداری لە ژینگەی تەندروستیی پەیوەستدا بکەن.",
        },
      ],
    },
    pharmacy: {
      eyebrow: "شوێنی کاری دەرمانخانە",
      title: "شوێنێکی تایبەت بۆ بەڕێوەبردنی کاری دەرمانخانە.",
      description:
        "دەرمانخانەکان دەتوانن داواکاریی دەرمان وەربگرن، وەڵامی بەکارهێنەران بدەنەوە و گفتوگۆکان لە ڕێگەی ئامرازی پەیوەندیی پلاتفۆرمەکەوە بەردەوام بکەن.",
      features: [
        {
          title: "بەڕێوەبردنی داواکاری",
          description:
            "پێداچوونەوە بە داواکارییە هاتووەکان و وەڵامدانەوەیان لە کاتی گونجاودا.",
        },
        {
          title: "وەڵامی خێرا",
          description:
            "بەکارهێنانی هەڵبژاردەی وەڵامی ئاسان کاتێک دەرمانەکە بەردەستە.",
        },
        {
          title: "نامە و پەیوەندی",
          description:
            "پەیوەندیکردن بە بەکارهێنەران لە ڕێگەی نامەی نووسراو، وێنە و تایبەتمەندییەکانی پەیوەندیی پشتگیریکراوەوە.",
        },
        {
          title: "زانیاریی دەرمانخانە",
          description:
            "بەڕێوەبردنی زانیاریی پەیوەندیداری دەرمانخانە لە ڕێگەی ئامرازی بەردەستی پلاتفۆرمەکەوە.",
        },
      ],
    },
    learning: {
      eyebrow: "فێربوون و پەروەردە",
      title: "زانیاریی تەندروستی زیاتر لە گەڕان بەدوای دەرمان.",
      description:
        "پلاتفۆرمەکە تایبەتمەندیی فێربوون لەخۆ دەگرێت کە دەستگەیشتن بە ناوەڕۆک و چالاکیی فێرکاری ئاسان دەکات.",
      features: [
        {
          title: "کۆرسەکان",
          description: "بینینی کۆرسە فێرکارییە بەردەستەکان.",
        },
        {
          title: "تۆمارکردنی کۆرس",
          description:
            "تۆماربوون بۆ کۆرسە پشتگیریکراوەکان لە ڕێگەی پلاتفۆرمەکەوە.",
        },
        {
          title: "تاقیکردنەوەکان",
          description:
            "بەکارهێنانی تاقیکردنەوە بۆ کارلێککردن لەگەڵ بابەتە فێرکارییەکان.",
        },
        {
          title: "وتار و سەرچاوەکان",
          description: "دەستگەیشتن بە ناوەڕۆک و سەرچاوە فێرکارییە بەردەستەکان.",
        },
      ],
    },
    admin: {
      eyebrow: "بەڕێوەبردن",
      title: "کۆنترۆڵی ناوەندی بۆ پلاتفۆرمەکە.",
      description:
        "پانێڵی بەڕێوەبردن ئامراز دابین دەکات بۆ چاودێریکردنی ناوەڕۆک، بەکارهێنەران، دامەزراوە تەندروستییەکان و چالاکیی کارگێڕی.",
      features: [
        {
          title: "بەڕێوەبردنی بەکارهێنەر",
          description:
            "پێداچوونەوە بە زانیاریی پەیوەندیدار بە بەکارهێنەران و بەڕێوەبردنی.",
        },
        {
          title: "پشتڕاستکردنەوەی دامەزراوە",
          description:
            "پشکنینی دەرمانخانەکان، دابینکەران و دامەزراوە تەندروستییەکانی تر.",
        },
        {
          title: "بەڕێوەبردنی ناوەڕۆک",
          description:
            "بەڕێوەبردنی کۆرس، وتار، تاقیکردنەوە و ناوەڕۆکی تری پلاتفۆرم.",
        },
        {
          title: "وەرگێڕانەکان",
          description:
            "بەڕێوەبردنی ناوەڕۆکی فرەزمان لە زمانە پشتگیریکراوەکاندا.",
        },
        {
          title: "شیکاری",
          description:
            "پێداچوونەوە بە زانیاریی بەردەست دەربارەی چالاکی و کارایی پلاتفۆرم.",
        },
      ],
    },
    security: {
      eyebrow: "ئاسایش و تایبەتمەندی",
      title: "پاراستنی هەژمار و زانیاریی هەستیار.",
      description:
        "پلاتفۆرمە تەندروستییەکان مامەڵە لەگەڵ زانیاری دەکەن کە پێویستی بە پاراستنی تایبەت هەیە. Medicine Finder ڕێکاری ئاگادار لە ئاسایش لە هەژمار، پەیوەندی و پشتڕاستکردنەوەی دامەزراوە تەندروستییەکاندا بەکار دەهێنێت.",
      principles: [
        {
          title: "پاراستنی هەژمار",
          description:
            "پاراستنی هەژماری بەکارهێنەران و زانیاریی پەیوەندیدار بە پشتڕاستکردنەوەی ناسنامە.",
        },
        {
          title: "پشتڕاستکردنەوەی دامەزراوە",
          description:
            "پشکنینی دامەزراوە تەندروستییەکان بۆ زیادکردنی متمانە و کەمکردنەوەی بەکارهێنانی نادروست.",
        },
        {
          title: "بەڕێوەبردنی کۆنترۆڵکراو",
          description:
            "دابینکردنی ئامرازی بەڕێوەبردنی تایبەت بۆ بەڕێوەبردنی چالاکیی پلاتفۆرم.",
        },
        {
          title: "مامەڵەی بەرپرسانە لەگەڵ داتا",
          description:
            "مامەڵەکردن بە وریاییەوە لەگەڵ زانیاریی کەسی و هەستیار لە هەموو قۆناغەکانی بەکارهێنانی پلاتفۆرم.",
        },
      ],
      disclaimer:
        "Medicine Finder یارمەتی دۆزینەوەی دەرمان و پەیوەندیکردن دەدات. بەکارهێنەران دەبێت بەردەستبوون، گونجاوی دەرمان و بڕیارەکانی چارەسەرکردن لەگەڵ پسپۆڕێکی شایستەی تەندروستی پشتڕاست بکەنەوە.",
    },
    technology: {
      eyebrow: "تەکنەلۆژیا",
      title: "پلاتفۆرمێکی تەندروستیی پەیوەست و فرەزمان.",
      description:
        "پلاتفۆرمەکە ئەزموونی مۆبایل و وێب، خزمەتگوزارییەکانی پشتەوە، تایبەتمەندییەکانی پەیوەندی و ئامرازی یارمەتیدراو بە زیرەکی دەستکرد پێکەوە دەبەستێتەوە بۆ پشتگیریکردنی کارە تەندروستییەکان.",
      items: [
        {
          title: "ئەپی مۆبایل",
          description:
            "ئەزموونێکی مۆبایل بۆ بەکارهێنەران و دابینکەرانی خزمەتگوزاریی تەندروستی.",
        },
        {
          title: "پلاتفۆرمی وێب",
          description:
            "دەستگەیشتن بە خزمەتگوزاری و ئامرازەکانی پلاتفۆرم لە ڕێگەی وێبەوە.",
        },
        {
          title: "خزمەتگوزارییەکانی پشتەوە",
          description: "پشتگیریکردن لە لۆجیکی ئەپ، داواکاری و پەیوەندی.",
        },
        {
          title: "پانێڵی بەڕێوەبردن",
          description:
            "ئامراز بۆ بەڕێوەبردنی بەکارهێنەران، دامەزراوەکان، ناوەڕۆک و چالاکیی پلاتفۆرم.",
        },
        {
          title: "تایبەتمەندییەکانی زیرەکی دەستکرد",
          description:
            "پشتگیریکردنی کاری دیاریکراو، وەک خوێندنەوەی وێنەی ڕەچەتە.",
        },
      ],
    },
    closing: {
      title: "ئاسانترکردنی دۆزینەوەی دەرمان و پەیوەندیی تەندروستی.",
      description:
        "Medicine Finder بەکارهێنەران و دەرمانخانەکان و کاروبارە تەندروستییەکان لە ئەزموونێکی دیجیتاڵیی پەیوەستدا کۆدەکاتەوە.",
      back: "گەڕانەوە بۆ پۆرتفۆلیۆ",
      explore: "پلاتفۆرمەکە ببینە",
    },
  },
};

export const translations: Record<Language, Copy> = { en, ar, ku };
