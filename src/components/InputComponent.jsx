import downArrow from "../assets/arrow-down.svg";

export const InputComponent = () => {
  const locations = ["Kharadi", "Viman Nagar"];

  return (
    <div className="top-bar__input input-component">
      <div className="input-group">
        <div className="dropdown">
          <span>Buy In Pune</span>
          <img src={downArrow} alt="" />
        </div>
        <div className="tags-container">
          {locations.map((location, index) => (
            <div key={index} className="tag">
              {location}
              <span className="remove-tag">&times;</span>
            </div>
          ))}
          <span className="add-more">Add More</span>
        </div>
        <button className="search-button">Search</button>
      </div>
    </div>
  );
};
