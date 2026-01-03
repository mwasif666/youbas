import heroShape2_3 from "@/assets/images/shape/heroShape2_3.png";
import heroThumb2_1 from "@/assets/images/hero/heroThumb2_1.png";
import heroShape2_1 from "@/assets/images/shape/heroShape2_1.png";
import heroShape2_2 from "@/assets/images/shape/heroShape2_2.png";
import Link from "next/link";

export default function HeroSectionTwo() {
    return (
        <section className="hero2 bg-gray-1 fix">
            <div className="hero2-shape__three">
                <img src={heroShape2_3.src} alt="shape"/>
            </div>
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-6">
                        <div className="hero2-content">
                            <div className="hero2-content__title">
                                <h1>Creating the best creative solution</h1>
                            </div>
                            <div className="hero2-content__desc">
                                <h4>We specialize in a comprehensive range services, including branding, digital
                                    marketing,
                                    content creation, and web design, all to meet the needs of each client.</h4>
                            </div>
                            <div className="btn-wrapper pt-40">
                                <Link className="theme-btn style1" href="/project">View Our Works</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 d-flex justify-content-lg-center justify-content-xl-end">
                        <div className="hero2-thumb">
                            <div className="hero2-thumb__one bg-mask"
                                 data-mask-src={heroThumb2_1.src}>
                                <img src={heroThumb2_1.src} alt="thumb"/>
                            </div>
                            <div className="hero2-thumb-counter">
                                <div className="hero2-thumb-counter__number">99%</div>
                                <div className="hero2-thumb-counter__text">Success Rate</div>
                            </div>
                            <div className="hero2-thumb-shape__one">
                                <img src={heroShape2_1.src} alt="shape"/>
                            </div>
                            <div className="hero2-thumb-shape__two">
                                <img src={heroShape2_2.src} alt="shape"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}