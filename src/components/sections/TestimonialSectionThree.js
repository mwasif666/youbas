"use client";

import arrowLeft from "@/assets/images/icon/arrowLeft.svg";
import arrowRight from "@/assets/images/icon/arrowRight.svg";
import testiThumb3_1 from "@/assets/images/testimonial/testiThumb3_1.jpg";
import videoIconWhite from "@/assets/images/icon/video-icon-white.svg";
import quoteSmall from "@/assets/images/icon/quoteSmall.svg";
import testiThumb3_2 from "@/assets/images/testimonial/testiThumb3_2.jpg";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import "swiper/css";
import {useEffect, useRef} from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function TestimonialSectionThree() {
    const swiperRef = useRef(null);

    useEffect(() => {
        Fancybox.bind("[data-fancybox-test]", {
            Thumbs: false, // Disable thumbnails
            Toolbar: true, // Show toolbar
        });

        return () => {
            Fancybox.destroy();
        };
    }, []);

    return (
        <section className="testimonial3 section-padding fix bg-gray-1">
            <div className="container">
                <div className="row g-4 pb-60 d-flex justify-content-end align-items-end">
                    <div className="col-xl-5">
                        <div className="section-top">
                            <p className="section-top__subtitle">Client Testimonials</p>
                            <h2 className="section-top__title">What Our Clients Say About Us</h2>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="slider-btn justify-content-xl-end">
                            <button onClick={() => swiperRef.current.swiper.slidePrev()} className="slider-arrow style1">
                                <img
                                className="svg"
                                src={arrowLeft.src} alt="svg"/>
                            </button>
                            <button onClick={() => swiperRef.current.swiper.slideNext()} className="slider-arrow style1 slider-next">
                                <img
                                className="svg"
                                src={arrowRight.src} alt="svg"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-xl-12">
                        <div className="swiper global-slider" id="testiSlider1">
                            <Swiper
                                ref={swiperRef}
                                modules={[Autoplay]}
                                spaceBetween={30}
                                loop={true}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                breakpoints={{
                                    0: { slidesPerView: 1 },
                                    576: { slidesPerView: 2, centeredSlides: true },
                                    768: { slidesPerView: 2 },
                                    992: { slidesPerView: 2 },
                                    1200: { slidesPerView: 2 }
                                }}
                                className="swiper-wrapper"
                            >
                                <SwiperSlide className="swiper-slide">
                                    <div className="testimonial3-card">
                                        <div className="testimonial3-card-thumb">
                                            <img src={testiThumb3_1.src} alt="thumb"/>
                                            <div className="testimonial3-card-thumb__videoIcon">
                                                <a data-fancybox-test href="https://www.youtube.com/watch?v=QLLCjZl4YJk"
                                                   className="popup-video">
                                                    <img className="svg" src={videoIconWhite.src}
                                                         alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="testimonial3-card-content">
                                            <div className="testimonial3-card-content__icon">
                                                <img src={quoteSmall.src} alt="icon"/>
                                            </div>
                                            <div className="testimonial3-card-content__desc">
                                                <p>“ Naeem initial design was great, I had a revisions that weren't easy
                                                    understand
                                                    but he still went above and beyond to make the changes required, he
                                                    super fast and coul work autonomously.”</p>
                                            </div>
                                            <div className="testimonial3-card-content__name">
                                                <h5>Jackin Martinez</h5>
                                            </div>
                                            <div className="testimonial3-card-content__title">
                                                <p>Lead Developer</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="testimonial3-card">
                                        <div className="testimonial3-card-thumb">
                                            <img src={testiThumb3_2.src} alt="thumb"/>
                                            <div className="testimonial3-card-thumb__videoIcon">
                                                <a data-fancybox-test href="https://www.youtube.com/watch?v=QLLCjZl4YJk"
                                                   className="popup-video">
                                                    <img className="svg" src={videoIconWhite.src}
                                                         alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="testimonial3-card-content">
                                            <div className="testimonial3-card-content__icon">
                                                <img src={quoteSmall.src} alt="icon"/>
                                            </div>
                                            <div className="testimonial3-card-content__desc">
                                                <p>“ Naeem initial design was great, I had a revisions that weren't easy
                                                    understand
                                                    but he still went above and beyond to make the changes required, he
                                                    super fast and coul work autonomously.”</p>
                                            </div>
                                            <div className="testimonial3-card-content__name">
                                                <h5>Brooklyn Simmons</h5>
                                            </div>
                                            <div className="testimonial3-card-content__title">
                                                <p>Lead Developer</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="testimonial3-card">
                                        <div className="testimonial3-card-thumb">
                                            <img src={testiThumb3_1.src} alt="thumb"/>
                                            <div className="testimonial3-card-thumb__videoIcon">
                                                <a data-fancybox-test href="https://www.youtube.com/watch?v=QLLCjZl4YJk"
                                                   className="popup-video">
                                                    <img className="svg" src={videoIconWhite.src}
                                                         alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="testimonial3-card-content">
                                            <div className="testimonial3-card-content__icon">
                                                <img src={quoteSmall.src} alt="icon"/>
                                            </div>
                                            <div className="testimonial3-card-content__desc">
                                                <p>“ Naeem initial design was great, I had a revisions that weren't easy
                                                    understand
                                                    but he still went above and beyond to make the changes required, he
                                                    super fast and coul work autonomously.”</p>
                                            </div>
                                            <div className="testimonial3-card-content__name">
                                                <h5>Jackin Martinez</h5>
                                            </div>
                                            <div className="testimonial3-card-content__title">
                                                <p>Lead Developer</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="testimonial3-card">
                                        <div className="testimonial3-card-thumb">
                                            <img src={testiThumb3_2.src} alt="thumb"/>
                                            <div className="testimonial3-card-thumb__videoIcon">
                                                <a data-fancybox-test href="https://www.youtube.com/watch?v=QLLCjZl4YJk"
                                                   className="popup-video">
                                                    <img className="svg" src={videoIconWhite.src}
                                                         alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="testimonial3-card-content">
                                            <div className="testimonial3-card-content__icon">
                                                <img src={quoteSmall.src} alt="icon"/>
                                            </div>
                                            <div className="testimonial3-card-content__desc">
                                                <p>“ Naeem initial design was great, I had a revisions that weren't easy
                                                    understand
                                                    but he still went above and beyond to make the changes required, he
                                                    super fast and coul work autonomously.”</p>
                                            </div>
                                            <div className="testimonial3-card-content__name">
                                                <h5>Brooklyn Simmons</h5>
                                            </div>
                                            <div className="testimonial3-card-content__title">
                                                <p>Lead Developer</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}