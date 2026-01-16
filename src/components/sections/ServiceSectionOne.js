'use client'
import Link from "next/link";
import styles from "./ServiceSectionOne.module.css";
import { useMemo } from "react";

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

  if (t.includes("marketplace") || t.includes("amazon") || t.includes("walmart"))
    return FiShoppingCart;

  if (t.includes("private label") || t.includes("brand"))
    return FiTag;

  if (t.includes("factory") || t.includes("sourcing"))
    return FiPackage;

  if (t.includes("wholesale") || t.includes("bulk"))
    return FiBox;

  if (t.includes("digital") || t.includes("social") || t.includes("marketing"))
    return FiTrendingUp;

  if (t.includes("expansion") || t.includes("multi"))
    return FiLayers;

  return FiUsers;
};

export default function ServiceSectionOne() {
  const services = useMemo(
    () => [
      {
        id: "web-dev",
        title: "Web Development",
        description:
          "High-converting storefronts, portals, and custom web systems.",
        link: "/services/web-development",
      },
      {
        id: "marketplace",
        title: "Marketplace Management",
        description:
          "End-to-end management for Amazon, eBay, Walmart, and more.",
        link: "/services/marketplace-management",
      },
      {
        id: "private-label",
        title: "Private Label",
        description:
          "Branding, packaging, compliance, and launch support.",
        link: "/services/private-label",
      },
      {
        id: "sourcing",
        title: "Product Sourcing",
        description:
          "Factory-direct sourcing with transparent pricing and QA.",
        link: "/services/product-sourcing",
      },
      {
        id: "ddp",
        title: "DDP Logistics",
        description:
          "China to USA / UK / AU shipping with duties handled.",
        link: "/services/ddp-logistics",
      },
      {
        id: "digital",
        title: "Digital & Social Media",
        description:
          "Content, ads, and growth systems for social platforms.",
        link: "/services/digital-social-media",
      },
      {
        id: "wholesale",
        title: "Wholesale & Bulk",
        description:
          "Bulk purchasing strategy and supplier negotiations.",
        link: "/services/wholesale-bulk",
      },
      {
        id: "expansion",
        title: "Brand Expansion",
        description:
          "Multi-platform scaling and operational playbooks.",
        link: "/services/brand-expansion",
      },
    ],
    []
  );

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
            const Icon = pickIcon(service.title);

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
