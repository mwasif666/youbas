"use client";

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";

import aboutThumb2_1 from "@/assets/images/about/about-thumb2_1.jpg";
import aboutShape2_1 from "@/assets/images/shape/aboutShape2_1.png";
import aboutLogo2_1 from "@/assets/images/about/about-logo2_1.svg";
import aboutLogo2_2 from "@/assets/images/about/about-logo2_2.svg";
import aboutLogo2_3 from "@/assets/images/about/about-logo2_3.svg";
import aboutLogo2_4 from "@/assets/images/about/about-logo2_4.svg";
import aboutLogo2_5 from "@/assets/images/about/about-logo2_5.svg";
import Link from "next/link";
import {Autoplay} from "swiper/modules";

export default function AboutSectionTwo() {
    return (
        <section className="about2 section-padding fix bg-gray-1">
            <div className="container">
                <div className="row g-3 pb-100">
                    <div className="col-xl-6">
                        <div className="about2-thumb">
                            <div className="about2-thumb__one bg-mask"
                                 data-mask-src={aboutThumb2_1.src}>
                                <img src={aboutThumb2_1.src} alt="thumb"/>
                            </div>
                            <div className="about2-thumb__shape"><a href="!#">
                                <img className="rotate360" src={aboutShape2_1.src} alt="shape"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="offset-xl-1 col-xl-5">
                        <div className="about2-content">
                            <div className="section-top">
                                <p className="section-top__subtitle">About Company</p>
                                <h2 className="section-top__title pb-20">Digital agency for your business</h2>
                                <p className="section-top__desc">Since 1985 Reed has pioneere specialist recruitment,
                                    sourcing
                                    knowledgeable, skilled professional pioneered speciali larong
                                    recruitment, sourcing larong into the head infor their.</p>
                                <p className="section-top__desc pt-15 pb-40">We are Funder Business Consultancy Agency,
                                    pionee
                                    business consultancy. Funder is a leading
                                    consulting company that has helped over 100 companies grow their businesse.</p>
                            </div>
                            <div className="btn-wrapper">
                                <Link className="theme-btn style1" href="/about">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-xl-3">
                        <h4 className="about2-slider__title"><span className="about2-slider__number">2536+</span>Our
                            Trusted &
                            Valuable Clients</h4>
                    </div>
                    <div className="col-xl-9 d-flex">
                        <div className="about2-slider">
                            <div className="swiper global-slider" id="clientSlider1">
                                <Swiper
                                    modules={[Autoplay]}
                                    spaceBetween={60}
                                    loop={true}
                                    autoplay={{delay: 3000, disableOnInteraction: false}}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 3,
                                        },
                                        576: {
                                            slidesPerView: 4,
                                            centeredSlides: true,
                                        },
                                        768: {
                                            slidesPerView: 5,
                                        },
                                        992: {
                                            slidesPerView: 5,
                                        },
                                        1200: {
                                            slidesPerView: 5,
                                        },
                                    }}
                                    pagination={{ clickable: true }}
                                    className="swiper-wrapper"
                                >
                                    <SwiperSlide className="swiper-slide">
                                        <div className="about2-slider__thumb">
                                            <img src={aboutLogo2_1.src} alt="about-logo"/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="about2-slider__thumb">
                                            <img src={aboutLogo2_2.src} alt="about-logo"/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="about2-slider__thumb">
                                            <img src={aboutLogo2_3.src} alt="about-logo"/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="about2-slider__thumb">
                                            <img src={aboutLogo2_4.src} alt="about-logo"/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="about2-slider__thumb">
                                            <img src={aboutLogo2_5.src} alt="about-logo"/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="about2-slider__thumb">
                                            <img src={aboutLogo2_1.src} alt="about-logo"/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="about2-slider__thumb">
                                            <img src={aboutLogo2_2.src} alt="about-logo"/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="about2-slider__thumb">
                                            <img src={aboutLogo2_3.src} alt="about-logo"/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="about2-slider__thumb">
                                            <img src={aboutLogo2_4.src} alt="about-logo"/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="about2-slider__thumb">
                                            <img src={aboutLogo2_5.src} alt="about-logo"/>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}