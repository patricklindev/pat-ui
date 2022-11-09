import { BasePrivateKeyEncodingOptions } from 'crypto';
import React, { ReactNode, useEffect, useState } from 'react';
import Button from '../Button';
import './_Dialog.scss';

export interface DialogProps {
  onClose: () => void;
  setModalOpen: () => void;
  open: boolean;
  children: ReactNode;
}

interface DialogTitleProps {
  children: string;
}

interface DialogContentProps {
  children?: ReactNode;
}

interface DialogContentTextProps {
  children: string;
}

interface DialogActionsProps {
  children: ReactNode;
}

interface DialogListProps {
  children: ReactNode;
}

interface DialogListItemProps {
  handler: () => void;
  children: ReactNode;
}

interface DialogListItemAvatarProps {
  children: ReactNode;
}

interface DialogListItemTextProps {
  children: string;
}

const Dialog = ({ children, open, onClose, setModalOpen }: DialogProps) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      onClose();
    }
  }, [open]);

  return (
    <div className="backdrop" onClick={setModalOpen}>
      {open && (
        <div className="card" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      )}
    </div>
  );
};

/**
 * This is the heading of the dialog
 * @param props with a string prop
 * @returns a title with the specified text given in children
 */
export const DialogTitle = ({ children }: DialogTitleProps) => {
  return <p className="title">{children}</p>;
};

/**
 * This is the content of the dialog
 * @param props with children prop
 * @returns the children with styling
 */
export const DialogContent = ({ children }: DialogContentProps) => {
  return <div className="content">{children}</div>;
};

/**
 * This is the text within the content of the dialog
 * @param props with a string prop
 * @returns a text given in children
 */
export const DialogContentText = ({ children }: DialogContentTextProps) => {
  return <p>{children}</p>;
};

/**
 * This is where the action buttons for the dialog are placed
 * @param props with children prop
 * @returns the buttons wrapped in a div with styling
 */
export const DialogActions = ({ children }: DialogActionsProps) => {
  return <div className="actions">{children}</div>;
};

/**
 * This is used for showing a list
 * @param props with children prop
 * @returns the list wrapped in ul with styling
 */
export const DialogList = ({ children }: DialogListProps) => {
  return <ul className="list">{children}</ul>;
};

/**
 * This is used for each list item in a list
 * @param props with children prop and its handler
 * @returns a list item with a handler along with its children
 */
export const DialogListItem = ({ handler, children }: DialogListItemProps) => {
  return <li onClick={handler}>{children}</li>;
};

/**
 * This is for adding an icon with each list item
 * @param props with children
 * @returns a children which are icons
 */
export const DialogListItemAvatar = ({
  children,
}: DialogListItemAvatarProps) => {
  return <>{children}</>;
};

/**
 * This is for the text of each list item
 * @param props with children
 * @returns a children of text
 */
export const DialogListItemText = ({ children }: DialogListItemTextProps) => {
  return <p>{children}</p>;
};

export default Dialog;
