import React, { FC, HTMLAttributes } from 'react';
export interface IDialogContentProps {
  /** set style classes*/
  className?: string;
  /** set dividers option */
  dividers?: boolean;
}

const divider: FC = () => {
  return <hr />;
};
export type PatDialogContentProps = IDialogContentProps &
  HTMLAttributes<HTMLDivElement>;
const DialogContent: FC<PatDialogContentProps> = (props) => {
  let classes = 'dialog__content';
  const { dividers, children, className } = props;

  if (className) classes += ' ' + className;
  return dividers ? (
    <div className={classes} data-testid="dialog-content-element">
      <hr className="dialog-content-divider" />
      {children}
      <hr className="dialog-content-divider" />
    </div>
  ) : (
    <div className={classes} data-testid="dialog-content-element">
      {children}
    </div>
  );
};

DialogContent.defaultProps = {
  dividers: false,
};
export default DialogContent;
