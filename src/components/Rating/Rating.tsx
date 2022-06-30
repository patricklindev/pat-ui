import React, { FC, useState } from 'react';
import { classNames } from '../../utils/classNames';
import Icon from '../Icon';
import { IconSize } from '../Icon/Icon';

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
  /** set label after the rating component */
  labelInput?: string;
}

/**
 * Ratings provide insight regarding others' opinions and experiences, and can allow the user to submit a rating of their own.
 *
 * ```js
 * import {Rating} from 'pat-ui'
 * ```
 */

export const Rating: FC<IRatingProps> = (props) => {
  const {
    className,
    disabled,
    readonly,
    ratingCount,
    size,
    ratingValueControll,
    labelInput,
  } = props;

  // managing classnames
  let styleClasses = classNames('rating_icon-group', {
    disabled: !!disabled,
    readonly: !!readonly,
  });
  if (className) {
    styleClasses += ' ' + className;
  }

  // create an arr to map star icons
  const starArr = [...Array(ratingCount)];
  // states to manage save rating value and hover effect
  const [ratingNum, setRatingNum] = useState(ratingValueControll);
  const [hover, setHover] = useState(0);

  // handle onClick with disabled logic
  const handleOnClick = (rating: number) => {
    if (disabled || readonly) {
      return;
    }
    setRatingNum(rating);
  };

  // handle onMouseEnter with disabled logic
  const handleOnMouseEnter = (rating: number) => {
    if (disabled || readonly) {
      return;
    }
    setHover(rating);
  };

  // handle onMouseLeave with disabled logic
  const handleOnMouseLeave = () => {
    if (disabled || readonly) {
      return;
    }
    setHover(0);
  };

  const rating = starArr.map((_, index) => {
    const ratingValue = index + 1;
    const isFilled = ratingValue <= (hover || (ratingNum as number));
    return (
      <label key={index}>
        <input
          type="radio"
          name="rating"
          value={ratingValue}
          onClick={() => handleOnClick(ratingValue)}
        />
        <div
          className={styleClasses}
          onMouseEnter={() => handleOnMouseEnter(ratingValue)}
          onMouseLeave={handleOnMouseLeave}
        >
          <Icon
            name="star"
            color={isFilled ? 'orange' : 'grey'}
            disabled={disabled}
            size={size}
          />
        </div>
      </label>
    );
  });

  const label = labelInput && <label>{labelInput}</label>;

  return (
    <>
      {rating}
      {label}
    </>
  );
};

Rating.defaultProps = {
  ratingCount: 5,
  ratingValueControll: 0,
};

export default Rating;
