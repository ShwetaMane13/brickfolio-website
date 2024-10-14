import zero from "../assets/zero.svg";

export const BrokerageCard = () => {
  return (
    <div className="brokerage-card">
      <section>
        <img className="brokerage-card__image" src={zero} alt="" />
      </section>
      <section className="brokerage-card__heading">
        ZERO <span className="brokerage-card__span">BROKERAGE</span>
      </section>
      <section className="brokerage-card__text">
        We never charge on home purchases, offering you expert guidance without
        any hidden fees or extra costs.
      </section>
    </div>
  );
};
