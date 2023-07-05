import React, { Children, FC, ReactNode } from 'react';

export interface IDialogActionProps {
  className?: string;
  showCancelBtn?: boolean;
  showSubmitBtn?: boolean;
  cancleBtnTitle?: string;
  submitBtnTitle?: string;
  children?: ReactNode;
  onCancel?: (val?: any) => void;
  onSubmit?: (val?: any) => void;
}

const DialogAction: FC<IDialogActionProps> = (props) => {
  const {
    className,
    onCancel,
    onSubmit,
    showCancelBtn,
    showSubmitBtn,
    children,
    ...rest
  } = props;

  let styleClasses = 'dialog-action';

  if (className) {
    styleClasses += ' ' + className;
  }

  // const handleCancel = (val?: any) => {
  //   if (!!onCancel) {
  //     onCancel(val);
  //     console.log('close triggered');
  //     console.log(onCancel);
  //   }
  // };

  // const handleSubmit = (val?: any) => {
  //   if (!!onSubmit) {
  //     onSubmit(val);
  //     console.log('submit triggered');
  //   }
  //   handleCancel();
  // };

  let cancelBtn;

  if (showCancelBtn) {
    cancelBtn = (
      <button className={styleClasses + ' btn'} onClick={onCancel}>
        cancle
      </button>
    );
  } else {
    cancelBtn = <></>;
  }

  let submitBtn;

  if (showSubmitBtn) {
    submitBtn = (
      <button className={styleClasses + ' btn'} onClick={onSubmit}>
        submit
      </button>
    );
  } else {
    submitBtn = <></>;
  }

  return (
    <div className={styleClasses}>
      {!!children ? (
        children
      ) : (
        <>
          {cancelBtn}
          {submitBtn}
        </>
      )}
    </div>
  );
};

DialogAction.defaultProps = {
  showCancelBtn: true,
  showSubmitBtn: true,
};

export default DialogAction;
