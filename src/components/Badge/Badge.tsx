import React, { FC, HTMLAttributes } from 'react';
import { classNames } from '../../utils/classNames';

export type BadgeColor = 'primary' | 'secondary' | 'error';

export interface IBadgeProps {
  className?: string;
  color?: BadgeColor;
  badgeContent?: number;
  invisible?: boolean;
  showZero?: boolean;
}

type NativeBadgeProps = IBadgeProps & HTMLAttributes<HTMLElement>;
export type patBadgeProps = NativeBadgeProps;

export const Badge: FC<patBadgeProps> = (props) => {
  const {
    className,
    color,
    badgeContent,
    invisible,
    showZero,
    ...rest
  } = props;
  let styleClasses = classNames(
    'MuiBadge-badge',
    'MuiBadge-anchorOriginTopRightRectangle',
    { [`badge-${color}`]: true }
  );
  if (className) {
    styleClasses += ' ' + className;
  }

  let badge;
  if (badgeContent !== undefined && (showZero || badgeContent > 0)) {
    badge = <span className={styleClasses}>{badgeContent}</span>;
  }

  return (
    <span className="MuiBadge-root" {...rest}>
      <svg
        className="MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
      </svg>
      {badge}
    </span>
  );
};

Badge.defaultProps = {
  color: 'primary',
};

export default Badge;
