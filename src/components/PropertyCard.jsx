import location from "../assets/location.svg";
import clock from "../assets/clock.svg";
import ellipse from "../assets/ellipse.svg";
import heart from "../assets/favorites.svg"
import { PropertyConfiguration } from "./PropertyConfiguration";

export const PropertyCard = (props) => {
  const { property } = props;
  return (
    <div className="property-card">
      <section className="property-card__image">
        <img src={property.image} alt="" />
        <img className="property-card__image-heart" src={heart} alt="" />
      </section>

      <div className="property-card__content">
        <section className="property-card__header">
          <section className="property-card__property-name">
            {property.propertyName}{" "}
            <span className="property-card__rera">RERA</span>
            {property.readyToMove ? (
              <span className="property-card__ready-to-move">
                Ready To Move
              </span>
            ) : null}
          </section>

          <section className="property-card__location">
            <img
              className="property-card__location--icon"
              src={location}
              alt=""
            />
            <span className="property-card__location--text">
              {property.location}
            </span>
          </section>
        </section>

        <section className="property-configuration">
          <section className="property-configuration__heading">
            Configuration
          </section>
          <section className="property-configuration__container">
            {property.configuration.map((config) => (
              <PropertyConfiguration config={config} />
            ))}
            <img src={ellipse} alt="" />
          </section>
        </section>

        <section className="property-configuration__more-info">
          <section className="property-configuration__emi">
            EMI starts at ₹{property.emiStartsAt} K
          </section>
          <section className="property-configuration__brokerage">
            ZERO BROKERAGE
          </section>
        </section>

        <section className="property-configuration__logo-and-buttons">
          <section className="property-configuration__logo-and-duration">
            <section className="property-configuration__logo">
              <img src={property.propertyLogo} alt="" />
              <section className="property-configuration__logo-text">
                <span className="property-configuration__logo-heading">
                  Kumar Corp
                </span>
                <span className="property-configuration__logo-sub-heading">
                  Developer
                </span>
              </section>
            </section>
            <section className="property-configuration__duration">
              <img
                className="property-configuration__duration-image"
                src={clock}
                alt=""
              />
              <section className="property-configuration__duration-text">
                {property.uploaded} days ago
              </section>
            </section>
          </section>

          <section className="property-configuration__buttons">
            <button className="property-configuration__view-more">
              View More
            </button>
            <button className="property-configuration__enquire-now">
              Enquire Now
            </button>
          </section>
        </section>
      </div>
    </div>
  );
};
