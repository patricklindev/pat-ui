import React from 'react';
import { classNames } from '../../utils/classNames';
import { IconPath } from './IconLib';

export enum IconSize {
  Mini = 'mini',
  Tiny = 'tiny',
  Small = 'small',
  Large = 'large',
  Big = 'big',
  Huge = 'huge',
  Massive = 'massive',
}

export enum IconColor {
  Red = 'red',
  Orange = 'orange',
  Yellow = 'yellow',
  Olive = 'olive',
  Green = 'green',
  Teal = 'teal',
  Blue = 'blue',
  Violet = 'violet',
  Purple = 'purple',
  Pink = 'pink',
  Brown = 'brown',
  Grey = 'grey',
  Black = 'black',
}

export enum IconRotated {
  Clockwise = 'clockwise',
  CounterClockwise = 'counterclockwise',
}

export enum IconName {
  angleDown = 'angle down',
}

export interface IIconProps {
  className?: string;
  size?: IconSize;
  color?: IconColor;
  rotated?: IconRotated;
  name?: IconName;
  disabled?: boolean;
}

const Icon: React.FC<IIconProps> = (props) => {
  const { className, size, color, disabled, rotated, name, ...rest } = props;
  let styleClasses = classNames('icon', {
    size: !!size,
    disabled: !!disabled,
    name: true,
  });
  if (className) {
    styleClasses += ' ' + className;
    console.log(name);
  }

  return (
    <svg
      className={className}
      viewBox="0 0 1024 1024"
      width={`22`}
      height={`22`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path fill={color} d={name} />
    </svg>
  );
};

export default Icon;
