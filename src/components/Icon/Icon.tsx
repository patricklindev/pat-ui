import React from 'react';
import { classNames } from '../../utils/classNames';

export interface IIconPath {
  [name: string]: {
    path: string;
    viewBox: string;
  };
}
const IconPath: IIconPath = {
  ['angle down']: {
    path:
      'M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z',
    viewBox: ' 0 0 320 512',
  },
  ['home']: {
    path:
      'M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z',
    viewBox: '0 0 576 512',
  },
};

export enum IconRotated {
  Clockwise = 'clockwise',
  CounterClockwise = 'counterclockwise',
}

export interface IIconProps {
  className?: string;
  size?: string;
  color?: string;
  rotated?: IconRotated;
  name: string;
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
  let height;

  switch (size) {
    case 'mini':
      height = '12';
      break;
    case 'tiny':
      height = '14';
      break;
    case 'small':
      height = '20';
      break;
    case 'large':
      height = '42';
      break;
    case 'big':
      height = '58';
      break;
    case 'huge':
      height = '112';
      break;
    case 'massive':
      height = '224';
      break;
    default:
      height = '28';
  }

  return (
    <svg className={className} viewBox={IconPath[name].viewBox} height={height}>
      <path fill={color} d={IconPath[name].path} />
    </svg>
  );
};

export default Icon;
