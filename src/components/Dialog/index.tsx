import { FC } from 'react';
import Dialog, { IDialogProps } from './Dialog';
import DialogTitle, { IDialogTitleProps } from './DialogTitle';
import DialogContent, { IDialogContentProps } from './DialogContent';
import DialogAction, { IDialogActionProps } from './DialogAction';

export type PatDialogComponent = FC<IDialogProps> & {
  Title: FC<IDialogTitleProps>;
  Content: FC<IDialogContentProps>;
  Action: FC<IDialogActionProps>;
};

const PatDialog = Dialog as PatDialogComponent;
PatDialog.Title = DialogTitle;
PatDialog.Content = DialogContent;
PatDialog.Action = DialogAction;

export default PatDialog;