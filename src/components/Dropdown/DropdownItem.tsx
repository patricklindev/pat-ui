import React, { CSSProperties } from 'react';

export interface IDropdownItemProps {
  children?: string;
  className?: string;
  disabled?: boolean;
  cssStyle?: CSSProperties;
  setSelected?: (text: string) => void;
}

const DropdownItem: React.FC<IDropdownItemProps> = (props) => {
  const { className, children, cssStyle, setSelected } = props;

  let classNames = 'dropdown__option';
  if(className) {
    classNames = ['dropdown__option', className].join(' ');
  } 

  const callback = () => {
    if(setSelected && children) {
      setSelected(children);
    }
  }

  return (
    <span className={classNames} style={cssStyle} onClick={callback}>
      {children}
    </span>
  );
};

export default DropdownItem;
