//import "./_Switch.css";
import React, { FC} from "react";
import { classNames } from '../../utils/classNames';


export type Size = 'large' | 'small' | 'medium';
export type TextPosition = 'default' | 'top' | 'left' ;


export interface ISwitchProps {
  /** set classname */
  className?: string;
  /** set switch size */
  switchSize?: Size;
  /** set text positioning */
  textPosition?: TextPosition;
  /** set action on switch clicked */
  onClick?: () => void;
  /** set if checked */
  checked?: boolean;
  /** set if disabled */
  disabled?: boolean;
}


export type patSwitchProps = ISwitchProps;

/**
 * A Switch indicates a possible user action.
 *
 * ```js
 * import {Switch} from 'pat-ui'
 * ```
 */
export const Switch: FC<patSwitchProps> = (props) => {
  const { switchSize, textPosition, children, disabled, className, checked, ...rest } = props;

  let styleClasses = classNames('card', {
    [`${switchSize}`]: true,
    [`${textPosition}`]: true,
  });

  if (className) {
    styleClasses += ' ' + className;
}

  return (
    <div className={"container " + textPosition} data-testid='switch-element'>
      <label className={'switch ' + styleClasses + ' ' + props.disabled} data-testid='switch-label'>
        <input type="checkbox" onClick={props.onClick} />
        <span className={'slider switch ' + switchSize + ' ' + props.disabled}></span>
      </label>
      <span className={'label ' + props.disabled + ' ' + styleClasses}>{props.children}</span>
    </div>
  );
}
Switch.defaultProps = {
  switchSize: 'medium',
  textPosition: 'default'
};
export default Switch;

