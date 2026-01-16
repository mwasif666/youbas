export default function ServiceDetailLayout({ styles, content }) {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div>
              <span className={styles.kicker}>{content.kicker}</span>
              <h1 className={styles.title}>{content.title}</h1>
              <p className={styles.subtitle}>{content.subtitle}</p>
            </div>
            <div className={styles.heroImage}>
              <img src={content.heroImage} alt={content.title} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionGrid}>
            <div>
              <h2>{content.sectionTitle}</h2>
              <p className={styles.bodyText}>{content.sectionBody}</p>
              <ul className={styles.bullets}>
                {content.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.panel}>
              <h3>{content.panelTitle}</h3>
              <p>{content.panelBody}</p>
              <div className={styles.panelList}>
                {content.panelItems.map((item) => (
                  <div key={item.title} className={styles.panelItem}>
                    <span>{item.title}</span>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.cards}>
            {content.cards.map((card) => (
              <div key={card.title} className={styles.card}>
                <img src={card.image} alt={card.title} />
                <div className={styles.cardBody}>
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <div>
              <h2>{content.ctaTitle}</h2>
              <p>{content.ctaText}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
