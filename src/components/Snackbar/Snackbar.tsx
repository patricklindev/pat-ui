import React, { FC, useEffect, useState } from 'react';
import Button from '../Button';
import { classNames } from '../../utils/classNames';

export type SnackbarSeverity =
  | 'default'
  | 'success'
  | 'warning'
  | 'info'
  | 'error';

export interface SnackbarProps {
  /** set horizontal position (left, center, right) */
  horizontal?: string;
  /** set vertical position (top, center, bottom) */
  vertical?: string;
  /** message to display, this is used only if there're no children in snackbar */
  message?: string;
  /** set duration to hide snackbar */
  autoHideDuration?: number;
  /** manage snackbar open/close state with this prop */
  open?: boolean;
  /** if open is provided, this function should also be provided to set open state to false*/
  onClose?: () => void;
  /** set style of snackbar */
  severity?: SnackbarSeverity;
}

/**
 * A Snackbars inform users of a process that an app has performed or will perform.
 *
 * ```js
 * import {Snackbar} from 'pat-ui'
 * ```
 */
export const Snackbar: FC<SnackbarProps> = (props) => {
  const vertical = 'v_' + props.vertical;
  const horizontal = 'h_' + props.horizontal;
  let { open, severity, children, message } = props;
  //default value for onClose: empty function
  const onClose = props.onClose;
  const autoHideDuration = props.autoHideDuration || 3000;

  //define class names for snackbar
  let classnames = classNames(
    'snackbar',
    vertical,
    horizontal,
    {
      open: open || false,
    },
    'snackbar__' + severity!
  );

  useEffect(() => {
    //close the snackbar after autoHideDuration
    if (open) {
      setTimeout(() => {
        //remove open from classnames
        classnames = classnames.replace('open', '');
        onClose!();
      }, autoHideDuration);
    }
  }, [props.open, classnames]);

  const closeBtn = props.onClose ? (
    <span className="snackbar__close" onClick={() => onClose!()}></span>
  ) : null;

  //prioritize children first, then message, then empty string
  const content = children || message || '';
  return (
    <div className={classnames}>
      {content} {closeBtn}
    </div>
  );
};

Snackbar.defaultProps = {
  severity: 'default',
  onClose: () => {},
  vertical: 'bottom',
  horizontal: 'left',
  open: true,
};

export default Snackbar;
