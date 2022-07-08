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
type SlideOrientatoin = 'horizontal' | 'vertical';

interface ISliderProps {
  setSize?: SlideSize;
  color?: SlideColor;
  defaultValue?: number;
  disabled?: boolean;
  range?: number[];
  max?: number;
  min?: number;
  step?: number;
  onChange?: Function;
  orientation?: SlideOrientatoin;
}

type NativeInputProps = ISliderProps & InputHTMLAttributes<HTMLInputElement>;

export const Slider: FC<NativeInputProps> = (props) => {
  let {
    color,
    setSize,
    defaultValue,
    disabled,
    range,
    max,
    min,
    step,
    onChange,
    orientation,
  } = props;

  const ref = (useRef() as MutableRefObject<HTMLInputElement>) || null;
  const bubbleRef = (useRef() as MutableRefObject<HTMLDivElement>) || null;

  if (!min) {
    if (range) {
      min = range[0];
    } else {
      min = 0;
    }
  }
  if (!max) {
    if (range) {
      max = range[range.length - 1];
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
    if (range) {
      buildTicks = new Array(range[range.length - 1]);
      for (let i = 0; i < range[range.length - 1]; i++) {
        if (range.indexOf(i + 1) > -1) {
          buildTicks[i] = (i + 1).toString();
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
  if (color === 'primary') {
    classNameList.push('slider-primary');
    sliderNumCList.push('slidernum-primary');
  }
  if (color === 'secondary') {
    classNameList.push('slider-secondary');
    sliderNumCList.push('slidernum-secondary');
  }
  let inpClassNames = classNameList.join(' ');
  let sliderNumClass = sliderNumCList.join(' ');

  //handling size
  let contClassNameList: string[] = ['slider-cont'];
  if (!setSize) {
    contClassNameList.push('slider-md');
  }
  if (orientation) {
    if (orientation === 'vertical') contClassNameList.push('slider-vertical');
    if (setSize === 'sm') {
      contClassNameList.push('slider-vertical-sm');
    }
    if (setSize === 'md') {
      contClassNameList.push('slider-vertical-md');
    }
    if (setSize === 'lg') {
      contClassNameList.push('slider-vertical-lg');
    }
  }
  if (setSize === 'sm') {
    contClassNameList.push('slider-sm');
  }
  if (setSize === 'md') {
    contClassNameList.push('slider-md');
  }
  if (setSize === 'lg') {
    contClassNameList.push('slider-lg');
  }
  let contClassName = contClassNameList.join(' ');

  if (range) {
    return (
      <div className={contClassName}>
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
          min={range[0]}
          max={range[range.length - 1]}
          step={step}
          disabled={disabled}
          onChange={(e) => showChange(e)}
        />
        {
          <div className="tickmarks">
            {!tickMarks
              ? ''
              : tickMarks.map((item, index) => {
                  return <div className="range__tick">{item}</div>;
                })}
          </div>
        }
      </div>
    );
  } else {
    return (
      <div className={contClassName}>
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
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          onChange={(e) => showChange(e)}
        />
      </div>
    );
  }
};

export default Slider;
