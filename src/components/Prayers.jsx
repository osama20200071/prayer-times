import PrayerItem from "./PrayerItem";
import { useEffect } from "react";
import { images, prayers } from "../utils/data";

export default function Prayers({ city, onFetch, prayersTimings }) {
  // const [prayersTimings, setPrayersTimings] = useState(initialTiming);
  // console.log(prayersTimings);

  useEffect(() => {
    async function fetchPrayers() {
      const response = await fetch(
        `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=Egypt&method=5`
      );
      const resData = await response.json();
      const { timings } = resData.data;

      onFetch(timings);
      // setPrayersTimings(timings);
    }

    fetchPrayers();
  }, [city, onFetch]);

  return (
    <div id="prayers">
      {prayersTimings &&
        prayers.map((prayer) => (
          <PrayerItem
            key={prayer.key}
            name={prayer.name}
            time={prayersTimings[prayer.key]}
            image={images[prayer.key]}
          />
        ))}
    </div>
  );
}
