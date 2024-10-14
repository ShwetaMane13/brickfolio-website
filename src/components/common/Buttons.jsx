export const Buttons = (props) => {
  const { icon, text } = props;
  return (
    <button className="buttons">
      <img className="buttons-icon" src={icon} alt="" />
      <span className="buttons-text">{text}</span>
    </button>
  );
};
