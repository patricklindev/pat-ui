import React, { FC, CSSProperties, ReactNode, useEffect } from 'react';

export interface IDropdownOptionProps {
  /** children must be React Element */
  children?: ReactNode;
  /** set customized css class */
  className?: string;
  /** set customized css style */
  cssStyle?: CSSProperties;
  /** callback provided by Dropdown */
  setSelected?: (val: string, children: ReactNode) => void;
  /** value for this option */
  value?: string;
  /** is the active / default option */
  active?: boolean;
}

const DropdownOption: FC<IDropdownOptionProps> = (props) => {
  const { className, children, cssStyle, setSelected, value, active } = props;

  let classNames = 'dropdown__option';
  if (className) {
    classNames = ['dropdown__option', className].join(' ');
  }

  const passToDropdown = () => {
    if (setSelected) {
      const selectedValue = value ? value : '';
      setSelected(selectedValue, children);
    }
  };

  useEffect(() => {
    // check if active is set when mounted
    if (active) {
      passToDropdown();
    }
  }, []);

  return (
    <div className={classNames} style={cssStyle} onClick={passToDropdown}>
      {children}
    </div>
  );
};

DropdownOption.defaultProps = {
  value: '',
  active: false,
};

export default DropdownOption;
