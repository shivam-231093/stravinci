import React, { useState, useEffect } from "react";

function ComingSoon() {

  const launchDate = new Date("2025-06-01T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(launchDate - new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(launchDate - new Date().getTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getTimeParts = (time) => {
    if (time <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(time / (1000 * 60 * 60 * 24)),
      hours: Math.floor((time / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((time / (1000 * 60)) % 60),
      seconds: Math.floor((time / 1000) % 60),
    };
  };

  const { days, hours, minutes, seconds } = getTimeParts(timeLeft);

  return (<>
    <div className="flex flex-col relative z-40 items-center justify-center min-h-screen bg-zinc-950 text-white text-center px-6">
  
      <h1 className="text-8xl font-bold mb-4 bonheur-royale-regular">Stravinci</h1>
      <p className="text-gray-400 text-lg mb-6">Something amazing is coming soon. Stay tuned!</p>

      {/* Countdown Timer */}
      <div className="flex space-x-6 text-3xl font-bold mb-6">
        <div className="text-center">
          <span className="block">{days}</span>
          <span className="text-gray-400 text-sm">Days</span>
        </div>
        <div className="text-center">
          <span className="block">{hours}</span>
          <span className="text-gray-400 text-sm">Hours</span>
        </div>
        <div className="text-center">
          <span className="block">{minutes}</span>
          <span className="text-gray-400 text-sm">Minutes</span>
        </div>
        <div className="text-center">
          <span className="block">{seconds}</span>
          <span className="text-gray-400 text-sm">Seconds</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center bg-zinc-800 p-4 rounded-lg w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full bg-transparent text-white p-2 outline-none"
        />
        <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg mt-3 sm:mt-0 sm:ml-2">
          Notify Me
        </button>
      </div>

    </div>

  </>
  );
}

export default ComingSoon;
