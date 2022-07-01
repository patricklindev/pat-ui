import React, {
  FC,
  HTMLAttributes,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
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

  // create an arr to map star icons
  const starArr = [...Array(ratingCount)];
  // states to manage save rating value, hover effect, and currentHover position
  const [ratingNum, setRatingNum] = useState(ratingValueControll);
  const [hover, setHoverValue] = useState(0);
  const [currentHovering, setCurrentHovering] = useState<number | null>(-1);

  const iconRef = useRef<any>(null);

  // handle onClick with disabled logic
  const handleOnClick = (rating: number) => {
    if (disabled || readonly) {
      return;
    }
    // callback function get rating value from outside of component
    if (onChange) {
      onChange(rating);
    }
    setRatingNum(rating);
  };

  // handle onMouseEnter with disabled logic
  const handleOnMouseEnter = (rating: number, i: number, e: any) => {
    if (disabled || readonly) {
      return;
    }
    setHoverValue(rating);
    setCurrentHovering(i);
  };

  // handle onMouseLeave with disabled logic
  const handleOnMouseLeave = () => {
    if (disabled || readonly) {
      return;
    }
    setHoverValue(0);
    setCurrentHovering(null);
  };

  const rating = starArr.map((_, index) => {
    const ratingValue = index + 1;
    const isFilled = ratingValue <= (hover || (ratingNum as number));
    const sizeDetect = animateBySize(size as IconSize, currentHovering, index);

    return (
      <div
        key={index}
        ref={iconRef}
        className={styleClasses}
        onMouseEnter={(e) => handleOnMouseEnter(ratingValue, index, e)}
        onMouseLeave={handleOnMouseLeave}
        onClick={() => handleOnClick(ratingValue)}
      >
        <Icon
          name={isFilled ? 'star' : 'star regular'}
          color={isFilled ? 'orange' : 'grey'}
          disabled={disabled}
          size={sizeDetect}
          className="rating-icon"
        />
      </div>
    );
  });

  const label = labelInput && <label>{labelInput}</label>;

  return (
    <div className="rating-container">
      {rating}
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
