import Link from "next/link";
import Image from "next/image";
import ButtonContactShift from "../contact_botton/shiftBtn";


const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const Contact = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-black">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md dark:bg-primary text-black">
        {checkIcon}
      </span>
      <span className="hover:underline-offset-auto hover:text-primary">
        {text}
      </span>
    </p>
  );
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-darkInfo py-11 px-8 dark:bg-darkInfo sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-center text-2xl font-bold text-black dark:text-black sm:text-3xl lg:text-2xl xl:text-3xl">
                Deja tu vehículo en manos de expertos
              </h2>
              <div className="flex mt-8 mb-8 flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <ButtonContactShift />
              </div>
              <div
                className="wow fadeInUp mb-12 pb-10 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <Link href="https://www.google.com/maps/place/RN9+2452,+Ca%C3%B1ada+de+Gomez,+Santa+Fe/@-32.805396,-61.422847,15z/data=!4m5!3m4!1s0x95c9dde229aaf3e1:0x14ce17d840ab6581!8m2!3d-32.8053959!4d-61.422847?hl=es" target={"_blank"}>
                      <List text="Ruta 9 2452" />
                    </Link>
                    <Link href="mailto:emisantini@hotmail.com">
                      <List text="emisantini@hotmail.com" />
                    </Link>
                    <Link aria-label="Chat en WhatsApp" href="https://wa.me/5493471626032" target={"_blank"}>
                        <List text="3471-626032" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative opacity-70 grid place-content-center grayscale transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100">
                <Image 
                  className="!relative !h-60 lg:!h-full" 
                  src="/images/medios-de-pago.png" 
                  alt="Medios de pago" 
                  fill />
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12 rounded-md">
            <iframe className="h-64 w-full lg:h-full rounded-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9905.148954467291!2d-61.41425412380019!3d-32.804828864531046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c9dde229aaf3e1%3A0x14ce17d840ab6581!2sRN9%202452%2C%20Ca%C3%B1ada%20de%20Gomez%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1678387752073!5m2!1ses!2sar"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
