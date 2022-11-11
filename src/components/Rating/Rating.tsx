import React, { useState, FC } from 'react';
// import { classNames } from '../../utils/classNames';

export interface IRatingProps {
  // customized rating
  className?: string;
  // change rating size
  ratingSize?: string;
  // amount of stars
  ratingCount?: any;
  // activate label on hover
  hoverLabel?: boolean;
  // display label on hover
  customSize?: string;
  // active or disabled
  disabled?: boolean;

  onChange?: (rating: number) => any;
}

export const Rating: FC<IRatingProps> = (props: any) => {
  const {
    ratingSize,
    className,
    ratingCount,
    hoverLabel,
    customSize,
    disabled,
    onChange,
  } = props;

  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [hoverCopy, setHoverCopy] = useState<number>(0);
  const [isRatingLabel, setIsRatingLabel] = useState<string>('');

  // Star rating Labels
  const label: { [key: number]: string } = {
    1: 'Useless',
    2: 'Poor',
    3: 'OK',
    4: 'Good',
    5: 'Excellent',
  };

  const showLabel = () => {
    let display = label[hoverRating];
    return display;
  };

  // Add color on hover
  const handleHoverOn = (idx: number) => {
    rating && setHoverCopy(rating);
    setRating(0);
    setHoverRating(idx);
  };

  // Remove color but reset rating 
  const handleHoverOff = () => {
    hoverCopy && setRating(hoverCopy);
    setHoverRating(0);
  };

  //  Save rating on click
  const saveRating = (idx: number) => {
    setHoverCopy(0);
    setRating(idx);
    if (hoverLabel) setIsRatingLabel(showLabel());
    if (!hoverLabel) setIsRatingLabel('');
  };

  // Size of stars based on user
  const size = () => {
    if (ratingSize === 'sm') return '1rem';
    if (ratingSize === 'md') return '2rem';
    if (ratingSize === 'lg') return '3rem';
  };

  // Number of stars based on user
  const stars = () => {
    let starArr = [];
    for (let i = 1; i <= ratingCount; i++) {
      starArr.push(i);
    }
    return starArr;
  };

  // Add color to star
  const highliteColor = (idx: number) => {
    if (hoverRating >= idx || rating >= idx) {
      return 'yellow';
    } else {
      return 'none';
    }
  };

  // Create Stars
  const renderStars = stars().map((idx: number) => {
    return (
      <svg
        key={idx}
        className={`${className} star`}
        onMouseEnter={() => !disabled && handleHoverOn(idx)}
        onMouseLeave={() => !disabled && handleHoverOff()}
        onClick={() => {
          if (!disabled) {
            saveRating(idx);
            onChange(rating);
          } else {
            highliteColor(idx);
          }
        }}
        fill={highliteColor(idx)}
        stroke="black"
        viewBox="0 0 24 24"
        width={customSize ? customSize : size()}
      >
        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    );
  });

  return (
    <div>
      {renderStars} {hoverLabel && showLabel()}{' '}
      {hoverRating ? '' : isRatingLabel}
    </div>
  );
};

//default setting
Rating.defaultProps = {
  ratingCount: 5,
  ratingSize: 'md'
};

export default Rating;
