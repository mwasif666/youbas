import blogThumb4_1 from "@/assets/images/blog/blogThumb4_1.jpg";
import userImg from "@/assets/images/icon/user.svg";
import message from "@/assets/images/icon/message.svg";
import calendar from "@/assets/images/icon/calendar.svg";
import quoteLg from "@/assets/images/icon/quoteLg.svg";
import blogThumb4_5 from "@/assets/images/blog/blogThumb4_5.jpg";
import blogThumb4_6 from "@/assets/images/blog/blogThumb4_6.jpg";
import facebook from "@/assets/images/icon/facebook.svg";
import twitterWhite from "@/assets/images/icon/twitter-white.svg";
import linkedin from "@/assets/images/icon/linkedin.svg";
import blogProfileThumb1_1 from "@/assets/images/blog/blogProfileThumb1_1.jpg";
import blogProfileThumb1_2 from "@/assets/images/blog/blogProfileThumb1_2.jpg";
import reply from "@/assets/images/icon/reply.svg";
import blogProfileThumb1_3 from "@/assets/images/blog/blogProfileThumb1_3.jpg";
import Link from "next/link";
import {widgetPosts} from "@/data/blog";

export default function BlogDetailsSection() {
    return (
        <section className="blog5 section-padding fix">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-8">
                        <div className="blog5-details">
                            <div className="blog5-details__thumb">
                                <img src={blogThumb4_1.src} alt="jpg"/>
                            </div>
                            <div className="blog5-details-content">
                                <div className="blog5-details-content-meta">
                                    <div className="blog5-details-content-meta__user"><img
                                        src={userImg.src}
                                        alt="svg"/>By Admin
                                    </div>
                                    <div className="blog5-details-content-meta__comment"><img
                                        src={message.src} alt="svg"/>Comment (03)
                                    </div>
                                    <div className="blog5-details-content-meta__calendar"><img
                                        src={calendar.src} alt="svg"/>July 3, 2023
                                    </div>
                                </div>
                                <div className="blog5-details-content__title">
                                    <h2>Essential Tools for Managing Digital Asset Library</h2>
                                </div>
                                <div className="blog5-details-content__desc">
                                    <p>The European languag are member of the same family. Their separate existence is a
                                        myth.
                                        Europe Europe science, music, sport, etc, Europe uses the same vocabulary. The
                                        languages only differ in their their grammar, their and their most common
                                        words.</p>
                                </div>
                                <div className="blog5-details-content__desc">
                                    <p>Everyone realizes why a new common language would be desirable: one could refuse
                                        would is expensive translators. To achieve this,
                                        it would be necessary to have uniform gramm and more necommon words. If several
                                        languages coalesce, the grammar of the result language is simple and regular
                                        than
                                        that
                                        of the individual languages. The new common language will be more simple and
                                        regular
                                        than the existing European languages.</p>
                                </div>
                                <div className="blog5-details-content__quote">
                                    <img src={quoteLg.src} alt="svg"/>
                                    <p>We appreciate the consistent high-quality service provided by their team goes
                                        above
                                        and beyond concerns promptly</p>
                                </div>
                                <div className="blog5-details-content__title2">
                                    <h3>Keep Your Business Safe Ensure High</h3>
                                </div>
                                <div className="blog5-details-content__desc2">
                                    <p>Interactively engage distributed alignments via focused alignments. Dynamically
                                        fabricate excellent go forward technology. Intrinsicly
                                        impact empowered scenarios after cost unleas hstate pandemic effective
                                        outsourcing.
                                        Synenvtically productivate pandemic e-business data rather than state of the art
                                        e-tailers of unleash frictionless.</p>
                                </div>
                                <div className="blog5-details-content__desc2">
                                    <p>Donec fringilla, felis a convallis sodales, sem lorem feugiat lorem, placerat
                                        congue
                                        justo nisi mauris laoreet of sem.Quisque lobortis ex at tincidunt consequat.
                                        Proin
                                        ut elit ut mauris laoreet tincidunt blandit
                                        vel nulla state of the art e-tailers of unleash frictionless.</p>
                                </div>
                                <div className="blog5-details-content-thumb">
                                    <div className="blog5-details-content-thumb__one">
                                        <img src={blogThumb4_5.src} alt="jpg"/>
                                    </div>
                                    <div className="blog5-details-content-thumb__two">
                                        <img src={blogThumb4_6.src} alt="jpg"/>
                                    </div>
                                </div>
                                <div className="blog5-details-content__title2">
                                    <h3>Our personal approach</h3>
                                </div>
                                <div className="blog5-details-content__desc2">
                                    <p>Fusce vitae tellus nec felis interdum cursus et in risus. Sed a velit sed quam
                                        iaculis blandit eget sed velit. Suspendisse pulvinar diam eget arcu consectetur,
                                        at
                                        tempus milacinia.Fusce vitae nec felis interdum cursus et in risus.
                                        Sed a velit sed quam iaculis blandit eget sed velit. Fusce vitae nec felis
                                        interdum
                                        cursus et in risus.</p>
                                </div>
                            </div>
                            <div className="blog5-details-tagShare">
                                <div className="blog5-details-tagShare-tags">
                                    <span className="blog5-details-tagShare-tags__title">Tags:</span>
                                    <span className="blog5-details-tagShare-tags__name">
                                    <Link href="/blog/details">#Technology</Link>
                                </span>
                                    <span className="blog5-details-tagShare-tags__name">
                                    <Link href="/blog/details">#Agency Business</Link>
                                </span>
                                </div>
                                <div className="blog5-details-tagShare-shareicon">
                                    <div className="blog5-details-tagShare-shareicon__title">Share:</div>
                                    <div className="global-social2">
                                        <div className="global-social2__item">
                                            <a href="https://facebook.com/yourprofile" target="_blank"
                                               rel="noopener noreferrer">
                                                <img className="svg" src={facebook.src}
                                                     alt="Facebook icon"/>
                                            </a>
                                        </div>
                                        <div className="global-social2__item">
                                            <a href="https://twitter.com/yourprofile" target="_blank"
                                               rel="noopener noreferrer">
                                                <img className="svg" src={twitterWhite.src}
                                                     alt="Twitter icon"/>
                                            </a>
                                        </div>
                                        <div className="global-social2__item">
                                            <a href="https://linkedin.com/in/yourprofile" target="_blank"
                                               rel="noopener noreferrer">
                                                <img className="svg" src={linkedin.src}
                                                     alt="LinkedIn icon"/>
                                            </a>
                                        </div>
                                        <div className="global-social2__item">
                                            <a href="https://www.youtube.com/yourchannel" target="_blank"
                                               rel="noopener noreferrer">
                                                <i className="fa-brands fa-youtube"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="navigation-controls pb-75">
                                <div className="nav-item previous">
                                    <a href="#!">
                                        <div className="icon">
                                            <i className="fa-regular fa-arrow-left"></i>
                                        </div>
                                    </a>
                                    <h4 className="label">Previous Post</h4>
                                </div>
                                <div className="nav-item next">
                                    <h4 className="label">Next Post</h4>
                                    <a href="#!">
                                        <div className="icon">
                                            <i className="fa-regular fa-arrow-right"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="blog5-details-profile">
                                <div className="blog5-details-profile__thumb">
                                    <img src={blogProfileThumb1_1.src} alt="jpg"/>
                                </div>
                                <div className="blog5-details-profile-content">
                                    <div className="blog5-details-profile-content__name">
                                        <h3>John Methos</h3>
                                    </div>
                                    <div className="blog5-details-profile-content__desc">
                                        <p>Mauris non dignissim purus, ac commodo diam.Donec sit amet lacinia nulla.
                                            Aliquam
                                            quis purus in justo
                                            pulvinar Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi.
                                            Quis vitae.Mauris non dignissim purus, ac commodo diam.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="blog5-details-comment">
                                <div className="blog5-details-comment__title">
                                    <h3>2 Comments</h3>
                                </div>
                                <div className="blog5-details-comment-profile">
                                    <div className="blog5-details-comment-profile__thumb">
                                        <img src={blogProfileThumb1_2.src} alt="jpg"/>
                                    </div>
                                    <div className="blog5-details-comment-profile-content">
                                        <div className="blog5-details-comment-profile-content__desc">
                                            <p>Legal expertise and is client focused we enhance entrepreneurial
                                                environment
                                                flexible supportive, allowing our lawyers introduced</p>
                                        </div>
                                        <div className="blog5-details-comment-profile-content__author">
                                            <h5>Alexander Cameron</h5>
                                        </div>
                                        <div className="blog5-details-comment-profile-content__date">
                                            <p>Jan 28, 2024</p>
                                        </div>
                                        <div className="blog5-details-comment-profile-content__reply">
                                            <a href="#!">
                                                <span><img src={reply.src} alt="icon"/>Reply</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog5-details-comment-profile">
                                    <div className="blog5-details-comment-profile__thumb">
                                        <img src={blogProfileThumb1_3.src} alt="jpg"/>
                                    </div>
                                    <div className="blog5-details-comment-profile-content">
                                        <div className="blog5-details-comment-profile-content__desc">
                                            <p>Legal expertise and client focused we enhance entrepreneurial environment
                                                flexible supportive, allowing our lawyers</p>
                                        </div>
                                        <div className="blog5-details-comment-profile-content__author">
                                            <h5>Brooklyn Simmons</h5>
                                        </div>
                                        <div className="blog5-details-comment-profile-content__date">
                                            <p>Jan 28, 2024</p>
                                        </div>
                                        <div className="blog5-details-comment-profile-content__reply">
                                            <a href="#!">
                                                <span><img src={reply.src} alt="icon"/>Reply</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog5-details-comment-form">
                                    <div className="blog5-details-comment-form__title">
                                        <h3>Leave A Comment</h3>
                                    </div>
                                    <div className="blog5-details-comment-form__desc">
                                        <p>Your email address will not be published. Required fields are marked *</p>
                                    </div>
                                    <form action="#" id="#" method="POST" className="form">
                                        <div className="row g-4">
                                            <div className="col-lg-6">
                                                <div className="form__group">
                                                    <input type="text" name="name" id="name" placeholder="Your name"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form__group">
                                                    <input type="text" name="email" id="email"
                                                           placeholder="Email address"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form__group">
                                                    <input type="text" name="subject" id="subject"
                                                           placeholder="Subject"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form__group form__group--large">
                                                <textarea name="message" id="message"
                                                          placeholder="Type your message"></textarea>
                                                </div>
                                            </div>
                                            <div className="btn-wrapper pt-7">
                                                <button className="theme-btn style1">Post Comment</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
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