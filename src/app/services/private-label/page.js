import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import styles from "./page.module.css";

const content = {
  kicker: "Private Label",
  title: "Build a brand customers recognize and trust.",
  subtitle:
    "We handle sourcing, branding, packaging, and launch so your product stands out and stays compliant.",
  heroImage:
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=80",
  heroHighlights: [
    "Product validation",
    "Custom branding",
    "Packaging and inserts",
    "Launch playbook",
  ],
  sectionTitle: "Private label done right",
  sectionBody:
    "From product validation to final packaging, we build a brand that is marketplace-ready and defensible.",
  sectionNote:
    "We help you avoid costly rework by aligning packaging, claims, and compliance from day one.",
  bullets: [
    "Product validation and positioning",
    "Custom branding and packaging",
    "Trademark and brand registry guidance",
    "Compliance and documentation support",
  ],
  panelTitle: "Launch with confidence",
  panelBody:
    "We align every step with marketplace standards and customer expectations for long-term trust.",
  panelItems: [
    { title: "Brand Story", description: "Messaging that builds trust." },
    { title: "Packaging", description: "Shelf-ready presentation." },
    { title: "Launch Plan", description: "Go-to-market support." },
  ],
  processTitle: "How we build your brand",
  processBody:
    "A structured flow that moves from research to launch without surprises.",
  processSteps: [
    {
      title: "Research and positioning",
      text: "We validate demand, define the unique angle, and plan product differentiation.",
    },
    {
      title: "Design and sourcing",
      text: "We coordinate packaging, branding assets, and factory-ready specifications.",
    },
    {
      title: "Launch and scale",
      text: "We prepare listings, brand registry guidance, and launch support.",
    },
  ],
  cardsTitle: "Private label deliverables",
  cardsBody:
    "Everything you need to go from concept to a polished brand presence.",
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
    "We will guide you from product idea to a fully branded launch with clear milestones.",
  ctaNote:
    "Start with a product concept call and a brand checklist.",
};

export default function PrivateLabelPage() {
  return <ServiceDetailLayout styles={styles} content={content} />;
}
