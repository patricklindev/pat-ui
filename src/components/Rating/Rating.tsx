import React, { MouseEvent, FC, useState, useEffect, useRef } from 'react';
import { classNames } from '../../utils/classNames';

const star_svg = (
  <svg viewBox="0 0 576 512" width="100" role="star-svg">
    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
  </svg>
);

//declare types
export type StarSize = 'sm' | 'lg';
export type Precision = 0.1 | 0.5 | 1;
export interface Label {
  [key: string]: string;
}

export interface IRatingProps {
  className?: string;
  size?: StarSize;
  disabled?: boolean;
  defaultRating?: number;
  max?: number;
  precision?: Precision;
  label?: Label;
  textDisplay?: boolean;
  onChange?: (value: any) => void;
}

//======================================= Rating Component ==============================================//

export const Rating: FC<IRatingProps> = (props) => {
  const {
    className,
    size,
    disabled,
    defaultRating,
    max,
    precision,
    label,
    textDisplay,
    onChange,
  } = props;

  const starNumber = max || 5;
  const defaultPrecis = precision || 0.5;
  const defaultRate = defaultRating || 3;

  //--> get className:
  let styleClasses = classNames('rating', {
    [`rating-${size}`]: !!size,
    disabled: !!disabled,
  });

  if (className) {
    styleClasses += ' ' + className;
  }

  let approvedDefaultRating: number = getRate(defaultRate, defaultPrecis); //make sure the defaultRating passed in meets the precision

  //--> state:
  const [coverWidth, setCoverWidth] = useState<number>(
    getCoverWidth(approvedDefaultRating, defaultPrecis)
  );
  const [rating, setRating] = useState<number>(approvedDefaultRating);
  const [hoverRating, setHoverRating] = useState<number>(rating);
  const [hovering, setHovering] = useState<boolean>(false);
  const [labelText, setLabelText] = useState<string>(
    getLabelText(approvedDefaultRating)
  );
  const [hoveringLabel, setHoveringLabel] = useState<string>(labelText);

  //--> ref:
  const starsElement = useRef<HTMLElement>(null);
  const coverElement = useRef<HTMLDivElement>(null);

  //--> useEffect: avoid anti-pattern
  useEffect(() => {
    let approvedDefaultRating = getRate(defaultRate, defaultPrecis);
    setCoverWidth(getCoverWidth(approvedDefaultRating, defaultPrecis));
    setRating(approvedDefaultRating);
    setLabelText(getLabelText(approvedDefaultRating));
  }, [defaultRating, precision]);

  //function used to calculate the cover width (%) with providing value & precision, the passed in rate already meet the precision
  function getCoverWidth(rate: number, precis: number): number {
    let width = 100;

    switch (precis) {
      case 0.1:
        width = Math.round(((starNumber - rate) / starNumber) * 100);
        return width;
      case 0.5:
        width = Math.round(
          ((starNumber * 2 - Math.ceil(rate / 0.5)) / (starNumber * 2)) * 100
        );
        return width;
      case 1:
        width = (Math.round(starNumber - rate) / starNumber) * 100;
        return width;
      default:
        return width;
    }
  }

  //function used to transfer one decimal rate to other precision rate, also make sure the validity of the rate
  function getRate(value: number, precis: number): number {
    let rate = 0;

    if (value >= starNumber) return starNumber;
    if (value <= 0) return 0;

    switch (precis) {
      case 0.1:
        return value;
      case 0.5:
        rate = +(Math.ceil(value * 2) / 2).toFixed(1);
        return rate;
      case 1:
        rate = Math.ceil(value);
        return rate;
      default:
        return rate;
    }
  }

  //function used to get label text(if label provided), the passed in rate already meet the precision
  function getLabelText(rate: number): string {
    if (label) {
      for (let key of Object.keys(label)) {
        if (Number(key) === Number(rate)) {
          return label[key];
        }
      }
    }
    return '';
  }

  //event listener:
  const handleHover = (e: MouseEvent<HTMLSpanElement>) => {
    if (disabled) {
      return;
    }
    setHovering(true);

    if (starsElement.current === null) return;

    let mousePosition = Math.round(
      e.clientX - starsElement.current.getBoundingClientRect().left
    );
    let starsElementWidth = starsElement.current.clientWidth;

    //ond decimal precision rating value
    const rate = ((mousePosition / starsElementWidth) * starNumber).toFixed(1);
    //get new rate according to the precision
    const approvedRate = getRate(+rate, defaultPrecis);
    // get the cover width
    const width = getCoverWidth(approvedRate, defaultPrecis);
    setCoverWidth(width);
    setHoverRating(approvedRate);

    //if label provided
    if (label) {
      setHoveringLabel(getLabelText(approvedRate));
    }
  };

  const handleEndHover = () => {
    setHovering(false);
    //get the original rating's cover width
    const width = getCoverWidth(rating, defaultPrecis);
    //set back to original cover width
    setCoverWidth(width);
  };

  const handleClick = () => {
    if (disabled) {
      return;
    }
    setRating(hoverRating);
    setLabelText(hoveringLabel);
    if (onChange) {
      onChange(hoverRating);
    }
  };

  //---------------------------return-------------------------------------//
  return (
    <div className={styleClasses} data-testid="rating-element">
      <span
        className="rating__stars"
        data-testid="rating-stars"
        onMouseMove={handleHover}
        onMouseLeave={handleEndHover}
        onClick={handleClick}
        ref={starsElement}
      >
        {[...Array(max)].map((element, index) => {
          return <span key={index}>{star_svg}</span>;
        })}
        <div
          className="rating__stars-cover"
          data-testid="rating-cover"
          ref={coverElement}
          style={{ width: coverWidth + '%' }}
        ></div>
      </span>
      {textDisplay ? (
        label ? (
          <span className="rating__label" role="rating-label">
            {hovering ? hoveringLabel : labelText}
          </span>
        ) : (
          <span className="rating__label" role="rating-label">
            {hovering ? hoverRating : rating}
          </span>
        )
      ) : null}
    </div>
  );
};

//-----------------------------------------------------------------//

Rating.defaultProps = {
  disabled: false,
  textDisplay: true,
  max: 5,
  defaultRating: 3,
  precision: 0.5,
};

export default Rating;
