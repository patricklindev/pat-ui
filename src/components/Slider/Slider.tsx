import React, {
  FC,
  InputHTMLAttributes,
  useRef,
  MutableRefObject,
  useState,
  useEffect,
} from 'react';

type SlideColor = 'primary' | 'secondary';
type SlideSize = 'sm' | 'md' | 'lg';
type SlideOrientation = 'horizontal' | 'vertical';

interface ISliderProps {
  //controls slider size sm, md, lg
  setSize?: SlideSize;
  //sets slider color
  color?: SlideColor;
  //sets initial slider value
  defaultValue?: number;
  //disables the slider
  disabled?: boolean;
  //an array of the ticks to display on the slider
  rangeTicks?: number[];
  //maximum slider value
  max?: number;
  //minimum slider value
  min?: number;
  //slider increment
  step?: number;
  //call back function for on Change
  onChange?: Function;
  //vertical or horizontal slider
  orientation?: SlideOrientation;
}

type NativeInputProps = ISliderProps & InputHTMLAttributes<HTMLInputElement>;
export type PatSliderProps = NativeInputProps;

export const Slider: FC<NativeInputProps> = (props) => {
  let {
    color,
    setSize,
    defaultValue,
    disabled,
    rangeTicks,
    max,
    min,
    step,
    onChange,
    orientation,
  } = props;

  const ref = (useRef() as MutableRefObject<HTMLInputElement>) || null;
  const bubbleRef = (useRef() as MutableRefObject<HTMLDivElement>) || null;

  if (!min) {
    if (rangeTicks) {
      min = rangeTicks[0];
    } else {
      min = 0;
    }
  }
  if (!max) {
    if (rangeTicks) {
      max = rangeTicks[rangeTicks.length - 1];
    } else {
      max = 100;
    }
  }

  let initValue = defaultValue ? defaultValue : Math.ceil(max * 0.5);
  let initValueStr = initValue.toString();

  const [sliderValue, setSliderValue] = useState(initValueStr);
  const [tickMarks, setTickMarks] = useState<string[]>([]);

  const getPosition = (sliderValue: string, min: any, max: any) => {
    let value = Number.parseInt(sliderValue);
    let position = ((value - min) / (max - min)) * 100;
    return [position.toString() + '%', (position - 2).toString() + '%'];
  };

  useEffect(() => {
    let [position, bubblePosition] = getPosition(sliderValue, min, max);
    ref.current.style.setProperty('--progress', position);
    bubbleRef.current.style.setProperty('--bubble', bubblePosition);
    let buildTicks: string[];
    if (rangeTicks) {
      buildTicks = new Array(rangeTicks[rangeTicks.length - 1]);
      for (let i = rangeTicks[0]; i < rangeTicks[rangeTicks.length - 1] + 1; i++) {
        if (rangeTicks.indexOf(i) > -1) {
          buildTicks[i] = (i).toString();
        } else {
          buildTicks[i] = '';
        }
      }
      setTickMarks(buildTicks);
    }
  }, []);

  const showChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(e.target.value);
    let [position, bubblePosition] = getPosition(e.target.value, min, max);
    ref.current.style.setProperty('--progress', position);
    bubbleRef.current.style.setProperty('--bubble', bubblePosition);
    if (onChange) onChange(e);
  };

  //handling color
  let classNameList: string[] = ['slider'];
  let sliderNumCList: string[] = ['slider-value__num-box'];
  if (disabled) {
    classNameList.push('slider-disabled');
  }
  if (color) {
    classNameList.push(`slider-${color}`);
    sliderNumCList.push(`slidernum-${color}`);
  }
  
  let inpClassNames = classNameList.join(' ');
  let sliderNumClass = sliderNumCList.join(' ');

  //handling size
  let contClassNameList: string[] = ['slider-cont'];
  if (!setSize) {
    contClassNameList.push('slider-md');
  }

  if (orientation === 'vertical') {
    contClassNameList.push('slider-vertical');
    if (setSize) contClassNameList.push(`slider-vertical-${setSize}`);
  }
  if(setSize) contClassNameList.push(`slider-${setSize}`)
  
  let contClassName = contClassNameList.join(' ');

  return (
    <div className={contClassName} data-testid='slider-container'>
      <div className="slider-value-cont">
        <div className={sliderNumClass} ref={bubbleRef}>
          <div className="slider-value__num">
            {sliderValue != null ? sliderValue : ''}
          </div>
        </div>
      </div>
      <input
        type="range"
        value={sliderValue}
        className={inpClassNames}
        ref={ref}
        defaultValue={defaultValue}
        data-testid='slider-input'
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        onChange={(e) => showChange(e)}
      />
      {!rangeTicks ? (
        ''
      ) : (
        <div className="tickmarks">
          {tickMarks.map((item, index) => {
                return <div className="range__tick">{item}</div>;
              })}
        </div>
      )}
    </div>
  );
};

export default Slider;
