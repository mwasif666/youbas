import blogThumb3_1 from "@/assets/images/blog/blogThumb3_1.jpg"
import iconDot from "@/assets/images/icon/dot.svg"
import blogThumb3_2 from "@/assets/images/blog/blogThumb3_2.jpg"
import blogThumb3_3 from "@/assets/images/blog/blogThumb3_3.jpg"
import Link from "next/link";

export default function BlogSectionThree() {
    return (
        <section className="blog3 section-padding fix">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-12">
                        <div className="section-top text-center pb-35">
                            <p className="section-top__subtitle">Blog & News</p>
                            <h2 className="section-top__title">Latest news from us</h2>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="blog3-card">
                            <div className="blog3-card__thumb">
                                <img src={blogThumb3_1.src} alt="jpg"/>
                            </div>
                            <div className="blog3-card-content">
                                <div className="blog3-card-content-meta">
                                    <span className="blog3-card-content-meta__date">April 16, 2024</span>
                                    <span className="blog3-card-content-meta__dot">
                                        <img src={iconDot.src} alt="svg"/>
                                    </span>
                                    <span className="blog3-card-content-meta__category">Branding</span>
                                </div>
                                <div className="blog3-card-content__title">
                                    <Link href="/blog/details">
                                        <h4>Essential Tools for Managing Digital Asset Library</h4>
                                    </Link>
                                </div>
                                <Link href="/blog/details" className="blog3-card-content__link">Read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="blog3-card">
                            <div className="blog3-card__thumb">
                                <img src={blogThumb3_2.src} alt="jpg"/>
                            </div>
                            <div className="blog3-card-content">
                                <div className="blog3-card-content-meta">
                                    <span className="blog3-card-content-meta__date">April 16, 2024</span>
                                    <span className="blog3-card-content-meta__dot">
                                        <img src={iconDot.src} alt="svg"/>
                                    </span>
                                    <span className="blog3-card-content-meta__category">Branding</span>
                                </div>
                                <div className="blog3-card-content__title">
                                    <Link href="/blog/details">
                                        <h4>The Art of Branding: Crafting Memorable Visual Identities</h4>
                                    </Link>
                                </div>
                                <Link href="/blog/details" className="blog3-card-content__link">Read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="blog3-card">
                            <div className="blog3-card__thumb">
                                <img src={blogThumb3_3.src} alt="jpg"/>
                            </div>
                            <div className="blog3-card-content">
                                <div className="blog3-card-content-meta">
                                    <span className="blog3-card-content-meta__date">April 16, 2024</span>
                                    <span className="blog3-card-content-meta__dot">
                                        <img src={iconDot.src} alt="svg"/>
                                    </span>
                                    <span className="blog3-card-content-meta__category">Branding</span>
                                </div>
                                <div className="blog3-card-content__title">
                                    <Link href="/blog/details">
                                        <h4>Leveraging Your Creative Work for Success</h4>
                                    </Link>
                                </div>
                                <Link href="/blog/details" className="blog3-card-content__link">Read more</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}