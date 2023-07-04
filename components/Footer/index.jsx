import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer
        className="wow fadeInUp relative z-10 bg-primary pt-16 md:pt-20 lg:pt-24"
        data-wow-delay=".1s"
      >
        <div className="bg-primary py-8">
          <div className="container">
            <p className="text-center text-base text-body-color dark:text-white">
              Desarrollado por <Link href="https://wa.me/5493492272189" rel="nofollow noopener">César Flores</Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
