import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import styles from "./page.module.css";

const content = {
  kicker: "Web Development",
  title: "Launch a storefront that converts and scales.",
  subtitle:
    "We design and develop fast, conversion-focused websites and portals built for long-term growth.",
  heroImage:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
  heroHighlights: [
    "Conversion-first UX",
    "Fast, SEO-ready builds",
    "Easy content updates",
    "Analytics + tracking setup",
  ],
  sectionTitle: "What you get",
  sectionBody:
    "From strategy to launch, we build ecommerce experiences that are easy to manage, easy to market, and ready to scale across multiple channels.",
  sectionNote:
    "We align design, messaging, and technical performance so your store can keep growing without expensive rebuilds later.",
  bullets: [
    "Custom Shopify and WooCommerce builds",
    "Conversion-focused UX and UI",
    "Payment, shipping, and inventory integrations",
    "Performance optimization for speed and SEO",
  ],
  panelTitle: "Built for growth",
  panelBody:
    "Your storefront is designed to support marketing, retention, and expansion across channels with clean architecture and reliable integrations.",
  panelItems: [
    { title: "Launch Ready", description: "From theme to checkout flow." },
    { title: "Optimized", description: "Speed, SEO, and conversion tuning." },
    { title: "Scalable", description: "Built to grow with your brand." },
  ],
  processTitle: "How we deliver",
  processBody:
    "A clear three-stage workflow keeps scope, timelines, and launch quality under control.",
  processSteps: [
    {
      title: "Discovery and UX mapping",
      text: "We audit your brand, audience, and competitors, then map the user journey and key conversion moments.",
    },
    {
      title: "Build and integration",
      text: "Custom theme development, app integrations, payment setup, and content structure optimized for speed.",
    },
    {
      title: "QA, launch, and handoff",
      text: "Performance testing, SEO checks, analytics setup, and team training so you can run the store confidently.",
    },
  ],
  cardsTitle: "What we build",
  cardsBody:
    "Choose the right storefront format and management tools based on your product catalog and growth goals.",
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
    "Tell us about your brand and we will map the fastest path to launch with clear milestones.",
  ctaNote:
    "You get a roadmap, estimated timeline, and platform recommendation before we start.",
};

export default function WebDevelopmentPage() {
  return <ServiceDetailLayout styles={styles} content={content} />;
}
