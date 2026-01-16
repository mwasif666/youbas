import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import styles from "./page.module.css";

const content = {
  kicker: "Web Development",
  title: "Launch a storefront that converts and scales.",
  subtitle:
    "We design and develop fast, conversion-focused websites and portals built for long-term growth.",
  heroImage:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
  sectionTitle: "What you get",
  sectionBody:
    "From strategy to launch, we build ecommerce experiences that are easy to manage and ready to scale.",
  bullets: [
    "Custom Shopify and WooCommerce builds",
    "Conversion-focused UX and UI",
    "Payment, shipping, and inventory integrations",
    "Performance optimization for speed and SEO",
  ],
  panelTitle: "Built for growth",
  panelBody:
    "Your storefront is designed to support marketing, retention, and expansion across channels.",
  panelItems: [
    { title: "Launch Ready", description: "From theme to checkout flow." },
    { title: "Optimized", description: "Speed, SEO, and conversion tuning." },
    { title: "Scalable", description: "Built to grow with your brand." },
  ],
  cards: [
    {
      title: "Shopify Stores",
      text: "High-performing storefronts with custom sections and apps.",
      image:
        "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "WooCommerce",
      text: "Flexible commerce builds with powerful content control.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Portals & Dashboards",
      text: "Custom admin portals to manage operations at scale.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
    },
  ],
  ctaTitle: "Ready to build a high-converting site?",
  ctaText:
    "Tell us about your brand and we will map the fastest path to launch.",
};

export default function WebDevelopmentPage() {
  return <ServiceDetailLayout styles={styles} content={content} />;
}
