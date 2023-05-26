import React, { FC, HTMLAttributes } from 'react';
export interface IDialogActionsProps {
  /** set style classes*/
  className?: string;
  /** set whether to space child components */
  disableSpacing?: boolean;
}
export type PatDialogActionsProps = IDialogActionsProps &
  HTMLAttributes<HTMLDivElement>;

export const DialogActions: FC<PatDialogActionsProps> = (props) => {
  const { disableSpacing, children, className } = props;

  let dialogActions = (
    <div
      className={`dialog__actions ${className} ${
        !disableSpacing && '--dialog__actions-gap'
      }`}
      data-testid="dialog-actions-element"
    >
      {children}
    </div>
  );

  return dialogActions;
};
DialogActions.defaultProps = {
  disableSpacing: false,
};
export default DialogActions;
