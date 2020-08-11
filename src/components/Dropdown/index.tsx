import { FC } from 'react';
import Dropdown, { IDropdownProps } from './Dropdown';
import DropdownOption, { IDropdownOptionProps } from './DropdownOption';

export type PatDropdownComponent = FC<IDropdownProps> & {
  Option: FC<IDropdownOptionProps>;
};

const TransDropdown = Dropdown as PatDropdownComponent;
TransDropdown.Option = DropdownOption;

export default TransDropdown;
