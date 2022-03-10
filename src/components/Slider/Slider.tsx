import React, { useEffect, useState } from 'react';

// import './_Slider.scss'

export type Size = 'large' | 'small';
export type Color = 'slider-red' | 'slider-blue';

interface ISliderProps {
  size?: Size;
  color?: Color;
}

const Slider: React.FC<ISliderProps> = ({ color, size }) => {
  const [value, setValue] = useState(100);
  const [showOrHide, setShowOrHide] = useState('');
  let classNamesList: string[] = [];

  if (color === 'slider-red') {
    classNamesList.push(color);
  } else if (color === 'slider-blue') {
    classNamesList.push(color);
  }

  if (size === 'small') {
    console.log('slider is small');
  }

  const [spanlocation, setSpanlocation] = useState('');

  useEffect(() => {
    const sliderValue: HTMLSpanElement | null = document.querySelector('span');
    if (sliderValue) {
      setSpanlocation(value / 2 + '%');
    }
  }, [value]);

  const onInputHandle = (e: any) => {
    setValue(e.target.value);
    setShowOrHide('show');
  };

  const onBlurHandle = () => {
    setShowOrHide('');
  };

  const valueClassNames = () => {
    classNamesList.push('sliderValue');
    return classNamesList.join(' ');
  };

  return (
    <div className="range">
      <div className={valueClassNames()}>
        <span
          className={showOrHide}
          style={{
            left: spanlocation,
          }}
        >
          {value}
        </span>
      </div>
      <div className="field">
        <div className="value left">0</div>
        <input
          className={classNamesList.join(' ')}
          type="range"
          min="10"
          max="200"
          value={value}
          step="1"
          onChange={(e) => onInputHandle(e)}
          onBlur={onBlurHandle}
        />
        <div className="value right">200</div>
      </div>
    </div>
  );
};

export default Slider;
