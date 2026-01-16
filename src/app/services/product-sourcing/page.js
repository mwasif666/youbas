import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import styles from "./page.module.css";

const content = {
  kicker: "Product Sourcing",
  title: "Factory-direct sourcing with complete transparency.",
  subtitle:
    "We connect you to verified factories and negotiate pricing that protects margin.",
  heroImage:
    "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1400&q=80",
  sectionTitle: "Source smarter",
  sectionBody:
    "We manage supplier discovery, negotiation, sampling, and quality checks so you can scale with confidence.",
  bullets: [
    "Verified factory sourcing",
    "OEM and ODM coordination",
    "Sample and production management",
    "Quality inspection and reporting",
  ],
  panelTitle: "Supply chain visibility",
  panelBody:
    "Know your suppliers, costs, and timelines before you scale.",
  panelItems: [
    { title: "Factory Vetting", description: "Trusted manufacturing partners." },
    { title: "Cost Control", description: "Transparent pricing and terms." },
    { title: "Quality Checks", description: "Inspection before shipment." },
  ],
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
    "We handle supplier discovery and negotiation so you can grow safely.",
};

export default function ProductSourcingPage() {
  return <ServiceDetailLayout styles={styles} content={content} />;
}
