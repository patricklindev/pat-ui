import React, { OptionHTMLAttributes } from 'react';

interface IDropdownItem {
  children?: React.ReactNode;
  className?: string;
}

export type PatDropdownItemProps = IDropdownItem & OptionHTMLAttributes<HTMLOptionElement>;

const DropdownItem : React.FC<PatDropdownItemProps> = (props) => {
  const { children, className, ...rest } = props;

  return <option className={className} {...rest}>{children}</option>
}

export default DropdownItem;
