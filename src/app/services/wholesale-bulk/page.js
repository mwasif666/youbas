import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import styles from "./page.module.css";

const content = {
  kicker: "Wholesale & Bulk",
  title: "Scale with bulk purchasing power.",
  subtitle:
    "We negotiate bulk pricing, manage supplier terms, and improve your margins.",
  heroImage:
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1400&q=80",
  sectionTitle: "Bulk buying strategy",
  sectionBody:
    "We help you move larger volumes with better pricing and reliable suppliers.",
  bullets: [
    "Bulk sourcing and negotiation",
    "Supplier relationship management",
    "Inventory planning and replenishment",
    "Margin optimization",
  ],
  panelTitle: "Better pricing, better terms",
  panelBody:
    "Secure stable pricing, payment terms, and production capacity.",
  panelItems: [
    { title: "Cost Savings", description: "Lower per-unit costs." },
    { title: "Supply Stability", description: "Reliable production capacity." },
    { title: "Forecasting", description: "Plan demand with confidence." },
  ],
  cards: [
    {
      title: "Supplier Negotiation",
      text: "Unlock bulk pricing and reliable lead times.",
      image:
        "https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Inventory Planning",
      text: "Balance volume, cash flow, and lead time.",
      image:
        "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Margin Control",
      text: "Increase profit per order with smarter sourcing.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    },
  ],
  ctaTitle: "Looking to scale with bulk orders?",
  ctaText:
    "We help you secure pricing and production that support growth.",
};

export default function WholesaleBulkPage() {
  return <ServiceDetailLayout styles={styles} content={content} />;
}
