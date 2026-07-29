import { useEffect, useState } from "react";
import "../css/countdown.css";

function Countdown() {

  const getTimeLeft = () => {
    const targetDate = new Date("August 14, 2026 00:00:00").getTime();
    const now = new Date().getTime();

    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };


  const [time, setTime] = useState(getTimeLeft());


  useEffect(() => {

    const timer = setInterval(() => {
      setTime(getTimeLeft());
    }, 1000);


    return () => clearInterval(timer);

  }, []);


  return (
    <section className="countdown">

      <h2>
        🇵🇰 14 August Mega Sale Ends In
      </h2>

      <div className="timer">

        <div>
          <h1>{time.days}</h1>
          <p>Days</p>
        </div>

        <div>
          <h1>{time.hours}</h1>
          <p>Hours</p>
        </div>

        <div>
          <h1>{time.minutes}</h1>
          <p>Minutes</p>
        </div>

        <div>
          <h1>{time.seconds}</h1>
          <p>Seconds</p>
        </div>

      </div>

    </section>
  );
}

export default Countdown;