import React, { useEffect, useState } from "react";

const Timer9 = () => {
  const [time, settime] = useState(1656992697076);
  const [date, setdate] = useState(null);
  const [minutes, setminutes] = useState("");
  const [days, setdays] = useState("");
  const [hours, sethours] = useState("");
  const [seconds, setseconds] = useState("");

  useEffect(() => {
    setdate(new Date(time));
    setdays(new Date(time).getDay());
    sethours(new Date(time).getHours());
    setminutes(new Date(time).getMinutes());
    setseconds(new Date(time).getSeconds());
  }, [time]);

  useEffect(() => {
    const timer = setInterval(() => {
      settime(time - 1000);
      setdate(new Date(time));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [time]);

  return (
    <span className="countdown-time9 font-display countdown-time9 text-blueGray-900 font-bold">
      <span className="ml-2">{days} </span>
      <span className="mr-2">d</span>
      <span>{hours} </span>
      <span className="mr-2">h</span>
      <span>{minutes} </span>
      <span className="mr-2">m</span>
      <span>{seconds} </span>
      <span className="mr-2">s</span>
    </span>
  );
};

export default Timer9;
