import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import styles from "./page.module.css";

const content = {
  kicker: "Digital & Social Media",
  title: "Build authority, traffic, and demand.",
  subtitle:
    "We design content and campaigns that grow your brand across social platforms.",
  heroImage:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
  sectionTitle: "Full-funnel growth",
  sectionBody:
    "From content planning to paid ads, we create a consistent digital presence.",
  bullets: [
    "Content calendars and creative production",
    "TikTok content and paid ads",
    "Influencer collaborations",
    "Growth reporting and optimization",
  ],
  panelTitle: "Channel focus",
  panelBody:
    "We align organic and paid strategies to drive visibility and sales.",
  panelItems: [
    { title: "Social Media", description: "Consistent brand storytelling." },
    { title: "Paid Ads", description: "Targeted acquisition campaigns." },
    { title: "Influencers", description: "Partnerships that convert." },
  ],
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
    "We will craft a digital plan that supports your marketplace goals.",
};

export default function DigitalSocialMediaPage() {
  return <ServiceDetailLayout styles={styles} content={content} />;
}
