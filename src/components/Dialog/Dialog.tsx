import React, { ReactNode } from 'react';
import './_Dialog.scss';

export interface DialogProps {
  title?: string;
  content?: string;
  actions?: {
    text: string;
    onClick: () => void;
  }[];
}

const Dialog = ({ title, content, actions }: DialogProps) => {
  return (
    <div className="card">
      <div>{title}</div>
      <div className="content">{content}</div>
      <div className="actions">
        {actions?.map((action) => (
          <button onClick={action.onClick}>{action.text}</button>
        ))}
      </div>
    </div>
  );
};

export default Dialog;
