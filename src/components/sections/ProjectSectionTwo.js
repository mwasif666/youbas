"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef } from "react";


import arrowLeft from "@/assets/images/icon/arrowLeft.svg";
import arrowRight from "@/assets/images/icon/arrowRight.svg";
import linkIcon from "@/assets/images/icon/link-icon.svg";
import {projectsList} from "@/data/project";

export default function ProjectSectionTwo() {
    const swiperRef = useRef(null); // Create a reference for Swiper

    return (
        <section className="project2 section-padding fix">
            <div className="container">
                <div className="row g-4 pb-60 d-flex justify-content-end align-items-end">
                    <div className="col-xl-4">
                        <div className="section-top">
                            <p className="section-top__subtitle">Our projects</p>
                            <h2 className="section-top__title">Our complete project list</h2>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="slider-btn justify-content-xl-end">
                            <button
                                onClick={() => swiperRef.current.swiper.slidePrev()} // Slide to previous
                                className="slider-arrow style1"
                            >
                                <img className="svg" src={arrowLeft.src} alt="svg" />
                            </button>
                            <button
                                onClick={() => swiperRef.current.swiper.slideNext()} // Slide to next
                                className="slider-arrow style1 slider-next"
                            >
                                <img className="svg" src={arrowRight.src} alt="svg" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-xl-12">
                        <div className="swiper global-slider" id="projectSlider1">
                            <Swiper
                                ref={swiperRef} // Attach swiperRef
                                modules={[Autoplay, Navigation]}
                                spaceBetween={30}
                                loop={true}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                breakpoints={{
                                    0: { slidesPerView: 1 },
                                    576: { slidesPerView: 2, centeredSlides: true },
                                    768: { slidesPerView: 2 },
                                    992: { slidesPerView: 3 },
                                    1200: { slidesPerView: 3 }
                                }}
                                className="swiper-wrapper"
                            >
                                {projectsList.map((project) => (
                                    <SwiperSlide className="swiper-slide" key={project.id}>
                                        <div className="project2-card">
                                            <div className="project2-card__thumb">
                                                <img src={project.image.src} alt="jpg" />
                                            </div>
                                            <div className="project2-card-content">
                                                <div className="project2-card-content__title">
                                                    <a href={project.link}>
                                                        <h3>{project.title}</h3>
                                                    </a>
                                                </div>
                                                <div className="project2-card-content__link">
                                                    <p>{project.category}</p>
                                                    <a href={project.link}>
                                                        <img className="svg" src={linkIcon.src} alt="svg" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
