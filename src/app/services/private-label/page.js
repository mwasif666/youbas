import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import styles from "./page.module.css";

const content = {
  kicker: "Private Label",
  title: "Build a brand customers recognize and trust.",
  subtitle:
    "We handle sourcing, branding, packaging, and launch so your product stands out.",
  heroImage:
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=80",
  sectionTitle: "Private label done right",
  sectionBody:
    "From product validation to final packaging, we build a brand that is marketplace-ready.",
  bullets: [
    "Product validation and positioning",
    "Custom branding and packaging",
    "Trademark and brand registry guidance",
    "Compliance and documentation support",
  ],
  panelTitle: "Launch with confidence",
  panelBody:
    "We align every step with marketplace standards and customer expectations.",
  panelItems: [
    { title: "Brand Story", description: "Messaging that builds trust." },
    { title: "Packaging", description: "Shelf-ready presentation." },
    { title: "Launch Plan", description: "Go-to-market support." },
  ],
  cards: [
    {
      title: "Packaging Design",
      text: "Professional packaging that elevates perception.",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Brand Registry",
      text: "Navigate trademarks and marketplace compliance.",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Launch Support",
      text: "Position your product with the right listings and assets.",
      image:
        "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80",
    },
  ],
  ctaTitle: "Want to launch a private label brand?",
  ctaText:
    "We will guide you from product idea to a fully branded launch.",
};

export default function PrivateLabelPage() {
  return <ServiceDetailLayout styles={styles} content={content} />;
}
