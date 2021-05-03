import React, { FC, HTMLAttributes } from 'react';
import { classNames } from '../../utils/classNames';
import Icon from '../Icon';

export type BadgeColor = 'primary' | 'secondary' | 'error';

export interface IBadgeProps {
  className?: string;
  color?: BadgeColor;
  badgeContent?: number;
  invisible?: boolean;
  showZero?: boolean;
  max?: number;
  icon?: string | { [key: string]: string | boolean };
  variant?: 'default' | 'dot';
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
    max,
    icon,
    variant,
    ...rest
  } = props;

  let styleClasses = classNames('Badge', 'Badge-TopRight', {
    [`badge-${color}`]: true,
    [`badge-${variant}`]: true,
  });

  if (className) {
    styleClasses += ' ' + className;
  }

  let badge;
  if (badgeContent !== undefined && (showZero || badgeContent > 0)) {
    badge = <span className={styleClasses}>{badgeContent}</span>;
  }

  if (!invisible) {
    badge = '';
  }

  let iconName: string = '';
  if (icon && typeof icon === 'object') {
    iconName = icon['name'] as string;
  }

  if (!iconName) {
    if (typeof icon === 'string') {
      iconName = icon;
    }
  }

  const patIcon = (
    <Icon aria-hidden={'true'} name={iconName} size="small"></Icon>
  );

  if (!!badgeContent && !!max && badgeContent > max) {
    badge = (
      <span className={styleClasses}>
        {max}
        {'+'}
      </span>
    );
  }

  if (variant === 'dot') {
    badge = <span className={styleClasses}></span>;
  }

  return (
    <span className="Badge-root" {...rest}>
      <svg
        className="Badge-icon"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        {patIcon}
      </svg>
      {badge}
    </span>
  );
};

Badge.defaultProps = {
  color: 'primary',
  invisible: true,
  showZero: false,
  icon: 'star',
  variant: 'default',
};

export default Badge;
