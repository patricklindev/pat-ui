import React, {
  FC,
  InputHTMLAttributes,
  useRef,
  MutableRefObject,
  useState,
  useEffect,
} from 'react';


type SlideColor = 'primary' | 'secondary';
type SlideSize = 'sm' | 'md' | 'lg' ;

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
}

type NativeInputProps = ISliderProps & InputHTMLAttributes<HTMLInputElement>;

export const Slider: FC<NativeInputProps> = (props) => {
  let { color, setSize, defaultValue, disabled, range, max, min, step, onChange } = props;

  const ref = (useRef() as MutableRefObject<HTMLInputElement>) || null;
  const bubbleRef = (useRef() as MutableRefObject<HTMLDivElement>) || null;

  let initValue = defaultValue ? defaultValue : max ? Math.ceil(max * 0.5) : 50;
  let initValueStr = initValue.toString();

  const [sliderValue, setSliderValue] = useState(initValueStr);


  useEffect(() => {
    ref.current.style.setProperty('--progress', ref.current.value + '%');
    bubbleRef.current.style.setProperty('--bubble', ref.current.value + '%');
  }, []);

  const showChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(e.target.value);
    bubbleRef.current.style.setProperty('--bubble', sliderValue + '%');
    ref.current.style.setProperty('--progress', sliderValue + '%');
    if (onChange) onChange(e)
  };

  //handling color
  let classNameList: string[] = ['slider'];
  let sliderNumCList: string[] = ['slider-value__num-box'];
  if(disabled) {
    classNameList.push('slider-disabled')
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
    contClassNameList.push('slider-md')
  }
  if (setSize === 'sm') {
    contClassNameList.push('slider-sm')
  }
  if (setSize === 'md') {
    contClassNameList.push('slider-md')
  }
  if (setSize === 'lg') {
    contClassNameList.push('slider-lg')
  }
  let contClassName = contClassNameList.join(' ')


  if (range) {
    return (
      <div className={contClassName}>
        <div className="slider-value-cont">
          <div
            className="slider-value__num-box"
            style={{ marginLeft: '47%' }}
            ref={bubbleRef}
          >
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
          <div
            className="tickmarks"
           
          >
            {range.map((item, index) => {
              console.log(item);
              return (
                <div
                  className="range__tick"
                
                >{item}</div>
              );
            })}
          </div>
        }
      </div>
    );
  } else {
    return (
      <div className={contClassName}>
        <div className="slider-value-cont">
          <div
            className={sliderNumClass}
            // style={{ marginLeft: '47%' }}
            ref={bubbleRef}
          >
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
