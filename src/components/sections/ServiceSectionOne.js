import Link from "next/link";
import styles from "./ServiceSectionOne.module.css";

import {
  FiGlobe,
  FiTruck,
  FiShoppingCart,
  FiTag,
  FiPackage,
  FiLayers,
  FiTrendingUp,
  FiUsers,
  FiBox,
} from "react-icons/fi";

const pickIcon = (title = "") => {
  const t = title.toLowerCase();

  if (t.includes("shopify") || t.includes("web") || t.includes("store"))
    return FiGlobe;

  if (t.includes("ddp") || t.includes("shipping") || t.includes("logistics"))
    return FiTruck;

  if (
    t.includes("marketplace") ||
    t.includes("amazon") ||
    t.includes("walmart")
  )
    return FiShoppingCart;

  if (t.includes("private label") || t.includes("brand")) return FiTag;

  if (t.includes("factory") || t.includes("sourcing")) return FiPackage;

  if (t.includes("wholesale") || t.includes("bulk")) return FiBox;

  if (t.includes("digital") || t.includes("social") || t.includes("marketing"))
    return FiTrendingUp;

  if (t.includes("expansion") || t.includes("multi")) return FiLayers;

  return FiUsers;
};

export default function ServiceSectionOne() {
  const services = [
    {
      id: 1,
      title: "Web, Shopify & Custom Store Development",
      description:
        "We design and develop high-converting e-commerce stores on Shopify, WooCommerce and custom frameworks. Our builds are optimized for speed, mobile UX and conversions. From product pages to checkout flows, everything is structured to increase sales. We also create portals, dashboards and automation to reduce manual work. Your store becomes a scalable system, not just a website.",
      link: "/service-details",
    },
    {
      id: 2,
      title: "Factory-Direct Product Sourcing",
      description:
        "We source products directly from verified factories to secure better pricing and quality. Sampling, negotiations, packaging and production coordination are handled by our team. You get transparency, quality checks and reliable timelines. Whether it’s private label or wholesale, we manage end-to-end execution. This helps you maximize margins and avoid middlemen.",
      link: "/service-details",
    },
    {
      id: 3,
      title: "Marketplace Management at Scale",
      description:
        "We manage Amazon, eBay and Walmart stores end-to-end — listings, SEO, pricing and inventory. Orders, support and account health monitoring are handled consistently. We optimize performance, improve conversion and scale responsibly. You get predictable growth without operational chaos. Our focus is building a long-term asset for you.",
      link: "/service-details",
    },
    {
      id: 4,
      title: "Private Label & Brand Building",
      description:
        "We turn your product idea into a strong global brand customers trust. From branding, packaging and trademarks to Brand Registry and A+ content. We build identity that increases conversion and perceived product value. Your brand stands out in competitive categories. The goal is ownership — not just selling products.",
      link: "/service-details",
    },
    {
      id: 5,
      title: "DDP Logistics & Global Shipping",
      description:
        "We handle complete DDP shipping from China to USA, UK and Australia. Customs, duties, taxes and paperwork are managed so you don’t face surprises. We deliver to Amazon warehouses or your location with clear costing. This reduces delays and supply chain risk. Your inventory arrives ready to sell.",
      link: "/service-details",
    },
    {
      id: 6,
      title: "Wholesale & Bulk Supply Solutions",
      description:
        "We provide wholesale and bulk sourcing for resellers, distributors and brands. You get stable supply, competitive pricing and consistent quality checks. Production coordination, packaging and shipping are managed smoothly. Ideal for Amazon FBA, private label or local distribution. Scale confidently without supply headaches.",
      link: "/service-details",
    },
    {
      id: 7,
      title: "Digital Marketing & Social Media Growth",
      description:
        "We grow your brand through TikTok, Instagram, Facebook and performance ads. From content strategy to creatives and influencer collaboration — we execute fully. Our approach builds trust, demand and repeat customers. This improves brand visibility beyond marketplaces. Your brand becomes recognizable and scalable.",
      link: "/service-details",
    },
    {
      id: 8,
      title: "Multi-Marketplace Brand Expansion",
      description:
        "We expand your products across marketplaces and your own store for multiple revenue streams. Pricing, inventory, and positioning are aligned across channels. This reduces dependency on one platform and increases reach. We scale strategically into new opportunities. Your business becomes more resilient and profitable.",
      link: "/service-details",
    },
  ].map((s) => ({ ...s, icon: pickIcon(s.title) }));

  return (
    <section className={styles.section}>
      {/* Bootstrap container */}
      <div className={`container ${styles.container}`}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.kicker}>OUR SERVICES</div>
          <h2 className={styles.heading}>SERVICES WE OFFER TO CUSTOMERS</h2>
          <p className={styles.subheading}>
            End-to-end infrastructure to build, scale and expand your e-commerce
            business globally.
          </p>
        </div>

        {/* Bootstrap row */}
        <div className="row justify-content-center g-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div key={service.id} className="col-12 col-md-6 col-lg-4">
                <article className={styles.card}>
                  <div className={styles.cardTop}>
                    <div className={styles.iconWrap} aria-hidden="true">
                      <Icon className={styles.icon} />
                    </div>
                    <span className={styles.badge}>Service</span>
                  </div>

                  <h3 className={styles.cardTitle}>
                    <Link href={service.link} className={styles.titleLink}>
                      {service.title}
                    </Link>
                  </h3>

                  <p className={styles.cardDesc}>{service.description}</p>

                  <div className={styles.cardFooter}>
                    <Link href={service.link} className={styles.cta}>
                      Explore details <span className={styles.arrow}>→</span>
                    </Link>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
