"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Link from "next/link";

import heroThumb1_1 from "@/assets/images/hero/1.jpeg";
import heroThumb1_2 from "@/assets/images/hero/2.jpeg";
// import heroThumb1_3 from "@/assets/images/hero/heroThumb1_3.png";
import heroThumb1_3 from "@/assets/images/hero/3.jpeg";

const slides = [
  {
    id: 1,
    bg: heroThumb1_1.src,
    title: "Build, Scale & Automate Your E-Commerce Brand",
    subtitle: "With Factory-Direct Advantage",
    desc:
      "YouBas Ecom Services helps entrepreneurs, brands, and investors launch, manage, and scale profitable e-commerce businesses on Amazon, eBay, Walmart, Etsy, and TikTok Shop. Our approach is backed by direct factory sourcing, DDP shipping, and complete end-to-end brand building — allowing businesses to grow faster, operate efficiently, and scale sustainably.",
    ctaText: "Get Free Consultation",
    ctaLink: "/contact",
  },
  {
    id: 2,
    bg: heroThumb1_2.src,
    title: "End-to-End E-Commerce Growth Services",
    subtitle: "From sourcing to scaling — we handle it all",
    desc:
      "We provide complete e-commerce growth solutions covering marketplace management across Amazon, eBay, Walmart, Etsy, and TikTok Shop. Our services include private label and brand building, factory-direct product sourcing, and reliable China to USA, UK, and Australia DDP shipping. Alongside this, we support businesses with web development, digital marketing, and social growth to ensure consistent and scalable expansion.",
    ctaText: "Get Free Consultation",
    ctaLink: "/contact",
  },
  {
    id: 3,
    bg: heroThumb1_3.src,
    title: "Why Businesses Choose YouBas Ecom Services",
    subtitle: "Built for long-term, scalable growth",
    desc:
      "Businesses choose YouBas Ecom Services because we work directly with verified factories, offering factory-level pricing without middlemen. Our team brings deep multi-marketplace expertise, dedicated account managers, and scalable systems designed for long-term growth. With a transparent process and clear reporting, we focus on building strong foundations that support sustainable success over time. We don’t sell services — we build sustainable e-commerce businesses.",
    ctaText: "Get Free Consultation",
    ctaLink: "/contact",
  },
];


export default function HeroSectionOne() {
  const [bgImage, setBgImage] = useState(slides[0].bg);
  const paginationRef = useRef(null);

  const syncBg = (swiper) => {
    const idx = typeof swiper?.realIndex === "number" ? swiper.realIndex : 0;
    setBgImage(slides[idx]?.bg || slides[0].bg);
  };

  return (
    <section className="hero1 fix">
      {/* IMPORTANT: background overlay click block na kare */}
      <div
        className="hero1-background-image"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="swiper hero-global-slider">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          speed={900}
          watchSlidesProgress={true}
          // ✅ pagination ko ref se bind karna
          onBeforeInit={(swiper) => {
            swiper.params.pagination.el = paginationRef.current;
          }}
          pagination={{
            el: paginationRef.current,
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className}">${index + 1}</span>`,
          }}
          onSwiper={syncBg}
          onSlideChange={syncBg}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="container">
                <div className="row g-4">
                  <div className="col-lg-8 col-xl-7">
                    <div className="hero1-content">
                      <div className="hero1-content__title">
                        <h1>{slide.title}</h1>
                      </div>

                      {slide.subtitle ? (
                        <div className="hero1-content__subtitle">
                          <h4>{slide.subtitle}</h4>
                        </div>
                      ) : null}

                      <div className="hero1-content__desc">
                        {slide.desc ? <h4>{slide.desc}</h4> : null}

                        {slide.bullets?.length ? (
                          <ul className="hero1-bullets">
                            {slide.bullets.map((b, i) => (
                              <li key={i}>{b}</li>
                            ))}
                          </ul>
                        ) : null}

                        {slide.bottomLine ? (
                          <p className="hero1-bottomline">{slide.bottomLine}</p>
                        ) : null}
                      </div>

                      <div className="btn-wrapper pt-40">
                        <Link className="theme-btn style1" href={slide.ctaLink}>
                          {slide.ctaText}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ Ref wala pagination div (same place) */}
        <div ref={paginationRef} className="swiper-pagination top-0"></div>
      </div>
    </section>
  );
}
