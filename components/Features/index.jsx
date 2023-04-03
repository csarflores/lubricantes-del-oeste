import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import Brands from "../Brands";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="bg-white py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title="Nuestros servicios"
            /*paragraph="Somos el servicio oficial de tu vehículo."*/
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
        <Brands />
      </section>
    </>
  );
};

export default Features;
