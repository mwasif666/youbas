import Link from "next/link";
import {services} from "@/data/services";

export default function ServiceSectionFour() {
    return (
        <section className="service1 section-padding">
            <div className="container">
                <div className="row gy-4">
                    {services.map((service) => (
                    <div key={service.id} className="col-xl-4 col-md-6">
                        <div className="service1-card service1-card--bg">
                            <div className="service1-card__icon">
                                <img src={service.image.src} alt="icon" />
                            </div>
                            <Link href={service.link}>
                                <h5 className="service1-card__title">{service.title}</h5>
                            </Link>
                            <p className="service1-card__desc">{service.description}</p>
                            <Link href={service.link} className="service1-card__link">
                                Read more
                            </Link>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}