import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      {isVisible && (
        <div
          name="scroll to top"
          aria-label="scroll to top"
          className="flex h-20 w-20 cursor-pointer items-center justify-center transition duration-300 ease-in-out"
        >
          <Link href={"https://wa.me/5493471626032"} target="_blank">
            <Image 
              src="/images/whatsapp_logo.svg"
              alt="Whatsapp Lubricentro del Oeste" 
              height={300} 
              width={300} 
            />
          </Link>
        </div>
      )}
    </div>
  );
}
