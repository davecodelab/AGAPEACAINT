import type { Metadata } from "next";
import StudentLifeSubpage, {
  StudentLifeSubpageData,
} from "@/components/StudentLifeSubpage";

export const metadata: Metadata = {
  title: "Trips & Experiences | Agape Academy International",
  description:
    "Discover educational trips, excursions and experiential learning opportunities at Agape Academy International.",
};

const data: StudentLifeSubpageData = {
  eyebrow: "Trips & Experiences",
  title: "Take learning",
  highlight: "outside.",
  description:
    "Some lessons become more meaningful when students experience them first-hand. Trips and experiences connect learning with people, places, culture and the world beyond the school gates.",
  heroImage:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2400&q=90",
  heroAlt: "Students exploring the world together",

  stats: [
    { value: "01", label: "Explore" },
    { value: "02", label: "Experience" },
    { value: "03", label: "Reflect" },
    { value: "04", label: "Remember" },
  ],

  introEyebrow: "Experiential learning",
  introTitle: "The world becomes part of the classroom.",
  introText:
    "Excursions and experiences can help students connect classroom ideas with real environments. They encourage observation, independence, curiosity and reflection while creating shared memories with classmates.",

  features: [
    {
      number: "01",
      title: "See it first-hand",
      text:
        "Students can encounter environments, organisations and experiences that make academic ideas tangible and memorable.",
      image:
        "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1800&q=90",
      imageAlt: "Students exploring together",
    },
    {
      number: "02",
      title: "Learn together",
      text:
        "Travelling and experiencing new environments creates opportunities for collaboration, communication and shared discovery.",
      image:
        "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=1800&q=90",
      imageAlt: "Students travelling together",
    },
    {
      number: "03",
      title: "Return with perspective",
      text:
        "Experiential learning becomes more powerful when students reflect on what they saw, experienced and learned.",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1800&q=90",
      imageAlt: "Travel and educational experience",
    },
  ],

  experienceEyebrow: "Beyond the classroom",
  experienceTitle: "Go further to understand more.",
  experienceText:
    "Trips can support academic learning while also helping students become more observant, adaptable and curious about the wider world.",

  listTitle: "Experience can include",
  listItems: [
    "Educational excursions",
    "Cultural experiences",
    "Field learning",
    "Community experiences",
    "Outdoor learning",
    "Educational visits",
    "Collaborative activities",
    "Reflection & discussion",
  ],

  quote:
    "The places students visit become part of the stories they tell about what they learned.",
  quoteLabel: "Experiential learning at Agape",

  ctaTitle: "Let curiosity lead the way.",
  ctaText:
    "Discover a school experience where learning can continue far beyond the classroom.",
};

export default function TripsPage() {
  return <StudentLifeSubpage data={data} />;
}