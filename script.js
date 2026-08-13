/* =========================================================
   Portfolio – Mohammad Al Hallak
   Vanilla JavaScript. Keine Abhängigkeiten.

   Funktionen:
   - Sprachumschaltung DE | EN (mit localStorage)
   - Mobile Navigation (Burger-Menü)
   - Dezente Scroll-Animationen (IntersectionObserver)
   - Automatisches Jahr im Footer
========================================================== */

(function () {
  "use strict";

  /* -------------------------------------------------------
     1. ÜBERSETZUNGEN
     Schlüssel entsprechen den data-i18n-Attributen im HTML.
  -------------------------------------------------------- */
  const translations = {
    de: {
      skip_link: "Zum Inhalt springen",

      nav_start: "Start",
      nav_about: "Über mich",
      nav_experience: "Erfahrung",
      nav_projects: "Projekte",
      nav_tech: "Technologien",
      nav_contact: "Kontakt",

      hero_eyebrow: "B.Sc. Informatik · M.Sc.-Student Internet-Sicherheit",
      hero_title: "Hallo, ich bin Mohammad Al Hallak.",
      hero_subtitle: "Software Testing, Full-Stack-Entwicklung, Datenanalyse sowie Security-nahe Softwarelösungen.",
      hero_text: "Ich verbinde Kenntnisse in Software Testing und Qualitätssicherung mit mehrjähriger praktischer Erfahrung in Datenanalyse, Full-Stack-Entwicklung und IT-Sicherheit. Mein Schwerpunkt liegt auf strukturierten, datengetriebenen und technisch nachvollziehbaren Softwarelösungen.",
      hero_role_testing: "Software Tester",
      hero_btn_projects: "Projekte ansehen",
      hero_btn_contact: "Kontakt",

      about_kicker: "Profil",
      about_title: "Über mich",
      about_p1: "Ich habe meinen Bachelor of Science in Informatik an der Westfälischen Hochschule abgeschlossen und studiere aktuell im Masterstudiengang Internet-Sicherheit.",
      about_p2: "Meine praktischen Schwerpunkte liegen in Software Testing und Qualitätssicherung, Full-Stack-Entwicklung, Datenanalyse, technischer Automatisierung und Security-naher Softwareentwicklung.",
      about_p3: "Als Werkstudent bei Adecco habe ich mehrjährige Erfahrung in KPI-Analysen, Reporting, Data Quality Management und der Automatisierung wiederkehrender Auswertungen gesammelt.",
      about_p4: "Zusätzlich habe ich Projekterfahrung mit Java, Spring Boot, Python, FastAPI, PostgreSQL, REST APIs, JavaScript, Tailwind CSS, Docker sowie SQL- und NoSQL-Datenbanken.",
      stat_bsc: "Informatik",
      stat_msc: "Internet-Sicherheit",
      stat_data: "Jahre Data-Erfahrung",
      stat_projects: "ausgewählte Projekte",
      languages_title: "Sprachen",
      language_arabic: "Arabisch",
      language_arabic_level: "Muttersprache",
      language_german: "Deutsch",
      language_english: "Englisch",
      work_style_title: "Arbeitsweise",
      work_style_1: "Systematische Analyse von Anforderungen und Fehlerbildern",
      work_style_2: "Strukturierte Dokumentation technischer Ergebnisse",
      work_style_3: "Qualitätsorientiertes und zuverlässiges Arbeiten",
      work_style_4: "Schnelle Einarbeitung in neue Tools und Testmethoden",

      exp_kicker: "Werdegang",
      exp_title: "Erfahrung",
      exp_i_date: "August 2026 – voraussichtlich Ende September 2026",
      exp_i_role: "ISTQB® Certified Tester Foundation Level (CTFL) – Zertifizierungsvorbereitung",
      exp_i_org: "International Software Testing Qualifications Board (ISTQB®)",
      exp_i_1: "Vorbereitung auf Basis des ISTQB®-CTFL-4.0-Lehrplans",
      exp_i_2: "Testprozess, Teststufen und Testarten",
      exp_i_3: "Black-Box-, White-Box- und erfahrungsbasierte Testverfahren",
      exp_i_4: "Testplanung, Fehlermanagement und Werkzeugunterstützung",
      exp_m_date: "Seit März 2026",
      exp_m_role: "M.Sc. Internet-Sicherheit",
      exp_m_org: "Westfälische Hochschule",
      exp_m_1: "Software Testing",
      exp_m_2: "Qualitätssicherung",
      exp_m_3: "Cybersecurity",
      exp_m_4: "Sichere Softwareentwicklung",
      exp_m_5: "Datenschutz",
      exp_a_date: "März 2026 – Mai 2026",
      exp_a_role: "Bachelorarbeit – Datenbasierte IT-Sicherheitsnomenklatur & Knowledge Graphs",
      exp_a_org: "Institut für Internet-Sicherheit – if(is)",
      exp_a_1: "Analyse und Bewertung von 723 IT-Sicherheitsbegriffen",
      exp_a_2: "Auswahl von 470 Kernbegriffen in 18 Kategorien",
      exp_a_3: "Entwicklung eines gewichteten Bewertungsmodells",
      exp_a_4: "Strukturierung von Begriffen, Kategorien, Synonymen und Beziehungen",
      exp_a_5: "Entwicklung interaktiver Knowledge-Graph- und Beziehungsgraph-Prototypen",
      exp_a_6: "Entwicklung eines Empfehlungsassistenten und eines Umfrage-Tools",
      exp_a_7: "Durchführung und Auswertung einer Umfrage mit 103 Teilnehmenden",

      exp_b_date: "Mai 2025 – Februar 2026",
      exp_b_role: "Full-Stack-Entwicklung – Nachbar365",
      exp_b_org: "Westfälische Hochschule",
      exp_b_1: "Full-Stack-Webanwendung in einem achtköpfigen Projektteam",
      exp_b_2: "Backend mit Java, Spring Boot, PostgreSQL und REST APIs",
      exp_b_3: "Frontend mit JavaScript, HTML, CSS und Tailwind CSS",
      exp_b_4: "JWT-Authentifizierung",
      exp_b_5: "Zwei-Faktor-Authentifizierung",
      exp_b_6: "Rollenbasierte Zugriffskontrolle",
      exp_b_7: "Softwaretests und Git-basierte Zusammenarbeit",

      exp_c_date: "Juni 2023 – Dezember 2025",
      exp_c_role: "Werkstudent – Datenanalyse & Reporting",
      exp_c_org: "Adecco",
      exp_c_1: "KPI- und Performance-Analysen",
      exp_c_2: "Reports für Management und Kunden",
      exp_c_3: "Excel und Tableau",
      exp_c_4: "Data Quality Management",
      exp_c_5: "Ad-hoc-Analysen",
      exp_c_6: "Automatisierung wiederkehrender Aufgaben mit VBA und Makros",

      exp_d_date: "August 2025 – November 2025",
      exp_d_role: "Praxisphase – IT-Sicherheit und Datenanalyse",
      exp_d_org: "Institut für Internet-Sicherheit – if(is)",
      exp_d_1: "Entwicklung eines Python-Skripts zur automatisierten Datenerfassung",
      exp_d_2: "Nutzung der GitHub REST API",
      exp_d_3: "Analyse und Klassifikation von Repository-Tags mit Regex",
      exp_d_4: "Bereinigung, Strukturierung und Auswertung der Daten",

      proj_kicker: "Auswahl",
      proj_title: "Projekte",
      proj_featured: "Featured Project",
      proj_horo_badge: "Live in Produktion",
      proj_horo_date: "Juli 2026 – August 2026",
      proj_horo_desc: "Konzeption, Full-Stack-Entwicklung und produktiver Betrieb einer Online-Terminplattform für eine Kfz-Werkstatt in Voerde. Kunden buchen verfügbare Leistungen und Zeitfenster und verwalten Termine über sichere Links; Kalender-, E-Mail- und Verwaltungsprozesse sind automatisiert integriert.",
      proj_horo_link: "Live-Website",
      proj_1_desc: "KI-gestützte Anwendung zur Recherche und Analyse wissenschaftlicher Publikationen. Die Anwendung unterstützt Live-arXiv-Suche, PDF-RAG, OCR, semantisches Dokumenten-Retrieval sowie belegbare Antworten mit Quellenangaben.",
      proj_2_desc: "Full-Stack-Webanwendung für digitale Nachbarschaftshilfe, entwickelt in einem achtköpfigen Hochschulteam. Mitarbeit an Backend, Frontend, Datenbankintegration, Authentifizierung, REST-Kommunikation und Softwaretests.",
      proj_3_desc: "Python-Anwendung zur automatisierten Erfassung, Analyse und Klassifikation von GitHub-Tags und Releases im Rahmen eines Forschungsprojekts am Institut für Internet-Sicherheit.",
      proj_4_desc: "Datenbasierte Analyse von 723 IT-Sicherheitsbegriffen, Auswahl von 470 Kernbegriffen in 18 Kategorien und Entwicklung interaktiver Knowledge-Graph- und Beziehungsgraph-Prototypen.",
      proj_4_label: "Case Study / Bachelorarbeit",
      tag_data_analysis: "Datenanalyse",
      tag_data_modeling: "Datenmodellierung",
      tag_data_viz: "Datenvisualisierung",

      tech_kicker: "Werkzeuge",
      tech_title: "Technologien",
      tech_backend: "Backend",
      tech_databases: "Datenbanken",
      tech_frontend: "Frontend",
      tech_data_ai: "Data & AI",
      tech_tools: "Testing & Tools",
      chip_data_analysis: "Data Analysis",
      chip_software_testing: "Software Testing",
      chip_test_design: "Test Design",
      chip_quality_assurance: "Qualitätssicherung",

      contact_kicker: "Kontakt",
      contact_title: "Lassen Sie uns vernetzen.",
      contact_lead: "Ich interessiere mich für Positionen und Projekte in den Bereichen Software Testing und Qualitätssicherung, Full-Stack-Entwicklung, Datenanalyse, Data Automation sowie Security-nahe Softwareentwicklung.",
      contact_email: "E-Mail",
      contact_location: "Standort",

      footer_privacy: "Diese Website verwendet keine Tracking- oder Analyse-Cookies."
    },

    en: {
      skip_link: "Skip to content",

      nav_start: "Home",
      nav_about: "About",
      nav_experience: "Experience",
      nav_projects: "Projects",
      nav_tech: "Technologies",
      nav_contact: "Contact",

      hero_eyebrow: "B.Sc. Computer Science · M.Sc. Student Internet Security",
      hero_title: "Hi, I'm Mohammad Al Hallak.",
      hero_subtitle: "Software testing, full-stack development, data analysis and security-oriented software solutions.",
      hero_text: "I combine knowledge of software testing and quality assurance with several years of hands-on experience in data analysis, full-stack development and IT security. My focus is on structured, data-driven and technically transparent software solutions.",
      hero_role_testing: "Software Tester",
      hero_btn_projects: "View projects",
      hero_btn_contact: "Contact",

      about_kicker: "Profile",
      about_title: "About me",
      about_p1: "I completed my Bachelor of Science in Computer Science at Westphalian University of Applied Sciences and am currently studying in the Internet Security master's programme.",
      about_p2: "My practical focus lies in software testing and quality assurance, full-stack development, data analysis, technical automation and security-oriented software development.",
      about_p3: "As a working student at Adecco, I gained several years of experience in KPI analysis, reporting, data quality management and the automation of recurring evaluations.",
      about_p4: "I also have project experience with Java, Spring Boot, Python, FastAPI, PostgreSQL, REST APIs, JavaScript, Tailwind CSS, Docker as well as SQL and NoSQL databases.",
      stat_bsc: "Computer Science",
      stat_msc: "Internet Security",
      stat_data: "years of data experience",
      stat_projects: "selected projects",
      languages_title: "Languages",
      language_arabic: "Arabic",
      language_arabic_level: "Native speaker",
      language_german: "German",
      language_english: "English",
      work_style_title: "Working style",
      work_style_1: "Systematic analysis of requirements and error patterns",
      work_style_2: "Structured documentation of technical results",
      work_style_3: "Quality-focused and reliable work",
      work_style_4: "Quick familiarisation with new tools and testing methods",

      exp_kicker: "Career",
      exp_title: "Experience",
      exp_i_date: "August 2026 – expected end of September 2026",
      exp_i_role: "ISTQB® Certified Tester Foundation Level (CTFL) – Certification Preparation",
      exp_i_org: "International Software Testing Qualifications Board (ISTQB®)",
      exp_i_1: "Preparation based on the ISTQB® CTFL 4.0 syllabus",
      exp_i_2: "Test process, test levels and test types",
      exp_i_3: "Black-box, white-box and experience-based test techniques",
      exp_i_4: "Test planning, defect management and tool support",
      exp_m_date: "Since March 2026",
      exp_m_role: "M.Sc. Internet Security",
      exp_m_org: "Westphalian University of Applied Sciences",
      exp_m_1: "Software Testing",
      exp_m_2: "Quality Assurance",
      exp_m_3: "Cybersecurity",
      exp_m_4: "Secure Software Development",
      exp_m_5: "Data Protection",
      exp_a_date: "March 2026 – May 2026",
      exp_a_role: "Bachelor's Thesis – Data-Driven IT Security Nomenclature & Knowledge Graphs",
      exp_a_org: "Institute for Internet Security – if(is)",
      exp_a_1: "Analysis and evaluation of 723 IT security terms",
      exp_a_2: "Selection of 470 core terms across 18 categories",
      exp_a_3: "Development of a weighted scoring model",
      exp_a_4: "Structuring of terms, categories, synonyms and relationships",
      exp_a_5: "Development of interactive knowledge-graph and relationship-graph prototypes",
      exp_a_6: "Development of a recommendation assistant and a survey tool",
      exp_a_7: "Conducting and evaluating a survey with 103 participants",

      exp_b_date: "May 2025 – February 2026",
      exp_b_role: "Full-Stack Development – Nachbar365",
      exp_b_org: "Westphalian University of Applied Sciences",
      exp_b_1: "Full-stack web application in an eight-person project team",
      exp_b_2: "Backend with Java, Spring Boot, PostgreSQL and REST APIs",
      exp_b_3: "Frontend with JavaScript, HTML, CSS and Tailwind CSS",
      exp_b_4: "JWT authentication",
      exp_b_5: "Two-factor authentication",
      exp_b_6: "Role-based access control",
      exp_b_7: "Software testing and Git-based collaboration",

      exp_c_date: "June 2023 – December 2025",
      exp_c_role: "Working Student – Data Analysis & Reporting",
      exp_c_org: "Adecco",
      exp_c_1: "KPI and performance analysis",
      exp_c_2: "Reports for management and clients",
      exp_c_3: "Excel and Tableau",
      exp_c_4: "Data quality management",
      exp_c_5: "Ad-hoc analyses",
      exp_c_6: "Automation of recurring tasks with VBA and macros",

      exp_d_date: "August 2025 – November 2025",
      exp_d_role: "Internship – IT Security and Data Analysis",
      exp_d_org: "Institute for Internet Security – if(is)",
      exp_d_1: "Development of a Python script for automated data collection",
      exp_d_2: "Use of the GitHub REST API",
      exp_d_3: "Analysis and classification of repository tags with regex",
      exp_d_4: "Cleaning, structuring and evaluating the data",

      proj_kicker: "Selection",
      proj_title: "Projects",
      proj_featured: "Featured Project",
      proj_horo_badge: "Live in production",
      proj_horo_date: "July 2026 – August 2026",
      proj_horo_desc: "Designed, developed and deployed a production-ready online booking platform for an automotive workshop in Voerde. Customers can book available services and time slots and manage appointments through secure links, with automated calendar, email and workshop administration workflows.",
      proj_horo_link: "Live website",
      proj_1_desc: "AI-powered application for researching and analysing scientific publications. It supports live arXiv search, PDF-RAG, OCR, semantic document retrieval and verifiable answers with source references.",
      proj_2_desc: "Full-stack web application for digital neighbourhood assistance, developed in an eight-person university team. Contributed to backend, frontend, database integration, authentication, REST communication and software testing.",
      proj_3_desc: "Python application for the automated collection, analysis and classification of GitHub tags and releases as part of a research project at the Institute for Internet Security.",
      proj_4_desc: "Data-driven analysis of 723 IT security terms, selection of 470 core terms across 18 categories and development of interactive knowledge-graph and relationship-graph prototypes.",
      proj_4_label: "Case Study / Bachelor's Thesis",
      tag_data_analysis: "Data Analysis",
      tag_data_modeling: "Data Modeling",
      tag_data_viz: "Data Visualization",

      tech_kicker: "Toolset",
      tech_title: "Technologies",
      tech_backend: "Backend",
      tech_databases: "Databases",
      tech_frontend: "Frontend",
      tech_data_ai: "Data & AI",
      tech_tools: "Testing & Tools",
      chip_data_analysis: "Data Analysis",
      chip_software_testing: "Software Testing",
      chip_test_design: "Test Design",
      chip_quality_assurance: "Quality Assurance",

      contact_kicker: "Contact",
      contact_title: "Let's connect.",
      contact_lead: "I am interested in positions and projects in software testing and quality assurance, full-stack development, data analysis, data automation and security-oriented software development.",
      contact_email: "Email",
      contact_location: "Location",

      footer_privacy: "This website does not use any tracking or analytics cookies."
    },

    ar: {
      skip_link: "تخطَّ إلى المحتوى",

      nav_start: "الرئيسية",
      nav_about: "نبذة عني",
      nav_experience: "الخبرة",
      nav_projects: "المشاريع",
      nav_tech: "التقنيات",
      nav_contact: "التواصل",

      hero_eyebrow: "بكالوريوس علوم الحاسوب · طالب ماجستير في أمن الإنترنت",
      hero_title: "مرحبًا، أنا محمد الحلاق.",
      hero_subtitle: "اختبار البرمجيات وضمان الجودة، وتطوير الأنظمة المتكاملة (Full-Stack)، وتحليل البيانات، وحلول برمجية موجّهة نحو الأمن.",
      hero_text: "أجمع بين معارفي في اختبار البرمجيات وضمان الجودة وسنوات من الخبرة العملية في تحليل البيانات وتطوير الأنظمة المتكاملة وأمن المعلومات. ينصبّ تركيزي على حلول برمجية منظَّمة ومبنية على البيانات وقابلة للتتبّع تقنيًا.",
      hero_role_testing: "مختبر برمجيات",
      hero_btn_projects: "عرض المشاريع",
      hero_btn_contact: "تواصل",

      about_kicker: "الملف الشخصي",
      about_title: "نبذة عني",
      about_p1: "أنهيتُ درجة البكالوريوس في علوم الحاسوب في جامعة فيستفاليا للعلوم التطبيقية، وأدرس حاليًا في برنامج الماجستير في أمن الإنترنت.",
      about_p2: "تتركّز مجالاتي العملية في اختبار البرمجيات وضمان الجودة، وتطوير الأنظمة المتكاملة، وتحليل البيانات، والأتمتة التقنية، وتطوير البرمجيات الموجّهة نحو الأمن.",
      about_p3: "بصفتي طالبًا عاملاً في شركة Adecco، اكتسبتُ خبرة لعدة سنوات في تحليل مؤشرات الأداء، وإعداد التقارير، وإدارة جودة البيانات، وأتمتة التحليلات المتكرّرة.",
      about_p4: "كما أمتلك خبرة في مشاريع باستخدام Java وSpring Boot وPython وFastAPI وPostgreSQL وREST APIs وJavaScript وTailwind CSS وDocker، إضافةً إلى قواعد بيانات SQL وNoSQL.",
      stat_bsc: "علوم الحاسوب",
      stat_msc: "أمن الإنترنت",
      stat_data: "سنوات خبرة في البيانات",
      stat_projects: "مشاريع مختارة",
      languages_title: "اللغات",
      language_arabic: "العربية",
      language_arabic_level: "اللغة الأم",
      language_german: "الألمانية",
      language_english: "الإنجليزية",
      work_style_title: "أسلوب العمل",
      work_style_1: "تحليل منهجي للمتطلبات وأنماط الأخطاء",
      work_style_2: "توثيق منظّم للنتائج التقنية",
      work_style_3: "عمل موثوق يركّز على الجودة",
      work_style_4: "سرعة التعرّف على الأدوات وأساليب الاختبار الجديدة",

      exp_kicker: "المسيرة",
      exp_title: "الخبرة",
      exp_i_date: "أغسطس 2026 – حتى نهاية سبتمبر 2026 تقريبًا",
      exp_i_role: "التحضير لشهادة ISTQB® Certified Tester Foundation Level (CTFL)",
      exp_i_org: "المجلس الدولي لمؤهلات اختبار البرمجيات (ISTQB®)",
      exp_i_1: "التحضير وفق منهج ISTQB® CTFL 4.0",
      exp_i_2: "عملية الاختبار ومستويات الاختبار وأنواعه",
      exp_i_3: "تقنيات اختبار الصندوق الأسود والصندوق الأبيض والتقنيات القائمة على الخبرة",
      exp_i_4: "تخطيط الاختبارات وإدارة العيوب ودعم الأدوات",
      exp_m_date: "منذ مارس 2026",
      exp_m_role: "ماجستير أمن الإنترنت",
      exp_m_org: "جامعة فيستفاليا للعلوم التطبيقية",
      exp_m_1: "اختبار البرمجيات",
      exp_m_2: "ضمان الجودة",
      exp_m_3: "الأمن السيبراني",
      exp_m_4: "تطوير البرمجيات الآمن",
      exp_m_5: "حماية البيانات",
      exp_a_date: "مارس 2026 – مايو 2026",
      exp_a_role: "مشروع التخرج – مصطلحات أمن المعلومات المبنية على البيانات والرسوم المعرفية",
      exp_a_org: "معهد أمن الإنترنت – if(is)",
      exp_a_1: "تحليل وتقييم 723 مصطلحًا في أمن المعلومات",
      exp_a_2: "اختيار 470 مصطلحًا أساسيًا ضمن 18 فئة",
      exp_a_3: "تطوير نموذج تقييم مُرجَّح",
      exp_a_4: "هيكلة المصطلحات والفئات والمرادفات والعلاقات",
      exp_a_5: "تطوير نماذج أولية تفاعلية للرسوم المعرفية ورسوم العلاقات",
      exp_a_6: "تطوير مساعد للتوصيات وأداة استبيان",
      exp_a_7: "تنفيذ وتحليل استبيان شارك فيه 103 أشخاص",

      exp_b_date: "مايو 2025 – فبراير 2026",
      exp_b_role: "تطوير Full-Stack – Nachbar365",
      exp_b_org: "جامعة فيستفاليا للعلوم التطبيقية",
      exp_b_1: "تطبيق ويب متكامل ضمن فريق مشروع من ثمانية أشخاص",
      exp_b_2: "الواجهة الخلفية باستخدام Java وSpring Boot وPostgreSQL وREST APIs",
      exp_b_3: "الواجهة الأمامية باستخدام JavaScript وHTML وCSS وTailwind CSS",
      exp_b_4: "مصادقة JWT",
      exp_b_5: "المصادقة الثنائية",
      exp_b_6: "التحكم في الوصول المبني على الأدوار",
      exp_b_7: "اختبارات البرمجيات والعمل التعاوني عبر Git",

      exp_c_date: "يونيو 2023 – ديسمبر 2025",
      exp_c_role: "طالب عامل – تحليل البيانات وإعداد التقارير",
      exp_c_org: "Adecco",
      exp_c_1: "تحليل مؤشرات الأداء والأداء العام",
      exp_c_2: "تقارير للإدارة والعملاء",
      exp_c_3: "Excel وTableau",
      exp_c_4: "إدارة جودة البيانات",
      exp_c_5: "تحليلات فورية عند الطلب",
      exp_c_6: "أتمتة المهام المتكرّرة باستخدام VBA والماكرو",

      exp_d_date: "أغسطس 2025 – نوفمبر 2025",
      exp_d_role: "فترة تدريب عملي – أمن المعلومات وتحليل البيانات",
      exp_d_org: "معهد أمن الإنترنت – if(is)",
      exp_d_1: "تطوير سكربت Python لجمع البيانات آليًا",
      exp_d_2: "استخدام واجهة GitHub REST API",
      exp_d_3: "تحليل وتصنيف وسوم المستودعات باستخدام Regex",
      exp_d_4: "تنظيف البيانات وهيكلتها وتحليلها",

      proj_kicker: "مختارات",
      proj_title: "المشاريع",
      proj_featured: "مشروع مميّز",
      proj_horo_badge: "قيد التشغيل",
      proj_horo_date: "يوليو 2026 – أغسطس 2026",
      proj_horo_desc: "تصميم وتطوير Full-Stack وتشغيل منصة إنتاجية لحجز المواعيد عبر الإنترنت لورشة سيارات في فوردِه. يمكن للعملاء حجز الخدمات والمواعيد المتاحة وإدارة حجوزاتهم عبر روابط آمنة، مع تكامل آلي للتقويم والبريد الإلكتروني وعمليات إدارة الورشة.",
      proj_horo_link: "الموقع المباشر",
      proj_1_desc: "تطبيق مدعوم بالذكاء الاصطناعي للبحث في المنشورات العلمية وتحليلها. يدعم البحث المباشر في arXiv وPDF-RAG وOCR والاسترجاع الدلالي للمستندات وإجابات موثّقة مع ذكر المصادر.",
      proj_2_desc: "تطبيق ويب متكامل للمساعدة الرقمية بين الجيران، طُوِّر ضمن فريق جامعي من ثمانية أشخاص. ساهمتُ في الواجهة الخلفية والأمامية وتكامل قواعد البيانات والمصادقة والتواصل عبر REST واختبارات البرمجيات.",
      proj_3_desc: "تطبيق Python للجمع والتحليل والتصنيف الآلي لوسوم وإصدارات GitHub ضمن مشروع بحثي في معهد أمن الإنترنت.",
      proj_4_desc: "تحليل مبني على البيانات لـ 723 مصطلحًا في أمن المعلومات، واختيار 470 مصطلحًا أساسيًا ضمن 18 فئة، وتطوير نماذج أولية تفاعلية للرسوم المعرفية ورسوم العلاقات.",
      proj_4_label: "دراسة حالة / مشروع التخرج",
      tag_data_analysis: "تحليل البيانات",
      tag_data_modeling: "نمذجة البيانات",
      tag_data_viz: "تصوير البيانات",

      tech_kicker: "الأدوات",
      tech_title: "التقنيات",
      tech_backend: "الواجهة الخلفية",
      tech_databases: "قواعد البيانات",
      tech_frontend: "الواجهة الأمامية",
      tech_data_ai: "البيانات والذكاء الاصطناعي",
      tech_tools: "الاختبار والأدوات",
      chip_data_analysis: "تحليل البيانات",
      chip_software_testing: "اختبار البرمجيات",
      chip_test_design: "تصميم الاختبارات",
      chip_quality_assurance: "ضمان الجودة",

      contact_kicker: "التواصل",
      contact_title: "لنتواصل معًا.",
      contact_lead: "أهتمّ بالوظائف والمشاريع في مجالات اختبار البرمجيات وضمان الجودة، وتطوير الأنظمة المتكاملة، وتحليل البيانات، وأتمتة البيانات، وتطوير البرمجيات الموجّهة نحو الأمن.",
      contact_email: "البريد الإلكتروني",
      contact_location: "الموقع",

      footer_privacy: "لا يستخدم هذا الموقع أي ملفات تعريف ارتباط للتتبّع أو التحليل."
    }
  };

  /* -------------------------------------------------------
     2. SPRACHUMSCHALTUNG
  -------------------------------------------------------- */
  const STORAGE_KEY = "portfolio-lang";
  const supported = ["de", "en", "ar"];
  const rtlLangs = ["ar"];

  function getInitialLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && supported.includes(saved)) return saved;
    // Browser-Sprache als Fallback, Standard bleibt Deutsch.
    const nav = (navigator.language || "de").slice(0, 2).toLowerCase();
    return supported.includes(nav) ? nav : "de";
  }

  function applyLanguage(lang) {
    const dict = translations[lang] || translations.de;

    // Alle Elemente mit data-i18n aktualisieren.
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Sprach- und Leserichtungs-Attribut anpassen (Arabisch = RTL).
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", rtlLangs.indexOf(lang) !== -1 ? "rtl" : "ltr");

    // Zustand der Umschalt-Buttons (aria-pressed) aktualisieren.
    document.querySelectorAll(".lang-switch__btn").forEach(function (btn) {
      const isActive = btn.getAttribute("data-lang") === lang;
      btn.setAttribute("aria-pressed", String(isActive));
    });

    localStorage.setItem(STORAGE_KEY, lang);
  }

  document.querySelectorAll(".lang-switch__btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLanguage(btn.getAttribute("data-lang"));
    });
  });

  // Initiale Sprache setzen.
  applyLanguage(getInitialLang());

  /* -------------------------------------------------------
     2b. THEME-UMSCHALTUNG (Hell / Dunkel)
     Das data-theme-Attribut wird bereits durch das Inline-
     Skript im <head> gesetzt (verhindert Aufblitzen). Hier
     wird der Umschalter verdrahtet und der Zustand gepflegt.
  -------------------------------------------------------- */
  const THEME_KEY = "portfolio-theme-v2";
  const themeToggle = document.getElementById("themeToggle");

  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    if (themeToggle) {
      // aria-pressed = true, wenn Hellmodus aktiv ist.
      themeToggle.setAttribute("aria-pressed", String(theme === "light"));
      themeToggle.setAttribute(
        "aria-label",
        theme === "light" ? "Zu dunklem Modus wechseln" : "Zu hellem Modus wechseln"
      );
    }
    localStorage.setItem(THEME_KEY, theme);
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      applyTheme(currentTheme() === "light" ? "dark" : "light");
    });
  }

  // Zustand des Buttons an das bereits gesetzte Theme angleichen.
  applyTheme(currentTheme());

  /* -------------------------------------------------------
     3. MOBILE NAVIGATION (Burger-Menü)
  -------------------------------------------------------- */
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");

  function closeMenu() {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Menü öffnen");
  }

  function openMenu() {
    menu.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Menü schließen");
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      const isOpen = menu.classList.contains("is-open");
      isOpen ? closeMenu() : openMenu();
    });

    // Menü nach Klick auf einen Link schließen (nur mobil relevant).
    menu.querySelectorAll(".nav__links a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    // Mit Escape-Taste schließen.
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });

    // Beim Wechsel auf große Screens Zustand zurücksetzen.
    window.addEventListener("resize", function () {
      if (window.innerWidth > 860) closeMenu();
    });
  }

  /* -------------------------------------------------------
     4. SCROLL-ANIMATIONEN (dezent, reduced-motion beachten)
  -------------------------------------------------------- */
  const reveals = document.querySelectorAll(".reveal");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    // Keine Animation: Inhalte sofort sichtbar machen.
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    const observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) { observer.observe(el); });
  }

  /* -------------------------------------------------------
     5. PROFILBILD-FALLBACK
     Falls das echte Foto (noch) nicht existiert, wird auf den
     Initialen-Platzhalter „MA“ zurückgegriffen.
  -------------------------------------------------------- */
  document.querySelectorAll("img[data-fallback]").forEach(function (img) {
    function useFallback() {
      const fallback = img.getAttribute("data-fallback");
      if (fallback && img.src.indexOf(fallback) === -1) {
        img.src = fallback;
      }
      img.removeEventListener("error", useFallback);
    }

    img.addEventListener("error", useFallback);

    // Falls das Bild bereits VOR dem Laden des Skripts fehlgeschlagen ist
    // (error-Event verpasst): geladen, aber keine Bildhöhe/-breite -> Fallback.
    if (img.complete && img.naturalWidth === 0) {
      useFallback();
    }
  });

  /* -------------------------------------------------------
     6. AKTUELLES JAHR IM FOOTER
  -------------------------------------------------------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
