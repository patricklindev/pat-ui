import React, { FC } from 'react';

export type dialogueType =
  | 'basic'
  | 'alert'
  | 'form'
  |'list';

export interface DlgMessageProps {
  // set class
  className?: string;
  // set dialogue type
  dlgType?: dialogueType;
  // set content
  dlgContent?: string;
  // set on click action
  dlgOnClick?: () => void;
}

export const Dialogue: FC<DlgMessageProps> = (props) => {
  const {
    className,
    dlgContent,
  } = props;

  return (
    <div className={className}>
      <h3>Hello world!</h3>
      <p>{dlgContent}</p>
    </div>
  )

};

// Dialogue.defaultProps = {
//   dialogueType: 'basic'
// }

export default Dialogue;
