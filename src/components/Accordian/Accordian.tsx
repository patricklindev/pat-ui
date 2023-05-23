
import { FC, MouseEvent, SyntheticEvent, useState } from 'react';
import { classNames } from '../../utils/classNames';
import React from 'react';

import PropTypes from 'prop-types';

//props type
export interface AccordionProps {
    /** The title of the accordion */
    title: string;
    /** The subtitle of the accordion */
    subTitle?: string;
    /** Whether the accordion is disabled or not */
    disabled?: boolean;
     /** Whether the accordion is open or not */
    isOpen?: boolean;
    /** Callback function triggered when the accordion is toggled */
    panelId?: string;
    /** Callback function triggered when the accordion is toggled */
    children: React.ReactNode;
    /** Callback function triggered when the accordion is toggled */
    onPanelChange?: (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => void;
}

const Accordion: FC<AccordionProps> = ({ 
  title, 
  subTitle,
  disabled, 
  isOpen: controlledIsOpen, 
  onPanelChange, 
  panelId, 
  children 
}) => {
  const [uncontrolledIsOpen, setUncontrolledIsOpen] = useState(false);

  const isOpen = controlledIsOpen ?? uncontrolledIsOpen;

  const handleToggle = (e: MouseEvent) => {
    e.preventDefault();

    if (disabled) {
      return;
    }

    if (onPanelChange) {
      onPanelChange(panelId)(e, !isOpen);
    } else {
      setUncontrolledIsOpen(!isOpen);
    }
  };

  let styleClasses = classNames('accordion', {
    'active': isOpen,
    'disabled': disabled,
  });

  return (
    <div className={styleClasses} onClick={handleToggle}>
        <div className = "accordion-header">
            <h1 className="accordion-title">{title}</h1>
            <p className="accordion-subTitle">{subTitle}</p>
        </div>
        <div className="accordion-icon"></div>
        <div className="accordion-content" style={{ display: isOpen ? 'block' : 'none' }}>
        {children}
        </div>
    </div>
  );
};

Accordion.propTypes = {
    /** The title of the accordion */
    title: PropTypes.string.isRequired,
    /** The subtitle of the accordion */
    subTitle: PropTypes.string,
    /** Whether the accordion is disabled or not */
    disabled: PropTypes.bool,
    /** Whether the accordion is open or not */
    isOpen: PropTypes.bool,
    /** Callback function triggered when the accordion is toggled */
    panelId: PropTypes.string,
    /** Callback function triggered when the accordion is toggled */
    onPanelChange: PropTypes.func,
  };

export default Accordion;
