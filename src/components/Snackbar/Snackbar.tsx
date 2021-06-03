import React, { FC, useEffect, useState } from 'react';
import Button from '../Button';
import { classNames } from '../../utils/classNames';

interface SnackbarProps {
  horizontal: string;
  vertical: string;
  // onClick: (e: Event) => void;
  message: string;
  autoHideDuration?: number;
  //snackbar open state is managed by calling component
  open: boolean;
  //a function that change open state after autoHideDuration. if no
  onClose: () => void;
}

/**
 * A Snackbars inform users of a process that an app has performed or will perform.
 *
 * ```js
 * import {Snackbar} from 'pat-ui'
import Button from '../Button/Button';
 * ```
 */
export const Snackbar: FC<SnackbarProps> = (props) => {
  const vertical = 'v_' + props.vertical;
  const horizontal = 'h_' + props.horizontal;
  let { open, onClose } = props;
  const autoHideDuration = props.autoHideDuration || 3000;

  let classnames = classNames('snackbar', vertical, horizontal, {
    open: open,
  });

  useEffect(() => {
    //close the snackbar after autoHideDuration
    if (open) {
      setTimeout(() => {
        //remove open from classnames
        classnames = classnames.replace('open', '');
        onClose();
      }, autoHideDuration);
    }
  }, [props.open, classnames]);

  return (
    <div className={classnames}>
      {props.message} <Button onClick={() => onClose()}>X</Button>
    </div>
  );
};

export default Snackbar;
