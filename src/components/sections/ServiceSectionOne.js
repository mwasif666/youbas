"use client";

import Link from "next/link";
import styles from "./ServiceSectionOne.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

import {
  FiGlobe,
  FiTruck,
  FiShoppingCart,
  FiTag,
  FiPackage,
  FiLayers,
  FiTrendingUp,
  FiUsers,
  FiBox,
} from "react-icons/fi";

import Loading from "./Loading";

const pickIcon = (title = "") => {
  const t = title.toLowerCase();

  if (t.includes("shopify") || t.includes("web") || t.includes("store"))
    return FiGlobe;

  if (t.includes("ddp") || t.includes("shipping") || t.includes("logistics"))
    return FiTruck;

  if (
    t.includes("marketplace") ||
    t.includes("amazon") ||
    t.includes("walmart")
  )
    return FiShoppingCart;

  if (t.includes("private label") || t.includes("brand")) return FiTag;

  if (t.includes("factory") || t.includes("sourcing")) return FiPackage;

  if (t.includes("wholesale") || t.includes("bulk")) return FiBox;

  if (t.includes("digital") || t.includes("social") || t.includes("marketing"))
    return FiTrendingUp;

  if (t.includes("expansion") || t.includes("multi")) return FiLayers;

  return FiUsers;
};

export default function ServiceSectionOne() {
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://yobas.innovationpixel.com/public/api/services",
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
      <section style={{ minHeight: "80vh" }} className={styles.section}>
        <div className="container text-center py-5">
          <Loading />
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <div className={styles.kicker}>OUR SERVICES</div>
          <h2 className={styles.heading}>SERVICES WE OFFER TO CUSTOMERS</h2>
          <p className={styles.subheading}>
            End-to-end infrastructure to build, scale and expand your e-commerce
            business globally.
          </p>
        </div>

        <div className="row justify-content-center g-3">
          {services.map((service) => {
            const Icon = pickIcon(service.title);

            return (
              <div key={service.id} className="col-12 col-md-6 col-lg-4">
                <article className={styles.card}>
                  <div className={styles.cardTop}>
                    <div className={styles.iconWrap} aria-hidden="true">
                      <Icon className={styles.icon} />
                    </div>
                    <span className={styles.badge}>Service</span>
                  </div>
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                    }}
                    className={styles.cardTitle}
                  >
                    {service.title}
                  </h3>
                  <div
                    className={styles.cardDesc}
                    dangerouslySetInnerHTML={{ __html: service.description }}
                  />
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
