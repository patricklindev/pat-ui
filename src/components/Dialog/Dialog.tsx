import React, {
  FC,
  useEffect,
  useState,
  useRef,
  MouseEvent,
  ReactNode,
} from 'react';
import { classNames } from '../../utils/classNames';

// export type DialogType = 'simple' | 'alert' | 'form';
export type DialogTheme = 'dark' | 'light'; 
export type DialogSize = 'sm'| 'md' | 'lg';

export interface IDialogProps {
  // set Class name
  className?: string;

  dialogTheme?: DialogTheme;

  dialogSize?: DialogSize;
  // show or hide dialog
  isOpen?: boolean;

  children?: ReactNode;
  // set trigger button title
  triggerTitle?: string;

  // set onClose method
  onClose?: (val?: any) => void;
}

const Dialog: FC<IDialogProps> = (props) => {
  const {
    className,
    dialogSize,
    dialogTheme,
    isOpen,
    children,
    triggerTitle,
    onClose,
    ...rest
  } = props;

  const [isDialogOpen, setDialogOpen] = useState(isOpen);
  const toggleDialog = () => setDialogOpen(!isDialogOpen);
  const isPriviousDialogOpen = useRef(isDialogOpen);

  let styleClasses = classNames('dialog', {
    [`dialog-${dialogTheme}`]: true,
    [`dialog-${dialogSize}`]: !!dialogSize,
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
  const closeDialogByBackdrop = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    if (e.target instanceof Element) {
      if (e.target.classList.contains('dialog-backdrop')) {
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

  return (
    <div>
      <button onClick={toggleDialog}>
        {!!triggerTitle ? triggerTitle : 'Show Dialog'}
      </button>
      <dialog className='dialog' open={isDialogOpen}>
        <div
          className='dialog-backdrop'
          onClick={(event) => closeDialogByBackdrop(event)}
        >
          <div className={styleClasses + ' dialog-body'} data-testid='dialog-body-element'>{children}</div>
        </div>
      </dialog>
    </div>
  );
};

Dialog.defaultProps = {
  isOpen: false,
  dialogSize: 'md',
  dialogTheme: 'light',
  triggerTitle: 'show dialog',
};

export default Dialog;
