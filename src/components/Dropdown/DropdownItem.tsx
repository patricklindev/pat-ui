import React, { FC, CSSProperties } from 'react';

export interface IDropdownItemProps {
  /** children must be React Element */
  children?: string;
  /** set customized css class */
  className?: string;
  /** set customized css style */
  cssStyle?: CSSProperties;
  /** callback provided by Dropdown */
  setSelected?: (text: string) => void;
}

const DropdownItem: FC<IDropdownItemProps> = (props) => {
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
