import projectThumb1_1 from "@/assets/images/project/projectThumb1_1.jpg";
import projectThumb1_2 from "@/assets/images/project/projectThumb1_2.jpg";
import projectThumb1_5 from "@/assets/images/project/projectThumb1_5.jpg";
import projectThumb1_3 from "@/assets/images/project/projectThumb1_3.jpg";
import projectThumb1_4 from "@/assets/images/project/projectThumb1_4.jpg";
import projectThumb1_6 from "@/assets/images/project/projectThumb1_6.jpg";
import Link from "next/link";

export default function ProjectSection() {
    return (
        <section className="project1 section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="project1-card1">
                            <div className="project1-card1__thumb">
                                <img src={projectThumb1_1.src} alt="jpg"/>
                            </div>
                            <p className="project1-card1__category">Branding / Development / Marketing</p>
                            <Link href="/project/details">
                                <h3 className="project1-card1__title">Money laundering detection and compliance
                                    scanner</h3>
                            </Link>
                        </div>
                        <div className="project1-card2 pb-133">
                            <div className="project1-card2__thumb">
                                <img src={projectThumb1_2.src} alt="jpg"/>
                            </div>
                            <p className="project1-card2__category">Branding / Development / Marketing</p>
                            <Link href="/project/details">
                                <h3 className="project1-card2__title">Anti-money laundering (AML) scanner</h3>
                            </Link>
                        </div>
                        <div className="project1-card2">
                            <div className="project1-card2__thumb">
                                <img src={projectThumb1_5.src} alt="jpg"/>
                            </div>
                            <p className="project1-card2__category">Branding / Development / Marketing</p>
                            <Link href="/project/details">
                                <h3 className="project1-card2__title">Product Lineup Industrial Design for Caramba</h3>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="project1-card3">
                            <div className="project1-card3__thumb">
                                <img src={projectThumb1_3.src} alt="jpg"/>
                            </div>
                            <p className="project1-card3__category">Branding / Development / Marketing</p>
                            <Link href="/project/details">
                                <h3 className="project1-card3__title">Decentralized Lending Platform Empowering
                                    Students</h3>
                            </Link>
                        </div>
                        <div className="project1-card4 pb-133">
                            <div className="project1-card4__thumb">
                                <img src={projectThumb1_4.src} alt="jpg"/>
                            </div>
                            <p className="project1-card4__category">Branding / Development / Marketing</p>
                            <Link href="/project/details">
                                <h3 className="project1-card4__title">Shopify Revamp for Nova Scotia Winery</h3>
                            </Link>
                        </div>
                        <div className="project1-card4">
                            <div className="project1-card4__thumb">
                                <img src={projectThumb1_6.src} alt="jpg"/>
                            </div>
                            <p className="project1-card4__category">Branding / Development / Marketing</p>
                            <Link href="/project/details">
                                <h3 className="project1-card4__title">Trading Website Design & Development</h3>
                            </Link>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="btn-wrapper pt-75 text-center">
                            <Link className="theme-btn style1" href="/project">View All Projects</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}