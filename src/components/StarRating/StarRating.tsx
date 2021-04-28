import React, { useEffect, useState } from 'react';
import { IIconPath, IconPath } from '../Icon/Icons';

export type unselectColor = 'gray' | 'white' | 'red';
export type selectedColor = 'white' | 'yellow' | 'green';
export type size = 'large' | 'small' | 'default';
export type rating = 0 | 1 | 2 | 3 | 4 | 5;

export enum Colors {
  default = 'rgb(226, 226, 226)',
  red = 'rgb(236,67,55)',
  white = 'white',
  yellow = 'rgb(255,194,9)',
  green = 'rgb(129,221,67)',
  gray = 'rgb(226, 226, 226)',
}

interface StarRatingProps {
  unselectColor?: unselectColor;
  selectedColor?: selectedColor;
  size?: number;
  getRating?: Function;
  defaultRating?: rating;
}
let value = 0;
const StarRating: React.FC<StarRatingProps> = (props) => {
  let { size, getRating, selectedColor, unselectColor, defaultRating, ...args} = props;
  const [rating, setRating] = useState(0);

  const [unSelected, setUnSelected] = useState(Colors.default);
  const [selected, setSelected] = useState(Colors.yellow);

  useEffect(() => {
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
  return (
    <div>
      <svg viewBox={IconPath['star'].viewBox} height={`${size}px`}>
        <path
          className="star-cursor"
          onClick={() => changeValue(1)}
          fill={1 <= rating ? selected : unSelected}
          d={IconPath['star'].path}
        />
      </svg>
      <svg viewBox={IconPath['star'].viewBox} height={`${size}px`}>
        <path
          className="star-cursor"
          onClick={() => changeValue(2)}
          fill={2 <= rating ? selected : unSelected}
          d={IconPath['star'].path}
        />
      </svg>
      <svg viewBox={IconPath['star'].viewBox} height={`${size}px`}>
        <path
          className="star-cursor"
          onClick={() => changeValue(3)}
          fill={3 <= rating ? selected : unSelected}
          d={IconPath['star'].path}
        />
      </svg>
      <svg viewBox={IconPath['star'].viewBox} height={`${size}px`}>
        <path
          className="star-cursor"
          onClick={() => changeValue(4)}
          fill={4 <= rating ? selected : unSelected}
          d={IconPath['star'].path}
        />
      </svg>
      <svg viewBox={IconPath['star'].viewBox} height={`${size}px`}>
        <path
          className="star-cursor"
          onClick={() => changeValue(5)}
          fill={5 <= rating ? selected : unSelected}
          d={IconPath['star'].path}
        />
      </svg>
    </div>
  );
};

StarRating.defaultProps = {
  unselectColor: 'gray',
  selectedColor: 'yellow',
  size: 20,
};

export default StarRating;
