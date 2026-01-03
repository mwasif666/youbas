import blogThumb2_1 from "@/assets/images/blog/blogThumb2_1.jpg";
import dotImg from "@/assets/images/icon/dot.svg";
import blogThumb2_2 from "@/assets/images/blog/blogThumb2_2.jpg";
import blogThumb2_3 from "@/assets/images/blog/blogThumb2_3.jpg";
import Link from "next/link";

export default function BlogSectionTwo() {
    return (
        <section className="blog2 section-padding fix">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-5">
                        <div className="section-top">
                            <p className="section-top__subtitle">Blog & News</p>
                            <h2 className="section-top__title">Explore the Latest Insights on Our Blog</h2>
                        </div>
                        <div className="btn-wrapper pt-40">
                            <Link className="theme-btn style1" href="/blog">View all articles</Link>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="blog2-card">
                            <div className="blog2-card__thumb">
                                <img src={blogThumb2_1.src} alt="jpg"/>
                            </div>
                            <div className="blog2-card-content">
                                <div className="blog2-card-content-meta">
                                    <span className="blog2-card-content-meta__date">March 26, 2024</span>
                                    <span className="blog2-card-content-meta__dot">
                                        <img src={dotImg.src} alt="svg"/>
                                    </span>
                                    <span className="blog2-card-content-meta__category">Branding</span>
                                </div>
                                <div className="blog2-card-content__title">
                                    <Link href="/blog/details">
                                        <h3>Everything You Should Know About Return</h3>
                                    </Link>
                                </div>
                                <Link href="/blog/details" className="blog2-card-content__link">Read more</Link>
                            </div>
                        </div>
                        <div className="blog2-card">
                            <div className="blog2-card__thumb">
                                <img src={blogThumb2_2.src} alt="jpg"/>
                            </div>
                            <div className="blog2-card-content">
                                <div className="blog2-card-content-meta">
                                    <span className="blog2-card-content-meta__date">March 26, 2024</span>
                                    <span className="blog2-card-content-meta__dot">
                                        <img src={dotImg.src} alt="svg"/>
                                    </span>
                                    <span className="blog2-card-content-meta__category">Branding</span>
                                </div>
                                <div className="blog2-card-content__title">
                                    <Link href="/blog/details">
                                        <h3>Essential Tools for Managing Digital Asset Library</h3>
                                    </Link>
                                </div>
                                <Link href="/blog/details" className="blog2-card-content__link">Read more</Link>
                            </div>
                        </div>
                        <div className="blog2-card">
                            <div className="blog2-card__thumb">
                                <img src={blogThumb2_3.src} alt="jpg"/>
                            </div>
                            <div className="blog2-card-content">
                                <div className="blog2-card-content-meta">
                                    <span className="blog2-card-content-meta__date">March 26, 2024</span>
                                    <span className="blog2-card-content-meta__dot">
                                        <img src={dotImg.src} alt="svg"/></span>
                                    <span className="blog2-card-content-meta__category">Branding</span>
                                </div>
                                <div className="blog2-card-content__title">
                                    <Link href="/blog/details">
                                        <h3>The Art of Branding: Crafting Memorable Visual Identities</h3>
                                    </Link>
                                </div>
                                <Link href="/blog/details" className="blog2-card-content__link">Read more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}