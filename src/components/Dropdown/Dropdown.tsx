import React, {
  FC,
  CSSProperties,
  useState,
  Children,
  ReactElement,
  cloneElement,
  ReactNode,
} from 'react';
import { IDropdownOptionProps } from './DropdownOption';

export interface IDropdownProps {
  /** children must be React Element */
  children?: | ReactElement<IDropdownOptionProps> | ReactElement<IDropdownOptionProps>[];
  /** set customized css class */
  className?: string;
  /** set dropDown to be disabled */
  disabled?: boolean;
  /** set customized css style */
  style?: CSSProperties;
  /** set default string on active option */
  placeholder?: string;
  /** a callback to provide current value */
  onChange?: (val: any) => void;
}

/**
 * A dropdown allows user to select from multiple actions.
 *
 * ```js
 * import { Dropdown } from 'pat-ui'
 * ```
 */
const Dropdown: FC<IDropdownProps> = (props) => {
  const { className, children, style, placeholder, onChange, disabled } = props;

  const [isOptionListOpen, setIsOptionListOpen] = useState(false);

  // Check if there is an active option among children
  let activeOption: ReactNode = undefined;
  if (children) {
    Children.forEach(children, (child: ReactElement<IDropdownOptionProps>) => {
      // set activeOption if active is set to true
      const { active } = child.props;
      const childChildren = child.props.children;

      if (active) {
        activeOption = childChildren;
      }
    });
  }

  // if no active child is set, then use the placeholder
  const [currActiveOption, setCurrActiveOption] = useState(
    activeOption ? activeOption : (placeholder as ReactNode)
  );

  const toggleOptionList = () => {
    setIsOptionListOpen(!isOptionListOpen);
  };

  const closeOptionList = () => {
    if (isOptionListOpen) {
      setIsOptionListOpen(!isOptionListOpen);
    }
  };

  const setSelected = (val: any, innerChild: ReactNode) => {
    // trigger callback function
    if (onChange) {
      onChange(val);
    }

    setCurrActiveOption(innerChild);
  };

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
          <div className="dropdown__active_option__inner">
            {currActiveOption}
          </div>
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

Dropdown.defaultProps = {
  placeholder: '',
};

export default Dropdown;
