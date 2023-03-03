import React, { useState } from 'react';
import Slider from './Slider';

export default {
  title: 'Slider',
  component: Slider,
};

export const SliderTypes = () => (
  <div>
    <div>
      <Slider />
    </div>
    <p>This is what a slider looks like with no props passed in.</p>
    <div>
      <Slider range />
    </div>
    <p>
      The slider takes a boolean prop named range. If true, then the slider will
      become a range slider. The range slider has two thumbs and will show a
      selection of values between the two thumbs.
    </p>
  </div>
);

export const SliderMarks = () => (
  <div>
    <p>
      The slider also takes in a prop named marks. This prop is either a boolean
      type or an array of numbers.
    </p>

    <div>
      <Slider marks min={-250} max={250} />
    </div>
    <p>
      When a truthy value is passed in, the slider values will be divided into
      fifths and marked accordingly based on min and max values.
    </p>
    <div>
      <Slider range marks={[0, 12, 25, 29, 56, 88, 100]} />
    </div>
    <p>
      When an array of numbers is passed, those numbers will be marked
      accordingly on the slider.
    </p>
  </div>
);

export const DiffColoredAndSizedSliders = () => (
  <div>
    <p>
      The size and color of the slider can also be changed with through the use
      of the size and color prop.
    </p>
    <div>
      <Slider range={true} color="red" size="small" />
    </div>
    <div>
      <Slider range={false} color="green" />
    </div>
    <div>
      <Slider range={false} color="black" size="small" />
    </div>
    <div>
      <Slider range={true} color="yellow" />
    </div>
  </div>
);

export const CallBackFunctionSliders = () => {
  interface sliderVal {
    leftVal: number;
    rightVal: number;
  }

  const [xPos, setXPos] = useState<number>();
  const [xPosLeft, setXPosLeft] = useState<number>();
  const [xPosRight, setXPosRight] = useState<number>();

  const handleChange = (sliderVal: number) => {
    setXPos(sliderVal);
  };
  const handleChangeRange = (sliderVals: sliderVal) => {
    setXPosLeft(sliderVals.leftVal);
    setXPosRight(sliderVals.rightVal);
  };
  return (
    <div>
      <p>
        When the slider is a regular single thumb slider, the callback function
        is called with a number value representing the position of the thumb.
      </p>
      <div style={{ border: '1px solid black', marginBottom: '40px' }}>
        <Slider onChange={handleChange} />
        <div>
          <span>The slider value is {xPos}/100</span>
        </div>
      </div>
      <p>
        When the slider is a range slider, the callback function is called with
        an object with two number values, representing the left and right thumb
        value respectively.
      </p>
      <div style={{ border: '1px solid black' }}>
        <Slider onChange={handleChangeRange} range />
        <div>
          <span>
            The slider is including values between {xPosLeft} and {xPosRight}
          </span>
        </div>
      </div>
    </div>
  );
};

export const DisabledSlider = () => {
  return (
    <div>
      <Slider disabled initialValue={30} />
      <Slider disabled initialValue={30} range />
    </div>
  );
};
