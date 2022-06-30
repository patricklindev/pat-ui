import React, {
  FC,
  useEffect,
  useRef,
  MutableRefObject,
  useState,
} from 'react';

// export enum SlideType {
//     Primary = 'primary',
//     Secondary = 'secondary'
// }

type SlideColor = 'primary' | 'secondary';

interface ISliderProps {
  sliderColor?: SlideColor;
  defaultValue?: number;
}

export const Slider: FC<ISliderProps> = (props) => {
  const { sliderColor, defaultValue } = props;

  const ref = (useRef() as MutableRefObject<HTMLInputElement>) || null;
  const bubbleRef = (useRef() as MutableRefObject<HTMLDivElement>) || null;

  const [sliderValue, setSliderValue] = useState<String | null>();
  const [position, setPosition] = useState(0)

  useEffect(() => {
    setSliderValue(ref.current.value);
  }, []);

  const showChange = () => {
    setSliderValue(ref.current.value);
    let value = Number.parseInt(ref.current.value)
    value = value - value * .1;
    let position = (value / 100) * 100
    
    bubbleRef.current.style.marginLeft = position.toString() + '%'
  };
  let classNameList: string[] = ['slider'];
  if (sliderColor === 'primary') {
    classNameList.push('slider-primary');
  }
  if (sliderColor === 'secondary') {
    classNameList.push('slider-secondary');
  }
  let classNames = classNameList.join(' ');




  return (
    <div className='slider-cont'>
      <div className="slider-value-cont">
        <div className="slider-value__num-box" style={{marginLeft: '45%'}} ref={bubbleRef}>
          <div className="slider-value__num">
            {sliderValue != null ? ref.current.value : ''}
          </div>
        </div>
      </div>
      <input
        type="range"
        className={classNames}
        ref={ref}
        onChange={showChange}
      />
    </div>
  );
};

export default Slider;
