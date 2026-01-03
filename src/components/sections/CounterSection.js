"use client";

import CountUp from "react-countup";
import {useEffect, useRef, useState} from "react";

export default function CounterSection() {
    const [startCount, setStartCount] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setStartCount(true); // Start counting when in viewport
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the section is visible
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, []);

    return (
        <section ref={counterRef} className="counter section-padding-100 bg-theme fix">
            <div className="container">
                <div className="counter-item">
                    <div className="counter-item-box">
                        <h3 className="counter-item-box__value">
                            <span className="counter-number">
                                <CountUp end={32} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : null} />
                            </span>K
                        </h3>
                        <div className="counter-item-box__label">
                            <p>Project Completed</p>
                        </div>
                    </div>
                    <div className="counter-item-box">
                        <h3 className="counter-item-box__value">
                            <span className="counter-number">
                                <CountUp end={25} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : null} />
                            </span>+
                        </h3>
                        <div className="counter-item-box__label">
                            <p>Years Experience</p>
                        </div>
                    </div>
                    <div className="counter-item-box">
                        <h3 className="counter-item-box__value">
                            <span className="counter-number">
                                <CountUp end={28} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : null} />
                            </span>+
                        </h3>
                        <div className="counter-item-box__label">
                            <p>Winning Awards</p>
                        </div>
                    </div>
                    <div className="counter-item-box">
                        <h3 className="counter-item-box__value">
                            <span className="counter-number">
                                <CountUp end={89} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : null} />
                            </span>+
                        </h3>
                        <div className="counter-item-box__label">
                            <p>Expert Members</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}