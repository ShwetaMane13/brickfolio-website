import area from "../assets/area.svg";
import tag from "../assets/tag.svg";

export const PropertyConfiguration = (props) => {
  const { config } = props;
  return (
    <div className="property-configuration__tiles">
      <section className="property-configuration__tiles-content">
        <section className="property-configuration__property-type">
          {config.propertyType}
        </section>
        <section className="property-configuration__property-area">
          <img src={area} alt="" />
          {config.area}
        </section>
        <section className="property-configuration__property-price">
          <img src={tag} alt="" />
          ₹{config.startingPrice}
        </section>
      </section>

      
    </div>
    
  );
}; 
