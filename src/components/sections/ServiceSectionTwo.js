"use client";

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";

import serviceIcon1_1 from "@/assets/images/icon/service-icon1_1.svg";
import serviceIcon1_2 from "@/assets/images/icon/service-icon1_2.svg";
import serviceIcon1_3 from "@/assets/images/icon/service-icon1_3.svg";
import serviceIcon1_4 from "@/assets/images/icon/service-icon1_4.svg";
import {Pagination} from "swiper/modules";
import Link from "next/link";

export default function ServiceSectionTwo() {
    return (
        <section className="service2 section-padding">
            <div className="container">
                <div className="row d-flex justify-content-center mb-60">
                    <div className="col-md-7 text-center">
                        <div className="section-top">
                            <p className="section-top__subtitle">Our Services</p>
                            <h2 className="section-top__title">Our awesome services to give you success</h2>
                        </div>
                    </div>
                </div>
                <div className="swiper global-slider">
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={30}
                        loop={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            576: {
                                slidesPerView: 1,
                                centeredSlides: true,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                            1400: {
                                slidesPerView: 4,
                            },
                        }}
                        pagination={{
                            el: ".slider-pagination",
                            clickable: true
                        }}
                        className="swiper-wrapper"
                    >
                        <SwiperSlide className="swiper-slide">
                            <div className="service2-card">
                                <div className="service2-card__icon">
                                    <img className="svg" src={serviceIcon1_1.src} alt="icon"/>
                                </div>
                                <Link href="/service/details">
                                    <h5 className="service2-card__title">UI/UX Design</h5>
                                </Link>
                                <p className="service2-card__desc">
                                    Best solutions for your Business growth Solutions services.
                                </p>
                                <Link href="/service/details" className="service2-card__link">Read more</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="service2-card">
                                <div className="service2-card__icon">
                                    <img className="svg" src={serviceIcon1_2.src} alt="icon"/>
                                </div>
                                <Link href="/service/details">
                                    <h5 className="service2-card__title">Web Development</h5>
                                </Link>
                                <p className="service2-card__desc">
                                    Best solutions for your Business growth Solutions services.
                                </p>
                                <Link href="/service/details" className="service2-card__link">Read more</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="service2-card">
                                <div className="service2-card__icon">
                                    <img className="svg" src={serviceIcon1_3.src} alt="icon"/>
                                </div>
                                <Link href="/service/details">
                                    <h5 className="service2-card__title">Digital Marketing</h5>
                                </Link>
                                <p className="service2-card__desc">
                                    Best solutions for your Business growth Solutions services.
                                </p>
                                <Link href="/service/details" className="service2-card__link">Read more</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="service2-card">
                                <div className="service2-card__icon service2-card__icon--fill">
                                    <img className="svg" src={serviceIcon1_4.src} alt="icon"/>
                                </div>
                                <Link href="/service/details">
                                    <h5 className="service2-card__title">Product Design</h5>
                                </Link>
                                <p className="service2-card__desc">
                                    Best solutions for your Business growth Solutions services.
                                </p>
                                <Link href="/service/details" className="service2-card__link">Read more</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="service2-card">
                                <div className="service2-card__icon">
                                    <img className="svg" src={serviceIcon1_1.src} alt="icon"/>
                                </div>
                                <Link href="/service/details">
                                    <h5 className="service2-card__title">UI/UX Design</h5>
                                </Link>
                                <p className="service2-card__desc">
                                    Best solutions for your Business growth Solutions services.
                                </p>
                                <Link href="/service/details" className="service2-card__link">Read more</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="service2-card">
                                <div className="service2-card__icon">
                                    <img className="svg" src={serviceIcon1_2.src} alt="icon"/>
                                </div>
                                <Link href="/service/details">
                                    <h5 className="service2-card__title">Web Development</h5>
                                </Link>
                                <p className="service2-card__desc">
                                    Best solutions for your Business growth Solutions services.
                                </p>
                                <Link href="/service/details" className="service2-card__link">Read more</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="service2-card">
                                <div className="service2-card__icon">
                                    <img className="svg" src={serviceIcon1_3.src} alt="icon"/>
                                </div>
                                <Link href="/service/details">
                                    <h5 className="service2-card__title">Digital Marketing</h5>
                                </Link>
                                <p className="service2-card__desc">
                                    Best solutions for your Business growth Solutions services.
                                </p>
                                <Link href="/service/details" className="service2-card__link">Read more</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="service2-card">
                                <div className="service2-card__icon service2-card__icon--fill">
                                    <img className="svg" src={serviceIcon1_4.src} alt="icon"/>
                                </div>
                                <Link href="/service/details">
                                    <h5 className="service2-card__title">Product Design</h5>
                                </Link>
                                <p className="service2-card__desc">
                                    Best solutions for your Business growth Solutions services.
                                </p>
                                <Link href="/service/details" className="service2-card__link">Read more</Link>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                {/* Custom Pagination Container */}
                <div className="slider-pagination"></div>
            </div>
        </section>
    );
}
