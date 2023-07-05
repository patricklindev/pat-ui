import React, { FC, ReactNode } from 'react';

export interface IDialogTitleProps {
  className?: string;
  title?: string;
  children?: ReactNode;
}
const DialogTitle: FC<IDialogTitleProps> = (props) => {
  const { className, title, children, ...rest } = props;

  let styleClasses = '';

  if (className) {
    styleClasses += ' ' + className;
  }
  return (
    <div className={styleClasses + ' dialog-title'}>
      {!!children ? (
        children
      ) : (
          <h2> {title} </h2>
      )}
    </div>
  );
};

export default DialogTitle;
