import Script from "next/script";

const CalendlyComponent = () => {
  return (
    <>
      <section
        id="reservas"
        className="flex items-center flex-col relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container mt-12">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">

              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="text-7xl text-shadow-lg font-extrabold text-amber-300 drop-shadow-2xl px-4 pb-10">Reservá un turno para tu service</h1>
                <div className="border-primary border-solid border-4">
                  {/*Principio del widget integrado de Calendly*/}
                  <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/d/2m5-rst-2sz/turno-para-services?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=ffd500"
                    style={{ minWidth: '320px', height: '700px' }}
                  ></div>
                  <Script
                    id="calendly"
                    src="https://assets.calendly.com/assets/external/widget.js"
                    async
                  />
                  {/*Fin del widget integrado de Calendly*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CalendlyComponent