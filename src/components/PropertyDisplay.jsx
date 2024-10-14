import { data } from "../constants";
import { BrokerageCard } from "./BrokerageCard";
import { EnquiryForm } from "./EnquiryForm";
import { PropertyCard } from "./PropertyCard";

export const PropertyDisplay = () => {
  return (
    <div className="property-display">
      <div className="property-display__header">
        <section className="property-display__breadcrumb">
          {"Home > Property in Pune > Flats in Pune"}
        </section>
        <section className="property-display__heading">
          Flats For Sale In Kharadi, Viman Nagar, Pune
        </section>
      </div>
      <div className="property-display__content">
        <div className="property-display__card-container">
          {data.map((prop) => (
            <PropertyCard property={prop} />
          ))}
        </div>
        <div className="property-display__right-container">
          <BrokerageCard />
          <EnquiryForm />
        </div>
      </div>
    </div>
  );
};
