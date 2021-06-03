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
  horizontal?: string;
  vertical?: string;
  // onClick: (e: Event) => void;
  message: string;
  autoHideDuration?: number;
  //snackbar open state is managed by calling component
  open?: boolean;
  //a function that change open state after autoHideDuration. if op
  onClose?: () => void;
  severity?: SnackbarSeverity;
}

/**
 * A Snackbars inform users of a process that an app has performed or will perform.
 *
 * ```js
 * import {Snackbar} from 'pat-ui'
import Button from '../Button/Button';
import { default } from '../Button/Button.stories';
 * ```
 */
export const Snackbar: FC<SnackbarProps> = (props) => {
  const vertical = 'v_' + props.vertical;
  const horizontal = 'h_' + props.horizontal;
  let { open, severity } = props;
  //default value for onClose: empty function
  const onClose = props.onClose;
  const autoHideDuration = props.autoHideDuration || 3000;

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
    <Button onClick={() => onClose!()}>X</Button>
  ) : null;

  return (
    <div className={classnames}>
      {props.message} {closeBtn}
    </div>
  );
};

Snackbar.defaultProps = {
  severity: 'default',
  onClose: () => {},
  vertical: 'bottom',
  horizontal: 'left',
};

export default Snackbar;
