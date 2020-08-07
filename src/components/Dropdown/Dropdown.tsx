import React, {
  FC,
  CSSProperties,
  useState,
  Children,
  ReactElement,
  cloneElement,
} from 'react';
import { classNames } from '../../utils/classNames';
import DropdownItem, { IDropdownItemProps } from './DropdownItem';

export interface IDropdownProps {
  /** children must be React Element */
  children?: ReactElement | ReactElement[];
  /** set customized css class */
  className?: string;
  /** set dropDown to be disabled */
  disabled?: boolean;
  /** set customized css style */
  cssStyle?: CSSProperties;
  /** set default string on active option */
  placeholder?: string;
  /** a callback to provide current value */
  onChange?: (val: string) => void;
}

interface PatDropdownSubComponents {
  Item: FC<IDropdownItemProps>;
}

/**
 * A dropdown allows user to select from multiple actions.
 *
 * ```js
 * import { Dropdown } from 'pat-ui'
 * ```
 */
const Dropdown: FC<IDropdownProps> & PatDropdownSubComponents = (props) => {
  const {
    className,
    children,
    cssStyle,
    placeholder,
    onChange,
    disabled,
  } = props;

  const [isOptionListOpen, setIsOptionListOpen] = useState(false);
  const [activeOption, setActiveOption] = useState(placeholder);

  const toggleOptionList = () => {
    setIsOptionListOpen(!isOptionListOpen);
  };

  const closeOptionList = () => {
    if(isOptionListOpen) {
      setIsOptionListOpen(!isOptionListOpen);
    }
  }

  const setSelected = (val: string) => {
    if (onChange) {
      onChange(val);
    }

    setActiveOption(val);
  };

  let classStyles = classNames('dropdown');
  if (isOptionListOpen) {
    classStyles = classNames('dropdown', 'open');
  }

  if (className) {
    classStyles += ` ${className}`;
  }

  return (
    <div className="dropdown__wrapper">
      <div
        className={classStyles}
        style={cssStyle}
        onClick={(e) => {
          if (disabled) {
            e.preventDefault();
          } else {
            toggleOptionList();
          }
        }}
        onBlur={() => { closeOptionList() }}
        tabIndex={0}
      >
        <div
          className={
            disabled
              ? 'dropdown__active_option disabled'
              : 'dropdown__active_option'
          }
        >
          <span>{activeOption}</span>
          <div className="arrow" />
        </div>

        <div className="dropdown__options">
          {children
            ? Children.map(children, (child: ReactElement) =>
                cloneElement(child, { setSelected })
              )
            : children}
        </div>
      </div>
    </div>
  );
};

Dropdown.Item = DropdownItem;

Dropdown.defaultProps = {
  placeholder: '',
};

export default Dropdown;
