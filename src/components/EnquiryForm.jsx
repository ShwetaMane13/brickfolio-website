export const EnquiryForm = () => {
  return (
    <div className="enquiry-form">
      <section className="enquiry-form__heading">NEED HELP?</section>
      <section className="enquiry-form__text">
        Get in touch with BrickFolio Expert for free consultation
      </section>

      <section className="enquiry-form__fields">
        <input className="enquiry-form__input" type="text" placeholder="Enter your name"/>
        <input className="enquiry-form__input" type="text" placeholder="Enter your number"/>
        <input className="enquiry-form__input" type="text" placeholder="Enter your email"/>
      </section>

      <button className="enquiry-form__button">ENQUIRE NOW</button>
    </div>
  );
};
