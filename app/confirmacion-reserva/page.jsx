import ButtonQualify from "@/components/contact_botton/qualifyBtn";
import ButtonContactWhatsapp from "@/components/contact_botton/whatsappBtn";
import Image from "next/image";
import Link from "next/link";

export default function ConfirmacionReserva() {
  return (
    <>
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <Link href="/" passHref>
            <Image
              alt="Lubricantes del Oeste"
              src="/images/logo/logotipo-horizontal.png"
              className="flex h-auto w-full md:hidden pb-8"
              width={150}
              height={150}
            />
          </Link>
          <div className="mx-auto max-w-xl h-full text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-4xl font-bold text-gray-900 uppercase pb-8 md:text-7xl">
              Turno confirmado
            </h2>
            <h3 className="font-bold text-gray-900 pb-8">¡Nos encantaría que nos recomiendes o califiques!</h3>
            <p className="text-gray-500 text-justify md:mt-4 md:block">
              ¡Gracias por atender tu vehículo con nosotros! Nos alegra que hayas elegido nuestro servicio. Si tienes alguna pregunta o necesitas más información, puedes llamarnos o enviarnos un WhatsApp.
            </p>
            <div className="mt-4 md:mt-8 md:flex md:justify-center">
              <ButtonQualify />
              <ButtonContactWhatsapp />
            </div>
          </div>
        </div>
        <Link href="/" passHref>
          <Image
            alt="Lubricantes del Oeste"
            src="/images/logo/logotipo-vertical.jpg"
            className="hidden h-screen w-3/4 p-4 md:p-8 lg:p-12 md:flex md:w-full md:h-full"
            width={200}
            height={200}
          />
        </Link>
      </section>
    </>
  );
}