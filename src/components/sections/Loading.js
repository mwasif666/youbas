"use client";
import React from "react";

const Loading = () => {
  return (
    <div className="loader-wrap" aria-live="polite" aria-busy="true">
      <div className="spinner" />
      <span className="loader-text">Loading…</span>

      <style jsx>{`
        .loader-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 120px;
          gap: 12px;
          margin-top: 20px;
        }

        .spinner {
          width: 42px;
          height: 42px;
          border: 4px solid rgba(0, 0, 0, 0.1);
          border-top-color: #0a58ca;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        .loader-text {
          font-size: 14px;
          color: #555;
          letter-spacing: 0.3px;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;
