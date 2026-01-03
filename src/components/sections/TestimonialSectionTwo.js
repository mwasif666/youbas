"use client";

import testiThumb2_4 from "@/assets/images/testimonial/testiThumb2_4.jpg";
import testiThumb2_5 from "@/assets/images/testimonial/testiThumb2_5.jpg";
import starIcon from "@/assets/images/icon/star-icon.svg";
import starIconSm from "@/assets/images/icon/star-icon-sm.svg";
import testiThumb2_1 from "@/assets/images/testimonial/testiThumb2_1.jpg";
import testiThumb2_3 from "@/assets/images/testimonial/testiThumb2_3.jpg";
import testiThumb2_2 from "@/assets/images/testimonial/testiThumb2_2.jpg";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialSectionTwo({classes, slideClasses}) {
    return (
        <section className={`testimonial2 section-padding fix ${classes}`}>
            <div className="container">
                <div className="row g-4">
                    <div className="col-md-12 col-lg-6 col-xl-5">
                        <div className="fancy-box fancy-box--col">
                            <div className="fancy-box__profile">
                                <img className="fancy-box__profile--img1"
                                     src={testiThumb2_4.src}
                                     alt="jpg"/>
                                <img className="fancy-box__profile--img2"
                                     src={testiThumb2_5.src}
                                     alt="jpg"/>
                            </div>
                            <div className="fancy-box-content">
                                <div className="fancy-box-content__value">
                                    <h5>1900k+</h5>
                                </div>
                                <h3 className="fancy-box-content__title">Trusted Clients</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 col-xl-5">
                        <p className="testimonial2__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris erat
                            tellus, luctus vel mollis et, fringilla eget urna. Proin sit amet viverra lectus.</p>
                    </div>
                    <div className="col-xl-2">
                        <div className="rating">
                            <div className="rating-box">
                                <img src={starIcon.src} alt="Star"/>
                                <div className="rating__value">
                                    <h2>4.9</h2>
                                </div>
                            </div>
                            <div className="rating__details">
                                <h4>1,797 RATING</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-4 pt-50">
                    <div className="col-12">
                        <div className="swiper global-slider">
                            <Swiper
                                modules={[Autoplay, Pagination]}
                                spaceBetween={30}
                                loop={true}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                breakpoints={{
                                    0: { slidesPerView: 1 },
                                    576: { slidesPerView: 1, centeredSlides: true },
                                    768: { slidesPerView: 1 },
                                    992: { slidesPerView: 2 },
                                    1200: { slidesPerView: 3 }
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                className="swiper-wrapper"
                            >
                                <SwiperSlide className="swiper-slide">
                                    <div className={`testimonial2-card ${slideClasses}`}>
                                        <div className="testimonial2-card-icon">
                                            <ul className="testimonial2-card-icon__star">
                                                <li><img src={starIconSm.src} alt="icon"/></li>
                                                <li><img src={starIconSm.src} alt="icon"/></li>
                                                <li><img src={starIconSm.src} alt="icon"/></li>
                                                <li><img src={starIconSm.src} alt="icon"/></li>
                                                <li><img src={starIconSm.src} alt="icon"/></li>
                                            </ul>
                                        </div>
                                        <div className="testimonial2-card__desc">
                                            <p>“ Working with several word themes and templates the last years only can
                                                say
                                                this is best in every level use it fo reviews that I have already
                                                company
                                                and the reviews that I have already are all excellent. Not only the
                                                design
                                                but the are company ”</p>
                                        </div>
                                        <div className="fancy-box">
                                            <div className="fancy-box__profile">
                                                <img src={testiThumb2_1.src} alt="jpg"/>
                                            </div>
                                            <div className="fancy-box-content">
                                                <h4 className="fancy-box-content__title">Peggy Thompson</h4>
                                                <p className="fancy-box-content__desc">Product Manager</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className={`testimonial2-card ${slideClasses}`}>
                                        <div className="testimonial2-card-icon">
                                            <ul className="testimonial2-card-icon__star">
                                                <li><img src={starIconSm.src} alt="icon"/></li>
                                                <li><img src={starIconSm.src} alt="icon"/></li>
                                                <li><img src={starIconSm.src} alt="icon"/></li>
                                                <li><img src={starIconSm.src} alt="icon"/></li>
                                                <li><img src={starIconSm.src} alt="icon"/></li>
                                            </ul>
                                        </div>
                                        <div className="testimonial2-card__desc">
                                            <p>“ Working with several word themes and templates the last years only can
                                                say
                                                this is best in every level use it fo reviews that I have already
                                                company
                                                and the reviews that I have already are all excellent. Not only the
                                                design
                                                but the are company ”</p>
                                        </div>
                                        <div className="fancy-box">
                                            <div className="fancy-box__profile">
                                                <img src={testiThumb2_2.src} alt="jpg"/>
                                            </div>
                                            <div className="fancy-box-content">
                                                <h4 className="fancy-box-content__title">Alexander Cameron</h4>
                                                <p className="fancy-box-content__desc">Director</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className={`testimonial2-card ${slideClasses}`}>
                                        <div className="testimonial2-card-icon">
                                            <ul className="testimonial2-card-icon__star">
                                                <li><img src={starIconSm.src} alt="icon"/></li>
                                                <li><img src={starIconSm.src} alt="icon"/></li>
                                                <li><img src={starIconSm.src} alt="icon"/></li>
                                                <li><img src={starIconSm.src} alt="icon"/></li>
                                                <li><img src={starIconSm.src} alt="icon"/></li>
                                            </ul>
                                        </div>
                                        <div className="testimonial2-card__desc">
                                            <p>“ Working with several word themes and templates the last years only can
                                                say
                                                this is best in every level use it fo reviews that I have already
                                                company
                                                and the reviews that I have already are all excellent. Not only the
                                                design
                                                but the are company ”</p>
                                        </div>
                                        <div className="fancy-box">
                                            <div className="fancy-box__profile">
                                                <img src={testiThumb2_3.src} alt="jpg"/>
                                            </div>
                                            <div className="fancy-box-content">
                                                <h4 className="fancy-box-content__title">Samantha Brooks</h4>
                                                <p className="fancy-box-content__desc">Ceo & Founder</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className={`testimonial2-card ${slideClasses}`}>
                                        <div className="testimonial2-card-icon">
                                            <ul className="testimonial2-card-icon__star">
                                                <li><img src={starIconSm.src} alt="icon"/></li>
                                                <li><img src={starIconSm.src} alt="icon"/></li>
                                                <li><img src={starIconSm.src} alt="icon"/></li>
                                                <li><img src={starIconSm.src} alt="icon"/></li>
                                                <li><img src={starIconSm.src} alt="icon"/></li>
                                            </ul>
                                        </div>
                                        <div className="testimonial2-card__desc">
                                            <p>“ Working with several word themes and templates the last years only can
                                                say
                                                this is best in every level use it fo reviews that I have already
                                                company
                                                and the reviews that I have already are all excellent. Not only the
                                                design
                                                but the are company ”</p>
                                        </div>
                                        <div className="fancy-box">
                                            <div className="fancy-box__profile">
                                                <img src={testiThumb2_1.src} alt="jpg"/>
                                            </div>
                                            <div className="fancy-box-content">
                                                <h4 className="fancy-box-content__title">Peggy Thompson</h4>
                                                <p className="fancy-box-content__desc">Product Manager</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <div className="slider-pagination pt-60"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}