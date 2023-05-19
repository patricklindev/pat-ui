import React from "react";
import { classNames } from "../../utils/classNames";
import { mark } from "./Slider";

export interface SliderMarkProps {
  className?: string;
  sliderSize?: string;
  sliderType?: string;
  mark: mark;
  position?: number;
  active?: boolean;
  disabled: boolean;
}

export const SliderMark = (props: SliderMarkProps) => {
  const { sliderType, sliderSize, mark, position, active, disabled } = props;

  let styleMarkClasses = classNames('slider_mark', {
    [`slider_mark-${sliderType}`]: true,
    [`slider_mark-${sliderSize}`]: !!sliderSize,
    disabled: disabled,
  })

  let styleMarkMaskClasses = classNames('slider_mark-mask', {
    [`slider_mark-${sliderSize}`]: !!sliderSize,
    disabled: disabled,
  })

  return (
    <>
      <span className={styleMarkClasses} style={{ left: `${position}%` }} data-active={active} ></span>
      {!active && <span className={styleMarkMaskClasses} style={{ left: `${position}%` }}></span>}
      {!!mark.label && <span className={'slider_mark-label'} style={{ left: `${position}%` }} data-active={active} >{mark.label}</span>}
    </>
  )
}

export default SliderMark;