"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function FreeConsultationPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/contact");
  }, [router]);

  return (
    <div className="section-padding">
      <div className="container text-center">
        <h1>Contact Us</h1>
        <p>Redirecting you to our contact form...</p>
      </div>
    </div>
  );
}
