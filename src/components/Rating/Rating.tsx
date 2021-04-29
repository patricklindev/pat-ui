import { type } from 'os';
import * as React from 'react';
import { IconPath } from '../Icon/Icons';

export type unselectColor = 'gray' | 'white' | 'red';
export type selectedColor = 'white' | 'yellow' | 'green';
export type size = 'large' | 'small' | 'default';
export type rating = 0 | 1 | 2 | 3 | 4 | 5;
export type type = 'fivepoint' | 'progress' | 'thumb';

export enum Colors {
  default = 'rgb(226, 226, 226)',
  red = 'rgb(236,67,55)',
  white = 'white',
  yellow = 'rgb(255,194,9)',
  green = 'rgb(129,221,67)',
  gray = 'rgb(226, 226, 226)',
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
}

let value = 0;
/**
 * Rating indicates user interest in content.
 *
 * ```js
 * import {Rating} from 'pat-ui'
 * ```
 */
export const Rating: React.FC<IRatingProps> = (props) => {
  const {
    size,
    getRating,
    selectedColor,
    unselectColor,
    defaultRating,
    className,
    ratingtype,
    ...rest
  } = props;
  const [rating, setRating] = React.useState(0);
  const [unSelected, setUnSelected] = React.useState(Colors.default);
  const [selected, setSelected] = React.useState(Colors.yellow);
  let generatedStyle = 'rating ';

  if (className) {
    generatedStyle += className;
  }

  React.useEffect(() => {
    console.log(defaultRating);
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
        setUnSelected(Colors.yellow);
        break;
    }
    if (!!getRating) {
      getRating(value);
    }
  }, []);

  const changeValue = (num: number) => {
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
  };

  switch (ratingtype) {
    case 'fivepoint':
      return (
        <div>
          <svg
            className={generatedStyle}
            viewBox={IconPath['star'].viewBox}
            height={`${size}px`}
          >
            <path
              onClick={() => changeValue(1)}
              fill={1 <= rating ? selected : unSelected}
              d={IconPath['star'].path}
            />
          </svg>
          <svg
            className={generatedStyle}
            viewBox={IconPath['star'].viewBox}
            height={`${size}px`}
          >
            <path
              onClick={() => changeValue(2)}
              fill={2 <= rating ? selected : unSelected}
              d={IconPath['star'].path}
            />
          </svg>
          <svg
            className={generatedStyle}
            viewBox={IconPath['star'].viewBox}
            height={`${size}px`}
          >
            <path
              onClick={() => changeValue(3)}
              fill={3 <= rating ? selected : unSelected}
              d={IconPath['star'].path}
            />
          </svg>
          <svg
            className={generatedStyle}
            viewBox={IconPath['star'].viewBox}
            height={`${size}px`}
          >
            <path
              onClick={() => changeValue(4)}
              fill={4 <= rating ? selected : unSelected}
              d={IconPath['star'].path}
            />
          </svg>
          <svg
            className={generatedStyle}
            viewBox={IconPath['star'].viewBox}
            height={`${size}px`}
          >
            <path
              onClick={() => changeValue(5)}
              fill={5 <= rating ? selected : unSelected}
              d={IconPath['star'].path}
            />
          </svg>
        </div>
      );
    //barcolor: {left:string, right:string,}
    //height: thin | default | thick
    //textcolor:white | black
    // progress will have l | default | s
    //value: in percent

    case 'progress':
      return (
        <div className="progress">
          <article className="progress__primary" style={{ width: '30%' }}>
            10%
            <article className="progress__secondary"></article>
          </article>
        </div>
      );
    case 'thumb':
      return <div></div>;
    default:
      return null;
  }
};

Rating.defaultProps = {
  defaultRating: 0,
  size: 20,
  ratingtype: 'fivepoint',
  selectedColor:"yellow"
};

export default Rating;
