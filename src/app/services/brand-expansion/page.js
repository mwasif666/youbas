import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import styles from "./page.module.css";

const content = {
  kicker: "Brand Expansion",
  title: "Scale beyond one marketplace.",
  subtitle:
    "We build multi-platform strategies that expand reach and revenue.",
  heroImage:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
  sectionTitle: "Multi-platform growth",
  sectionBody:
    "Expand into new channels with unified operations and consistent branding.",
  bullets: [
    "Cross-platform launch planning",
    "Listing syndication and inventory sync",
    "International marketplace support",
    "Performance reporting and scaling",
  ],
  panelTitle: "Growth playbooks",
  panelBody:
    "We align expansion with capacity, logistics, and marketing.",
  panelItems: [
    { title: "Channel Strategy", description: "Prioritize the right platforms." },
    { title: "Operational Sync", description: "Avoid overselling and delays." },
    { title: "Brand Consistency", description: "Unified messaging everywhere." },
  ],
  cards: [
    {
      title: "New Marketplace Launches",
      text: "Expand to Amazon, Walmart, eBay, and beyond.",
      image:
        "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "International Growth",
      text: "Support for global operations and logistics.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Scalable Operations",
      text: "Systems and reporting for multi-channel scale.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    },
  ],
  ctaTitle: "Ready to expand your brand?",
  ctaText:
    "We will build a rollout plan that protects your brand and margins.",
};

export default function BrandExpansionPage() {
  return <ServiceDetailLayout styles={styles} content={content} />;
}
