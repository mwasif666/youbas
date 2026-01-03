import Link from "next/link";
import projectThumb3_1 from "@/assets/images/project/projectThumb3_1.jpg";
import linkIcon from "@/assets/images/icon/link-icon.svg";
import projectThumb3_2 from "@/assets/images/project/projectThumb3_2.jpg";
import projectThumb3_3 from "@/assets/images/project/projectThumb3_3.jpg";
import projectThumb3_4 from "@/assets/images/project/projectThumb3_4.jpg";
import projectThumb3_5 from "@/assets/images/project/projectThumb3_5.jpg";

export default function ProjectSectionThree() {
    return (
        <section className="project3 section-padding fix bg-gray-1">
            <div className="container">
                <div className="row g-4 pb-60 d-flex justify-content-end align-items-end">
                    <div className="col-xl-5">
                        <div className="section-top">
                            <p className="section-top__subtitle">Our Portfolio</p>
                            <h2 className="section-top__title">We have completed lot's of work </h2>
                        </div>
                    </div>
                    <div className="col-xl-7 text-xl-end">
                        <div className="btn-wrapper">
                            <Link className="theme-btn style1" href="/project">View All Projects</Link>
                        </div>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="project3-card">
                            <div className="project3-card__thumb">
                                <img src={projectThumb3_1.src} alt="jpg"/>
                            </div>
                            <div className="project3-card-content">
                                <div className="project3-card-content__title">
                                    <Link href="/project/details">
                                        <h3>Digital Transformation Readiness</h3>
                                    </Link>
                                </div>
                                <div className="project3-card-content__link">
                                    <p>Digital marketing</p>
                                    <Link href="/project/details">
                                        <img className="svg"
                                             src={linkIcon.src}
                                             alt="svg"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="project3-card">
                            <div className="project3-card__thumb">
                                <img src={projectThumb3_2.src} alt="jpg"/>
                            </div>
                            <div className="project3-card-content">
                                <div className="project3-card-content__title">
                                    <Link href="/project/details">
                                        <h3>Digital Transformation Readiness</h3>
                                    </Link>
                                </div>
                                <div className="project3-card-content__link">
                                    <p>Digital marketing</p>
                                    <Link href="/project/details">
                                        <img className="svg"
                                             src={linkIcon.src}
                                             alt="svg"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project3-card">
                            <div className="project3-card__thumb">
                                <img src={projectThumb3_3.src} alt="jpg"/>
                            </div>
                            <div className="project3-card-content">
                                <div className="project3-card-content__title">
                                    <Link href="/project/details">
                                        <h3>Digital Transformation Readiness</h3>
                                    </Link>
                                </div>
                                <div className="project3-card-content__link">
                                    <p>Digital marketing</p>
                                    <Link href="/project/details">
                                        <img className="svg"
                                             src={linkIcon.src}
                                             alt="svg"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project3-card">
                            <div className="project3-card__thumb">
                                <img src={projectThumb3_4.src} alt="jpg"/>
                            </div>
                            <div className="project3-card-content">
                                <div className="project3-card-content__title">
                                    <Link href="/project/details">
                                        <h3>Digital Transformation Readiness</h3>
                                    </Link>
                                </div>
                                <div className="project3-card-content__link">
                                    <p>Digital marketing</p>
                                    <Link href="/project/details">
                                        <img className="svg"
                                             src={linkIcon.src}
                                             alt="svg"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project3-card">
                            <div className="project3-card__thumb">
                                <img src={projectThumb3_5.src} alt="jpg"/>
                            </div>
                            <div className="project3-card-content">
                                <div className="project3-card-content__title">
                                    <Link href="/project/details">
                                        <h3>Digital Transformation Readiness</h3>
                                    </Link>
                                </div>
                                <div className="project3-card-content__link">
                                    <p>Digital marketing</p>
                                    <Link href="/project/details">
                                        <img className="svg"
                                             src={linkIcon.src}
                                             alt="svg"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}