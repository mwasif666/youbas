import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import styles from "./page.module.css";

const content = {
  kicker: "Digital & Social Media",
  title: "Build authority, traffic, and demand.",
  subtitle:
    "We design content and campaigns that grow your brand across social platforms and drive marketplace sales.",
  heroImage:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
  heroHighlights: [
    "Content + creative production",
    "Paid acquisition strategy",
    "Influencer partnerships",
    "Full-funnel reporting",
  ],
  sectionTitle: "Full-funnel growth",
  sectionBody:
    "From content planning to paid ads, we create a consistent digital presence that builds trust and drives conversions.",
  sectionNote:
    "Our team aligns social content with product launches, promotions, and marketplace goals.",
  bullets: [
    "Content calendars and creative production",
    "TikTok content and paid ads",
    "Influencer collaborations",
    "Growth reporting and optimization",
  ],
  panelTitle: "Channel focus",
  panelBody:
    "We align organic and paid strategies to drive visibility, engagement, and sales across key channels.",
  panelItems: [
    { title: "Social Media", description: "Consistent brand storytelling." },
    { title: "Paid Ads", description: "Targeted acquisition campaigns." },
    { title: "Influencers", description: "Partnerships that convert." },
  ],
  processTitle: "How we grow",
  processBody:
    "A repeatable workflow that turns content into measurable demand.",
  processSteps: [
    {
      title: "Strategy and content planning",
      text: "We build a platform-specific calendar based on audience insights and product priorities.",
    },
    {
      title: "Production and launch",
      text: "We create assets, run paid campaigns, and coordinate influencer activations.",
    },
    {
      title: "Optimization and reporting",
      text: "We analyze performance, refine creative, and reallocate budget for stronger ROI.",
    },
  ],
  cardsTitle: "Campaign building blocks",
  cardsBody:
    "We combine content, ads, and community to create compounding growth.",
  cards: [
    {
      title: "Content Production",
      text: "Creative assets tailored to each platform.",
      image:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Paid Growth",
      text: "Campaigns that drive traffic and sales.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Community Building",
      text: "Engagement strategies that build trust.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    },
  ],
  ctaTitle: "Ready to grow your brand online?",
  ctaText:
    "We will craft a digital plan that supports your marketplace goals and product roadmap.",
  ctaNote:
    "Ask for a 30-day content plan and channel recommendations.",
};

export default function DigitalSocialMediaPage() {
  return <ServiceDetailLayout styles={styles} content={content} />;
}
