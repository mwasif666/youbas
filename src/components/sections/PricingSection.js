"use client";
import { useEffect, useMemo, useState } from "react";
import { FaCheck } from "react-icons/fa";
import styles from "./PricingSection.module.css";
import axios from "axios";
import Loading from "./Loading";


export default function PricingSection() {
  const [activeTab, setActiveTab] = useState(1);
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);
  const [packages, setPackages] = useState([]);
  const [packagesLoading, setPackagesLoading] = useState(true);

  // const activePackages = useMemo(() => {
  //   return pricingByService[activeTab] || [];
  // }, [activeTab]);


  const getServices = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://yobas.innovationpixel.com/public/api/services"
      );
      setServices(res.data?.data.items || []);
      setActiveTab(res.data?.data.items[0]?.id);
      getPackages();
    } catch (error) {
      console.error("Failed to load services", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  const getPackages = async () => {
    try {
      setPackagesLoading(true);
      const res = await axios.get(
        `https://yobas.innovationpixel.com/public/api/packages?service_id=${activeTab}`
      );
      setPackages(res.data.data.items);
    } catch (error) {
      console.error("Failed to load services", error);
    } finally {
      setPackagesLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab) {
      getPackages();
    }
  }, [activeTab]);

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
      <div className="container">
        {/* Heading */}
        <div className={styles.header}>
          <p className={styles.kicker}>PRICING</p>
          <h2 className={styles.heading}>Choose a plan for your goal</h2>
          <p className={styles.subheading}>
            Select a service tab to view pricing plans for that specific
            service.
          </p>
        </div>

        {/* Tabs */}
        <div className={styles.tabsWrap}>
          <div className={styles.tabs} role="tablist" aria-label="Service tabs">
            {services.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`${styles.tabBtn} ${activeTab === tab.id ? styles.activeTab : ""
                  }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="row g-4 justify-content-center">
          {packagesLoading ? <Loading /> : packages.length === 0 ? <div>No Packages found!</div> : packages?.map((pkg, i) => (
            <div className="col-xl-4 col-lg-4 col-md-6" key={i}>
              <div
                className={`${styles.card} ${pkg?.featured ? styles.featured : ""
                  }`}
              >
                {pkg.featured && <span className={styles.badge}>Popular</span>}

                <h3 className={styles.title}>{pkg.title}</h3>
                <p
                  className={styles.desc}
                  dangerouslySetInnerHTML={{ __html: pkg.description }}
                ></p>

                <div className={styles.priceWrap}>
                  <span className={styles.price}>${pkg.price}</span>
                </div>

                <a href="#!" className={styles.btn}>
                  Choose Plan
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
