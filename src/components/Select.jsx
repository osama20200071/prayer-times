import { citiesNames } from "../utils/data";

export default function BasicSelect({ onSelect, city }) {
  const handleChange = (event) => {
    onSelect(event.target.value);
  };

  return (
    <div>
      <select
        id="city-selector"
        name="pets"
        value={city}
        onChange={handleChange}
      >
        {citiesNames.map((city) => (
          <option key={city.en} value={city.en}>
            {city.ar}
          </option>
        ))}
      </select>
    </div>
  );
}
