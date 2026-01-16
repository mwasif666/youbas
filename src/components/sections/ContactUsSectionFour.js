"use client";

import { useState } from "react";
import axios from "axios";

export default function ContactUsSectionFour() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.phone || !form.message) {
      setErrorMsg("Please fill all fields");
      setSuccessMsg("");
      return;
    }

    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("message", form.message);

      const res = await axios.post(
        "https://yobas.innovationpixel.com/public/api/save-request",
        formData,
        {
          validateStatus: (status) => status < 500,
        }
      );

      if (res.status === 200) {
        setSuccessMsg("Message sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else if (res.status === 401) {
        setErrorMsg("Unauthorized request. Please try again later.");
      } else {
        setErrorMsg("Failed to send message");
      }
    } catch (error) {
      setErrorMsg("Failed to send message");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact2 section-padding fix">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-12 d-flex justify-content-center">
            <div className="contact2-content">
              <div className="section-top pb-38">
                <p className="section-top__subtitle text-center">Contact Us</p>
                <h2 className="section-top__title text-center pb-20">
                  Have questions? <br /> Contact us!
                </h2>
              </div>

              {successMsg && (
                <div className="alert alert-success text-center">{successMsg}</div>
              )}
              {errorMsg && (
                <div className="alert alert-danger text-center">{errorMsg}</div>
              )}

              <div className="form">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="form__group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form__group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form__group">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone number"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form__group form__group--large">
                      <textarea
                        name="message"
                        placeholder="Type your message"
                        value={form.message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="btn-wrapper pt-7 text-center">
                    <button
                      type="button"
                      className="theme-btn style1"
                      onClick={handleSubmit}
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
