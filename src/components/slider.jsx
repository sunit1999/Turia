import React from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';

const Slider = ({ remSec, cb }) => {
  return (
    <CircularSlider
      min={0}
      max={3600}
      label="Remaining Seconds"
      dataIndex={remSec}
      onChange={val => {cb(val)}}
    />
  )
};

export default Slider;