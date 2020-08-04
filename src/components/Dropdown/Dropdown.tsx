import React from 'react';
import DropdownItem, { PatDropdownItemProps } from './DropdownItem';
import { classNames } from '../../utils/classNames';

interface IDropdownProps {
  className?: string;
  children?: React.ReactNode;
}

interface PatDropDownSubComponents {
  Item: React.FC<PatDropdownItemProps>
}

type PatDropdownProps = IDropdownProps & React.SelectHTMLAttributes<HTMLSelectElement>;

type PatDropdown = React.FC<PatDropdownProps> & PatDropDownSubComponents;

const Dropdown : PatDropdown = (props) => {
  const { children, className, ...rest } = props;
  let styleClasses = classNames('dropdown');

  if(className) {
    styleClasses += ` ${className}`;
  }

  return <select className={styleClasses} {...rest}>{children}</select>
}

Dropdown.Item = DropdownItem;

export default Dropdown;
