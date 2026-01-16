"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Signup.module.css";

const SIGNUP_ENDPOINT = "https://yobas.innovationpixel.com/public/api/clients";

export default function SignupPage() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    const formData = new FormData();
    formData.append("name", formValues.name.trim());
    formData.append("email", formValues.email.trim());
    formData.append("phone", formValues.phone.trim());
    formData.append("password", formValues.password);

    try {
      const response = await fetch(SIGNUP_ENDPOINT, {
        method: "POST",
        body: formData,
      });

      const payload = await response.json().catch(() => null);

      if (!response.ok) {
        const message =
          payload?.message ||
          payload?.error ||
          "Signup failed. Please try again.";
        setStatus({ type: "error", message });
        return;
      }

      setStatus({
        type: "success",
        message: payload?.message || "Account created successfully.",
      });
      setFormValues({ name: "", email: "", phone: "", password: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Network error. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.bg}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-6">
            <form className={styles.panel} onSubmit={handleSubmit}>
              <h1 className={styles.title}>Create an Account</h1>
              <p className={styles.subtitle}>
                Start your free account by filling the form below.
              </p>

              <div className="row">
                <div className="col-lg-12">
                  <label className={styles.field}>
                    <span className={styles.label}>Full name</span>
                    <input
                      className={styles.input}
                      type="text"
                      placeholder="Full name"
                      name="name"
                      value={formValues.name}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div className="col-lg-12">
                  <label className={styles.field}>
                    <span className={styles.label}>E-mail</span>
                    <input
                      className={styles.input}
                      type="email"
                      placeholder="E-mail"
                      name="email"
                      value={formValues.email}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div className="col-lg-12">
                  <label className={styles.field}>
                    <span className={styles.label}>Phone</span>
                    <input
                      className={styles.input}
                      type="tel"
                      placeholder="Phone"
                      name="phone"
                      value={formValues.phone}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div className="col-lg-12">
                  <label className={styles.field}>
                    <span className={styles.label}>Password</span>
                    <input
                      className={styles.input}
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={formValues.password}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
              </div>

              {status.type !== "idle" && (
                <p
                  className={
                    status.type === "success" ? styles.success : styles.error
                  }
                >
                  {status.message}
                </p>
              )}

              <button
                className={styles.cta}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "CREATING..." : "CREATE ACCOUNT"}
              </button>

              <div className={styles.footer}>
                Already have an account? <Link href="/login">Sign in</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
