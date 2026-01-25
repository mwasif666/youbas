"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Loading from "@/components/sections/Loading";
import axios from "axios";
import { showImage } from "@/util";

export default function ServicesPage() {
   const [loading, setLoading] = useState(true);
   const [services, setServices] = useState([]);
 
   useEffect(() => {
     const getServices = async () => {
       try {
         setLoading(true);
         const res = await axios.get(
           "https://yobas.innovationpixel.com/public/api/services"
         );
         setServices(res.data?.data.items || []);
       } catch (error) {
         console.error("Failed to load services", error);
       } finally {
         setLoading(false);
       }
     };
 
     getServices();
   }, []);

   
  if (loading) {
    return (
      <section className={styles.section} style={{marginTop:"120px"}}>
        <div className="container text-center py-5">
          <Loading />
        </div>
      </section>
    );
  }

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <div>
              <span className={styles.kicker}>Our Services</span>
              <h1 className={styles.title}>
                Everything you need to build and scale an e-commerce brand.
              </h1>
              <p className={styles.subtitle}>
                YouBas provides the operational muscle behind marketplace growth —
                sourcing, logistics, brand building, and digital expansion.
              </p>
            </div>
            <div className={styles.heroCard}>
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                alt="Team collaboration"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.pillsSection}>
        <div className="container">
          <div className={styles.pills}>
            {services.map((service) => (
              <span className={styles.pill}>
                {service.title}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className="container">
          <div className={styles.grid}>
            {services.map((service) => (
              <span
                key={service.slug}
                className={styles.card}
              >
                <div className={styles.cardImage}>
                  <img src={showImage(service.image?.path)} alt={service.title} />
                </div>
                <div className={styles.cardBody}>
                  <h3>{service.title}</h3>
                  <p  dangerouslySetInnerHTML={{ __html: service.description }}/>
                </div>
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
