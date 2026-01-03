"use client";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import aboutThumb3_1 from "@/assets/images/about/about-thumb3_1.jpg";
import aboutThumb3_2 from "@/assets/images/about/about-thumb3_2.jpg";
import aboutShape3_1 from "@/assets/images/shape/aboutShape3_1.png";
import videoIconLg from "@/assets/images/icon/video-icon-lg.svg";
import aboutThumb3_3 from "@/assets/images/about/about-thumb3_3.jpg";
import Link from "next/link";
import {useEffect} from "react";

export default function AboutSectionThree() {
    useEffect(() => {
        Fancybox.bind("[data-fancybox2]", {
            Thumbs: false, // Disable thumbnails
            Toolbar: true, // Show toolbar
        });

        return () => {
            Fancybox.destroy();
        };
    }, []);

    return (
        <section className="about3 section-padding fix bg-gray-1">
            <div className="container">
                <div className="row g-3">
                    <div className="col-xl-6">
                        <div className="about3-thumb">
                            <div className="about3-thumb__one">
                                <img src={aboutThumb3_1.src} alt="thumb"/>
                            </div>
                            <div className="about3-thumb__two">
                                <img src={aboutThumb3_2.src} alt="thumb"/>
                            </div>
                            <div className="about3-thumb__shape1">
                                <img src={aboutShape3_1.src} alt="shape"/>
                            </div>
                            <div className="about3-thumb__videoIcon">
                                <a data-fancybox2 href="https://www.youtube.com/watch?v=QLLCjZl4YJk" className="popup-video">
                                    <img className="svg" src={videoIconLg.src} alt="icon"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="offset-xl-1 col-xl-5">
                        <div className="about3-content">
                            <div className="section-top">
                                <p className="section-top__subtitle">About Company</p>
                                <h2 className="section-top__title pb-20">Digital agency for your business</h2>
                                <p className="section-top__desc3">There are many variations of passages of Lorem Ipsum
                                    available
                                    but the majority have suffered alteration in some form, by injecte humour, or
                                    randomised
                                    words which.</p>
                            </div>
                            <div className="about3-content-box">
                                <div className="about3-content-box__thumb">
                                    <img src={aboutThumb3_3.src} alt=""/>
                                </div>
                                <div className="about3-content-box-details">
                                    <div className="about3-content-box-details-text">
                                        <span className="about3-content-box-details-text__numb">25+</span>
                                        <span
                                            className="about3-content-box-details-text__desc">Years Experience Company</span>
                                    </div>
                                    <p>Flexible energy service is a key part of the future of energy It can help
                                        you.</p>
                                </div>
                            </div>
                            <div className="btn-wrapper pt-40">
                                <Link className="theme-btn style1" href="/about">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}