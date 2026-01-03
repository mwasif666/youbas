import serviceIcon1_2 from "@/assets/images/icon/service-icon1_2.svg";
import serviceIcon1_1 from "@/assets/images/icon/service-icon1_1.svg";
import serviceIcon1_3 from "@/assets/images/icon/service-icon1_3.svg";
import serviceIcon1_4 from "@/assets/images/icon/service-icon1_4.svg";
import serviceIcon1_5 from "@/assets/images/icon/service-icon1_5.svg";
import Link from "next/link";

export default function ServiceSectionOne() {
    const services = [
        {
            id: 1,
            title: "Web Development",
            description: "Best solutions for your Business create growth Solutions offer range of services with modern agency.",
            icon: serviceIcon1_2,
            link: "/service-details",
        },
        {
            id: 2,
            title: "UI/UX Design",
            description: "Best solutions for your Business create growth Solutions offer range of services with modern agency.",
            icon: serviceIcon1_1,
            link: "/service-details",
        },
        {
            id: 3,
            title: "Digital Marketing",
            description: "Best solutions for your Business create growth Solutions offer range of services with modern agency.",
            icon: serviceIcon1_3,
            link: "/service-details",
        },
        {
            id: 4,
            title: "Product Design",
            description: "Best solutions for your Business create growth Solutions offer range of services with modern agency.",
            icon: serviceIcon1_4,
            link: "/service-details",
        },
        {
            id: 5,
            title: "App Development",
            description: "Best solutions for your Business create growth Solutions offer range of services with modern agency.",
            icon: serviceIcon1_5,
            link: "/service-details",
        },
    ];

    return (
        <section className="service1 section-padding bg-gray-1">
            <div className="container">
                <div className="row d-flex justify-content-center mb-60">
                    <div className="col-md-6 text-center">
                        <div className="section-top">
                            <p className="section-top__subtitle">Our Services</p>
                            <h2 className="section-top__title">Services we offer to customers</h2>
                        </div>
                    </div>
                </div>
                <div className="row gy-4">
                    {services.map((service) => (
                        <div key={service.id} className="col-xl-4 col-md-6">
                            <div className="service1-card">
                                <div className="service1-card__icon">
                                    <img className="svg" src={service.icon.src} alt={service.title} />
                                </div>
                                <a href={service.link}>
                                    <h5 className="service1-card__title">{service.title}</h5>
                                </a>
                                <p className="service1-card__desc">{service.description}</p>
                                <a href={service.link} className="service1-card__link">Read more</a>
                            </div>
                        </div>
                    ))}
                    {/* View All Services Section */}
                    <div className="col-xl-4 col-md-6">
                        <div className="service1-view">
                            <Link href="/services" className="service1-view__link">
                                <div className="service1-view__icon">
                                    {/*<img className="svg" src="/assets/images/icon/service-icon1_6.svg" alt="icon" />*/}
                                </div>
                                <h4 className="service1-view__title">View All Services</h4>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
