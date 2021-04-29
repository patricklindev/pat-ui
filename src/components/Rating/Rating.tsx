import { type } from 'os';
import * as React from 'react';
import { classNames } from '../../utils/classNames';
import { IconPath } from '../Icon/Icons';

export type unselectColor = 'gray' | 'white' | 'red';
export type selectedColor = 'white' | 'yellow' | 'green';
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

export interface IRatingProps {
  /** customize rating design */
  className?: string;
  /** set the unselected color for the component*/
  unselectColor?: unselectColor;
  /** set the selected color for the compoenent*/
  selectedColor?: selectedColor;
  /** set the size */
  size?: number;
  /** pass in a function to get the rating only for type: fivepoint*/
  getRating?: (rating: number) => void;
  /** set the default rating*/
  defaultRating?: rating;
  /** set the type of the rating */
  ratingtype?: type;
  /** set the color of the bar */
  barcolor?: {
    left: 'yellow' | 'orange' | 'pink' | 'red' | 'green' | 'blue' | 'lightblue';
    right: 'yellow' | 'orange' | 'pink' | 'red' | 'green' | 'blue' | 'lightblue';
  };
  /** set the value of the bar. 'barValue' should be between 0-100*/
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
    defaultRating,
    className,
    ratingtype,
    barcolor,
    barValue,
    noText,
    disabled,
    clickThumbsDown,
    clickThumbsUp,
    thumbColor,
    ...rest
  } = props;

  let value = 0;

  const [rating, setRating] = React.useState(0);
  const [unSelected, setUnSelected] = React.useState(Colors.default);
  const [selected, setSelected] = React.useState(Colors.yellow);

  // let generatedStyle = 'rating ';

  // if (className) {
  //   generatedStyle += className;
  // }

  React.useEffect(() => {
    if (defaultRating) {
      setRating(defaultRating);
      value = defaultRating;
    }

    switch (unselectColor) {
      case 'gray':
        setUnSelected(Colors.gray);
        break;
      case 'red':
        setUnSelected(Colors.red);
        break;
      case 'white':
        setUnSelected(Colors.white);
        break;
      default:
        setUnSelected(Colors.default);
        break;
    }

    switch (selectedColor) {
      case 'white':
        setSelected(Colors.white);
        break;
      case 'yellow':
        setSelected(Colors.yellow);
        break;
      case 'green':
        setSelected(Colors.green);
        break;
      default:
        setSelected(Colors.yellow);
        break;
    }
    if (!!getRating) {
      getRating(value);
    }
  }, []);

  const changeValue = (num: number) => {
    if (!disabled) {
      if (rating === num) {
        setRating(rating - 1);
        value = rating - 1;
      } else {
        setRating(num);
        value = num;
      }
      if (getRating) {
        getRating(value);
      }
    }
  };

  switch (ratingtype) {
    case 'fivepoint':
      return (
        <div className={className} {...rest}>
          <svg
            className="rating"
            viewBox={IconPath['star'].viewBox}
            height={size ? `${size}px` : '20px'}
          >
            <path
              onClick={() => changeValue(1)}
              fill={1 <= rating ? selected : unSelected}
              d={IconPath['star'].path}
            />
          </svg>
          <svg
            className="rating"
            viewBox={IconPath['star'].viewBox}
            height={size ? `${size}px` : '20px'}
          >
            <path
              onClick={() => changeValue(2)}
              fill={2 <= rating ? selected : unSelected}
              d={IconPath['star'].path}
            />
          </svg>
          <svg
            className="rating"
            viewBox={IconPath['star'].viewBox}
            height={size ? `${size}px` : '20px'}
          >
            <path
              onClick={() => changeValue(3)}
              fill={3 <= rating ? selected : unSelected}
              d={IconPath['star'].path}
            />
          </svg>
          <svg
            className="rating"
            viewBox={IconPath['star'].viewBox}
            height={size ? `${size}px` : '20px'}
          >
            <path
              onClick={() => changeValue(4)}
              fill={4 <= rating ? selected : unSelected}
              d={IconPath['star'].path}
            />
          </svg>
          <svg
            className="rating"
            viewBox={IconPath['star'].viewBox}
            height={size ? `${size}px` : '20px'}
          >
            <path
              onClick={() => changeValue(5)}
              fill={5 <= rating ? selected : unSelected}
              d={IconPath['star'].path}
            />
          </svg>
        </div>
      );

    case 'progress':
      let progressClass = classNames('progress', {
        ['progress--noText']: !!noText,
      });
      console.log(progressClass);

      if (className) {
        progressClass += ' ' + className;
      }

      return (
        <div className={progressClass} {...rest}>
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
              className="progress__barValue"
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
        <div className="thumb" {...rest}>
          <article className={thumbClass} onClick={(e) => handelThumbsUp(e)}>
            <svg
              viewBox={IconPath['thumbsUp'].viewBox}
              height={`${thumbSize}px`}
            >
              <path
                fill={thumbColor ? thumbColor : 'gray'}
                d={IconPath['thumbsUp'].path}
              />
            </svg>
          </article>
          <article className={thumbClass} onClick={(e) => handelThumbsDown(e)}>
            <svg
              viewBox={IconPath['thumbsDown'].viewBox}
              height={`${thumbSize}px`}
            >
              <path
                fill={thumbColor ? thumbColor : 'gray'}
                d={IconPath['thumbsDown'].path}
              />
            </svg>
          </article>
        </div>
      );
    default:
      return null;
  }
};

Rating.defaultProps = {
  ratingtype: 'fivepoint',
  disabled: false,
};

export default Rating;
