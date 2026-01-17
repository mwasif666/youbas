import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import styles from "./page.module.css";

const content = {
  kicker: "DDP Logistics",
  title: "Door-to-door shipping with predictable costs.",
  subtitle:
    "We manage DDP logistics from China to the USA, UK, and Australia so you avoid customs headaches.",
  heroImage:
    "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1400&q=80",
  heroHighlights: [
    "Door-to-door DDP",
    "Predictable landed costs",
    "Air and sea options",
    "Live tracking updates",
  ],
  sectionTitle: "Logistics made simple",
  sectionBody:
    "You pay one landed cost while we handle carriers, customs, and delivery from the factory to your warehouse or fulfillment center.",
  sectionNote:
    "We coordinate documentation, routing, and timelines so your inventory arrives on schedule and in compliance.",
  bullets: [
    "DDP shipping with duties handled",
    "Air and sea freight options",
    "End-to-end shipment tracking",
    "Clear delivery timelines",
  ],
  panelTitle: "Reliable delivery",
  panelBody:
    "We coordinate with carriers and freight partners for consistent timelines and clear handoffs.",
  panelItems: [
    { title: "Freight Options", description: "Air or sea based on budget." },
    { title: "Customs", description: "Documentation and duties handled." },
    { title: "Tracking", description: "Visibility from factory to door." },
  ],
  processTitle: "How we ship",
  processBody:
    "A transparent workflow keeps cost, time, and compliance under control.",
  processSteps: [
    {
      title: "Quote and route planning",
      text: "We compare air and sea routes, confirm weights, and lock in the best landed cost.",
    },
    {
      title: "Booking and customs",
      text: "We handle carrier booking, export paperwork, and duty calculations before departure.",
    },
    {
      title: "Delivery and confirmation",
      text: "We track the shipment end-to-end and confirm delivery at your destination.",
    },
  ],
  cardsTitle: "Logistics coverage",
  cardsBody:
    "We handle the full shipping lifecycle so you can focus on sales and replenishment.",
  cards: [
    {
      title: "Freight Coordination",
      text: "The right route for your timeline and budget.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Customs Handling",
      text: "Paperwork and compliance managed end-to-end.",
      image:
        "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Delivery Assurance",
      text: "Predictable landed costs and delivery timelines.",
      image:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    },
  ],
  ctaTitle: "Need DDP shipping support?",
  ctaText:
    "We will plan the most efficient shipping route for your inventory and margin goals.",
  ctaNote:
    "Share product specs and destination for a detailed landed-cost estimate.",
};

export default function DdpLogisticsPage() {
  return <ServiceDetailLayout styles={styles} content={content} />;
}
