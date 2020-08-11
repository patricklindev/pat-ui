import React, { FC } from 'react';
import { classNames } from '../../utils/classNames';
import { IconPath } from './Icons';
// import * as icons from '../../asset/icon';

export type IconSize =
  | 'tiny'
  | 'mini'
  | 'small'
  | 'medium'
  | 'large'
  | 'big'
  | 'huge'
  | 'massive';

export type IconColor =
  | 'red'
  | 'orange'
  | 'yellow'
  | 'olive'
  | 'green'
  | 'teal'
  | 'blue'
  | 'violet'
  | 'purple'
  | 'pink'
  | 'brown'
  | 'grey'
  | 'black';

// export enum IconRotated {
//   Clockwise = 'clockwise',
//   CounterClockwise = 'counterclockwise',
// }

export interface IIconProps {
  /** set customized style */
  className?: string;
  /** set icon size */
  size?: IconSize;
  /** set icon color */
  color?: IconColor;
  // rotated?: IconRotated;
  /** set icon type */
  name: string;
  /** set loading icon */
  loading?: boolean;
  /** set disabled icon */
  disabled?: boolean;
}

/**
 * An Icon is a symbol that helps user understand what does the content do.
 *
 * ```js
 * import {Icon} from 'pat-ui'
 * ```
 */
const Icon: FC<IIconProps> = (props) => {
  const { className, size, color, loading, disabled, name, ...rest } = props;
  let styleClasses = classNames('icon', {
    [`${size}`]: !!size,
    [`${color}`]: !!color,
    [`${name}`]: true,
    disabled: !!disabled,
    loading: !!loading,
  });
  if (className) {
    styleClasses += ' ' + className;
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
    case 'medium':
      height = '28';
      break;
    default:
      height = '28';
  }

  // return null if IconPath[name] is undefined
  if(!IconPath[name]) {
    return null;
  }
  if (disabled) {
    return (
      <svg
        className={styleClasses}
        viewBox={IconPath[name].viewBox}
        height={height}
      >
        <path fill={color} fill-opacity=".25" d={IconPath[name].path} />
      </svg>
    );
  } else if (loading) {
    return (
      <svg
        className={styleClasses}
        height={height}
        viewBox={IconPath[name].viewBox}
      >
        <path fill={color} d={IconPath[name].path}></path>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 0 0"
          to="360 0 0"
          dur="1s"
          repeatCount="indefinite"
        />
      </svg>
    );
  } else {
    return (
      <svg
        className={styleClasses}
        viewBox={IconPath[name].viewBox}
        height={height}
      >
        <path fill={color} d={IconPath[name].path} />
      </svg>
    );
  }
};

Icon.defaultProps = {
  loading: false,
  disabled: false,
};

export default Icon;
