import Image from "next/image";

const SingleFeature = ({ feature }) => {
  const { image, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex !h-60">
          <Image className="!relative" src={image} alt={title} fill />
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-black sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-lg font-medium leading-relaxed text-black">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
