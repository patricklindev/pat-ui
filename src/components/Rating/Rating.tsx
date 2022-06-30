import React, { FC, ReactNode, useState } from 'react';
import Icon from '../Icon';

interface IRatingProps {}

const disabled = false;

export const Rating: FC<IRatingProps> = (props) => {
  // create an arr to map star icons
  const starArr = [...Array(5)];
  // states to manage save rating value and hover effect
  const [ratingNum, setRatingNum] = useState(0);
  const [hover, setHover] = useState(0);

  const rating = starArr.map((star, index) => {
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
          />
        </div>
      </label>
    );
  });

  return <>{rating}</>;
};

export default Rating;
