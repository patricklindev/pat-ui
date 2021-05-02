import { type } from 'os';
import * as React from 'react';
import { classNames } from '../../utils/classNames';
import { IconPath } from '../Icon/Icons';
import Icon from '../Icon/index';
import { IconSize } from '../Icon/Icon';
import { IconColor } from '../Icon/Icon';
import Button from '../Button';
import { boolean } from 'yargs';

export type unselectColor = 'gray' | 'white' | 'red';
export type selectedColor = 'white' | 'gold' | 'green';
export type size = 'large' | 'small' | 'default';
export type rating = 0 | 1 | 2 | 3 | 4 | 5;
export type type = 'fivepoint' | 'progress' | 'like';
export type barcol = {
  left: 'yellow' | 'orange' | 'pink' | 'red' | 'green' | 'lightblue';
  right: 'yellow' | 'orange' | 'pink' | 'red' | 'green' | 'lightblue';
};

export enum Colors {
  default = 'rgb(226, 226, 226)',
  red = 'rgb(236,67,55)',
  white = 'white',
  yellow = 'rgb(255,194,9)',
  green = 'rgb(129,221,67)',
  gray = 'rgb(226, 226, 226)',
  defaultSelected = 'rgb(255,194,9)',
  pink = 'rgb(254,72,133)',
  orange = ' #f2709c',
}

const fivePointSize = new Map([
  [5, 'tiny'],
  [10, 'mini'],
  [20, 'small'],
  [30, 'medium'],
  [40, 'large'],
  [50, 'big'],
  [60, 'huge'],
  [70, 'massive'],
]);

export interface IRatingProps {
  /** customize rating design */
  className?: string;
  /** set the unselected color for the component*/
  unselectColor?: IconColor;
  /** set the selected color for the compoenent*/
  selectedColor?: IconColor;
  /** set the size in increments of 10*/
  size?: number;
  /** pass in a function to get the rating only for type: 'fivepoint'*/
  getRating?: (rating: number) => void;
  /** set the default rating (0-5) only for type: 'fivepoint'*/
  ratingValue?: rating;
  /** set the type of the rating */
  ratingtype?: type;
  /** set the color of the bar */
  barcolor?: {
    left: 'yellow' | 'orange' | 'pink' | 'red' | 'green' | 'blue' | 'lightblue';
    right:
      | 'yellow'
      | 'orange'
      | 'pink'
      | 'red'
      | 'green'
      | 'blue'
      | 'lightblue';
  };
  /** set the value of the bar. 'barValue' should be from 0-100*/
  barValue?: number;
  /** removes text for progress bar if set to true */
  noText?: boolean;
  /** set true to disable rating */
  disabled?: boolean;
  /** set the number of rating elements*/
  max?: number;
  /** change the icon of the five point rating */
  fivePointType?: string;
  /** pass in a function */
  clickLike?: () => void;
  /** set the count for the like button */
  setLikeCount?: number;
  /** removes the count in the button */
  removeLikeCount?: boolean;
  /** set the color of the heart icon */
  likeHeartColor?: IconColor;
  /** sets the like button to be clicked */
  likeclicked?: boolean;
}

/**
 * Rating indicates user interest in content.
 *
 * ```js
 * import {Rating} from 'pat-ui'
 * ```
 */
export const Rating: React.FC<IRatingProps> = (props) => {
  let {
    size,
    getRating,
    selectedColor,
    unselectColor,
    ratingValue,
    className,
    ratingtype,
    barcolor,
    barValue,
    noText,
    disabled,
    max,
    fivePointType,
    clickLike,
    setLikeCount,
    removeLikeCount,
    likeHeartColor,
    likeclicked,
    ...rest
  } = props;

  let value = 0;

  const [rating, setRating] = React.useState(0);
  const [unSelected, setUnSelected]: [IconColor, Function] = React.useState(
    'lightgray'
  );
  const [selected, setSelected]: [IconColor, Function] = React.useState('gold');
  const [iconSize, setIconSize]: [IconSize, Function] = React.useState('small');
  const [hover, setHover] = React.useState(0);

  React.useEffect(() => {
    if (ratingValue) {
      setRating(ratingValue);
      value = ratingValue;
    }

    if (unselectColor) {
      setUnSelected(unselectColor);
    }

    if (selectedColor) {
      setSelected(selectedColor);
    }

    if (size && size >= 5 && size <= 70) {
      setIconSize(`${fivePointSize.get(size)}`);
    }
  }, []);

  const changeValue = (num: number) => {
    if (!disabled) {
      setRating(num);
      value = num;
      if (getRating) {
        getRating(value);
      }
    }
  };

  switch (ratingtype) {
    case 'progress':
      let progressClass = classNames('progress', {
        ['progress--noText']: !!noText,
      });

      if (className) {
        progressClass += ' ' + className;
      }

      return (
        <div
          className={progressClass}
          data-testid="rating-element"
          style={{ height: `${noText && size ? `${size}px` : ''}` }}
          {...rest}
        >
          <article
            className="progress__primary"
            style={{
              width: `${barValue ? `${barValue}%` : '0px'}`,
              background: `linear-gradient(to right, ${
                barcolor ? barcolor.left : Colors.red
              }, ${barcolor ? barcolor.right : Colors.pink})`,
              boxShadow: `1px 1px 5px ${
                barcolor ? barcolor.right : Colors.pink
              }`,
            }}
          >
            <span
              className="progress__barValue noSelect"
              style={{ fontSize: `${size}px` }}
            >
              {noText ? '' : barValue ? barValue + '%' : 0 + '%'}{' '}
            </span>
          </article>
        </div>
      );
    case 'like':
      let wrapperClasses = 'likeButton' + ' ' + className;

      let iconClasses = classNames('rating-like', {
        ['like-bounce']: !!likeclicked,
      });

      let labelClasses = classNames('heart__label', {
        [`heart__label-active`]: !!likeclicked,
        [`noSelect`]: true,
        ['btn disabled']: !!disabled,
      });

      const handelLikeClick = () => {
        if (!!clickLike && disabled != true) {
          clickLike();
        }
      };
      return (
        <div className={wrapperClasses} {...rest} data-testid="rating-element">
          <div className={labelClasses} onClick={handelLikeClick}>
            <Icon
              color={
                likeclicked
                  ? likeHeartColor
                    ? likeHeartColor
                    : '#FF0032'
                  : 'lightgray'
              }
              className={iconClasses}
              name="heart"
              size={iconSize}
              disabled={disabled}
            />
            <span
              className={`heart__label__like${likeclicked ? '-active' : ''}`}
            >
              Like
            </span>
            <span
              className={`heart__label__like${likeclicked ? '-active' : ''}`}
            >
              {removeLikeCount ? '' : setLikeCount ? setLikeCount : 0}
            </span>
          </div>
        </div>
      );

    default:
      const handelMouseEnter = (e: any, index: number) => {
        if (disabled) e.preventDefault();
        if (!disabled) {
          setHover(index);
        }
      };

      const handelMouseLeave = (e: any, index = 0) => {
        if (disabled) e.preventDefault();
        if (!disabled) {
          setHover(0);
        }
      };

      const ratingClasses = classNames('rating', {
        [`rating--disabled`]: !!disabled,
      });

      return (
        <div className={className} {...rest} data-testid="rating-element">
          {[...Array(max ? max : 5)].map((rate, index) => (
            <label key={index}>
              <div
                onMouseEnter={(e) => handelMouseEnter(e, index + 1)}
                onMouseLeave={(e) => handelMouseLeave(e, 0)}
                onClick={() => changeValue(index + 1)}
              >
                <Icon
                  className={ratingClasses}
                  disabled={disabled}
                  data-testid="rating-click"
                  name={fivePointType?fivePointType:"star"}
                  size={iconSize}
                  color={index + 1 <= (hover || rating) ? selected : unSelected}
                />
              </div>
            </label>
          ))}
        </div>
      );
  }
};

Rating.defaultProps = {
  ratingtype: 'fivepoint',
  disabled: false,
};

export default Rating;
