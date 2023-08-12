import React, { useState, useEffect } from 'react';

const useTimer = (initialSeconds = 60) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);

  const start = () => {
    setIsActive(true);
  };

  const stop = () => {
    setIsActive(false);
  };

  const restart = () => {
    setSeconds(initialSeconds);
    setIsActive(false);
  };

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    if (seconds === 0) {
      clearInterval(interval);
      setIsActive(false);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, seconds]);

  return { seconds, start, stop, restart, isActive };
};

export default useTimer;
