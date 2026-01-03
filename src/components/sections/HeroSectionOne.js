"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useState } from "react";

import heroThumb1_1 from "@/assets/images/hero/heroThumb1_1.png";
import heroThumb1_2 from "@/assets/images/hero/heroThumb1_2.png";
import heroThumb1_3 from "@/assets/images/hero/heroThumb1_3.png";
import Link from "next/link";

const slides = [
    { id: 1, image: heroThumb1_1, bg: heroThumb1_1.src },
    { id: 2, image: heroThumb1_2, bg: heroThumb1_2.src },
    { id: 3, image: heroThumb1_3, bg: heroThumb1_3.src },
];

export default function HeroSectionOne() {
    const [bgImage, setBgImage] = useState(slides[0].bg);

    const handleSlideChange = (swiper) => {
        setBgImage(slides[swiper.activeIndex].bg);
    };

    return (
        <section className="hero1 fix">
            <div className="hero1-background-image" style={{backgroundImage: `url(${bgImage})`}}></div>
            <div className="swiper hero-global-slider">
                <Swiper
                    loop={true}
                    slidesPerView={1}
                    autoplay={{delay: 3000, disableOnInteraction: false}}
                    speed={1000}
                    pagination={{
                        el: ".swiper-pagination",
                        clickable: true,
                        renderBullet: function (index, className) {
                            return '<span class="' + className + '">' + (index + 1) + "</span>";
                        }
                    }}
                    onSlideChange={handleSlideChange}
                    modules={[Pagination, Autoplay]}
                    className="swiper-wrapper"
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id} className="swiper-slide">
                            <div className="container">
                                <div className="row g-4">
                                    <div className="col-lg-8 col-xl-6">
                                        <div className="hero1-content">
                                            <div className="hero1-content__title">
                                                <h1>Smart digital business solutions</h1>
                                            </div>
                                            <div className="hero1-content__desc">
                                                <h4>
                                                    We specialize in a comprehensive range of services, including
                                                    branding,
                                                    digital marketing, content creation, and web design, all to meet the
                                                    needs of each client.
                                                </h4>
                                            </div>
                                            <div className="btn-wrapper pt-40">
                                                <Link className="theme-btn style1" href="/project">View Our Works</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
            <div className="swiper-pagination top-0"></div>
        </section>
    );
}
