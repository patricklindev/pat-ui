import React, { InputHTMLAttributes, useEffect, useState } from 'react';

// import './_Slider.scss'

export type Size = 'large' | 'small' | undefined;
export type Color = 'slider-red' | 'slider-blue';

interface ISliderProps {
  size?: Size;
  color?: Color;
  RangeSlider?: boolean;
  DoubleRangeSlider?: boolean;
  minGap?: Number;
  Tick?: boolean;
  TickNum?: Number;
  min?: Number;
  max?: Number;
  step?: Number;
}

export type NativeSliderProps = ISliderProps &
  InputHTMLAttributes<HTMLInputElement>;

const Slider: React.FC<NativeSliderProps> = (props) => {
  const {
    RangeSlider,
    DoubleRangeSlider,
    size,
    color,
    Tick,
    TickNum,
    min,
    max,
    step,
    ...rest
  } = props;

  // enable (or disable) the range slider, default is true
  const enableOrDisable = RangeSlider === false ? RangeSlider : true;
  // enable double range slider
  const enableDoubleRange =
    DoubleRangeSlider === true ? DoubleRangeSlider : false;
  // max value must bigger than 0, default value is 200
  const maxValue = (max as number) > 0 ? max : 200;
  // min value must bigger or equal to 0, and min value must smaller than max, default value is 0
  const minValue =
    (min as number) > 0 && (maxValue as number) > (min as number) ? min : 0;
  // step value must bigger than 0, default value is 1
  const stepValue = (step as number) > 0 ? step : 1;
  // tick number must bigger than 0, default value is 5
  const tickNumber = (TickNum as number) > 0 ? TickNum : 5;

  const [valueRight, setValueRight] = useState((maxValue as number) / 2);
  const [valueLeft, setValueLeft] = useState((maxValue as number) / 3);

  const [showOrHide, setShowOrHide] = useState('');

  let classNamesList: string[] = [];
  if (color) classNamesList.push(color);
  if (size) classNamesList.push(size);

  const [spanlocationRight, setSpanlocationRight] = useState('');
  const [spanlocationLeft, setSpanlocationLeft] = useState('');

  useEffect(() => {
    const sliderValue: HTMLSpanElement | null = document.querySelector('span');
    if (sliderValue) {
      setSpanlocationLeft(valueLeft / ((maxValue as number) / 100) + '%');
    }
  }, [valueLeft]);
  useEffect(() => {
    const sliderValue: HTMLSpanElement | null = document.querySelector('span');
    if (sliderValue) {
      setSpanlocationRight(valueRight / ((maxValue as number) / 100) + '%');
    }
  }, [valueRight]);

  const onInputHandleRight = (e: any) => {
    setValueRight(e.target.value);
    setShowOrHide('show');
  };
  const onInputHandleLeft = (e: any) => {
    setValueLeft(e.target.value);
    setShowOrHide('show');
  };

  const selectedTrackWidth = () => {

  }

  const onBlurHandle = () => {
    setShowOrHide('');
  };

  const valueClassNames = () => {
    classNamesList.push('sliderValue');
    return classNamesList.join(' ');
  };

  // get mark-number array
  const tickNum =
    ((maxValue as number) - (minValue as number)) / (tickNumber as number);
  let markNum = [];
  for (let i = 1; i < (tickNumber as number); i++) {
    markNum.push(tickNum * i);
  }

  return (
    <div className="range">
      <div className={valueClassNames()}>
        <span
          className={showOrHide}
          style={{
            left: spanlocationRight,
          }}
        >
          {valueRight}
        </span>
      </div>
      {enableDoubleRange ? (
        <div className={valueClassNames()}>
          <span
            className={showOrHide}
            style={{
              left: spanlocationLeft,
            }}
          >
            {valueLeft}
          </span>
        </div>
      ) : null}
      <div className={'field ' + classNamesList.join(' ')}>
        <div className="value left">{minValue}</div>
        <div className='selected-track' 
        style={{backgroundColor:`${enableDoubleRange? 'red' : ''}`,
                left: `${spanlocationLeft}`,
                width:`${enableDoubleRange? Math.abs(valueRight - valueLeft)/ (maxValue as number) * 260 : 0}px`
      }}></div>
        <input
          className={classNamesList.join(' ')}
          id="slider-1"
          type={enableOrDisable ? 'range' : ''}
          min={minValue}
          max={maxValue}
          value={valueRight}
          step={stepValue}
          onChange={(e) => onInputHandleRight(e)}
          onBlur={onBlurHandle}
        />
        {enableDoubleRange ? (
          <input
            className={classNamesList.join(' ')}
            id="slider-2"
            type={enableOrDisable ? 'range' : ''}
            min={minValue}
            max={maxValue}
            value={valueLeft}
            step={stepValue}
            onChange={(e) => onInputHandleLeft(e)}
            onBlur={onBlurHandle}
          />
        ) : null}
        <div className="value right">{maxValue}</div>

        {Tick
          ? markNum.map((e) => (
              <div key={e}>
                <div
                  className="ui-slider-tick"
                  style={{
                    left: `${
                      (e / ((maxValue as number) - (minValue as number))) * 100
                    }%`,
                  }}
                ></div>
                <p
                  className="ui-slider-tick-num"
                  style={{
                    left: `${
                      (e / ((maxValue as number) - (minValue as number))) * 100
                    }%`,
                  }}
                >
                  {e}
                </p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Slider;
