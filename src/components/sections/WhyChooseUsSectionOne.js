import wcuThumb1_1 from "@/assets/images/hero/whychoose.png";
import check from "@/assets/images/icon/check.svg";

export default function WhyChooseUsSectionOne() {
  return (
    <section
      className="wcu1 section-padding fix text-dark"
      style={{
        backgroundColor: "#f9f9f9",
      }}
    >
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6 col-12">
            <div className="wcu1-content">
              <div className="section-top">
                <p className="section-top__subtitle">Why Choose Us</p>
                <h2 className="section-top__title2 pb-20 text-dark">
                  Why Businesses Choose YouBas Ecom Services
                </h2>

                <div className="main-whychooseus-content-checklist">
                  <ul>
                    <li className="main-whychooseus-checklist-item ">
                      <span>
                        <img src={check.src} alt="icon" />
                      </span>
                      <span className="main-whychooseus-checklist-item__text text-dark">
                        Direct collaboration with verified factories
                      </span>
                    </li>
                    <li className="main-whychooseus-checklist-item">
                      <span>
                        <img src={check.src} alt="icon" />
                      </span>
                      <span className="main-whychooseus-checklist-item__text text-dark">
                        Factory-level pricing (no middlemen)
                      </span>
                    </li>
                    <li className="main-whychooseus-checklist-item">
                      <span>
                        <img src={check.src} alt="icon" />
                      </span>
                      <span className="main-whychooseus-checklist-item__text text-dark">
                        Multi-marketplace expertise
                      </span>
                    </li>
                    <li className="main-whychooseus-checklist-item">
                      <span>
                        <img src={check.src} alt="icon" />
                      </span>
                      <span className="main-whychooseus-checklist-item__text text-dark">
                        Dedicated account managers
                      </span>
                    </li>
                    <li className="main-whychooseus-checklist-item">
                      <span>
                        <img src={check.src} alt="icon" />
                      </span>
                      <span className="main-whychooseus-checklist-item__text text-dark">
                        Scalable systems for long-term growth
                      </span>
                    </li>
                    <li className="main-whychooseus-checklist-item">
                      <span>
                        <img src={check.src} alt="icon" />
                      </span>
                      <span className="main-whychooseus-checklist-item__text text-dark">
                        Transparent process & reporting
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-12">
            <div className="wcu1-thumb">
              <div className="wcu1-thumb__one">
                <img src={wcuThumb1_1.src} alt="jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
