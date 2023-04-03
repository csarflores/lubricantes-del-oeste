import Image from "next/image";

const PricingBox = (props) => {
  const { title, subtitle, urlImage, descriptionImage } = props;

  return (
    <div className="w-full">
      <div
        className="wow fadeInUp text-[#FFFFFF] relative z-10 rounded-md bg-white px-8 py-10 shadow-signUp dark:bg-darkInfo"
        data-wow-delay=".1s"
      >
        <h2 className="mb-2 text-3xl text-center font-bold">
            {title}
        </h2>
        <p className="mb-7 text-base text-center h-14 text-[#FFFFFF]">{subtitle}</p>
        <div className="mb-8 border-b border-body-color border-opacity-10 pb-8 dark:border-white dark:border-opacity-10">
          <button className="flex w-full items-center justify-center rounded-md bg-primary text-white p-3 text-base font-semibold transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
            Reservar turno ahora
          </button>
        </div>
        <div className="w-full overflow-hidden rounded-md relative" style={{ height: '30vh' }}>
          <Image
            className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
            fill
            style={{ objectFit: "cover"}}
            src={urlImage}
            alt={descriptionImage}
          />
        </div>
      </div>
    </div>
  );
};

export default PricingBox;