export default function ServiceDetailLayout({ styles, content }) {
  const heroHighlights = content.heroHighlights || [];
  const bullets = content.bullets || [];
  const panelItems = content.panelItems || [];
  const processSteps = content.processSteps || [];
  const cards = content.cards || [];

  return (
    <div className={styles.page}>
      <section className={`${styles.hero} section-padding`}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div>
              <span className={styles.kicker}>{content.kicker}</span>
              <h1 className={styles.title}>{content.title}</h1>
              <p className={styles.subtitle}>{content.subtitle}</p>
              {heroHighlights.length > 0 && (
                <div className={styles.heroHighlights}>
                  {heroHighlights.map((item) => (
                    <div key={item} className={styles.heroHighlight}>
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className={styles.heroImage}>
              <img src={content.heroImage} alt={content.title} />
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} section-padding`}>
        <div className="container">
          <div className={styles.sectionGrid}>
            <div>
              <h2>{content.sectionTitle}</h2>
              <p className={styles.bodyText}>{content.sectionBody}</p>
              {content.sectionNote && (
                <p className={styles.sectionNote}>{content.sectionNote}</p>
              )}
              {bullets.length > 0 && (
                <ul className={styles.bullets}>
                  {bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className={styles.panel}>
              <h3>{content.panelTitle}</h3>
              <p>{content.panelBody}</p>
              <div className={styles.panelList}>
                {panelItems.map((item) => (
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

      {processSteps.length > 0 && (
        <section className={`${styles.processSection} section-padding bg-gray-1`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2>{content.processTitle}</h2>
              {content.processBody && (
                <p className={styles.sectionLead}>{content.processBody}</p>
              )}
            </div>
            <div className={styles.processGrid}>
              {processSteps.map((step, index) => (
                <div key={step.title} className={styles.processCard}>
                  <span className={styles.processStep}>
                    Step {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={`${styles.sectionAlt} section-padding`}>
        <div className="container">
          <div className={styles.cardsHeader}>
            <h2>{content.cardsTitle}</h2>
            {content.cardsBody && (
              <p className={styles.cardsIntro}>{content.cardsBody}</p>
            )}
          </div>
          <div className={styles.cards}>
            {cards.map((card) => (
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

      <section className={`${styles.ctaSection} section-padding`}>
        <div className="container">
          <div className={styles.ctaCard}>
            <div>
              <h2>{content.ctaTitle}</h2>
              <p>{content.ctaText}</p>
              {content.ctaNote && (
                <p className={styles.ctaNote}>{content.ctaNote}</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
