import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import styles from "./page.module.css";

const content = {
  kicker: "Marketplace Management",
  title: "Hands-free management for all major marketplaces.",
  subtitle:
    "We manage listings, orders, account health, and growth so you can focus on expansion.",
  heroImage:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
  sectionTitle: "Coverage across platforms",
  sectionBody:
    "Our team handles the daily operations that keep your marketplaces stable, compliant, and profitable.",
  bullets: [
    "Account setup and optimization",
    "Product listings and SEO",
    "Order and inventory management",
    "Account health monitoring",
  ],
  panelTitle: "Platform expertise",
  panelBody:
    "We build repeatable systems for Amazon, eBay, Walmart, Etsy, and TikTok Shop.",
  panelItems: [
    { title: "Amazon", description: "Listings, ads, and growth strategy." },
    { title: "Walmart", description: "Catalog management and compliance." },
    { title: "eBay + Etsy", description: "Storefront and promotions." },
  ],
  cards: [
    {
      title: "Listing Optimization",
      text: "High-converting product pages built for search and sales.",
      image:
        "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Account Health",
      text: "Proactive monitoring to prevent suspensions and penalties.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Growth Reporting",
      text: "Clear insights to scale with confidence.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    },
  ],
  ctaTitle: "Need a team to run your marketplaces?",
  ctaText:
    "We manage your stores with the same discipline as an in-house team.",
};

export default function MarketplaceManagementPage() {
  return <ServiceDetailLayout styles={styles} content={content} />;
}
