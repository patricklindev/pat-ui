import React, { FC } from 'react';

export const SliderValueLabel: FC<{
  value: number;
  sliderType: string;
  sliderSize: string;
}> = ({ value, sliderType, sliderSize }) => {
  return (
    <span className={`slider_value-label`}>
      <span
        className={`slider_value-label-background slider_value-label-background-${sliderType} slider_value-label-background-${sliderSize}`}
      ></span>
      <span
        className={`slider_value-label-number slider_value-label-number-${sliderSize}`}
      >
        {value}
      </span>
    </span>
  );
};

export default SliderValueLabel;
