import React, {
  FC,
  CSSProperties,
  useState,
  Children,
  ReactElement,
  cloneElement,
  ReactNode,
} from 'react';
import { classNames } from '../../utils/classNames';
import DropdownOption from './DropdownOption';

export interface IDropdownProps {
  /** children must be React Element */
  children?: ReactElement | ReactElement[];
  /** set customized css class */
  className?: string;
  /** set dropDown to be disabled */
  disabled?: boolean;
  /** set customized css style */
  style?: CSSProperties;
  /** set default string on active option */
  placeholder?: string;
  /** a callback to provide current value */
  onChange?: (val: string) => void;
}

interface PatDropdownSubComponents {
  Option: typeof DropdownOption;
}

/**
 * A dropdown allows user to select from multiple actions.
 *
 * ```js
 * import { Dropdown } from 'pat-ui'
 * ```
 */
const Dropdown: FC<IDropdownProps> & PatDropdownSubComponents = (props) => {
  const { className, children, style, placeholder, onChange, disabled } = props;

  const [isOptionListOpen, setIsOptionListOpen] = useState(false);
  const [activeOption, setActiveOption] = useState(placeholder as ReactNode);

  const toggleOptionList = () => {
    setIsOptionListOpen(!isOptionListOpen);
  };

  const closeOptionList = () => {
    if (isOptionListOpen) {
      setIsOptionListOpen(!isOptionListOpen);
    }
  };

  const setSelected = (val: string, innerChild: ReactNode) => {
    // trigger callback function
    if (onChange) {
      onChange(val);
    }

    setActiveOption(innerChild);
  };

  let classStyles = classNames('dropdown');
  if (isOptionListOpen) {
    classStyles = classNames('dropdown', 'open');
  }

  return (
    <div
      className={
        className ? `dropdown__wrapper ${className}` : 'dropdown__wrapper'
      }
      style={style}
    >
      <div
        className={isOptionListOpen ? 'dropdown open' : 'dropdown'}
        onClick={(e) => {
          if (disabled) {
            e.preventDefault();
          } else {
            toggleOptionList();
          }
        }}
        onBlur={() => {
          closeOptionList();
        }}
        tabIndex={0}
      >
        <div
          className={
            disabled
              ? 'dropdown__active_option disabled'
              : 'dropdown__active_option'
          }
        >
          <div className="dropdown__active_option__inner">{activeOption}</div>
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

Dropdown.Option = DropdownOption;

Dropdown.defaultProps = {
  placeholder: '',
};

export default Dropdown;
