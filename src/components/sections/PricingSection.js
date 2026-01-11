"use client";
import { useMemo, useState } from "react";
import { FaCheck } from "react-icons/fa";
import styles from "./PricingSection.module.css";

/**
 * Tabs = your services list
 */
const serviceTabs = [
  { key: "web", label: "Web Development" },
  { key: "marketplace", label: "Marketplace Management" },
  { key: "privateLabel", label: "Private Label" },
  { key: "sourcing", label: "Product Sourcing" },
  { key: "ddp", label: "DDP Logistics" },
  { key: "digital", label: "Digital & Social Media" },
  { key: "wholesale", label: "Wholesale & Bulk" },
  { key: "expansion", label: "Brand Expansion" },
];

/**
 * Pricing data per tab
 * (You can edit prices/features per service as you want)
 */
const pricingByService = {
  web: [
    {
      name: "Starter",
      price: "$19",
      period: "/month",
      desc: "Perfect for launching your store with a clean, conversion-ready setup.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Shopify / WooCommerce Setup",
        "Essential Pages & Policies",
        "Basic Speed Optimization",
        "Mobile Responsive Layout",
      ],
      cta: "Start Free",
    },
    {
      name: "Growth",
      price: "$49",
      period: "/month",
      desc: "Best for brands that want better UX, structure, and higher conversions.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Store UI Improvements",
        "Custom Sections & Landing Page",
        "Checkout Optimization",
        "SEO Basics + Tracking Setup",
        "Monthly Performance Report",
        "Support & Fixes",
      ],
      cta: "Most Popular",
      featured: true,
    },
    {
      name: "Scale",
      price: "$99",
      period: "/month",
      desc: "For serious sellers needing custom portals, automation & advanced builds.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Custom Web Portals / Dashboards",
        "Automation & Integrations",
        "Advanced CRO Enhancements",
        "Speed & Core Web Vitals",
        "Dedicated Support",
        "Priority Delivery",
      ],
      cta: "Book a Call",
    },
  ],

  marketplace: [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      desc: "For new sellers who need structured setup and guidance.",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Store Audit & Action Plan",
        "Basic Listing Optimization",
        "Account Health Checklist",
        "Monthly Report",
      ],
      cta: "Start Free",
    },
    {
      name: "Growth",
      price: "$79",
      period: "/month",
      desc: "End-to-end store management to improve sales & stability.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Listing SEO + A/B Improvements",
        "Inventory & Order Management",
        "Customer Support Handling",
        "Account Health Monitoring",
        "Weekly Growth Reports",
        "Optimization & Scaling",
      ],
      cta: "Most Popular",
      featured: true,
    },
    {
      name: "Scale",
      price: "$149",
      period: "/month",
      desc: "Advanced scaling for global sellers & multi-channel operations.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Multi-Marketplace Scaling",
        "Advanced Ads + Strategy",
        "Category Expansion Plan",
        "Dedicated Account Manager",
        "Priority Support",
        "Weekly KPI Review",
      ],
      cta: "Book a Call",
    },
  ],

  privateLabel: [
    {
      name: "Starter",
      price: "$39",
      period: "/month",
      desc: "Perfect to begin private label with a clear brand direction.",
      image:
        "https://images.unsplash.com/photo-1520975958225-2a34a5d1a7ae?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Brand Direction & Positioning",
        "Packaging Guidance",
        "Basic Trademark Roadmap",
        "Launch Checklist",
      ],
      cta: "Start Free",
    },
    {
      name: "Growth",
      price: "$99",
      period: "/month",
      desc: "Branding + packaging + marketplace readiness for winning launches.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Brand Identity Guidance",
        "Packaging Structure & Copy",
        "Brand Registry Guidance",
        "A+ Content Outline",
        "Launch Strategy",
        "Weekly Reviews",
      ],
      cta: "Most Popular",
      featured: true,
    },
    {
      name: "Scale",
      price: "$199",
      period: "/month",
      desc: "For brands building long-term value and portfolio expansion.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Trademark + Registry Support",
        "Full Brand System Guidance",
        "Multi-Product Brand Plan",
        "Conversion Content Strategy",
        "Dedicated Manager",
        "Priority Delivery",
      ],
      cta: "Book a Call",
    },
  ],

  sourcing: [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      desc: "Source products safely with verified suppliers and sampling support.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Supplier Shortlisting",
        "Sample Coordination",
        "Basic Negotiation Support",
        "Quality Checklist",
      ],
      cta: "Start Free",
    },
    {
      name: "Growth",
      price: "$129",
      period: "/month",
      desc: "Factory-direct sourcing with QC, packaging and production handling.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Factory Direct Negotiations",
        "Production Coordination",
        "Packaging & Branding Support",
        "QC + Inspection Plan",
        "Shipment Planning",
        "Weekly Updates",
      ],
      cta: "Most Popular",
      featured: true,
    },
    {
      name: "Scale",
      price: "$249",
      period: "/month",
      desc: "For bulk sourcing and managing supply chain at scale.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Multiple Factory Pipeline",
        "Bulk Order Scaling Support",
        "Advanced QC / SLA Setup",
        "Cost Optimization",
        "Dedicated Manager",
        "Priority Handling",
      ],
      cta: "Book a Call",
    },
  ],

  ddp: [
    {
      name: "Starter",
      price: "$39",
      period: "/month",
      desc: "Understand DDP options and ship with clarity — no surprises.",
      image:
        "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200&auto=format&fit=crop",
      features: [
        "DDP Cost Estimation",
        "Basic Route Planning",
        "Customs Checklist",
        "Monthly Support",
      ],
      cta: "Start Free",
    },
    {
      name: "Growth",
      price: "$119",
      period: "/month",
      desc: "DDP shipping support to USA/UK/AUS including documentation guidance.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
      features: [
        "DDP Plan (USA/UK/AUS)",
        "Docs & Compliance Guidance",
        "Warehouse / Amazon Delivery Plan",
        "Cost Optimization",
        "Weekly Updates",
        "Support Handling",
      ],
      cta: "Most Popular",
      featured: true,
    },
    {
      name: "Scale",
      price: "$199",
      period: "/month",
      desc: "Built for frequent shipments and inventory planning at scale.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Shipment Scheduling System",
        "Inventory Replenishment Plan",
        "Multi-route Optimization",
        "Priority Support",
        "Dedicated Manager",
        "Weekly KPI Review",
      ],
      cta: "Book a Call",
    },
  ],

  digital: [
    {
      name: "Starter",
      price: "$19",
      period: "/month",
      desc: "Simple content direction and posting guidance for your brand.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Content Plan Guidance",
        "Profile Optimization",
        "Basic Creative Direction",
        "Monthly Report",
      ],
      cta: "Start Free",
    },
    {
      name: "Growth",
      price: "$79",
      period: "/month",
      desc: "Content + ads strategy + influencer direction for faster growth.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
      features: [
        "TikTok / IG Strategy",
        "Ad Funnel Guidance",
        "Influencer Direction",
        "Creative Briefs",
        "Weekly Reviews",
        "Growth Reports",
      ],
      cta: "Most Popular",
      featured: true,
    },
    {
      name: "Scale",
      price: "$149",
      period: "/month",
      desc: "For brands that want performance + consistency at scale.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Full Growth System",
        "Performance Campaign Planning",
        "UGC & Influencer Scaling",
        "Weekly KPI Review",
        "Dedicated Manager",
        "Priority Support",
      ],
      cta: "Book a Call",
    },
  ],

  wholesale: [
    {
      name: "Starter",
      price: "$39",
      period: "/month",
      desc: "Wholesale basics for resellers — stable supply & clean execution.",
      image:
        "https://images.unsplash.com/photo-1580674286071-18e6420a1b41?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Supplier Options",
        "Bulk Pricing Guidance",
        "Basic QC Checklist",
        "Monthly Updates",
      ],
      cta: "Start Free",
    },
    {
      name: "Growth",
      price: "$99",
      period: "/month",
      desc: "Reliable bulk sourcing with packaging and shipment planning.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Bulk Sourcing & Negotiations",
        "Packaging Coordination",
        "Shipment Planning",
        "QC & Inspection Support",
        "Weekly Updates",
        "Scaling Guidance",
      ],
      cta: "Most Popular",
      featured: true,
    },
    {
      name: "Scale",
      price: "$189",
      period: "/month",
      desc: "For distributors managing high volume with consistent supply chain.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Multi-supplier Pipeline",
        "Cost Optimization",
        "High Volume Coordination",
        "Priority Handling",
        "Dedicated Manager",
        "Weekly KPI Review",
      ],
      cta: "Book a Call",
    },
  ],

  expansion: [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      desc: "Expand carefully with the right structure and positioning.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Channel Expansion Plan",
        "Basic Market Research",
        "Roadmap & Checklist",
        "Monthly Review",
      ],
      cta: "Start Free",
    },
    {
      name: "Growth",
      price: "$89",
      period: "/month",
      desc: "Multi-channel expansion across marketplaces and your own store.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Multi-channel Setup Plan",
        "Pricing & Inventory Alignment",
        "Positioning & Optimization",
        "Weekly Reviews",
        "Growth Reports",
        "Scaling Support",
      ],
      cta: "Most Popular",
      featured: true,
    },
    {
      name: "Scale",
      price: "$169",
      period: "/month",
      desc: "Built for brands expanding globally with strong execution.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Global Expansion Strategy",
        "Advanced Execution Plan",
        "Team & Operations Support",
        "Dedicated Manager",
        "Weekly KPI Review",
        "Priority Support",
      ],
      cta: "Book a Call",
    },
  ],
};

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState(serviceTabs[0].key);

  const activePackages = useMemo(() => {
    return pricingByService[activeTab] || [];
  }, [activeTab]);

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Heading */}
        <div className={styles.header}>
          <p className={styles.kicker}>PRICING</p>
          <h2 className={styles.heading}>Choose a plan for your goal</h2>
          <p className={styles.subheading}>
            Select a service tab to view pricing plans for that specific
            service.
          </p>
        </div>

        {/* Tabs */}
        <div className={styles.tabsWrap}>
          <div className={styles.tabs} role="tablist" aria-label="Service tabs">
            {serviceTabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.key}
                className={`${styles.tabBtn} ${
                  activeTab === tab.key ? styles.activeTab : ""
                }`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="row g-4 justify-content-center">
          {activePackages.map((pkg, i) => (
            <div className="col-xl-4 col-lg-4 col-md-6" key={i}>
              <div
                className={`${styles.card} ${
                  pkg.featured ? styles.featured : ""
                }`}
              >
                {pkg.featured && <span className={styles.badge}>Popular</span>}

                <div className={styles.imageWrap}>
                  <img src={pkg.image} alt={pkg.name} />
                </div>

                <h3 className={styles.title}>{pkg.name}</h3>
                <p className={styles.desc}>{pkg.desc}</p>

                <div className={styles.priceWrap}>
                  <span className={styles.price}>{pkg.price}</span>
                  <span className={styles.period}>{pkg.period}</span>
                </div>

                <ul className={styles.list}>
                  {pkg.features.map((item, idx) => (
                    <li key={idx}>
                      <FaCheck />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a href="#!" className={styles.btn}>
                  {pkg.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
