import Image from "next/image";
import brandsData from "./brandsData";
import "../../styles/slider.css";

const Brands = () => {
  return (
    <section className="pt-16 opacity-70 hover:opacity-100">
      <div className="container">
        <div className="-mx-4 flex flex-wrap bg-primary rounded-md">
          <div className="w-full px-4">
            <div className="flex flex-row">
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
        className="snap-start p-4"
        scroll={false}
        src={image}
        alt={name}
        width={150}
        height={150}
      />
    </div>
  );
};
