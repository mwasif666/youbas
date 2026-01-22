import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import BrandExpansionTrialCta from "./TrialCta";
import styles from "./page.module.css";

const content = {
  kicker: "Brand Expansion",
  title: "Scale beyond one marketplace.",
  subtitle:
    "We build multi-platform strategies that expand reach, protect margins, and grow demand.",
  heroImage:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
  heroHighlights: [
    "Multi-channel strategy",
    "Inventory sync systems",
    "International rollout support",
    "Brand consistency playbooks",
  ],
  sectionTitle: "Multi-platform growth",
  sectionBody:
    "Expand into new channels with unified operations, clean data, and consistent branding across every customer touchpoint.",
  sectionNote:
    "We help you avoid overselling, mismatched pricing, and fragmented messaging while you scale.",
  bullets: [
    "Cross-platform launch planning",
    "Listing syndication and inventory sync",
    "International marketplace support",
    "Performance reporting and scaling",
  ],
  panelTitle: "Growth playbooks",
  panelBody:
    "We align expansion with capacity, logistics, and marketing so growth stays predictable and sustainable.",
  panelItems: [
    { title: "Channel Strategy", description: "Prioritize the right platforms." },
    { title: "Operational Sync", description: "Avoid overselling and delays." },
    { title: "Brand Consistency", description: "Unified messaging everywhere." },
  ],
  processTitle: "How we expand",
  processBody:
    "We map the right channels and build the operational backbone before scaling spend.",
  processSteps: [
    {
      title: "Marketplace readiness audit",
      text: "Review catalog, pricing, compliance, and logistics to identify the right expansion path.",
    },
    {
      title: "Launch playbook",
      text: "Create listings, inventory sync rules, and channel-specific marketing plans.",
    },
    {
      title: "Scale and optimize",
      text: "Track performance across channels, refine pricing, and expand into new regions.",
    },
  ],
  cardsTitle: "Expansion pillars",
  cardsBody:
    "We focus on the parts of growth that protect margin and customer experience.",
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
    "We will build a rollout plan that protects your brand and margins across every channel.",
  ctaNote:
    "Get a channel roadmap, launch checklist, and inventory strategy.",
};

export default function BrandExpansionPage() {
  return (
    <>
      <ServiceDetailLayout styles={styles} content={content} />
      <BrandExpansionTrialCta />
    </>
  );
}
