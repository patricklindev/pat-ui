import React, {InputHTMLAttributes, useEffect, useState } from 'react';

// import './_Slider.scss'

export type Size = 'large' | 'small' | undefined;
export type Color = 'slider-red' | 'slider-blue';

interface ISliderProps {
  size?: Size;
  color?: Color;
  RangeSlider?: boolean;
  Tick?: boolean;
  TickNum?: Number;
  min?: Number;
  max?: Number;
  step?: Number;
}

export type NativeSliderProps = ISliderProps & InputHTMLAttributes<HTMLInputElement>

const Slider: React.FC<NativeSliderProps> = (props) => {
  const {RangeSlider, size, color, Tick, TickNum, min, max, step, ...rest} = props
  
  // enable (or disable) the range slider, default is true
  const enableOrDisable = RangeSlider === false? RangeSlider: true;
  // max value must bigger than 0, default value is 200
  const maxValue = (max as number>0)? max: 200;
  // min value must bigger or equal to 0, and min value must smaller than max, default value is 0
  const minValue = (min as number>0) && (maxValue as number > (min as number))? min: 0;
  // step value must bigger than 0, default value is 1
  const stepValue = step as number >0? step: 1;
  // tick number must bigger than 0, default value is 5
  const tickNumber = TickNum as number >0? TickNum : 5;

  const [value, setValue] = useState((maxValue as number) / 2);

  const [showOrHide, setShowOrHide] = useState('');

  let classNamesList: string[] = [];
  if (color) classNamesList.push(color);
  if (size) classNamesList.push(size);

  const [spanlocation, setSpanlocation] = useState('');

  useEffect(() => {
    const sliderValue: HTMLSpanElement | null = document.querySelector('span');
    if (sliderValue) {
      setSpanlocation(value / (maxValue as number / 100) + '%')
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

  // get mark-number array
  const tickNum = ((maxValue as number) - (minValue as number))  / (tickNumber as number);
  let markNum = [];
  for( let i = 1 ; i < (tickNumber as number); i ++){
    markNum.push(tickNum * i)
  }

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
      <div className={'field ' + classNamesList.join(' ')}>
        <div className="value left">{minValue}</div>
        <input
          className={classNamesList.join(' ')}
          type={enableOrDisable? 'range' : ''}
          min= {minValue}
          max= {maxValue}
          value= {value}
          step= {stepValue}
          onChange={(e) => onInputHandle(e)}
          onBlur={onBlurHandle}
        />
        <div className="value right">{maxValue}</div>

        {Tick? (markNum.map(e => (
          <div key={e}><div className='ui-slider-tick' 
          style={{'left': `${e / ((maxValue as number) - (minValue as number)) * 100}%`}}></div>
          <p className='ui-slider-tick-num' 
          style={{'left': `${e / ((maxValue as number) - (minValue as number)) * 100}%`}} >{e}</p></div>
        ))) : null}
        
      </div>
    </div>
  );
};

export default Slider;
