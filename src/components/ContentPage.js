import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export default function ContentPage({
  title,
  breadcrumbLabel,
  subtitle,
  intro,
  sections = [],
  highlights = [],
  bestFor,
  cta,
}) {
  const menus = [{ label: breadcrumbLabel || title, link: "" }];

  return (
    <>
      <Breadcrumb title={title} menus={menus} />

      <section className="section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-lg-8">
              {subtitle && <h2 className="mb-3">{subtitle}</h2>}
              {intro && <p className="mb-4">{intro}</p>}

              {sections.map((section, index) => (
                <div key={`${section.title}-${index}`} className="mb-4">
                  <h3 className="h4">{section.title}</h3>
                  {section.body && <p>{section.body}</p>}
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="list-unstyled">
                      {section.bullets.map((item) => (
                        <li key={item}>- {item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="col-12 col-lg-4">
              {highlights.length > 0 && (
                <div className="card bg-dark text-white border-0 mb-4">
                  <div className="card-body">
                    <h4 className="h5">Highlights</h4>
                    <ul className="list-unstyled mb-0">
                      {highlights.map((item) => (
                        <li key={item}>- {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {bestFor && (
                <div className="card bg-dark text-white border-0 mb-4">
                  <div className="card-body">
                    <h4 className="h5">Best For</h4>
                    <p className="mb-0">{bestFor}</p>
                  </div>
                </div>
              )}

              {cta && (
                <div className="card bg-dark text-white border-0">
                  <div className="card-body">
                    <h4 className="h5">{cta.title}</h4>
                    <p>{cta.text}</p>
                    <Link href={cta.href} className="theme-btn style2">
                      {cta.buttonText}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
