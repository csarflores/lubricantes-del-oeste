"use client";

import { usePathname } from 'next/navigation';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Providers } from "./providers";
import "../styles/index.css";

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="es">
      <body className="dark:bg-white">
        <Providers>
          {
            usePathname() !== '/confirmacion-reserva' ? <Header /> : null
          }
          {children}
          {
            usePathname() !== '/confirmacion-reserva' ? <Footer /> : null
          }          
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
