import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="flex items-center flex-col bg-[url('/images/hero/background-car-desenfoque.jpg')] bg-no-repeat bg-cover bg-fixed relative z-10 overflow-hidden h-screen pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container mt-12">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="text-7xl font-extrabold text-amber-300 drop-shadow-lg">
                Somos el service oficial de tu vehículo
                </h1>
                {/*<p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                Introducción al producto principal
                </p>*/}
                <div className="flex flex-col items-center justify-center pt-5 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://nextjstemplates.com/templates/startup"
                    className="rounded-md bg-primary mt-5 py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    PEDIR TURNO AHORA
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 z-[-1] opacity-30 lg:opacity-100"></div>
      </section>
    </>
  );
};

export default Hero;
