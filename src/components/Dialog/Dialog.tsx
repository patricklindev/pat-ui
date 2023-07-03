import React, {
  FC,
  ReactNode,
  useEffect,
  useState,
  useRef,
  MouseEvent,
} from 'react';
import { classNames } from '../../utils/classNames';

export type DialogType = 'simple' | 'alert' | 'form';
// export type message = Message;

export interface IDialogProps {
  // set Class name
  className?: string;
  // set Dialog Type;
  dialogType?: DialogType;
  // show or hide dialog
  isOpen?: boolean;
  // set dialog title
  dialogTitle?: ReactNode;
  dialogMessage?: ReactNode;
  dialogInput?: ReactNode;
  // set dialog content
  dialogContent?: ReactNode;
  //set dialog
  dialogAction?: ReactNode;
  onClose?: (val?: any) => void;
}

const Dialog: FC<IDialogProps> = (props) => {
  const {
    className,
    dialogType,
    isOpen,
    dialogTitle,
    dialogInput,
    dialogMessage,
    dialogContent,
    dialogAction,
    onClose,
    ...rest
  } = props;

  const [isDialogOpen, setDialogOpen] = useState(isOpen);
  const toggleDialog = () => setDialogOpen(!isDialogOpen);
  const isPriviousDialogOpen = useRef(isDialogOpen);

  let styleClasses = classNames('dialog', {
    [`dialog-${dialogType}`]: true,
  });

  if (className) {
    styleClasses += ' ' + className;
  }

  const handleClose = (val?: any) => {
    if (onClose) {
      onClose(val);
    }
  };

  //if mouse clicked the dialog overlay, close dialog.
  const closeDialog = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    if (e.target instanceof Element) {
      if (e.target.classList.contains('dialog-overlay')) {
        setDialogOpen(false);
      }
    }
  };

  // disable backgroun scroll by change the overflow style, when dialog is open.
  useEffect(() => {
    isDialogOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');

    // trigger handleClose every time the isDialog change from true to false;
    // skipp the first render.
    if (isPriviousDialogOpen.current && !isDialogOpen) {
      handleClose();
    }
    isPriviousDialogOpen.current = isDialogOpen;
  }, [isDialogOpen]);

  // let dialog = (
  //   <div className={styleClasses}>
  //     <div>{dialogTitle}</div>
  //     <div>{dialogMessage}</div>
  //     <div>this is a simple dialog</div>
  //   </div>
  // );

  // const dialog = () => {
  //   switch (dialogType) {
  //     case 'simple':
  //       return <>{simpleDialog}</>;

  //     default:
  //       return <>{simpleDialog}</>;
  //   }
  // };

  const simpleDialog = (
    <div className="dialog-overlay" onClick={(event) => closeDialog(event)}>
      <div className="dialog-body">
        <div>{dialogTitle}</div>
        <div>{dialogMessage}</div>
        <div>this is a simple dialog</div>
      </div>
    </div>
  );

  return (
    <div>
      <button onClick={() => toggleDialog()}> Show Dialog</button>
      <dialog open={isDialogOpen}>{simpleDialog}</dialog>
    </div>
  );
};

Dialog.defaultProps = {
  isOpen: false,
  className: 'dialog',
  dialogType: 'simple',
};

export default Dialog;
