"use client";
import "swiper/css";
import "swiper/css/autoplay";

import arrowBoxUp from "@/assets/images/icon/arrowBoxUp.svg";
import arrowBoxDown from "@/assets/images/icon/arrowBoxDown.svg";
import quote from "@/assets/images/icon/quote.svg";
import testiThumb1_1 from "@/assets/images/testimonial/testiThumb1_1.jpg";
import testimonialShape1_2 from "@/assets/images/shape/testimonialShape1_2.png";
import testiThumb1_2 from "@/assets/images/testimonial/testiThumb1_2.jpg";
import testiThumb1_3 from "@/assets/images/testimonial/testiThumb1_3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";

const testimonials = [
    {
        author: "Marvin McKinney",
        role: "Product Manager",
        image: testiThumb1_1,
        message: "Working with several word themes and templates the last years only can say this is best every level use it for my reviews that I have already are company and the reviews that I have already are all excellent. Not only the design."
    },
    {
        author: "Marvin McKinney",
        role: "Product Manager",
        image: testiThumb1_2,
        message: "Working with several word themes and templates the last years only can say this is best every level use it for my reviews that I have already are company and the reviews that I have already are all excellent. Not only the design."
    },
    {
        author: "Marvin McKinney",
        role: "Product Manager",
        image: testiThumb1_3,
        message: "Working with several word themes and templates the last years only can say this is best every level use it for my reviews that I have already are company and the reviews that I have already are all excellent. Not only the design."
    },
];

export default function TestimonialSectionOne() {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);
    const profilesRef = useRef([]);
    const shapesRef = useRef([]);

    const updateActiveProfile = (index) => {
        setActiveIndex(index);

        profilesRef.current.forEach((el) => el?.classList.remove("active"));
        shapesRef.current.forEach((el) => el?.classList.remove("active"));

        profilesRef.current[index]?.classList.add("active");
        shapesRef.current[index]?.classList.add("active");
    };

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.on("slideChange", () => {
                updateActiveProfile(swiperRef.current.realIndex);
            });
        }
    }, []);

    return (
        <section className="testimonial1 section-padding fix">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-12">
                        <div className="section-top pb-35">
                            <p className="section-top__subtitle">Our Testimonial</p>
                            <h2 className="section-top__title">What our clients say</h2>
                        </div>
                    </div>
                    <div className="col-lg-1">
                        <div className="testimonial1-shape">
                            <button onClick={() => swiperRef.current?.slidePrev()}>
                                <img src={arrowBoxUp.src} alt="icon"/>
                            </button>
                            <div className="testimonial1-shape__line"></div>
                            <button onClick={() => swiperRef.current?.slideNext()}>
                                <img src={arrowBoxDown.src} alt="icon"/>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="swiper testimonial-slider">
                            <Swiper
                                loop={true}
                                slidesPerView={1}
                                spaceBetween={20}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                speed={1000}
                                modules={[Autoplay, Navigation]}
                                onSwiper={(swiper) => (swiperRef.current = swiper)}
                                className="swiper-wrapper"
                            >
                                {testimonials.map((testimonial, index) => (
                                    <SwiperSlide key={index} className="swiper-slide">
                                        <div
                                            className={`testimonial1-card ${activeIndex === index ? "active" : ""}`}
                                            ref={(el) => (profilesRef.current[index] = el)}
                                        >
                                            <p className="testimonial1-card__text">
                                                “ {testimonial.message}”
                                            </p>
                                            <div className="testimonial1-card-author">
                                                <h3 className="testimonial1-card-author__name">{testimonial.author}</h3>
                                                <p className="testimonial1-card-author__title">{testimonial.role}</p>
                                            </div>
                                            <span className="testimonial1-card__quote">
                                                <img src={quote.src} alt="icon"/>
                                            </span>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="testimonial1-profile">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className={`testimonial1-profile-items ${activeIndex === index ? "active" : ""}`}
                                >
                                    <div
                                        className="testimonial1-profile-items__one"
                                        ref={(el) => (profilesRef.current[index] = el)}
                                    >
                                        <img src={testimonial.image.src} alt="jpg"/>
                                    </div>
                                    <div
                                        className="testimonial1-profile-items__shape"
                                        ref={(el) => (shapesRef.current[index] = el)}
                                    >
                                        <img src={testimonialShape1_2.src} alt="shape"/>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
