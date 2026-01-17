import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import styles from "./page.module.css";

const content = {
  kicker: "Product Sourcing",
  title: "Factory-direct sourcing with complete transparency.",
  subtitle:
    "We connect you to verified factories and negotiate pricing that protects margin and quality.",
  heroImage:
    "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1400&q=80",
  heroHighlights: [
    "Verified factories",
    "Transparent pricing",
    "Sampling control",
    "Quality inspections",
  ],
  sectionTitle: "Source smarter",
  sectionBody:
    "We manage supplier discovery, negotiation, sampling, and quality checks so you can scale with confidence and predictability.",
  sectionNote:
    "Our sourcing team protects your margins while ensuring suppliers meet production and compliance standards.",
  bullets: [
    "Verified factory sourcing",
    "OEM and ODM coordination",
    "Sample and production management",
    "Quality inspection and reporting",
  ],
  panelTitle: "Supply chain visibility",
  panelBody:
    "Know your suppliers, costs, and timelines before you scale so you can plan inventory with clarity.",
  panelItems: [
    { title: "Factory Vetting", description: "Trusted manufacturing partners." },
    { title: "Cost Control", description: "Transparent pricing and terms." },
    { title: "Quality Checks", description: "Inspection before shipment." },
  ],
  processTitle: "How we source",
  processBody:
    "A transparent workflow that keeps quality, cost, and timelines aligned.",
  processSteps: [
    {
      title: "Supplier discovery",
      text: "We shortlist verified factories based on product category, capacity, and compliance.",
    },
    {
      title: "Sampling and negotiation",
      text: "We manage samples, iterate on specs, and negotiate pricing and MOQs.",
    },
    {
      title: "Production oversight",
      text: "We monitor production and conduct inspections before shipment.",
    },
  ],
  cardsTitle: "Sourcing support",
  cardsBody:
    "We cover every stage from supplier selection to final inspection.",
  cards: [
    {
      title: "Supplier Network",
      text: "Access vetted factories aligned to your category.",
      image:
        "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Sampling Process",
      text: "Iterate quickly with structured sampling workflows.",
      image:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Quality Assurance",
      text: "Inspect, test, and verify product standards.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    },
  ],
  ctaTitle: "Need a reliable sourcing partner?",
  ctaText:
    "We handle supplier discovery and negotiation so you can grow safely and protect cash flow.",
  ctaNote:
    "Ask for a sourcing brief template to get started quickly.",
};

export default function ProductSourcingPage() {
  return <ServiceDetailLayout styles={styles} content={content} />;
}
