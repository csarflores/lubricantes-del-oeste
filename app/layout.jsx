"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "../styles/index.css";

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="es">
      <body className="dark:bg-white">
        <Providers>
          {
            location.pathname !== '/confirmacion-reserva' ? <Header /> : null
          }
          {children}
          {
            location.pathname !== '/confirmacion-reserva' ? <Footer /> : null
          }          
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
