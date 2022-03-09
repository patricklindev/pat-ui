import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [value, setValue] = useState(100);
  const [showOrHide, setShowOrHide] = useState('');
  useEffect(() => {
    const slideValue = document.querySelector('span');
    slideValue.style.left = value / 2 + '%';
  }, [value]);
  const onInputHandle = (e) => {
    setValue(e.target.value);
    setShowOrHide('show');
  };
  const onBlurHandle = () => {
    setShowOrHide('');
  };
  return (
    <div className="range">
      <div className="sliderValue">
        <span className={showOrHide}>{value}</span>
      </div>
      <div className="field">
        <div className="value left">0</div>
        <input
          type="range"
          min="10"
          max="200"
          value={value}
          steps="1"
          // style={{'left':`${leftValue}`,'color':'red'}}
          onChange={(e) => onInputHandle(e)}
          onBlur={onBlurHandle}
        />
        <div className="value right">200</div>
      </div>
    </div>
  );
};
export default Slider;
