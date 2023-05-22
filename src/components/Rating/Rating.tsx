import React, { FC, useState, useRef } from 'react';
import { classNames } from '../../utils/classNames';
export type RatingSize = 'small' | 'large' | 'default';
export interface IRatingProps {
  /** Provide custom className  */
  className?: string;
  /** Provide custom name  */
  name?: string;
  /** Provide rating value */
  value: number;
  /** Rating is read only */
  readOnly?: boolean;
  /** Rating can only be viewed  */
  disabled?: boolean;
  /** Rating icon size: small|large|default */
  size?: RatingSize;
  /** Rating icon number */
  max?: number;
  /** Rating precision: floating number 0-1 */
  precision?: number;
  /** Provide a callback function to control the value of the rating from outside of the component  */
  onChange?: (value: number) => void;
  /** Provide a callback function to control the label of the rating from outside of the component  */
  getLabelText?: (value: number) => string;
}
export type patRatingProp = IRatingProps;
const normalFill = '#FFB400';
const normalEmpty = 'rgba(0, 0, 0, 0.26)';
const diabledFill = '#ffda80';
const disabledEmpty = 'rgba(0, 0, 0, 0.13)';
interface StarPropsType {
  starId: number;
  fill: string;
  empty: string;
  fraction: number;
  className: string;
  uniqueId: string;
  handleRatingChange: (event: React.MouseEvent, value: number) => void;
  handleMouseHover: (event: React.MouseEvent) => void;
  handleMouseLeave: (event: React.MouseEvent) => void;
}
const Star = ({
  starId,
  fill,
  empty,
  className,
  uniqueId,
  fraction,
  handleRatingChange,
  handleMouseHover,
  handleMouseLeave,
}: StarPropsType) => {
  return (
    <div
      id={starId.toString()}
      onClick={(e) => {
        handleRatingChange(e, starId);
      }}
      onMouseMoveCapture={(e) => {
        handleMouseHover(e);
      }}
      onMouseLeave={(e) => {
        handleMouseLeave(e);
      }}
    >
      <svg
        viewBox="0 0 24 24"
        className={`${className} ${`rating_star-${fraction}`}`}
        data-testid={`star-${starId}`}
      >
        <defs>
          <linearGradient id={`star-${uniqueId}`}>
            <stop offset="0%" stopColor={fill} />
            <stop offset={`${fraction}%`} stopColor={fill} />
            <stop offset={`${fraction}%`} stopColor={empty} />
            <stop offset="100%" stopColor={empty} />
          </linearGradient>
        </defs>

        <path
          fill={`url(#star-${uniqueId})`}
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        ></path>
      </svg>
    </div>
  );
};

export const Rating: FC<patRatingProp> = (props) => {
  const {
    className,
    name,
    value,
    precision = 1,
    readOnly,
    disabled,
    size,
    max,

    onChange,
    getLabelText,
    ...rest
  } = props;
  let styleClasses = classNames('rating_star', {
    [`rating_star-${size}`]: !!size,
    [`rating_star-active`]: disabled ? false : true,
  });
  if (className) {
    styleClasses += ' ' + className;
  }
  const numberOfStars = max ? max : 5;
  const [rating, setRating] = useState<number>(value ? Math.floor(value) : -1);
  const [lastStarFraction, setLastStarFraction] = useState<number>(
    value ? Math.round((value - Math.floor(value)) * 100) : 0
  );
  const currentRating = useRef<number>(value ? Math.floor(value) : -1);
  const currentFraction = useRef<number>(
    value ? Math.round((value - Math.floor(value)) * 100) : 0
  );
  const currentTotalRating = useRef<number>(value ? value : 0);
  const getFraction = (event: React.MouseEvent) => {
    const { left, width } = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - left;
    const fraction = x / width;
    return fraction;
  };

  const handleMouseHover = (event: React.MouseEvent) => {
    const fraction = getFraction(event);
    if (!disabled && !readOnly) {
      if (precision === 1) {
        const id = +event.currentTarget.id;
        setRating(id);
        setLastStarFraction(100);
        currentTotalRating.current = id + 1;
      } else {
        const starFraction = Math.floor(fraction / precision) * precision * 100;
        const nextStarFraction = +(
          Math.ceil(fraction / precision) *
          precision *
          100
        ).toPrecision(2);

        if (fraction * 100 > starFraction) {
          setRating(+event.currentTarget.id);
          setLastStarFraction(nextStarFraction >= 100 ? 100 : nextStarFraction);
          currentTotalRating.current =
            nextStarFraction >= 100
              ? +event.currentTarget.id + 1
              : +event.currentTarget.id + nextStarFraction / 100;
        } else {
          setRating(+event.currentTarget.id);
          setLastStarFraction(starFraction >= 100 ? 100 : starFraction);
          currentTotalRating.current =
            starFraction >= 100
              ? +event.currentTarget.id + 1
              : +event.currentTarget.id + starFraction / 100;
        }
      }
      if (getLabelText) {
        return getLabelText(currentTotalRating.current);
      }
    }
  };

  const handleRatingChange = (event: React.MouseEvent, value: number) => {
    if (!disabled && !readOnly) {
      if (precision === 1) {
        setRating(value);
        currentFraction.current = 100;
        currentRating.current = value;
        currentTotalRating.current = value + 1;
      } else {
        const fraction = getFraction(event);
        const ceilFraction = Math.ceil(fraction / precision) * precision;
        const starFraction = Math.floor(ceilFraction * 100);

        setRating(+event.currentTarget.id);
        setLastStarFraction(starFraction >= 100 ? 100 : starFraction);

        currentFraction.current = starFraction >= 100 ? 100 : starFraction;
        currentRating.current = +event.currentTarget.id;
        currentTotalRating.current =
          starFraction >= 100
            ? +event.currentTarget.id + 1
            : +event.currentTarget.id + starFraction / 100;
      }
      if (getLabelText) {
        return getLabelText(currentTotalRating.current);
      }
      if (onChange) {
        onChange(currentTotalRating.current);
      }
    }
  };

  const handleMouseLeave = (event: React.MouseEvent) => {
    if (!disabled && !readOnly) {
      setRating(Math.floor(currentRating.current));
      setLastStarFraction(currentFraction.current);
      if (getLabelText) {
        return getLabelText(
          Math.floor(currentRating.current) + currentFraction.current / 100
        );
      }
    }
  };
  // set the fill and empty color
  const fill = disabled === true ? diabledFill : normalFill;
  const empty = disabled === true ? disabledEmpty : normalEmpty;

  return (
    <div className="rating__container" data-testid={`rating__container`}>
      {/* Rating:
      <div className="rating_number">
        {lastStarFraction === 100 ? rating + 1 : rating}.
        {lastStarFraction === 100 ? 0 : lastStarFraction}
      </div> */}
      {Array.from({ length: numberOfStars }).map((_, index) => {
        const starFraction =
          rating > index ? 100 : rating === index ? lastStarFraction : 0;

        const uniqueId = `${index}-${Math.random()}`;
        return (
          <Star
            uniqueId={uniqueId}
            key={index}
            starId={index}
            fill={fill}
            empty={empty}
            fraction={starFraction}
            handleMouseLeave={handleMouseLeave}
            handleMouseHover={handleMouseHover}
            handleRatingChange={handleRatingChange}
            className={styleClasses}
          />
        );
      })}
    </div>
  );
};
Rating.defaultProps = {
  size: 'default',
  max: 5,
  precision: 1,
};
export default Rating;
