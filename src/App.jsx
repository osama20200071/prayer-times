import Prayers from "./components/prayers";
import "./App.css";
import Divider from "./components/Divider";
import Header from "./components/Header";
import BasicSelect from "./components/Select";
import { useCallback, useState } from "react";
import { initialTiming } from "./utils/data";
import Footer from "./components/Footer";

function App() {
  const [city, setCity] = useState("Cairo");
  const [timings, setTimings] = useState(initialTiming);

  function selectCityHandler(cityName) {
    setCity(cityName);
  }

  const fetchTimingsHandler = useCallback(function fetchTimingsHandler(
    prayerTimings
  ) {
    setTimings(prayerTimings);
  },
  []);

  return (
    <>
      <Header city={city} timings={timings} />
      <Divider />
      <Prayers
        onFetch={fetchTimingsHandler}
        city={city}
        prayersTimings={timings}
      />
      <BasicSelect onSelect={selectCityHandler} city={city} />
      <Footer />
    </>
  );
}

export default App;
