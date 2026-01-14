"use client";

import { useMemo, useState } from "react";
import styles from "./Order.module.css";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile");

  // Dummy data (replace with your API / auth context)
  const user = useMemo(
    () => ({
      name: "John Doe",
      email: "john@example.com",
      phone: "+92 300 0000000",
      address: "Lahore, Pakistan",
      memberSince: "Jan 2025",
      avatarLetter: "J",
    }),
    []
  );

  const orders = useMemo(
    () => [
      {
        id: "ORD-10021",
        date: "2026-01-10",
        status: "Delivered",
        total: "$129.00",
        items: 3,
      },
      {
        id: "ORD-10018",
        date: "2026-01-04",
        status: "Processing",
        total: "$49.99",
        items: 1,
      },
      {
        id: "ORD-10011",
        date: "2025-12-22",
        status: "Cancelled",
        total: "$0.00",
        items: 2,
      },
    ],
    []
  );

  const isActive = (key) => (activeTab === key ? styles.activeBtn : "");

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // TODO: call your API
    alert("Password change request submitted (demo).");
  };

  const handleProfileSave = (e) => {
    e.preventDefault();
    // TODO: call your API
    alert("Profile saved (demo).");
  };

  return (
    <div className={styles.pageWrap}>
      {/* Banner */}
      <div className={styles.banner}>
        <div className="container">
          <div className={styles.bannerInner}>
            <h1 className="text-white">My Account</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container pb-5">
        <div className="row g-4">
          {/* Sidebar */}
          <div className="col-12 col-lg-4 col-xl-3">
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.avatar}>{user.avatarLetter}</div>
                <div>
                  <div className={styles.userName}>{user.name}</div>
                  <div className={styles.userEmail}>{user.email}</div>
                  <div className={styles.userMeta}>
                    Member since {user.memberSince}
                  </div>
                </div>
              </div>

              <div className={styles.sidebarNav}>
                <button
                  type="button"
                  className={`${styles.sideBtn} ${isActive("profile")}`}
                  onClick={() => setActiveTab("profile")}
                >
                  <span className={styles.dot} />
                  Profile Information
                </button>

                <button
                  type="button"
                  className={`${styles.sideBtn} ${isActive("orders")}`}
                  onClick={() => setActiveTab("orders")}
                >
                  <span className={styles.dot} />
                  Orders
                </button>

                <button
                  type="button"
                  className={`${styles.sideBtn} ${isActive("password")}`}
                  onClick={() => setActiveTab("password")}
                >
                  <span className={styles.dot} />
                  Change Password
                </button>
              </div>

              <div className={styles.sidebarFooter}>
                <button
                  type="button"
                  className={`btn btn-outline-light w-100 ${styles.logoutBtn}`}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Main */}
          <div className="col-12 col-lg-8 col-xl-9">
            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className={styles.card}>
                <div className={styles.topBar}>
                  <div>
                    <h2 className={styles.h2}>Profile Information</h2>
                    <p className={styles.muted}>
                      Update your personal information and contact details.
                    </p>
                  </div>
                  <span className={styles.pill}>Basic</span>
                </div>

                <form onSubmit={handleProfileSave}>
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <label className={`form-label ${styles.label}`}>
                        Full Name
                      </label>
                      <input
                        className={`form-control ${styles.input}`}
                        defaultValue={user.name}
                        placeholder="Your name"
                      />
                    </div>

                    <div className="col-12 col-md-6">
                      <label className={`form-label ${styles.label}`}>
                        Email
                      </label>
                      <input
                        type="email"
                        className={`form-control ${styles.input}`}
                        defaultValue={user.email}
                        placeholder="you@example.com"
                      />
                    </div>

                    <div className="col-12 col-md-6">
                      <label className={`form-label ${styles.label}`}>
                        Phone
                      </label>
                      <input
                        className={`form-control ${styles.input}`}
                        defaultValue={user.phone}
                        placeholder="+92..."
                      />
                    </div>

                    <div className="col-12 col-md-6">
                      <label className={`form-label ${styles.label}`}>
                        City / Address
                      </label>
                      <input
                        className={`form-control ${styles.input}`}
                        defaultValue={user.address}
                        placeholder="City, Country"
                      />
                    </div>

                    <div className="col-12">
                      <label className={`form-label ${styles.label}`}>
                        About
                      </label>
                      <textarea
                        rows={4}
                        className={`form-control ${styles.textarea}`}
                        placeholder="Write something about yourself..."
                        defaultValue="I love building products and scaling e-commerce operations."
                      />
                    </div>

                    <div className="col-12 d-flex gap-2 flex-wrap">
                      <button
                        type="submit"
                        className={`btn btn-primary ${styles.primaryBtn}`}
                      >
                        Save Changes
                      </button>
                      <button
                        type="button"
                        className={`btn btn-outline-light ${styles.secondaryBtn}`}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === "orders" && (
              <div className={styles.card}>
                <div className={styles.topBar}>
                  <div>
                    <h2 className={styles.h2}>My Orders</h2>
                    <p className={styles.muted}>
                      Track your recent orders and statuses.
                    </p>
                  </div>
                  <span className={styles.pill}>History</span>
                </div>

                <div className={styles.tableWrap}>
                  <div className={`table-responsive ${styles.tableResponsive}`}>
                    <table className={`table ${styles.table}`}>
                      <thead>
                        <tr>
                          <th>Order ID</th>
                          <th>Date</th>
                          <th>Items</th>
                          <th>Status</th>
                          <th className="text-end">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((o) => (
                          <tr key={o.id}>
                            <td className={styles.orderId}>{o.id}</td>
                            <td className={styles.tdMuted}>{o.date}</td>
                            <td className={styles.tdMuted}>{o.items}</td>
                            <td>
                              <span
                                className={`${styles.status} ${statusClass(
                                  o.status,
                                  styles
                                )}`}
                              >
                                {o.status}
                              </span>
                            </td>
                            <td className="text-end">{o.total}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className={styles.orderHelp}>
                    Need help with an order?{" "}
                    <a href="/contact" className={styles.link}>
                      Contact support
                    </a>
                    .
                  </div>
                </div>
              </div>
            )}

            {/* Password Tab */}
            {activeTab === "password" && (
              <div className={styles.card}>
                <div className={styles.topBar}>
                  <div>
                    <h2 className={styles.h2}>Change Password</h2>
                    <p className={styles.muted}>
                      Use a strong password (min 8 chars) and avoid reusing old
                      passwords.
                    </p>
                  </div>
                  <span className={styles.pill}>Security</span>
                </div>

                <form onSubmit={handlePasswordSubmit}>
                  <div className="row g-3">
                    <div className="col-12">
                      <label className={`form-label ${styles.label}`}>
                        Current Password
                      </label>
                      <input
                        type="password"
                        className={`form-control ${styles.input}`}
                        placeholder="••••••••"
                        required
                      />
                    </div>

                    <div className="col-12 col-md-6">
                      <label className={`form-label ${styles.label}`}>
                        New Password
                      </label>
                      <input
                        type="password"
                        className={`form-control ${styles.input}`}
                        placeholder="••••••••"
                        required
                        minLength={8}
                      />
                    </div>

                    <div className="col-12 col-md-6">
                      <label className={`form-label ${styles.label}`}>
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        className={`form-control ${styles.input}`}
                        placeholder="••••••••"
                        required
                        minLength={8}
                      />
                    </div>

                    <div className="col-12 d-flex gap-2 flex-wrap">
                      <button
                        type="submit"
                        className={`btn btn-primary ${styles.primaryBtn}`}
                      >
                        Update Password
                      </button>
                      <button
                        type="button"
                        className={`btn btn-outline-light ${styles.secondaryBtn}`}
                      >
                        Cancel
                      </button>
                    </div>

                    <div className={styles.securityNote}>
                      Tip: Enable 2FA in your account settings (if available)
                      for extra security.
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function statusClass(status, styles) {
  const s = String(status || "").toLowerCase();
  if (s.includes("deliver")) return styles.ok;
  if (s.includes("process")) return styles.warn;
  if (s.includes("cancel")) return styles.bad;
  return styles.neutral;
}
