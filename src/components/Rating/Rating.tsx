import { type } from 'os';
import * as React from 'react';
import { classNames } from '../../utils/classNames';
import { IconPath } from '../Icon/Icons';
import Icon from '../Icon/index';
import { IconSize } from '../Icon/Icon';
import { IconColor } from '../Icon/Icon';

export type unselectColor = 'gray' | 'white' | 'red';
export type selectedColor = 'white' | 'gold' | 'green';
export type size = 'large' | 'small' | 'default';
export type rating = 0 | 1 | 2 | 3 | 4 | 5;
export type type = 'fivepoint' | 'progress' | 'thumb';
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
  /** set the size */
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
  /** pass in a function for thumbs up actions*/
  clickThumbsUp?: () => void;
  /** pass in a function for thumbs down actions*/
  clickThumbsDown?: () => void;
  /** set the thumb outline color */
  thumbColor?: string;
  /** set the number of rating elements*/
  max?: number;
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
    clickThumbsDown,
    clickThumbsUp,
    thumbColor,
    max,
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
    case 'thumb':
      let thumbClass = classNames('rating', {
        [`thumb__item`]: !disabled,
        [`thumb__item-disabled`]: !!disabled,
      });

      if (className) {
        thumbClass += ' ' + className;
      }

      //used another variable thumbSize because size is also used for other components.
      let thumbSize = size;
      if (!thumbSize) {
        thumbSize = 25;
      }

      const handelThumbsUp = (e: React.MouseEvent) => {
        if (clickThumbsUp && !disabled) {
          clickThumbsUp();
        }
      };

      const handelThumbsDown = (e: React.MouseEvent) => {
        if (clickThumbsDown && !disabled) {
          clickThumbsDown();
        }
      };

      if (disabled) {
        thumbColor = 'lightGray';
      }
      return (
        <div className="thumb" {...rest} data-testid="rating-element">
          <article className={thumbClass} onClick={(e) => handelThumbsUp(e)}>
            <svg
              viewBox={IconPath['thumbsUp'].viewBox}
              height={`${thumbSize}px`}
            >
              <path
                stroke={thumbColor ? thumbColor : 'gray'}
                fill={thumbColor ? thumbColor : 'gray'}
                d={IconPath['thumbsUp'].path}
              />
            </svg>
          </article>
          <article className={thumbClass} onClick={(e) => handelThumbsDown(e)}>
            <svg
              transform="scale(-1,1)"
              viewBox={IconPath['thumbsDown'].viewBox}
              height={`${thumbSize}px`}
            >
              <path
                stroke={thumbColor ? thumbColor : 'gray'}
                fill={thumbColor ? thumbColor : 'gray'}
                d={IconPath['thumbsDown'].path}
              />
            </svg>
          </article>
        </div>
      );

    default:
      const handelMouseEnter = (e: any, index: number) => {
        if (disabled) e.preventDefault();
        if (!disabled) {
          console.log(index);
          setHover(index);
        }
      };

      const handelMouseLeave = (e: any, index = 0) => {
        if (disabled) e.preventDefault();
        if (!disabled) {
          console.log(index);
          setHover(0);
        }
      };

      const ratingClasse = classNames('rating', {
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
                  className={ratingClasse}
                  data-testid="rating-click"
                  name="star"
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
