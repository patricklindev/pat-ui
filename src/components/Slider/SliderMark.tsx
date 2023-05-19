import React from "react";
// import { SliderSize, ButtonType } from "./Slider";
import { classNames } from "../../utils/classNames";

export const SliderMark = (props: any) => {
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