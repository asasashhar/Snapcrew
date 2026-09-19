import { PortfolioItem, ServiceItem, TestimonialItem } from './types';

export const LOGO_URL = "/logo.png";

export const HERO_IMAGE = "/hero_bg.png";

export const ABOUT_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuBjGrMCxYkFIMS86l9oXfSaTSe4E3rA5ggj6CPPop0r4tMgilu68QddlnwqLjayo6cKX5a9ohFluwO1hvYqtm4IwVMhZFQqT16zY4_MM9CGmlbr0JxHNWdE1T8aA3W17B6wAAaBwwbW9dUUL4l2Wgkx1aqBABQ18emyAfnuJgrul8Uwi-TAK2npdSXzIWHKhosi0_BKlD6_BxFgzotyj4JHaZYHIVczsEKpF4QCNxKJhiEPoaTLUU0";

export const CINEMATIC_BREAK_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuAV_rdMNzrrYBb7JDSXeRk4U38aB-FeDNarIJlIT4zjoA-fw0CWhWovGTjAzUM9Mo7qTP3bj8HXwMFJjbJy1n_BUrgbmuQ9wtvxhW0RSR19XsQRDKXLip3ahpVkjmd8JhOM7M7r_VTH2hj5xIIDaUD1rG40VEU6yacf-NKtjnwyewt16FHTIj0QxPEX2fC1ctZu2YWGT5AWZh6yAUi4jyZKjV4jPmz62IXUit7K-ySiBAeOfEdbmso";

export const STUDIO_BEHIND_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuA_07Z-Ahr_tJ6Sm-0D5BbBPnoEeA--fnW3ylgpUn7JbWGr34qWIOijiKsNlfLSLJvBIgDRmZXBRq9L4bYicnYGXGtF3y2ZcTYIh6iVCwTlyk8AvSYgn-hcuArt6TYFu9oMdB2H66GZKZoszdrfx4iU5N3w7TLFk2hOUdh7ur08qZ4LmAwD1p3Y0xyNnUpgVemQs-dF1RfdOB9GrfVFebmgrQFaqtudii4ZeumY_sZ6b6ZfrJu_YU0";

export const MAP_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuCeI16zSkHN5xtwfNrRblIv8q_0FZICnCDfrap4LrwEP8WZwoxDpiAYNEb6AZxIVT1POi9qm-qPkKl-OZhI9_k3a7sXQA_34HINcPU2r0ibIC3cEWL18ZxBd98ERW14SrpovLBNOBcwpP5xHfLMO47-WmSNIm9R8VvybS3aPPi7Sx6VPNi8HaOTzWRvkO-os8Nj40b9QSbfESFjyhjgz8irLPIcY9FIbTrvODIQJcZEK8-4VzND4WE";

export const MASTER_LIGHTBOX_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuDd2wQIG2S0HjeZIv3GBgtbh7RPj4VQZC1Y8zl67Yz9QZvOBm_kuc1AQa-NaCX4XM6Y0LNsGT-TfuNyfxRzyU0UoZoBCsrDkj5UudprDVOsOKcl6ozn5BQFrz2jPxDYBwhxik5r38M02dTkwLKCcpulgYLt5XhudFtCxadsmNLPbwBP6I7Dtt5-ym0AHdsgk03xCNxLC4w7S93ustqkbLRc6TcM2gsCYY2wLhF1rDQ8gyRSPzdU8wc";

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 0,
    title: "The Calicut Courtyard Wedding",
    category: "weddings",
    categoryLabel: "01 · FEATURED WEDDING",
    subtitle: "Courtyard Heirlooms",
    subcategory: "KERALA KASAVU HERITAGE",
    description: "Intimate traditional ceremony captured in available monsoon light, documenting the heritage laughter across generations.",
    location: "Kozhikode · Malappuram",
    archiveTag: "[SNAPCREW WEDDING ARCHIVE - 01]",
    aspect: "aspect-[16/10]",
    colSpan: "md:col-span-8",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBU4qJk1U3z8sa7NxMRfSioAP33-Eb4C7zBcqALvUK4BvUTuKlV5Tw6t5Ka_iV4N7XqWxNG9U3vnD2hM33I9uVm2BxrQXDNCsw5NBTaXVwF4mvWEeQzK5yvKVnoblUe1trHuvKceBwtyBE0CXUWzNbad1QBUov1q339zzcDzctubJvvLl_Ms7uJ_gGiuSanPQYrgULi-rgcPdHAVyFCy6n3UQcqJk340zEfSCbxlpilBIKJa6bM2zs",
    highResImage: MASTER_LIGHTBOX_IMG,
    alt: "Traditional South Indian Kerala wedding ceremony with laughter and happiness among family in rich golden kasavu garments, natural light indoor mandapam"
  },
  {
    id: 1,
    title: "Ritual & Metamorphosis",
    category: "portraits",
    categoryLabel: "[02 / PORTRAITS]",
    subtitle: "Backstage Studies",
    subcategory: "KATHAKALI CHARACTER STUDY",
    description: "Moody cinematic portrait of a young Kathakali performer preparing face makeup in backstage mirror light, vibrant natural vermilion tones.",
    location: "Studio Session · Tirur",
    archiveTag: "[SNAPCREW EDITORIAL - 02]",
    aspect: "aspect-[4/5]",
    colSpan: "md:col-span-4",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAN84KrN_btlvDc4vZ5tceeuUGzb9r4upBPI23iTdxw_5FnvuJKxB0yLG84y5H3zjB8GKUBEMYWZ9sHjb4PuZqAKoYdLz8sMZFtQH7_RD0z4QHFGEwgDxHEUE_DQj6IWE1CdEDyI_dkfb6lcNKvrQTbWX9QR13IK7o3_u1_YC_idMA6oLrlSR6QLlVIPY9Hq_0aJcpxA33Dlz6btdjnTU_r8cLHR9kYxXlGt0ovERcO9N0pL7MPC8Y",
    highResImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAN84KrN_btlvDc4vZ5tceeuUGzb9r4upBPI23iTdxw_5FnvuJKxB0yLG84y5H3zjB8GKUBEMYWZ9sHjb4PuZqAKoYdLz8sMZFtQH7_RD0z4QHFGEwgDxHEUE_DQj6IWE1CdEDyI_dkfb6lcNKvrQTbWX9QR13IK7o3_u1_YC_idMA6oLrlSR6QLlVIPY9Hq_0aJcpxA33Dlz6btdjnTU_r8cLHR9kYxXlGt0ovERcO9N0pL7MPC8Y",
    alt: "Moody cinematic portrait of a young Kathakali performer preparing face makeup in backstage mirror light, vibrant natural vermilion tones"
  },
  {
    id: 2,
    title: "Percussion & Spirit",
    category: "events",
    categoryLabel: "[03 / EVENTS]",
    subtitle: "Temple Festival Rhythms",
    subcategory: "VALLUVANAD TRADITIONS",
    description: "Traditional Kerala Pooram festival with chenda melam drummers in synchronous rhythmic ecstasy, dust motes and temple festival energy.",
    location: "Valluvanad Pooram",
    archiveTag: "[SNAPCREW CELEBRATION - 03]",
    aspect: "aspect-square",
    colSpan: "md:col-span-4 md:mt-space-md",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5kMSoT9sgPSPfQpSwTtFbgoycUzrY9LJB8qAtEp_k4Q1A-pDOMaAH1a-Y_x0u9Qhwq7fXQvkLepNI7cBODiLL-jkHhvMY0UzgVkm7aG5IUUas0FncV-hzTWC9zcfoGfv61SMj3uY8_CjDixO5MlsYAmsB-yAjTHrTBUYaq954SVR7W0mfOAK3ZEkj7liHGjATywY1-QLe7QkyzQRhoiv250m0wHuHRMB86zbHj24nUb5XlbpxLt8",
    highResImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5kMSoT9sgPSPfQpSwTtFbgoycUzrY9LJB8qAtEp_k4Q1A-pDOMaAH1a-Y_x0u9Qhwq7fXQvkLepNI7cBODiLL-jkHhvMY0UzgVkm7aG5IUUas0FncV-hzTWC9zcfoGfv61SMj3uY8_CjDixO5MlsYAmsB-yAjTHrTBUYaq954SVR7W0mfOAK3ZEkj7liHGjATywY1-QLe7QkyzQRhoiv250m0wHuHRMB86zbHj24nUb5XlbpxLt8",
    alt: "Traditional Kerala Pooram festival with chenda melam drummers in synchronous rhythmic ecstasy, dust motes and temple festival energy"
  },
  {
    id: 3,
    title: "Padinjarekara Coastline",
    category: "pre-wedding",
    categoryLabel: "[04 / PRE-WEDDING]",
    subtitle: "Estuary Golden Hour Narrative",
    subcategory: "ARABIAN SEA REFLECTIONS",
    description: "Intimate pre-wedding couple silhouette against the orange sunset waves of Tirur Padinjarekara Beach, sea breeze and golden reflection on tranquil water.",
    location: "Tirur Coastal Estuary",
    archiveTag: "[SNAPCREW SUNSET - 04]",
    aspect: "aspect-[16/9]",
    colSpan: "md:col-span-8 md:mt-space-md",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCO8qhbcIf30tWPnU-PEeMy9aW-yxv3wMduUK9So2ELlZcoU6tI12eQyidcu5p4LjFTQ3KCXZdJ104-MhBanc351eNBgxKrVJsSmC_w4hJ_6iDqDfpQoI8ZfRUHiglGnD-u8TUD_aUxXBYcGANIOplE6EF5c3SLfRJJfcIzuIwAIK6VSxvfUet7NMWg_JFmXwEygtijq3iqOzBXlJHwWK9wxbbQLIfCkvyZ3pFKPXi9pL6iNxmIfro",
    highResImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCO8qhbcIf30tWPnU-PEeMy9aW-yxv3wMduUK9So2ELlZcoU6tI12eQyidcu5p4LjFTQ3KCXZdJ104-MhBanc351eNBgxKrVJsSmC_w4hJ_6iDqDfpQoI8ZfRUHiglGnD-u8TUD_aUxXBYcGANIOplE6EF5c3SLfRJJfcIzuIwAIK6VSxvfUet7NMWg_JFmXwEygtijq3iqOzBXlJHwWK9wxbbQLIfCkvyZ3pFKPXi9pL6iNxmIfro",
    alt: "Intimate pre-wedding couple silhouette against the orange sunset waves of Tirur Padinjarekara Beach, sea breeze and golden reflection on tranquil water"
  },
  {
    id: 4,
    title: "Timber & Mist Architecture",
    category: "commercial",
    categoryLabel: "[05 / COMMERCIAL]",
    subtitle: "Bespoke Resort Documentation",
    subcategory: "WAYANAD RETREATS",
    description: "Architectural bespoke resort in Wayanad with warm interior wood textures, mist covered valley windows and minimalist Scandinavian-Kerala craft details.",
    location: "Hospitality Brand",
    archiveTag: "[SNAPCREW ARCHITECTURE - 05]",
    aspect: "aspect-[4/3]",
    colSpan: "md:col-span-5",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCU9KXGunA_aq5DKHa06isinl-y_MIsY8G9Xke2np86jfDbeaA35zgfVwnvQbuRAy-kAPYEBOGaSzjArRec20IsXU84MgnFLadQIfyq-FPtHsYu8ZZXnv2383vChat12Fpk4sRpST2roa3jBFFcZOItHWLGYBwImnP8vjrHKA1DlAuZgOuLpwLSq_x7sZ5e8MuHulZeu4sDs-AO3moVpEMKc2SZtk0hThgpZIToCX1iWYU_J7oGaKA",
    highResImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCU9KXGunA_aq5DKHa06isinl-y_MIsY8G9Xke2np86jfDbeaA35zgfVwnvQbuRAy-kAPYEBOGaSzjArRec20IsXU84MgnFLadQIfyq-FPtHsYu8ZZXnv2383vChat12Fpk4sRpST2roa3jBFFcZOItHWLGYBwImnP8vjrHKA1DlAuZgOuLpwLSq_x7sZ5e8MuHulZeu4sDs-AO3moVpEMKc2SZtk0hThgpZIToCX1iWYU_J7oGaKA",
    alt: "Architectural bespoke resort in Wayanad with warm interior wood textures, mist covered valley windows and minimalist Scandinavian-Kerala craft details"
  },
  {
    id: 5,
    title: "Unfiltered Haldi Blessings",
    category: "weddings",
    categoryLabel: "[06 / CANDID]",
    subtitle: "Ritual Emotions",
    subcategory: "HALDI CELEBRATIONS",
    description: "Unscripted joyous moment of an elderly grandmother blessing a laughing young couple during haldi ritual, vibrant yellow turmeric pastes on hands.",
    location: "Family Archive · Tirur",
    archiveTag: "[SNAPCREW CANDID - 06]",
    aspect: "aspect-[16/10]",
    colSpan: "md:col-span-7",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASt4HsmRm5_dhx5egfTUvyxxydu1retAue9_gBHrcuQdSRnjyA_aNT2FggrNPF-MJqeoMk0KKXZwGuvM1Vru1rBFNZiFqZ0e1DKTfkON8ksXmzUJIx3_B6Mn3RMNyn2FFuHPnRgOPevktT85NS-AvolXUSYhENC9xXKRj1uttXfDySB1ySrwfEM93EugUiBdU31qoa1U87gjaqV6nwxKALvrX7mL-UOuIEI7UNjYNxYlNCvNGnIh4",
    highResImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuASt4HsmRm5_dhx5egfTUvyxxydu1retAue9_gBHrcuQdSRnjyA_aNT2FggrNPF-MJqeoMk0KKXZwGuvM1Vru1rBFNZiFqZ0e1DKTfkON8ksXmzUJIx3_B6Mn3RMNyn2FFuHPnRgOPevktT85NS-AvolXUSYhENC9xXKRj1uttXfDySB1ySrwfEM93EugUiBdU31qoa1U87gjaqV6nwxKALvrX7mL-UOuIEI7UNjYNxYlNCvNGnIh4",
    alt: "Unscripted joyous moment of an elderly grandmother blessing a laughing young couple during haldi ritual, vibrant yellow turmeric pastes on hands"
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "weddings",
    number: "01",
    title: "WEDDING PHOTOGRAPHY",
    tagline: "Dual Master Primaries",
    description: "Full day documentary coverage, traditional Kerala ceremonies & unposed intimate glances.",
    badge: "Full Day Archival",
    deliverables: [
      "2 Lead Documentary Photographers",
      "Full Kerala Nikah, Kasavu or Church Coverage",
      "Curated High-Res Master Digital Negative Vault",
      "Artisanal Color Calibration"
    ]
  },
  {
    id: "films",
    number: "02",
    title: "WEDDING FILMS",
    tagline: "Cinema 24fps Mastering",
    description: "Cinematic highlight films, 4K documentary reels, pristine audio capture & custom orchestral grading.",
    badge: "Cinema 24fps Mastering",
    deliverables: [
      "4K DCI Cinematic Master Reel (3-5 min)",
      "Comprehensive Ceremony Edit with Multi-Track Audio",
      "Drone Aerial Cinematography where permitted",
      "Original Sound Design & Foley Integration"
    ]
  },
  {
    id: "portraits",
    number: "03",
    title: "PORTRAIT PHOTOGRAPHY",
    tagline: "Tirur Studio or Location",
    description: "Editorial portraits, individual styling, studio character studies & timeless maternity captures.",
    badge: "Tirur Studio or Location",
    deliverables: [
      "Studio or Natural Environment Session",
      "Art Direction & Wardrobe Consultation",
      "Handcrafted Black & White Fine Art Prints",
      "Commercial Usage Clearance Available"
    ]
  },
  {
    id: "pre-wedding",
    number: "04",
    title: "PRE-WEDDING SESSIONS",
    tagline: "Curated Location Scouting",
    description: "Scenic Kerala destinations, backwater cruises, golden hour narratives & intimate concept shoots.",
    badge: "Curated Location Scouting",
    deliverables: [
      "Custom Moodboard & Scouting across Kerala",
      "Sunset Estuary & Backwater Sequences",
      "Cinematic Teaser Trailer for Reception Display",
      "Full Archival Photo Suite"
    ]
  },
  {
    id: "events",
    number: "05",
    title: "EVENT PHOTOGRAPHY",
    tagline: "Discreet Documentary Style",
    description: "Family milestones, cultural gatherings, temple festivals & authentic anniversary documentation.",
    badge: "Discreet Documentary Style",
    deliverables: [
      "Unobtrusive Multi-Angle Event Coverage",
      "Same-Day Sneak Peek Deliverables",
      "Chronological Narrative Gallery Layout",
      "Family Archival Book Options"
    ]
  },
  {
    id: "commercial",
    number: "06",
    title: "COMMERCIAL / PRODUCT",
    tagline: "Commercial Licensing Included",
    description: "Visual storytelling for bespoke brands, architecture, culinary establishments & creative campaigns.",
    badge: "Commercial Licensing Included",
    deliverables: [
      "High-Resolution Architectural & Product Captures",
      "Tethered On-Site Review Monitor",
      "Full Commercial & Billboard Print Rights",
      "Custom Color Profiles for Brand Guidelines"
    ]
  }
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "TELL US YOUR STORY",
    description: "Initial consultation in our Tirur studio or over coffee to understand your vision, exact dates, family dynamics, and aesthetic desires.",
    icon: "coffee",
    accent: "bg-primary-container",
    meta: "Discovery & Fit"
  },
  {
    number: "02",
    title: "PLAN THE SHOOT",
    description: "Curating moodboards, scouting optimal light conditions across Malabar locations, timeline synchronization, and wardrobe coordination.",
    icon: "schedule",
    accent: "bg-tertiary-fixed-dim",
    meta: "Sun & Light Mapping"
  },
  {
    number: "03",
    title: "CAPTURE THE MOMENT",
    description: "Unobtrusive documentary style combined with thoughtful editorial guidance, letting you stay fully immersed in your celebration.",
    icon: "photo_camera",
    accent: "bg-primary-container",
    meta: "Documentary Immersion"
  },
  {
    number: "04",
    title: "RECEIVE YOUR MEMORIES",
    description: "Artisan color grading, private high-res cloud gallery, and optional bespoke flush-mount handcrafted archival albums.",
    icon: "auto_stories",
    accent: "bg-on-surface",
    meta: "Archival Delivery"
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 1,
    quote: "Snapcrew captured our wedding at Tirur in the purest way possible. Looking through our album brings back every emotion. There wasn’t a single awkward pose; everything was honest and cinematic.",
    author: "Naveen & Anjali",
    category: "Wedding Story",
    location: "Tirur"
  },
  {
    id: 2,
    quote: "Their documentary style is second to none. For our pre-wedding shoot at Padinjarekara Beach, they guided us so gently that we forgot the camera was even there. The grading is international class.",
    author: "Farhan & Rima",
    category: "Pre-Wedding",
    location: "Coastal Malabar"
  },
  {
    id: 3,
    quote: "We commissioned Snapcrew for our family anniversary and studio portraits. The attention to natural light, the respect they gave our grandparents, and prompt album delivery exceeded every standard.",
    author: "Dr. Suresh Kumar",
    category: "Family & Portrait Archive",
    location: "Kozhikode"
  },
  {
    id: 4,
    quote: "Every member of our family fell in love with how unobtrusive their team was. The film they delivered brought tears to our eyes. They truly honor Malabar heritage with modern elegance.",
    author: "Faslu & Shada",
    category: "Cinematic Film & Nikah",
    location: "Malappuram"
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: 1,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfjttT_HBuLUGi9Eq5xKIZqAbJY7MOH5Nc5de0YPEnknx8EjF_ERdTxxbrTW69hcPOQRthArwDR7MDo1cCenURLmPMcCZE43glu86cPvoHIvJSFCVhJo5iPW2cR7tQOE76s7t4kPR4dLnHsoifGSp7dAjvgN17V2S_Anc7YJ1kGG2nd803l6OGeVAv0Ht23h1kV8NJh_pN3HqaZPujpIjWTIK6ZIWS-7JY-_uR6x5RFtH-BekU7d0",
    alt: "Candid Instagram square shot of a bride laughing with sister in mirror reflection, warm golden hour tones",
    likes: "1.4k",
    tag: "@snapcrew_studio"
  },
  {
    id: 2,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8bToJyfF77xLZxgxHFnlnhedjGtyapHZy9GkN_X6lQ5WMlsqNzNRzS56KH1DTDHi9dcLy4Rnt0TeD0r7muI1dJR-MI2MwEYmgJ-YYG_qk0qHV0kviHpBI_PGOwbRUzdndOilMl5NvGpcwvnk4pqPrBL5Tn8TZRHlJPi8VLpr18cYoX1rfR7hKhDi9XZqRqfrIJtMYx5kxz0bdDQocFD6RBiEsFR-tAzpTyeT6RyYoa8g8BrpF4b0",
    alt: "Monochrome Instagram square frame of groom fixing wrist watch cufflinks before wedding departure",
    likes: "890",
    tag: "Tirur Atelier"
  },
  {
    id: 3,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYh4VPMuxU00ZIZb27ErKS-_t_5RdcsH55EBBov8aQxSgfi4fFehw7Awlk8fX_fbsERvFx3fZmo6GSQdy5bOOh_PnqD1o8gDnWLxGyteElmR2WHkCkiRJfQLRi_sDB82Ix_ZVay2OYhsmzbTPAgKRrMVrklBbxngSFMkrDAHFM5i8rVZskynIIE7u_-e7zJBEbHc5JQTa0xv3IBskG7sldeK9_aJcyneZU-k962aKskRO0rurM8tk",
    alt: "Instagram square shot of rain drops hitting windshield during coastal Kerala drive to wedding venue",
    likes: "2.1k",
    tag: "Monsoon Drive"
  },
  {
    id: 4,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnu0eW-Lt-82gFNQKgVPCWvgwIMIopVOJi0LGcvCW5tqpfScU3lCTwTs8cWKQtiUoJOxwfdNBCKmC9yYlCRu1bofwr8c_HTtsyphgoe4VbQBBuWtQx67kRp9TsKrk9X3swOhE5HpAekNPaVwmIuug07M7gtHqrOJOP52npyHpAPUr7x89Encg331lDAGURhC-ICdv3UF630IY_I3lBFrKD8m9Sre2cdA8jcO8R1223fusdGz6hr1I",
    alt: "Close up Instagram square detail of jasmine flower hair garlands and antique temple gold jewellery",
    likes: "3.2k",
    tag: "Kasavu & Jasmine"
  },
  {
    id: 5,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKzfzkgB0Z4y1fKpkfwTrHvGERyZbGjk9FAWvW2rDhWNFKIojXMDDuhK7pm0QkVGpjLE1RZWly9gwEBGYkdZMf1PtqMukdLavRiPU3nI6j1onB0a6gH8O4-DTwTIHXMkmbBJgrt2ZvwNGJEMskSKhA4aob6f8C9TT5scVP8yNJx0wzJRNY8VfVzVctAJmTcxKjpxFkDLfKOB5GljG0RHAvMYZPCiav2-eGE_xKvMD7J6s5iFHXDg4",
    alt: "Behind the scenes square photo of cinematographer holding gimbal stabilizing camera beside backwaters",
    likes: "1.7k",
    tag: "Cinema Rigging"
  },
  {
    id: 6,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDg2YvLK2RcQxkJQOA_oAkcUJpqVy-u-mb3xR80YO9GvVRpUX7MfyT4cXTOjToFQMYgLphHk6g-2aRMXJQw7XqPYZp_ala3uOS4YD4F4gZXraxJOq3FgSXCeQ2eImE4ibxTeRnrB4S12Aa-9bLMa2nDdWlr-yGNsVh1dOHUGFDPe-q90_zVK2BwHeSpwzYVeM6SB70ovNFzvbSa-cvoGuEoMSjpf9ZhFzKgx1sNURrH7ObOiK9sDvw",
    alt: "Square photo of printed archival photo albums with linen covers and blind debossed Snapcrew typography",
    likes: "2.8k",
    tag: "Archival Linen"
  }
];
