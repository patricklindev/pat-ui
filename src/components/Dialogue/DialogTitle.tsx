import React, { FC, HTMLAttributes } from 'react';
export interface IDialogTitleProps {
  /** set style classes*/
  className?: string;
}
export type PatDialogTitleProps = IDialogTitleProps &
  HTMLAttributes<HTMLDivElement>;
/**
 * Dialog Title can be used in a Dialog to alert users
 *
 * ```js
 * import { DialogTitle } from 'pat-ui'
 * ```
 */
const DialogTitle: FC<PatDialogTitleProps> = (props) => {
  const { children, className } = props;
  let classes;
  if (className) {
    classes = 'dialog__title ' + className;
  } else classes = 'dialog__title';
  return (
    <div className={classes} data-testid="dialog-title-element">
      {children}
    </div>
  );
};
export default DialogTitle;
