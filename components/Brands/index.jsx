import Image from "next/image";
import brandsData from "./brandsData";
import "../../styles/slides.css"

const Brands = () => {
  return (
    <section className="pt-16 lg:opacity-70 lg:hover:opacity-100">
      <div className="container">
        <div className="-mx-4 flex flex-row bg-primary overflow-x-scroll lg:rounded-md lg:overflow-x-scroll">
          <div className="w-full px-4">
            <div className="flex">
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Brands;

const SingleBrand = ({ brand }) => {
  const {image, name } = brand;

  return (
    <div className="slides">
      <Image
        className="p-6 max-w-fit"
        src={image}
        alt={name}
        width={150}
        height={150}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};
