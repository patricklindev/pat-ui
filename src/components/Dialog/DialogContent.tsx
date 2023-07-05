import React, { FC, ReactNode } from 'react';

export interface IDialogContentProps {
  className?: string;
  contentMessage?: string;
  children?: ReactNode;
}

const DialogContent: FC<IDialogContentProps> = (props) => {
  const { className, contentMessage, children, ...rest } = props;

  let styleClasses = 'dialog-content';

  if (className) {
    styleClasses += ' ' + className;
  }

  return (
    <div className={styleClasses}>
      {!!children ? (
        children
      ) : (
          <p className={styleClasses + 'dialog-content-text'}>{contentMessage}</p>
      )}
    </div>
  );
};

export default DialogContent;
