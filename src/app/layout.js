import { Poppins, Oswald, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["200", "400", "600", "700"] });
const oswald = Oswald({ subsets: ["latin"], weight: ["200", "400", "600", "700"] });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["200", "400", "600", "800"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["300", "500", "700"] });

import "@/assets/css/all.min.css";
import "@/assets/css/animate.css";
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/magnific-popup.css";
import "@/assets/css/main.css";
// import "@/assets/css/main.css.map";
import "@/assets/css/meanmenu.css";
import "@/assets/css/splitting.css";
import "@/assets/css/swiper-bundle.min.css";


// import "@/assets/scss/main.scss";

import WowProvider from "@/provider/WowProvider";
import Script from "next/script";
import MouseCursor from "@/components/MouseCursor";
import BackToTop from "@/components/BackToTop";
import SearchBoxPopup from "@/components/SearchBoxPopup";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileMenu from "@/components/header/MobileMenu";
import SidebarMenu from "@/components/SidebarMenu";
import {AppWrapper} from "@/context";

export const metadata = {
  title: "Briza - Creative & Digital Agency Next Js Template",
  description: "Briza - Creative & Digital Agency Next Js Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      {/* Initializes WOW.js globally */}
      <WowProvider/>
      {/*===== Mouse Cursor Start =====*/}
      <MouseCursor />
      {/*===== Mouse Cursor End =====*/}

      {/*===== Back To Top Start =====*/}
      <BackToTop />
      {/*===== Back To Top End =====*/}
      <AppWrapper>

          {/*===== Search Box Popup Start =====*/}
          <SearchBoxPopup />
          {/*===== Search Box Popup End =====*/}

          {/*===== Sidemenu Start =====*/}
          <SidebarMenu />
          {/*===== Sidemenu End =====*/}

          {/*===== Mobilemenu    S T A R T =====*/}
          <MobileMenu />
          {/*===== Mobilemenu    END =====*/}

          {/*===== Header Section    S T A R T =====*/}
          <Header />
          {/*===== Header Section    END =====*/}
      </AppWrapper>

        {children}

      {/*===== Footer Section    S T A R T =====*/}
      <Footer />
      {/*===== Footer Section    END =====*/}
      <Script src="/assets/js/bootstrap.bundle.min.js"></Script>
      </body>
    </html>
  );
}
