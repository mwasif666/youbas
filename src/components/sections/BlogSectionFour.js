import {blogPosts4, widgetPosts} from "@/data/blog";
import Link from "next/link";
import userImg from "@/assets/images/icon/user.svg";
import message from "@/assets/images/icon/message.svg";
import calendar from "@/assets/images/icon/calendar.svg";

export default function BlogSectionFour() {
    return (
        <section className="blog4 section-padding fix">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-8">
                        {blogPosts4.map((post) => (
                            <div key={post.id} className="blog4-card">
                                <div className="blog4-card__thumb">
                                    <img src={post.image.src} alt="blog image" />
                                </div>
                                <div className="blog4-card-content">
                                    <div className="blog4-card-content-meta">
                                        <div className="blog4-card-content-meta__user">
                                            <img src={userImg.src}  alt="user icon" />
                                            By {post.author}
                                        </div>
                                        <div className="blog4-card-content-meta__comment">
                                            <img src={message.src}  alt="comments icon" />
                                            Comment ({post.comments})
                                        </div>
                                        <div className="blog4-card-content-meta__calendar">
                                            <img src={calendar.src}  alt="calendar icon" />
                                            {post.date}
                                        </div>
                                    </div>
                                    <div className="blog4-card-content__title">
                                        <Link href={post.link}>
                                            <h2>{post.title}</h2>
                                        </Link>
                                    </div>
                                    <div className="blog4-card-content__desc">
                                        <p>{post.description}</p>
                                    </div>
                                    <div className="btn-wrapper pt-40">
                                        <Link className="theme-btn style1" href={post.link}>
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="page-nav-wrap pt-70">
                            <ul className="justify-content-start">
                                <li><a className="page-numbers current" href="#">01</a></li>
                                <li><a className="page-numbers" href="#">02</a></li>
                                <li><a className="page-numbers" href="#">03</a></li>
                                <li><a className="page-numbers" href="#"><i className="fas fa-chevron-right"></i>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="widget">
                            <div className="widget-card">
                                <div className="widget-card__title">
                                    <h4>Search</h4>
                                </div>
                                <div className="widget-card-search">
                                    <form action="#">
                                        <input type="text" placeholder="Type to search..."/>
                                        <button type="submit"><i className="far fa-search"></i></button>
                                    </form>
                                </div>
                            </div>
                            <div className="widget-card">
                                <div className="widget-card__title">
                                    <h4>Services</h4>
                                </div>
                                <div className="widget-card-services">
                                    <ul>
                                        <li className="active"><Link href="/blog/details">Digital Marketing<span><i
                                            className="fa-regular fa-arrow-right"></i></span></Link></li>
                                        <li><Link href="/blog/details">Web Development<span><i
                                            className="fa-regular fa-arrow-right"></i></span></Link></li>
                                        <li><Link href="/blog/details">Ui/Ux Design <span><i
                                            className="fa-regular fa-arrow-right"></i></span></Link></li>
                                        <li><Link href="/blog/details">Business Strategy<span><i
                                            className="fa-regular fa-arrow-right"></i></span></Link></li>
                                        <li><Link href="/blog/details">Email Marketing<span><i
                                            className="fa-regular fa-arrow-right"></i></span></Link></li>
                                        <li><Link href="/blog/details">SEO Marketing<span><i
                                            className="fa-regular fa-arrow-right"></i></span></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="widget-card">
                                <div className="widget-card__title">
                                    <h4>Recent Posts</h4>
                                </div>
                                <div className="widget-card-post">
                                    {widgetPosts.map((post) => (
                                        <div key={post.id} className="widget-card-post-items">
                                            <div className="widget-card-post-items__thumb">
                                                <img src={post.image.src} alt="blog thumbnail" />
                                            </div>
                                            <div className="widget-card-post-items-content">
                                                <h5 className="truncate-text">
                                                    <Link href={post.link}>{post.title}</Link>
                                                </h5>
                                                <p>{post.date}</p>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                            <div className="widget-card">
                                <div className="widget-card__title">
                                    <h4>Tags</h4>
                                </div>
                                <div className="widget-card-tagcloud">
                                    <ul className="widget-card-tagcloud__list">
                                        <li className="widget__list-item"><Link href="/blog/details">Agency</Link></li>
                                        <li className="widget__list-item"><Link href="/blog/details">Awards</Link></li>
                                        <li className="widget__list-item"><Link href="/blog/details">Marketing</Link></li>
                                        <li className="widget__list-item"><Link href="/blog/details">Design</Link></li>
                                        <li className="widget__list-item"><Link href="/blog/details">Digital</Link></li>
                                        <li className="widget__list-item"><Link href="/blog/details">Email</Link></li>
                                        <li className="widget__list-item"><Link href="/blog/details">Business</Link></li>
                                        <li className="widget__list-item"><Link href="/blog/details">Ideas</Link></li>
                                        <li className="widget__list-item"><Link href="/blog/details">Ui/ux</Link></li>
                                        <li className="widget__list-item"><Link href="/blog/details">Web</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}