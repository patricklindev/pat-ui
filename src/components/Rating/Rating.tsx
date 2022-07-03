import React, { FC, HTMLAttributes, useEffect, useState } from 'react';
import { classNames } from '../../utils/classNames';
import Icon from '../Icon';
import { IconSize } from '../Icon/Icon';
import {
  convertSizeNameToSizeNumber,
  getCurrentHalfStars,
  getCurrentStarRating,
  getDefaultHalfStars,
  getFullStars,
  getIconColor,
  getIconName,
  getSizeName,
} from './helper';
import { useCurrentRatingLabel } from './hooks';

interface IRatingProps {
  className?: string;
  /** set rating to be disabled */
  disabled?: boolean;
  /** set rating to be readonly */
  readonly?: boolean;
  /** set number of stars */
  ratingCount?: number;
  /** set size of stars */
  size?: IconSize;
  /** controll value of filled star ratings (rating value can be .5 fraction when "half" prop is added) */
  defaultRating?: number;
  /** allow half fraction of stars */
  half?: boolean;
  /** set label with satisfaction words after the rating component */
  isLabel?: boolean;
  /** get the current rating value outside of component */
  onChange?: (rating: any) => void;
}

export interface IStar {
  value: number;
  index: number;
}

export type IStars = IStar[];

export type RatingProps = IRatingProps & HTMLAttributes<HTMLElement>;

/**
 * Ratings provide insight regarding others' opinions and experiences, and can allow the user to submit a rating of their own.
 *
 * ```js
 * import {Rating} from 'pat-ui'
 * ```
 */

export const Rating: FC<RatingProps> = (props) => {
  const {
    className,
    disabled,
    readonly,
    ratingCount,
    size,
    defaultRating,
    isLabel,
    half,
    onChange,
  } = props;

  // managing classnames
  let styleClasses = classNames('rating_icon-group', {
    disabled: !!disabled,
    readonly: !!readonly,
  });
  if (className) {
    styleClasses += ' ' + className;
  }
  // rating array as the default to stars state
  const starArr = new Array(ratingCount).fill(0).map((item, index) => {
    return {
      value: 0,
      index: index + 1,
    };
  });

  // states to manage save current rating value,currentHover position, and stars value
  const [currentTotalRating, setCurrentTotalRating] = useState(defaultRating);
  const [currentHovering, setCurrentHovering] = useState<number>(-1);
  const [stars, setStars] = useState<IStars>(starArr);

  // custom hook to track the current rating label
  const { labelName } = useCurrentRatingLabel(
    currentTotalRating as number,
    ratingCount as number
  );

  const handleOnClick = (rating: number) => {
    if (disabled || readonly) {
      return;
    }
    // get current total star rating
    const newStarRating = getCurrentStarRating(stars);
    setCurrentTotalRating(newStarRating);
    // onChange callback
    if (onChange) {
      onChange(rating);
    }
  };

  // reset animation effect
  const handleOnMouseLeave = () => {
    if (disabled || readonly) {
      return;
    }
    setCurrentHovering(-1);
  };

  // hovering effect with half and full stars preview
  const handleOnMouseMove = (e: any, index: number) => {
    if (disabled || readonly) {
      return;
    }
    // set current hovering position
    setCurrentHovering(index);
    // get current star ratings
    const newStarRating = getCurrentStarRating(stars);
    setCurrentTotalRating(newStarRating);
    // half stars logic
    if (half) {
      const { offsetX } = e.nativeEvent;
      const currentSize = convertSizeNameToSizeNumber(size as IconSize);
      const newStars = getCurrentHalfStars(offsetX, stars, index, currentSize);
      setStars(newStars);
    } else {
      const newStars = getFullStars(stars, index);
      setStars(newStars);
    }
  };

  //check defaultRating value and half prop to update stars
  useEffect(() => {
    if (defaultRating && !Number.isInteger(defaultRating) && half) {
      const newStars = getDefaultHalfStars(stars, defaultRating);
      setStars(newStars);
    } else {
      const newStars = getFullStars(stars, defaultRating as number);
      setStars(newStars);
    }
  }, [defaultRating, half]);

  //Rating component to be rendered
  const renderedRating = stars.map((star, index) => {
    const ratingValue = index + 1;
    const currentSize = getSizeName(
      size as IconSize,
      currentHovering === ratingValue
    );
    return (
      <div
        key={star.index + 'star'}
        className={styleClasses}
        onMouseLeave={handleOnMouseLeave}
        onMouseMove={(e) => handleOnMouseMove(e, ratingValue)}
        onClick={() => handleOnClick(ratingValue)}
      >
        <Icon
          name={getIconName(star.value)}
          color={getIconColor(star.value)}
          disabled={disabled}
          size={currentSize}
          className="rating-icon"
        />
      </div>
    );
  });

  const label = isLabel && <label>{labelName}</label>;

  return (
    <div className="rating-container">
      {renderedRating}
      {label}
    </div>
  );
};

Rating.defaultProps = {
  ratingCount: 5,
  size: 'medium',
  defaultRating: 0,
};

export default Rating;
