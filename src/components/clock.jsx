import React, { useState, useRef } from 'react';

import './clock.css';
import Slider from './slider';

const Clock = () => {

  const [time, setTime] = useState(1800);

  const timeRef = useRef(time);
  timeRef.current = time;

  function handleClick() {
    let timerId = setInterval(() => {
      let currTime = timeRef.current;
      setTime(currTime => currTime - 1);
      
      if (currTime === 1) clearInterval(timerId);
    }, 1000);
  }

  function convertTime(remSec) {
    setTime(remSec);
  }

  return (
    <div className="clock">
      <Slider remSec={time} cb={convertTime} />
      <p>{Math.floor(time / 60)}:{time % 60}</p>
      <button onClick={() => handleClick()}>
        Start
      </button>
    </div>
  );
}

export default Clock;