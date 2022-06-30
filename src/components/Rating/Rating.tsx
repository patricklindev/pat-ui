import React, { FC, useState } from 'react';
import Icon from '../Icon';
import { IconSize } from '../Icon/Icon';

interface IRatingProps {
  /** set rating to be disabled */
  disabled?: boolean;
  /** set number of stars */
  ratingCount?: number;
  /** set size of stars */
  size?: IconSize;
  /** controll value of filled star ratings */
  ratingValueControll?: number;
  /** set label after the rating component */
  labelInput?: HTMLLabelElement;
}

/**
 * Ratings provide insight regarding others' opinions and experiences, and can allow the user to submit a rating of their own.
 *
 * ```js
 * import {Rating} from 'pat-ui'
 * ```
 */

export const Rating: FC<IRatingProps> = (props) => {
  const { disabled, ratingCount, size, ratingValueControll, labelInput } =
    props;
  // create an arr to map star icons
  const starArr = [...Array(ratingCount ?? 5)];
  // states to manage save rating value and hover effect
  const [ratingNum, setRatingNum] = useState(ratingValueControll ?? 0);
  const [hover, setHover] = useState(0);

  const rating = starArr.map((_, index) => {
    const ratingValue = index + 1;
    const isFilled = ratingValue <= (hover || ratingNum);
    return (
      <label key={index}>
        <input
          type="radio"
          name="rating"
          value={ratingValue}
          onClick={() => setRatingNum(ratingValue)}
        />
        <div
          className="rating_icon-group"
          onMouseEnter={() => setHover(ratingValue)}
          onMouseLeave={() => setHover(0)}
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

export default Rating;
