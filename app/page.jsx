import AboutSectionOne from "@/components/About/AboutSectionOne";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <AboutSectionOne />
      <Gallery />
      <Pricing />
      <Contact />
    </>
  );
}
