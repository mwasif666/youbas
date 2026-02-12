"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import styles from "./Forgot.module.css";
import { useRouter } from "next/navigation";

export default function ForgotPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    if (!email.trim()) {
      setStatus({ type: "error", message: "Email is required." });
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("email", email.trim());

      const { data } = await axios.post(
        "https://yobas.innovationpixel.com/public/api/client/forgot-password",
        formData
      );
      router.push("/verify-otp");
      setStatus({
        type: "success",
        message: data?.message || "OTP sent to your email.",
      });
      localStorage.setItem("email", email);
      setEmail("");
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error?.response?.data?.message ||
          "Unable to send reset link. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.bg}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-6">
            <form className={styles.panel} onSubmit={handleSubmit}>
              <h1 className={styles.title}>Forgot Password</h1>
              <p className={styles.subtitle}>
                Enter your account email and we'll send reset instructions.
              </p>

              <label className={styles.field}>
                <span className={styles.label}>E-mail</span>
                <input
                  className={styles.input}
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  required
                />
              </label>

              {status.message && (
                <p
                  className={
                    status.type === "error"
                      ? styles.error
                      : styles.success
                  }
                >
                  {status.message}
                </p>
              )}

              <button className={styles.cta} type="submit" disabled={loading}>
                {loading ? "SENDING..." : "SEND OTP"}
              </button>

              <div className={styles.footer}>
                <Link href="/login">Back to Sign In</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
