'use client';

import { useEffect, useState } from 'react';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countDownDate = new Date('2024-11-25').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12">
        <div className="timer">
          <span>{timeLeft.days}</span>
          days
        </div>
        <div className="timer">
          <span>{timeLeft.hours}</span>
          hours
        </div>
        <div className="timer">
          <span>{timeLeft.minutes}</span>
          minutes
        </div>
        <div className="timer">
          <span>{timeLeft.seconds}</span>
          seconds
        </div>
      </div>
      <div className="text-center mt-12">
        <p className="text-xl md:text-3xl mt-8">
          End of military service at <br />
          25 / 11 / 2024 🎉
        </p>
      </div>
    </>
  );
};

export default Timer;
