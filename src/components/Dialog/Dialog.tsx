import React, { ReactNode } from 'react';
import './_Dialog.scss';

export interface DialogProps {
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

const Dialog = ({ children }: DialogProps) => {
  return <div className="card">{children}</div>;
};

export const DialogTitle = ({ children }: DialogTitleProps) => {
  return <p className="title">{children}</p>;
};

export const DialogContent = ({ children }: DialogContentProps) => {
  return <div className="content">{children}</div>;
};
export const DialogContentText = ({ children }: DialogContentTextProps) => {
  return <p>{children}</p>;
};

export const DialogActions = ({ children }: DialogActionsProps) => {
  return <div className="actions">{children}</div>;
};

export const DialogList = ({ children }: DialogListProps) => {
  return <ul className="list">{children}</ul>;
};

export const DialogListItem = ({ handler, children }: DialogListItemProps) => {
  return <li onClick={handler}>{children}</li>;
};

export const DialogListItemAvatar = ({
  children,
}: DialogListItemAvatarProps) => {
  return <>{children}</>;
};

export const DialogListItemText = ({ children }: DialogListItemTextProps) => {
  return <p>{children}</p>;
};

export default Dialog;
