import ButtonContactShift from "../contact_botton/shiftBtn";
import ButtonContactWhatsapp from "../contact_botton/whatsappBtn";

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
                23 años siendo el service oficial de tu vehículo
                </h1>
                {/*<p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                Introducción al producto principal
                </p>*/}
                <div className="flex justify-center">
                  <ButtonContactShift />
                  <ButtonContactWhatsapp />
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
