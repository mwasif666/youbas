"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import styles from "./VerifiyOTP.module.css";

export default function VerifyOTP() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });
    if (!email.trim()) {
      setStatus({ type: "error", message: "Email is required." });
      return;
    }

    if (!otp.trim()) {
      setStatus({ type: "error", message: "OTP code is required." });
      return;
    }

    if (!password.trim()) {
      setStatus({ type: "error", message: "New password is required." });
      return;
    }

    if (password !== confirmPassword) {
      setStatus({
        type: "error",
        message: "Passwords do not match.",
      });
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("email", email.trim());
      formData.append("verification_code", otp.trim());
      formData.append("password", password);
      formData.append("password_confirmation", confirmPassword);

      const { data } = await axios.post(
        "https://yobas.innovationpixel.com/public/api/client/reset-password",
        formData
      );

      setStatus({
        type: "success",
        message: data?.message || "Password Reset Successfully!",
      });

      // Clear fields
      setOtp("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error?.response?.data?.message ||
          "Something went wrong. Please try again.",
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
              <h1 className={styles.title}>Reset Password</h1>

              <p className={styles.subtitle}>
                Enter OTP and set a new password.
              </p>
              <label className={styles.field}>
                <span className={styles.label}>Email</span>
                <input
                  className={styles.input}
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  required
                />
              </label>
              <label className={styles.field}>
                <span className={styles.label}>OTP Code</span>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  disabled={loading}
                  required
                />
              </label>
              <label className={styles.field}>
                <span className={styles.label}>New Password</span>
                <input
                  className={styles.input}
                  type="password"
                  placeholder="Enter new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                  required
                />
              </label>

              <label className={styles.field}>
                <span className={styles.label}>Confirm Password</span>
                <input
                  className={styles.input}
                  type="password"
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
                {loading ? "RESETTING..." : "RESET PASSWORD"}
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
