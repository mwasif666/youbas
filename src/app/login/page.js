"use client";
import Link from "next/link";
import styles from "./Login.module.css";

export default function LoginPage() {
  return (
    <div className={styles.bg}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-6">
            <form className={styles.panel} action="#">
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
                />
              </label>

              <label className={styles.field}>
                <span className={styles.label}>Password</span>
                <input
                  className={styles.input}
                  type="password"
                  placeholder="Password"
                />
              </label>

              <div className={styles.row}>
                <label className={styles.checkbox}>
                  <input type="checkbox" /> Remember me
                </label>
                <Link className={styles.link} href="/forgot-password">
                  Forgot Password?
                </Link>
              </div>

              <button className={styles.cta} type="submit">
                SIGN IN
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
