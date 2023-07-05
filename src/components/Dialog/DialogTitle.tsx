import React, { FC, ReactNode } from 'react';

export interface IDialogTitleProps {
  className?: string;
  title?: string;
  children?: ReactNode;
}
const DialogTitle: FC<IDialogTitleProps> = (props) => {
  const { className, title, children, ...rest } = props;

  return (
    <div className={className + ' dialog-title'}>
      {!!children ? (
        children
      ) : (
          <h2> {title} </h2>
      )}
    </div>
  );
};

export default DialogTitle;
