import React, { FC } from 'react';
import { classNames } from '../../utils/classNames';

export interface IRatingProps {
  precision?: number;
  totalStars?: number;
  value?: number;
  size?: 'mini' | 'small' | 'large' | 'big' | 'huge' | 'massive';
  emptyIcon?: JSX.Element;
  filledIcon?: JSX.Element;
  readOnly?: boolean;
  disabled?: boolean;
  defaultValue? :number;
  onChange?: (value: number) => void;
  getLabelText?: (value: number) => void;
  onChangeActive?: (value: number) => void;
}

export type PatRatingProps = IRatingProps;

export const Rating: FC<PatRatingProps> = (props) => {
  const {
    precision = 1,
    totalStars = 5,
    value = 0,
    size = 'large',
    emptyIcon: EmptyIcon = <span className='ui-rating rating-empty-star'>☆</span>,
    filledIcon: FilledIcon = <span className='ui-rating rating-full-star'>★</span>,
    readOnly,
    disabled,
    defaultValue = null,
    onChange,
    getLabelText,
    onChangeActive,
    ...rest
  } = props;

  const styleClasses = classNames('ui-rating', {
    [`rating-${size}`]: !!size,
    'rating-disabled': !!disabled,
    'rating-readonly': !!readOnly
  });

  const [activeStar, setActiveStar] = React.useState(defaultValue !== null ? defaultValue : value);
  const [hoverActiveStar, setHoverActiveStar] = React.useState(-1);
  const [isHovered, setIsHovered] = React.useState(false);

  const calculateRating = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const ratingContainer = e.currentTarget;
    if (!ratingContainer) return -1;

    const { width, left } = ratingContainer.getBoundingClientRect();
    let percent = (e.clientX - left) / width;
    const numberInStars = percent * totalStars;
    const nearestNumber =
      Math.round((numberInStars + precision / 2) / precision) * precision;

    return Number(
      nearestNumber.toFixed(precision.toString().split('.')[1]?.length || value)
    );
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (readOnly || disabled ) return;
    if (onChange) {
      setIsHovered(false);
      setActiveStar(calculateRating(e));
      onChange(calculateRating(e));
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (readOnly || disabled ) return; 
    if (onChangeActive) {
      onChangeActive(calculateRating(e));
    } 
    setIsHovered(true);
    setHoverActiveStar(calculateRating(e));
    
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (readOnly || disabled ) return; 
    if (onChangeActive) {
      onChangeActive(calculateRating(e));
    }
    setHoverActiveStar(-1);
    setIsHovered(false);
    
  };

  const renderIcon = (index: number) => {
    const activeState = isHovered ? hoverActiveStar : activeStar;
    const showEmptyIcon = activeState === -1 || activeState < index + 1;
    const isActiveRating = activeState !== 1;
    const isRatingWithPrecision = activeState % 1 !== 0;
    const isRatingEqualToIndex = Math.ceil(activeState) === index + 1;
    const showRatingWithPrecision =
      isActiveRating && isRatingWithPrecision && isRatingEqualToIndex;

    return (
      <div
        key={index}
        style={{
          cursor: disabled? 'not-allowed':'pointer',
          color: showEmptyIcon ? 'gray' : 'inherit',
          position: 'relative'
        }}
      >
        {showEmptyIcon ? (
          EmptyIcon
        ) : (
          FilledIcon
        )}
        <div
          style={{
            width: showRatingWithPrecision
              ? `${(activeState % 1) * 100}%`
              : '0%',
            overflow: 'hidden',
            position: 'absolute',
            height: 'inherit',
            top: '0px',
            left: '0px'
          }}
        >
          {FilledIcon}
        </div>
      </div>
    );
  };

  return (
      <div
        className={styleClasses}
        onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => handleMouseMove(e)}
        onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => handleMouseLeave(e)}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => handleClick(e)}
        {...rest}
      >
      {[...new Array(totalStars)].map((_, index) => renderIcon(index))}
    </div>
    
  );
};

export default Rating;
