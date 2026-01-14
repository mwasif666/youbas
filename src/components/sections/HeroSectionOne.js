"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import axios from "axios";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";

import Loading from "./Loading";

export default function HeroSectionOne() {
  const swiperRef = useRef(null);
  const paginationRef = useRef(null);
  const timerRef = useRef(null);

  const [slides, setSlides] = useState([]);
  const [bgImage, setBgImage] = useState("");
  const [loading, setLoading] = useState(true);

  const getHero = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://yobas.innovationpixel.com/public/api/heroes"
      );

      const data = res.data?.data || [];
      setSlides(data);

      if (data.length) {
        setBgImage(
          `https://yobas.innovationpixel.com/public/storage/${data[0].image}`
        );
      }
    } catch (err) {
      console.error("Hero load failed", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getHero();
    return () => clearTimeout(timerRef.current);
  }, []);

  const startSlideTimer = (swiper) => {
    clearTimeout(timerRef.current);

    const index = swiper.realIndex;
    const currentSlide = slides[index];

    if (!currentSlide) return;

    timerRef.current = setTimeout(() => {
      swiper.slideNext();
    }, Number(currentSlide.time) || 4000);

    setBgImage(
      `https://yobas.innovationpixel.com/public/storage/${currentSlide.image}`
    );
  };

  if (loading) {
    return (
      <section>
        <div className="container text-center py-5">
          <Loading />
        </div>
      </section>
    );
  }

  return (
    <section className="hero1 fix">
      {/* Background image */}
      <div
        className="hero1-background-image"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="swiper hero-global-slider">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          loop={true}
          speed={900}
          pagination={{
            el: paginationRef.current,
            clickable: true,
            renderBullet: (i, className) =>
              `<span class="${className}">${i + 1}</span>`,
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
            swiper.params.pagination.el = paginationRef.current;
          }}
          onSwiper={startSlideTimer}
          onSlideChange={startSlideTimer}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-xl-7">
                    <div className="hero1-content">
                      <h1>{slide.title}</h1>
                      <p>{slide.description}</p>

                      <div className="btn-wrapper pt-40">
                        <Link href="/contact" className="theme-btn style1">
                          Get Free Consultation
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div ref={paginationRef} className="swiper-pagination"></div>
      </div>
    </section>
  );
}
