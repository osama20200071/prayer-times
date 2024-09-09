export default function PrayerItem({ name, time, image }) {
  const wholeTime = time.split(":");
  if (wholeTime[0] > 12) {
    wholeTime[0] -= 12;
    wholeTime[0] = "0" + wholeTime[0];
  }

  return (
    <div id="prayer-card">
      <img
        src={image}
        loading="lazy"
        alt="Accurate Prayer Times for Your Location"
      />
      <div className="content">
        <h2>{name}</h2>
        <h3>{`${wholeTime[0]}:${wholeTime[1]}`}</h3>
      </div>
    </div>
  );
}
