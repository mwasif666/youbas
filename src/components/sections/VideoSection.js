"use client";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import videoIcon from "@/assets/images/icon/video-icon.svg";
import videoThumb1_1 from "@/assets/images/video/videoThumb1_1.jpg";
import {useEffect} from "react";

export default function VideoSection() {
    useEffect(() => {
        Fancybox.bind("[data-fancybox-video]", {
            Thumbs: false, // Disable thumbnails
            Toolbar: true, // Show toolbar
        });

        return () => {
            Fancybox.destroy();
        };
    }, []);

    return (
        <div className="video-section  pb-0 fix">
            <div className="video-box-area">
                <div className="video-wrap style1">
                    <div className="video-box fix background-image"
                         style={{backgroundImage: `url(${videoThumb1_1.src})` }}>
                        <a data-fancybox-video href="https://www.youtube.com/watch?v=QLLCjZl4YJk" className="play-btn popup-video">
                            <img className="svg" src={videoIcon.src} alt="icon"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}