import React, { FC, HTMLAttributes, useRef, useState } from 'react';
import { classNames } from '../../utils/classNames';
import Icon from '../Icon';
import { IconSize } from '../Icon/Icon';
import { animateBySize } from './helper';

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
  /** controll value of filled star ratings */
  ratingValueControll?: number;
  /** allow half fraction of stars */
  half?: boolean;
  /** set label after the rating component */
  labelInput?: string;
  /** get the current rating value outside of component */
  onChange?: (rating: any) => void;
}

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
    ratingValueControll,
    labelInput,
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

  // states to manage save rating value, hover effect, and currentHover position
  const [currentTotalRating, setCurrentTotalRating] =
    useState(ratingValueControll);
  const [currentHovering, setCurrentHovering] = useState<number>(-1);
  // rating arr
  const starArr = new Array(ratingCount).fill(0).map((item, index) => {
    return {
      value: 0,
      index,
    };
  });
  const [stars, setStars] = useState(starArr);

  const iconRef = useRef<any>(null);

  console.log(stars);
  console.log(currentHovering);

  // handle onClick with disabled logic
  const handleOnClick = () => {
    if (disabled || readonly) {
      return;
    }

    const newStarRating = stars
      .map((star) => star.value)
      .reduce((value, count) => {
        return (value += count);
      }, 0);

    setCurrentTotalRating(newStarRating);

    // callback function get rating value from outside of component
    // if (onChange) {
    //   onChange(ratingNum);
    // }
  };

  // handle onMouseLeave with disabled logic
  const handleOnMouseLeave = () => {
    if (disabled || readonly) {
      return;
    }
    setCurrentHovering(-1);
  };

  // half star logic
  const handleOnMouseMove = (e: any, index: number) => {
    if (disabled || readonly) {
      return;
    }

    setCurrentHovering(index);

    const { offsetX } = e.nativeEvent;
    const tempSize = 28;

    //  if star index === current index
    // if offsetX === 0 (star index - 1) number of  stars value to be 1, rest will be 0
    // if offsetX <= size / 2 (star index - 1) number of stars value to be 1 but current index star value to be .5 and rest will be 0
    // if offsetX >= size / 2 star index number of stars value to be 1 and rest will be 0

    const newStars = stars.map((star) => {
      if (offsetX === 0) {
        if (star.index < index) {
          return {
            ...star,
            value: 1,
          };
        }

        return {
          ...star,
          value: 0,
        };
      }

      if (offsetX <= tempSize / 2) {
        if (star.index < index) {
          return {
            ...star,
            value: 1,
          };
        }

        if (star.index === index) {
          return {
            ...star,
            value: 0.5,
          };
        }

        return {
          ...star,
          value: 0,
        };
      }

      if (offsetX >= tempSize / 2) {
        if (star.index <= index) {
          return {
            ...star,
            value: 1,
          };
        }

        return {
          ...star,
          value: 0,
        };
      }
      return star;
    });

    setStars(newStars);

    const newStarRating = stars
      .map((star) => star.value)
      .reduce((value, count) => {
        return (value += count);
      }, 0);

    setCurrentTotalRating(newStarRating);
  };

  const newRating = stars.map((star, index) => {
    const getIconName = (starValue: number) => {
      if (starValue === 0) {
        return 'star regular';
      }

      if (starValue === 0.5) {
        return 'star half';
      }

      return 'star';
    };

    const getIconColor = (starValue: number) => {
      if (starValue !== 0) {
        return 'orange';
      }

      return 'grey';
    };

    const currentSize = animateBySize(
      size as IconSize,
      currentHovering === index
    );
    return (
      <div
        key={star.index + 'star'}
        className={styleClasses}
        ref={iconRef}
        onMouseLeave={handleOnMouseLeave}
        onMouseMove={(e) => handleOnMouseMove(e, index)}
        onClick={handleOnClick}
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

  const label = labelInput && <label>{labelInput}</label>;

  return (
    <div className="rating-container">
      {newRating}
      {label}
    </div>
  );
};

Rating.defaultProps = {
  ratingCount: 5,
  size: 'medium',
  ratingValueControll: 0,
};

export default Rating;