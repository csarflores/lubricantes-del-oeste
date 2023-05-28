"use client";
import SectionTitle from "../Common/SectionTitle";
import pricingData from './pricingData';
import PricingBox from "./PricingBox";
import {format} from 'date-fns'
import es from "date-fns/locale/es/index";

const Pricing = () => {

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title={format(new Date(), "'Promociones de' MMMM", {locale: es})}
          /*paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."*/
          center
          width="665px"
        />
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {pricingData.map((pricing) => (
            <PricingCard key={pricing.id} pricing={pricing} />
          ))}
        </div>
    </div>
    </section >
  );
};

export default Pricing;

const PricingCard = ({ pricing }) => {
  const { title, description, urlImage, descriptionImage } = pricing;

  return (
    <PricingBox
      title={title}
      subtitle={description}
      urlImage={urlImage}
      descriptionImage={descriptionImage}
    >
    </PricingBox>
  )
}