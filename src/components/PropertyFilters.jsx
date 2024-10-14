import { filters } from "../constants";

export const PropertyFilters = () => {
  return (
    <div className="filters">
      {filters.map((filter) => (
        <select className="filters__select">
          <option className="filters__option" value={filter}>{filter}</option>
        </select>
      ))}
    </div>
  );
};