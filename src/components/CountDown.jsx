export default function CountDown({ remainingTime }) {
  return (
    <h1>{`${remainingTime.hours}:${remainingTime.minutes}:${remainingTime.seconds}`}</h1>
  );
}
