import { memo, useEffect, useState } from "react";
import "moment/dist/locale/ar-dz";
import moment from "moment";

const duration = 10000;

moment.locale("ar-dz");
const Clock = memo(function Clock() {
  const [today, setToday] = useState();

  useEffect(() => {
    // for the first time the component is rendered
    const now = moment().format("MMM Do YYYY | h:mm");
    setToday(now);

    // to update the clock every 10 seconds
    const interval = setInterval(() => {
      const now = moment().format("MMM Do YYYY | h:mm");
      setToday(now);
    }, duration);

    return () => clearInterval(interval);
  }, []);

  return <h2>{today}</h2>;
});

export default Clock;
