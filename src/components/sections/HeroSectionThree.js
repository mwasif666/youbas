"use client";

import profileThumb3_1 from "@/assets/images/hero/profileThumb3_1.png";
import heroThumb3_1 from "@/assets/images/hero/heroThumb3_1.jpg";
import brandLogo3_1 from "@/assets/images/hero/brand-logo3_1.svg";
import brandLogo3_2 from "@/assets/images/hero/brand-logo3_2.svg";
import brandLogo3_3 from "@/assets/images/hero/brand-logo3_3.svg";
import brandLogo3_4 from "@/assets/images/hero/brand-logo3_4.svg";
import brandLogo3_5 from "@/assets/images/hero/brand-logo3_5.svg";
import brandLogo3_6 from "@/assets/images/hero/brand-logo3_6.svg";
import Link from "next/link";

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import "swiper/css";

export default function HeroSectionThree() {
    return (
        <section className="hero3 bg-gray-2 fix">
            <div className="hero3__shape1"></div>
            <div className="hero3__shape2"></div>
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-7">
                        <div className="hero3__title">
                            <h1>Creative digital agency for your business </h1>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="hero3-content">
                            <div className="hero3-content-profile">
                                <img src={profileThumb3_1.src} alt="img"/>
                                <div className="hero3-content-profile__title">
                                    <h6>More than 10k+ <br/> trusted customers</h6>
                                </div>
                            </div>
                            <div className="hero3-content__desc">
                                <p>We believe that the surest measure of success is when a client partners with us more
                                    than
                                    half our clients stay with us for longer than a single longer .</p>
                            </div>
                            <div className="btn-wrapper pt-40">
                                <Link className="theme-btn style1" href="/contact">Let’s Talk with us</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="hero3-thumb">
                            <img src={heroThumb3_1.src} alt="img"/>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="hero3-brandLogo">
                            <div className="hero3-brandLogo__title">
                                <h6>We’ve worked on over 150 projects with 100+ clients</h6>
                            </div>
                            <div className="hero3-brandLogo-slider">
                                <div className="swiper global-slider" id="heroSlider3">
                                    <Swiper
                                        modules={[Autoplay]}
                                        spaceBetween={30}
                                        loop={true}
                                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                                        breakpoints={{
                                            0: { slidesPerView: 2 },
                                            576: { slidesPerView: 3, centeredSlides: true },
                                            768: { slidesPerView: 4 },
                                            992: { slidesPerView: 5 },
                                            1200: { slidesPerView: 6 }
                                        }}
                                        className="swiper-wrapper"
                                    >
                                        <SwiperSlide className="swiper-slide">
                                            <div className="hero3-brandLogo-slider__thumb">
                                                <img src={brandLogo3_1.src} alt="logo"/>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="hero3-brandLogo-slider__thumb">
                                                <img src={brandLogo3_2.src} alt="logo"/>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="hero3-brandLogo-slider__thumb">
                                                <img src={brandLogo3_3.src} alt="logo"/>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="hero3-brandLogo-slider__thumb">
                                                <img src={brandLogo3_4.src} alt="logo"/>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="hero3-brandLogo-slider__thumb">
                                                <img src={brandLogo3_5.src} alt="logo"/>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="hero3-brandLogo-slider__thumb">
                                                <img src={brandLogo3_6.src} alt="logo"/>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="hero3-brandLogo-slider__thumb">
                                                <img src={brandLogo3_3.src} alt="logo"/>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="hero3-brandLogo-slider__thumb">
                                                <img src={brandLogo3_4.src} alt="logo"/>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="hero3-brandLogo-slider__thumb">
                                                <img src={brandLogo3_5.src} alt="logo"/>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="hero3-brandLogo-slider__thumb">
                                                <img src={brandLogo3_6.src} alt="logo"/>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}