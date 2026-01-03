import Link from "next/link";
import {blogPosts} from "@/data/blog";
import BlogPagination from "@/components/BlogPagination";

export default function BlogSectionOne({ showPost = 3, pagination = false}) {
    return (
        <section className="blog1 section-padding fix">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-12">
                        <div className="section-top text-center pb-35">
                            <p className="section-top__subtitle">Blog & News</p>
                            <h2 className="section-top__title">Our Latest Blog Post</h2>
                        </div>
                    </div>
                    {blogPosts.slice(0,showPost).map((post) => (
                        <div key={post.id} className="col-sm-6 col-lg-4">
                            <div className="blog1-card">
                                <div className="blog1-card__thumb">
                                    <img src={post.image.src} alt="blog image"/>
                                </div>
                                <div className="blog1-card-content">
                                    <div className="blog1-card-content-meta">
                                        <span className="blog1-card-content-meta__date">
                                            {post.date} | {post.category}
                                        </span>
                                    </div>
                                    <div className="blog1-card-content__title">
                                        <Link href={post.link}>
                                            <h3>{post.title}</h3>
                                        </Link>
                                    </div>
                                    <Link href={post.link} className="blog1-card-content__link">
                                        Read more
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {pagination && (
                    <BlogPagination />
                )}
            </div>
        </section>
    )
}