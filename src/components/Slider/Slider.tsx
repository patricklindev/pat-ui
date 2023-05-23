import React, {
  useState,
  ChangeEvent,
  FC,
  useEffect,
  useMemo,
  useRef,
  RefObject,
  SetStateAction,
  Dispatch,
} from 'react';
import { classNames } from '../../utils/classNames';
import SliderMark from './SliderMark';
import SliderValueLabel from './SliderValueLabel';

export type SliderSize = 'sm' | 'md';
export type ButtonType = 'primary' | 'secondary';
// export type valueLabelDisplay = 'on' | 'off' | 'auto';

export type mark = {
  label?: string;
  value: number;
};

export interface SliderProps {
  className?: string;
  sliderSize?: string;
  sliderType?: string;
  defaultValue?: number | number[];
  value?: number | number[];
  disabled?: boolean;
  min?: number;
  max?: number;
  marks?: mark[] | boolean;
  step?: number;
  onChange?: (
    event: ChangeEvent<HTMLInputElement>,
    value: number | Array<number>,
    activeThumb: number
  ) => void;
  // valueLabelDisplay?: string;
}

export const Slider: FC<SliderProps> = ({
  className,
  sliderSize = 'md',
  sliderType = 'primary',
  defaultValue = 50,
  value,
  min = 0,
  max = 100,
  disabled = false,
  marks,
  step = 1,
  onChange,
  // valueLabelDisplay='off',
  ...rest
}) => {
  defaultValue = useMemo(
    () => (value !== undefined ? value : defaultValue),
    [value]
  );
  const [rightValue, setRightValue] = useState<number | undefined>();
  const [leftValue, setLeftValue] = useState<number | undefined>();
  const [displayLeft, setDisplayLeft] = useState<boolean>(false);
  const [displayRight, setDisplayRight] = useState<boolean>(false);
  const leftThumb = useRef<HTMLSpanElement>(null);
  const rightThumb = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof defaultValue === 'object') {
      setRightValue(defaultValue[1]);
      setLeftValue(defaultValue[0]);
    } else {
      setRightValue(defaultValue);
    }
  }, []);

  const markLabeled = (marks: mark[]): boolean => {
    for (let mark of marks) {
      if (!!mark.label) {
        return true;
      }
    }
    return false;
  };

  let containerClasses = classNames('slider_container', {
    ['slider_container-labeled']:
      typeof marks === 'object' && markLabeled(marks),
  });

  let styleClasses = classNames('slider', {
    [`slider-${sliderType}`]: true,
    [`slider-${sliderSize}`]: !!sliderSize,
    disabled: !!disabled,
  });

  let styleValueClasses = classNames('slider_value', {
    [`slider_value-${sliderType}`]: true,
    [`slider_value-${sliderSize}`]: !!sliderSize,
    disabled: !!disabled,
  });

  let thumbClasses = classNames('slider_thumb', {
    [`slider_thumb-${sliderType}`]: true,
    [`slider_thumb-${sliderSize}`]: !!sliderSize,
    disabled: !!disabled,
  });

  if (className) {
    styleClasses += ' ' + className;
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (typeof defaultValue === 'number') {
      setRightValue(Number(e.target.value));
      if (onChange !== undefined) {
        onChange(e, Number(e.target.value), 0);
      }
    } else {
      let leftDistance = Math.abs(Number(e.target.value) - leftValue!);
      let rightDistance = Math.abs(Number(e.target.value) - rightValue!);
      if (leftDistance < rightDistance) {
        setLeftValue(Number(e.target.value));
        if (onChange !== undefined) {
          onChange(e, [Number(e.target.value), rightValue!], 0);
        }
      } else {
        setRightValue(Number(e.target.value));
        if (onChange !== undefined) {
          onChange(e, [leftValue!, Number(e.target.value)], 1);
        }
      }
    }
  };

  const calculatePos = (value: number, min: number, max: number) => {
    return ((value - min) * 100) / (max - min);
  };

  const stepArray = useMemo(() => {
    let res = [];
    for (let i = min; i <= max; i = i + step) {
      res.push(i);
    }
    return res;
  }, []);

  const showValueLabel = (
    thumbRef: RefObject<HTMLSpanElement>,
    setDisplay: Dispatch<SetStateAction<boolean>>
  ) => {
    // move the thumb element under the slider
    if (thumbRef.current !== null) {
      thumbRef.current.style.zIndex = '-1';
    }
    // show value label
    setDisplay(true);
  };

  return (
    <span className={containerClasses}>
      <span
        className={styleValueClasses}
        style={{
          width: `${
            leftValue === undefined
              ? calculatePos(rightValue!, min, max)
              : calculatePos(rightValue! - leftValue, min, max)
          }%`,
          left: `${
            leftValue === undefined ? 0 : calculatePos(leftValue, min, max)
          }%`,
        }}
      ></span>
      {typeof marks === 'boolean'
        ? stepArray.map((mark: any) => {
            return (
              <SliderMark
                key={mark}
                sliderType={sliderType}
                sliderSize={sliderSize}
                mark={mark}
                position={calculatePos(mark, min, max)}
                active={(mark <= rightValue!) && (leftValue === undefined || mark >= leftValue)}
                disabled={disabled}
              />
            );
          })
        : marks?.map((mark: any, index: number) => {
            return (
              <SliderMark
                key={mark.value + index}
                sliderType={sliderType}
                sliderSize={sliderSize}
                mark={mark}
                position={calculatePos(mark.value, min, max)}
                active={(mark <= rightValue!) && (leftValue === undefined || mark >= leftValue)}
                disabled={disabled}
              />
            );
          })}
      {leftValue !== undefined ? (
        <span
          className={thumbClasses}
          ref={leftThumb}
          style={{ left: `${calculatePos(leftValue, min, max)}%` }}
          data-disabled={disabled}
          onMouseOver={() => showValueLabel(leftThumb, setDisplayLeft)}
        >
          {displayLeft && (
            <SliderValueLabel
              value={leftValue}
              sliderType={sliderType}
              sliderSize={sliderSize}
            />
          )}
        </span>
      ) : (
        <></>
      )}
      <span
        className={thumbClasses}
        ref={rightThumb}
        style={{ left: `${calculatePos(rightValue!, min, max)}%` }}
        data-disabled={disabled}
        onMouseOver={() => showValueLabel(rightThumb, setDisplayRight)}
      >
        {displayRight && (
          <SliderValueLabel
            value={rightValue!}
            sliderType={sliderType}
            sliderSize={sliderSize}
          />
        )}
      </span>
      <input
        type="range"
        step={step}
        min={min}
        max={max}
        className={styleClasses}
        onChange={changeHandler}
        disabled={disabled}
        onMouseOut={() => {
          if (rightThumb.current !== null) {
            rightThumb.current.style.zIndex = '0';
          }
          if (leftThumb.current !== null) {
            leftThumb.current.style.zIndex = '0';
          }
          setDisplayLeft(false);
          setDisplayRight(false);
        }}
      />
    </span>
  );
};

export default Slider;
