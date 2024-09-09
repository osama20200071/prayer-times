// import CountDown from "./CountDown";
import Clock from "./Clock";
import { cities, prayers } from "../utils/data";
import { useEffect, useState } from "react";
import moment from "moment";
import CountDown from "./CountDown";

// to use the arabic date format
// import "moment/dist/locale/en-au";
import "moment/dist/locale/ar-ly";
moment.locale("ar-ly");

export default function Header({ city, timings }) {
  const [nextPrayerIndex, setNextPrayerIndex] = useState(-1);
  const [remainingTime, setRemainingTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  // console.log("header is re-rendered");
  // console.log(nextPrayerIndex);

  useEffect(() => {
    function setupCountdownTimer() {
      const momentNow = moment();
      let prayerIndex;

      if (
        momentNow.isAfter(moment(timings["Fajr"], "hh:mm")) &&
        momentNow.isBefore(moment(timings["Dhuhr"], "hh:mm"))
      ) {
        prayerIndex = 1;
      } else if (
        momentNow.isAfter(moment(timings["Dhuhr"], "hh:mm")) &&
        momentNow.isBefore(moment(timings["Asr"], "hh:mm"))
      ) {
        prayerIndex = 2;
      } else if (
        momentNow.isAfter(moment(timings["Asr"], "hh:mm")) &&
        momentNow.isBefore(moment(timings["Maghrib"], "hh:mm"))
      ) {
        prayerIndex = 3;
      } else if (
        momentNow.isAfter(moment(timings["Maghrib"], "hh:mm")) &&
        momentNow.isBefore(moment(timings["Isha"], "hh:mm"))
      ) {
        prayerIndex = 4;
      } else {
        prayerIndex = 0;
      }

      setNextPrayerIndex(prayerIndex);

      // setup the count down timer
      const nextPrayerObject = prayers[prayerIndex];
      const nextPrayerTime = timings[nextPrayerObject.key]; // time in string
      const nextPrayerTimeMoment = moment(nextPrayerTime, "hh:mm"); // time in the moment format
      let remainingTime = moment(nextPrayerTime, "hh:mm").diff(momentNow);

      // special case for alfajr prayer
      if (remainingTime < 0) {
        const midnightDiff = moment("23:59:59", "hh:mm:ss").diff(momentNow);
        const fajrToMidnightDiff = nextPrayerTimeMoment.diff(
          moment("00:00:00", "hh:mm:ss")
        );
        const totalDifference = midnightDiff + fajrToMidnightDiff;
        remainingTime = totalDifference;
      }
      const durationRemaining = moment.duration(remainingTime);

      // just for formatting purposes 00:00:00
      setRemainingTime({
        hours:
          durationRemaining.hours() < 10
            ? `0${durationRemaining.hours()}`
            : durationRemaining.hours(),
        minutes:
          durationRemaining.minutes() < 10
            ? `0${durationRemaining.minutes()}`
            : durationRemaining.minutes(),
        seconds:
          durationRemaining.seconds() < 10
            ? `0${durationRemaining.seconds()}`
            : durationRemaining.seconds(),
      });
    }

    let interval = setInterval(() => {
      // console.log("calling timer");

      setupCountdownTimer();
    }, 1000);

    return () => {
      console.log("clearing the interval");
      clearInterval(interval);
    };
  }, [timings, nextPrayerIndex]);

  return (
    <div className="grid">
      <div>
        <Clock />
        <h1>{cities[city]}</h1>
      </div>
      <div>
        <h2>
          متبقي حتى صلاة{" "}
          {nextPrayerIndex > -1 ? prayers[nextPrayerIndex].name : "---"}
        </h2>

        <CountDown remainingTime={remainingTime} />
      </div>
    </div>
  );
}
