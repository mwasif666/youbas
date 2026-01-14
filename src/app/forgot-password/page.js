"use client";
import Link from "next/link";
import styles from "./Forgot.module.css";

export default function ForgotPage() {
  return (
    <div className={styles.bg}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-6">
            <form className={styles.panel} action="#">
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
                />
              </label>

              <button className={styles.cta} type="submit">
                SEND RESET LINK
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
