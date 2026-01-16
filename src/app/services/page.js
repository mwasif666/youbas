import Link from "next/link";
import styles from "./page.module.css";

export default function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      slug: "web-development",
      description:
        "High-converting storefronts, portals, and web systems built for scale.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Marketplace Management",
      slug: "marketplace-management",
      description:
        "End-to-end management for Amazon, eBay, Walmart, Etsy, and TikTok Shop.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Private Label",
      slug: "private-label",
      description:
        "Build a branded product line with packaging, compliance, and launch support.",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Product Sourcing",
      slug: "product-sourcing",
      description:
        "Factory-direct sourcing with transparent pricing and quality assurance.",
      image:
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "DDP Logistics",
      slug: "ddp-logistics",
      description:
        "China to USA / UK / AU door-to-door shipping with predictable costs.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Digital & Social Media",
      slug: "digital-social-media",
      description:
        "Content, ads, and growth systems that build demand and authority.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Wholesale & Bulk",
      slug: "wholesale-bulk",
      description:
        "Bulk purchasing strategy, supplier negotiation, and margin optimization.",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Brand Expansion",
      slug: "brand-expansion",
      description:
        "Multi-platform expansion with operational workflows and growth playbooks.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <div>
              <span className={styles.kicker}>Our Services</span>
              <h1 className={styles.title}>
                Everything you need to build and scale an e-commerce brand.
              </h1>
              <p className={styles.subtitle}>
                YouBas provides the operational muscle behind marketplace growth —
                sourcing, logistics, brand building, and digital expansion.
              </p>
            </div>
            <div className={styles.heroCard}>
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                alt="Team collaboration"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.pillsSection}>
        <div className="container">
          <div className={styles.pills}>
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={styles.pill}
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className="container">
          <div className={styles.grid}>
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={styles.card}
              >
                <div className={styles.cardImage}>
                  <img src={service.image} alt={service.title} />
                </div>
                <div className={styles.cardBody}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className={styles.cardLink}>Explore details</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
