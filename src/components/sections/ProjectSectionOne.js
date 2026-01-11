import styles from "./ProjectSectionOne.module.css";

export default function ProjectSectionOne() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.kicker}>WHY WE EXIST</p>
          <h2 className={styles.heading}>Our Mission & Our Vision</h2>
          <p className={styles.subheading}>
            We build the systems, sourcing, and growth infrastructure that helps
            brands scale globally with control and confidence.
          </p>
        </div>

        {/* Bootstrap Grid */}
        <div className="row g-3">
          {/* Mission */}
          <div className="col-12 col-lg-6">
            <article className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.pill}>Our Mission</span>
                <span className={styles.icon} aria-hidden="true">
                  ◎
                </span>
              </div>

              <h3 className={styles.title}>Enable Global Expansion</h3>

              <p className={styles.desc}>
                To enable business leaders and brands to expand globally through
                reliable e-commerce systems, cost-efficient sourcing, and
                scalable digital infrastructure.
              </p>

              <div className={styles.divider} />

              <ul className={styles.list}>
                <li>High-performing commerce systems</li>
                <li>Cost-efficient sourcing & operations</li>
                <li>Scalable workflows & automation</li>
              </ul>
            </article>
          </div>

          {/* Vision */}
          <div className="col-12 col-lg-6">
            <article className={`${styles.card} ${styles.cardAlt}`}>
              <div className={styles.cardTop}>
                <span className={styles.pill}>Our Vision</span>
                <span className={styles.icon} aria-hidden="true">
                  ◇
                </span>
              </div>

              <h3 className={styles.title}>Become a Trusted Partner</h3>

              <p className={styles.desc}>
                To be recognized as a trusted global e-commerce solutions
                partner for businesses seeking long-term growth, operational
                control, and international market dominance.
              </p>

              <div className={styles.divider} />

              <ul className={styles.list}>
                <li>Long-term growth & stability</li>
                <li>Operational control & clarity</li>
                <li>Multi-marketplace dominance</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
