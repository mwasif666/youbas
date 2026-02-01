"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import styles from "./Order.module.css";
import axios from "axios";

const ORDERS_ENDPOINT = "https://yobas.innovationpixel.com/public/api/orders";

function ProfilePageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [user, setUser] = useState();
  const [orders, setOrders] = useState([]);
  const [ordersLoading, setOrdersLoading] = useState(false);
  const [ordersError, setOrdersError] = useState("");
  const [activeTab, setActiveTab] = useState(() => {
    const tab = searchParams.get("tab");
    return isValidTab(tab) ? tab : "profile";
  });

  useEffect(() => {
    try {
      const raw = localStorage.getItem("yobasUser");
      const parsed = raw ? JSON.parse(raw) : null;
      if (!parsed) {
        router.replace("/login");
        return;
      }
      setUser(parsed);
    } catch (error) {
      router.replace("/login");
    }
  }, [router]);

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (isValidTab(tab) && tab !== activeTab) {
      setActiveTab(tab);
    }
  }, [searchParams, activeTab]);

  useEffect(() => {
    if (!user?.id) {
      setOrders([]);
      return;
    }

    const fetchOrders = async () => {
      setOrdersLoading(true);
      setOrdersError("");
      const token = localStorage.getItem("access_token")
      console.log(token);
      
      try {
        const data = await axios.get(
          `https://yobas.innovationpixel.com/public/api/orders/${user.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const orders = data?.data?.data || [];
        setOrders(Array.isArray(orders) ? orders : []);
      } catch (error) {
        const message = error?.response?.data?.message || "Network error while loading orders.";
        setOrdersError(message);
        setOrders([]);
      } finally {
        setOrdersLoading(false);
      }
    };

    fetchOrders();
  }, [user?.id]);

  const isActive = (key) => (activeTab === key ? styles.activeBtn : "");

  const handleLogout = () => {
    try {
      localStorage.removeItem("yobasUser");
      localStorage.removeItem("access_token");
      window.dispatchEvent(new Event("yobas:user"));
    } catch (error) {
      // Ignore storage errors.
    }
    router.push("/");
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("access_token");
    const user = localStorage.getItem("yobasUser")
      ? JSON.parse(localStorage.getItem("yobasUser"))
      : null;
    if (!token || !user) {
      toast.error("Not authenticated");
      return;
    }

    const form = e.target;
    const newPassword = form[1].value;
    const confirmPassword = form[1].value;
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const payload = {
      email: user.email,
      token: token,
      password: newPassword,
      password_confirmation: confirmPassword,
    };

    try {
      const response = await axios.post(
        "https://yobas.innovationpixel.com/public/api/client/reset-password", payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Password updated successfully 🔐");
      form.reset();
    } catch (error) {
      if (error.response) {
        toast.error(
          error.response.data?.message || "Password update failed"
        );
      } else {
        toast.error("Network error while updating password");
      }
    }
  };

  const handleProfileSave = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("access_token");
    const user = localStorage.getItem("yobasUser")
      ? JSON.parse(localStorage.getItem("yobasUser"))
      : null;

    if (!token || !user) {
      toast.error("User not authenticated. Please log in again.");
      return;
    }

    const form = e.target;
    const payload = {
      name: form[0].value,
      email: form[1].value,
      phone: form[2].value,
      password: "",
    };

    try {
      const response = await axios.put(
        `https://yobas.innovationpixel.com/public/api/clients/${user.id}`, payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      const updatedUser = { ...user, ...payload };
      localStorage.setItem("yobasUser", JSON.stringify(updatedUser));
      setUser(updatedUser);
      toast.success("Profile Update Successfully");

    } catch (error) {
      if (error.response) {
        toast.error(error.response.data?.message || "Profile update failed")
      } else {
        toast.error("Network error while updating profile");
      }
    }
  };

  return (
    <>
      <ToastContainer />
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
                  <div className={styles.avatar}>
                    {(user?.name || user?.email || "U").charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className={styles.userName}>{user?.name || "User"}</div>
                    <div className={styles.userEmail}>{user?.email || ""}</div>
                    {/* <div className={styles.userMeta}>Member since Jan 2025</div> */}
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
                    onClick={handleLogout}
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
                          defaultValue={user?.name || ""}
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
                          defaultValue={user?.email || ""}
                          placeholder="you@example.com"
                        />
                      </div>

                      <div className="col-12 col-md-6">
                        <label className={`form-label ${styles.label}`}>
                          Phone
                        </label>
                        <input
                          className={`form-control ${styles.input}`}
                          defaultValue={user?.phone || ""}
                          placeholder="+92..."
                        />
                      </div>
                      <div className="col-12 d-flex gap-2 flex-wrap">
                        <button
                          type="button"
                          className={`btn btn-outline-light ${styles.secondaryBtn}`}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className={`btn btn-primary ${styles.primaryBtn}`}
                        >
                          Save Changes
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
                    {ordersLoading && (
                      <div className={styles.muted}>Loading orders...</div>
                    )}
                    {ordersError && (
                      <div className={styles.muted}>{ordersError}</div>
                    )}

                    {!ordersLoading && !ordersError && orders.length === 0 && (
                      <div className={styles.muted}>No orders found.</div>
                    )}

                    {!ordersLoading && !ordersError && orders.length > 0 && (
                      <div
                        className={`table-responsive ${styles.tableResponsive}`}
                      >
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
                            {orders.map((o, index) => (
                              <tr key={o.id || o.order_id || index}>
                                <td className={styles.orderId}>
                                  {o.id || o.order_id || "—"}
                                </td>
                                <td className={styles.tdMuted}>
                                  {o.date || o.created_at || "—"}
                                </td>
                                <td className={styles.tdMuted}>
                                  {o.items || o.total_items || "—"}
                                </td>
                                <td>
                                  <span
                                    className={`${styles.status} ${statusClass(
                                      o.status || o.order_status,
                                      styles,
                                    )}`}
                                  >
                                    {o.status || o.order_status || "Pending"}
                                  </span>
                                </td>
                                <td className="text-end">
                                  {o.total || o.total_amount || "—"}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

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
                      {/* <div className="col-12">
                      <label className={`form-label ${styles.label}`}>
                        Current Password
                      </label>
                      <input
                        type="password"
                        className={`form-control ${styles.input}`}
                        placeholder="••••••••"
                        required
                      />
                    </div> */}

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
                          type="button"
                          className={`btn btn-outline-light ${styles.secondaryBtn}`}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className={`btn btn-primary ${styles.primaryBtn}`}
                        >
                          Update Password
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function statusClass(status, styles) {
  const s = String(status || "").toLowerCase();
  if (s.includes("deliver")) return styles.ok;
  if (s.includes("process")) return styles.warn;
  if (s.includes("cancel")) return styles.bad;
  return styles.neutral;
}

function isValidTab(tab) {
  return ["profile", "orders", "password"].includes(tab);
}

export default function ProfilePage() {
  return (
    <Suspense fallback={<div className="container py-5">Loading...</div>}>
      <ProfilePageContent />
    </Suspense>
  );
}
