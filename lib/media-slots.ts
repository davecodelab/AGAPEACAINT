export type AspectRatio = "16:9" | "4:3" | "3:4" | "1:1" | "custom";

export interface MediaSlot {
  id: string;
  section: "homepage" | "about" | "academics" | "admissions" | "student_life" | "brand";
  label: string;
  description: string;
  aspectRatio: AspectRatio;
  recommendedDimensions: string;
  currentUrl: string;
  altText: string;
  updatedAt?: string;
}

export interface GalleryPhoto {
  id: string;
  category:
    | "Classrooms"
    | "Science"
    | "Library"
    | "Sport"
    | "Creative Spaces"
    | "Chapel"
    | "Outdoor"
    | "Student Life";
  title: string;
  caption: string;
  cloudinaryUrl: string;
  cloudinaryPublicId?: string;
  sortOrder?: number;
  createdAt?: string;
}

export const DEFAULT_SLOTS: Record<string, MediaSlot> = {
  // Brand
  brand_logo: {
    id: "brand_logo",
    section: "brand",
    label: "School Logo / Crest",
    description: "Main school emblem displayed in navigation, preloader, and footer.",
    aspectRatio: "1:1",
    recommendedDimensions: "512x512",
    currentUrl: "/school_logo.png",
    altText: "Agape Academy International Logo",
  },
  // Homepage
  home_hero: {
    id: "home_hero",
    section: "homepage",
    label: "Homepage Hero Background",
    description: "Full-bleed background photo or video introducing the school on the homepage.",
    aspectRatio: "16:9",
    recommendedDimensions: "1920x1080 (Photo or Video)",
    currentUrl: "/banner.jpg",
    altText: "Agape Academy campus and students",
  },
  home_intro_cover: {
    id: "home_intro_cover",
    section: "homepage",
    label: "Our Philosophy Editorial Photo",
    description: "Editorial photo alongside core pillars (teacher and students in conversation).",
    aspectRatio: "4:3",
    recommendedDimensions: "1600x1200",
    currentUrl: "/cover.jpg",
    altText: "Teacher speaking with Agape Academy students",
  },
  home_wellbeing: {
    id: "home_wellbeing",
    section: "homepage",
    label: "Wellbeing & Pastoral Care Photo",
    description: "Featured photography in the 'Known. Supported. Encouraged.' section.",
    aspectRatio: "4:3",
    recommendedDimensions: "1400x1050",
    currentUrl: "/together.jpg",
    altText: "Students connecting on campus",
  },
  home_principal: {
    id: "home_principal",
    section: "homepage",
    label: "Principal Official Portrait",
    description: "Official portrait of school leadership accompanying the Principal's Welcome.",
    aspectRatio: "3:4",
    recommendedDimensions: "900x1200",
    currentUrl: "/girl_grad.jpg",
    altText: "Principal, Agape Academy International",
  },

  // About Page
  about_hero: {
    id: "about_hero",
    section: "about",
    label: "About Page Hero Banner",
    description: "Cinematic full-width background photo at the top of the About page.",
    aspectRatio: "16:9",
    recommendedDimensions: "2560x1440",
    currentUrl: "/banner.jpg",
    altText: "Agape Academy community banner",
  },

  // Academics Page
  academics_hero: {
    id: "academics_hero",
    section: "academics",
    label: "Academics Hero Background",
    description: "Hero parallax image on the academics journey overview page.",
    aspectRatio: "16:9",
    recommendedDimensions: "2200x1240",
    currentUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2200&q=90",
    altText: "Students learning together",
  },
  academics_stage_early_years: {
    id: "academics_stage_early_years",
    section: "academics",
    label: "Early Years Stage (Ages 3–5)",
    description: "Representative photography of kindergarten & nursery classroom activities.",
    aspectRatio: "4:3",
    recommendedDimensions: "1400x1050",
    currentUrl: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1800&q=85",
    altText: "Early Years students exploring and learning",
  },
  academics_stage_primary: {
    id: "academics_stage_primary",
    section: "academics",
    label: "Primary School Stage (Ages 6–10)",
    description: "Representative photo of foundational primary classroom learning.",
    aspectRatio: "4:3",
    recommendedDimensions: "1400x1050",
    currentUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=85",
    altText: "Primary school students engaged in study",
  },
  academics_stage_middle: {
    id: "academics_stage_middle",
    section: "academics",
    label: "Middle School Stage (Ages 11–13)",
    description: "Representative photo of middle school learners developing critical thinking.",
    aspectRatio: "4:3",
    recommendedDimensions: "1400x1050",
    currentUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1800&q=85",
    altText: "Middle school students in discussion",
  },
  academics_stage_high_school: {
    id: "academics_stage_high_school",
    section: "academics",
    label: "High School Stage (Ages 14–18)",
    description: "Representative photo of senior students preparing for university & leadership.",
    aspectRatio: "4:3",
    recommendedDimensions: "1400x1050",
    currentUrl: "/grad_01.jpg",
    altText: "Senior high school students",
  },
  academics_abeka_feature: {
    id: "academics_abeka_feature",
    section: "academics",
    label: "Abeka Curriculum Feature Card",
    description: "Showcase image for the Abeka Christian curriculum feature.",
    aspectRatio: "4:3",
    recommendedDimensions: "1200x900",
    currentUrl: "/abek.jpg",
    altText: "Abeka curriculum at Agape Academy International",
  },

  // Admissions Page
  admissions_hero: {
    id: "admissions_hero",
    section: "admissions",
    label: "Admissions Hero Background",
    description: "Welcome photo for prospective families and students visiting the admissions page.",
    aspectRatio: "16:9",
    recommendedDimensions: "2400x1350",
    currentUrl: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=2400&q=90",
    altText: "Students learning and connecting together",
  },
  admissions_campus_preview: {
    id: "admissions_campus_preview",
    section: "admissions",
    label: "Book a Visit / Campus Tour Card",
    description: "Campus environment photo inviting parents to schedule an on-site visit.",
    aspectRatio: "16:9",
    recommendedDimensions: "1600x900",
    currentUrl: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=90",
    altText: "Agape Academy campus grounds",
  },

  // Student Life
  student_life_hero: {
    id: "student_life_hero",
    section: "student_life",
    label: "Student Life Hero Banner",
    description: "Vibrant photo showcasing student activities outside the classroom.",
    aspectRatio: "16:9",
    recommendedDimensions: "2400x1350",
    currentUrl: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=2400&q=90",
    altText: "Student life at Agape Academy",
  },
  student_life_sports: {
    id: "student_life_sports",
    section: "student_life",
    label: "Sports & Athletics Feature",
    description: "Photo of students participating in inter-house games and athletics.",
    aspectRatio: "4:3",
    recommendedDimensions: "1400x1050",
    currentUrl: "/games_3.jpg",
    altText: "Students competing on sports day",
  },
  student_life_community: {
    id: "student_life_community",
    section: "student_life",
    label: "Growing Together Grid Photo",
    description: "Highlighting fellowship and collaboration in student community.",
    aspectRatio: "16:9",
    recommendedDimensions: "1800x1000",
    currentUrl: "/together.jpg",
    altText: "Students growing together",
  },

  // Contact Page
  contact_hero: {
    id: "contact_hero",
    section: "about",
    label: "Contact Page Hero Background",
    description: "Atmospheric photo welcoming visitors to get in touch.",
    aspectRatio: "16:9",
    recommendedDimensions: "2000x1125",
    currentUrl: "/changed.png",
    altText: "Agape Academy International campus",
  },
};
