import React, { CSSProperties, useState, Children, ReactElement } from 'react';
import DropdownItem, { IDropdownItemProps } from './DropdownItem';

interface IDropdownProps {
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
  disabled?: boolean;
  cssStyle?: CSSProperties;
  placeholder?: string;
}

interface PatDropdownSubComponents {
  Item: React.FC<IDropdownItemProps>;
}

type PatDropdown = React.FC<IDropdownProps> & PatDropdownSubComponents;

const Dropdown: PatDropdown = (props) => {
  const { className, children, cssStyle, placeholder } = props;

  const [isOptionListOpen, setIsOptionListOpen] = useState(false);
  const [activeOption, setActiveOption] = useState(placeholder ? placeholder : '');

  const toggleOptionList = () => {
    setIsOptionListOpen(!isOptionListOpen);
  }

  const setSelected = (val: string) => {
    setActiveOption(val);
  }

  let classNames = ['dropdown', className].join(' ');
  if(isOptionListOpen) {
    classNames = ['dropdown', 'open', className].join(' ');
  }

  return (
    <div className="dropdown__wrapper">
      <div className={classNames} style={cssStyle} onClick={() => { toggleOptionList() }}>
        <div className="dropdown__active_option">
          <span>{activeOption}</span>
          <div className="arrow" />
        </div>

        <div className="dropdown__options">
          {
            children ? Children.map(children, (child : ReactElement) => React.cloneElement(child, { setSelected })) : children
          }
        </div>
      </div>
    </div>
  );
};

Dropdown.Item = DropdownItem;

export default Dropdown;
