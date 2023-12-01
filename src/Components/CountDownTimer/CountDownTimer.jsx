import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./CountDownTimer.module.scss";

const cx = classNames.bind(styles);

const CountDownTimer = ({ initialTime, onTimeout }) => {
  const [time, setTime] = useState(initialTime * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) {
        setTime((prevTime) => prevTime - 1);
      } else {
        clearInterval(timer); // Dừng hẹn giờ khi time === 0
        onTimeout();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [time, onTimeout]);

  const formatTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  return <div>{formatTime()}</div>;
};

export default CountDownTimer;
