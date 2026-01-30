"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Login.module.css";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const formData = new FormData();
      formData.append("email", formValues.email.trim());
      formData.append("password", formValues.password);

      const response = await fetch(
        "https://yobas.innovationpixel.com/public/api/client/login",
        {
          method: "POST",
          body: formData,
        }
      );

      const payload = await response.json().catch(() => null);

      if (!response.ok) {
        const message =
          payload?.message ||
          payload?.error ||
          "Login failed. Please try again.";
        setStatus({ type: "error", message });
        return;
      }

      setStatus({
        type: "success",
        message: payload?.message || "Logged in successfully.",
      });

      const userId =
        payload?.data?.id ||
        payload?.user?.id ||
        payload?.id ||
        payload?.data?.user_id ||
        payload?.user_id ||
        null;
      const userName =
        payload?.data?.name ||
        payload?.user?.name ||
        payload?.name ||
        formValues.email;
      const userEmail =
        payload?.data?.email || payload?.user?.email || formValues.email;

      try {
        router.push("/");
        localStorage.setItem(
          "yobasUser",
          JSON.stringify({ id: userId, name: userName, email: userEmail })
        );
        window.dispatchEvent(new Event("yobas:user"));
      } catch (error) {
        // Ignore storage errors.
      }
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
              <h1 className={styles.title}>Sign In To Your Account</h1>
              <p className={styles.subtitle}>
                Enter your credentials to access your account.
              </p>

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

              <div className={styles.row}>
                <Link className={styles.link} href="/forgot-password">
                  Forgot Password?
                </Link>
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
                {isSubmitting ? "SIGNING IN..." : "SIGN IN"}
              </button>

              <div className={styles.footer}>
                Don't have an account? <Link href="/signup">Register Now</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
