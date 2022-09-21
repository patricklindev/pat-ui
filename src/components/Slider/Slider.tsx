import React, {
  FC,
  ChangeEvent,
  useRef,
  useState, useEffect, useCallback, FormEvent
} from 'react';
import ValueLabel from "./ValueLabel/ValueLabel";
import Range from "./Range/Range";

export type SliderSize = 'default' | 'lg' | 'sm';
export type SliderColor = 'primary' | 'secondary' | 'disabled'
export type OnInput = (e: ChangeEvent<HTMLInputElement>) => void
export interface ISliderProps {
  /** for user to choose size of the slider */
  sliderSize?: SliderSize;
  /** for user to choose color of the slider */
  color?: SliderColor;
  /** for user to active range slider */
  range?: boolean;
  /** for user to disable the slider */
  disable?: boolean;
  /** for user to display value label on slider */
  showValueLabel?: boolean;
  /** for user to pass in value to set, default 50 */
  sliderValue?: number;
  /** for user to interact with current value */
  onInput?: OnInput;
  /** for user to check left value when range is enable */
  onInputLeft?: OnInput;
  /** for user to check right value when range is enable */
  onInputRight?: OnInput;
  /** for user to pass in left/min value when range is enable */
  rangeSliderLeftValue?: number;
  /** for user to pass in right/max value when range is enable */
  rangeSliderRightValue?: number;
}

const Slider: FC<ISliderProps> = (props) => {
  // destructuring props
  const {
      sliderSize = 'default',
      color = props.disable ? 'disabled' : 'primary',
      disable = false,
      range = false,
      showValueLabel = false,
      sliderValue = 50,
      onInput,
      rangeSliderLeftValue,
      rangeSliderRightValue,
      ...rest
  } = props;

  // function set thumb and progress_bar to the right poisition
  const setThumbAndProgress = useCallback((percent: string) => {
      if(thumbRef.current && progressRef.current) {
          thumbRef.current.style.left = percent + "%"
          progressRef.current.style.width = percent + "%"
      }
  },[])

  // things need for slider to work
  const thumbRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState<number>(sliderValue);

  // onChange event, so slider can actually work
  const handleRangeSlide = (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      setValue(+e.target.value)
      setThumbAndProgress(e.target.value)
  }

  // since user needs fully control, follow user's value, only trigger once when component mounts
  useEffect(() => {
      setThumbAndProgress(value.toString())
  }, [])

  if(range) {
      // return Range, if user pass in range prop true
      return <Range
          sliderLeftValue={rangeSliderLeftValue}
          sliderRightValue={rangeSliderRightValue}
          showValueLabel={showValueLabel}
          size={sliderSize}
          color={color}
          disable={disable}
      />
  } else {
      // otherwise return this slider
      return (
          <div className="slider">
              <input
                  type="range"
                  min={0}
                  max={100}
                  value={value}
                  onChange={handleRangeSlide}
                  className={
                      `
                  slider_range 
                  range_${sliderSize}-track
                  range_${sliderSize}-thumb 
                  ${color}-color_track 
                  ${!disable ? 'cursor' : 'not-allowed'}
                   `
                  }
                  disabled={disable}
                  onInput={onInput}
                  {...rest}
              />
              <div
                  className={`custom_slider custom_slider_${sliderSize}`}
                  ref={thumbRef}
              >
                  <div className={`custom_thumb custom_thumb_${sliderSize} ${color}-color`} />
                  {
                      showValueLabel && <ValueLabel value={value} color={color} size={sliderSize}/>
                  }
              </div>
              <div
                  ref={progressRef}
                  className={
                      `
                  slider_progress 
                  slider_progress_top_${sliderSize}
                  ${color}-color range_${sliderSize}-track 
                  `
                  }
              />
          </div>
      );
  }
};

// for storybook
Slider.defaultProps = {
  sliderSize: 'default',
  color: 'primary',
  range: false,
  disable: false,
  showValueLabel: false,
  sliderValue: 50
}

export default Slider;
