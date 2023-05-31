
import * as React from 'react';
import { classNames } from '../../utils/classNames';
import { action } from '@storybook/addon-actions';
import Icon from '../Icon';


interface IAccordionProps {
    /** set the title of the accordion */
    title: string;
    /** The subtitle of the accordion */
    subTitle?: string;
    /** Whether the accordion is disabled or not */
    disabled?: boolean;
    /** A custom expand icon*/ 
    expandIcon?: React.ReactNode;
     /** Whether the accordion is open or not */
    isOpen?: boolean;
    /** Callback function triggered when the accordion is toggled */
    panelId?: string;
    /** Callback function triggered when the accordion is toggled */
    children: React.ReactNode;
    /** Callback function triggered when the accordion is toggled */
    onPanelChange?: (panelId: string) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
}

// type DivAccordionProps = IAccordionProps & React.HTMLAttributes<React.HTMLDivElement>;
export type AccordionProps = React.PropsWithChildren<IAccordionProps> & React.HTMLAttributes<HTMLDivElement>;

export const Accordion: React.FC<AccordionProps> = (props) => { 
    const { title, subTitle, disabled, isOpen: controlledIsOpen, onPanelChange, panelId, expandIcon,children } = props;
    const [uncontrolledIsOpen, setUncontrolledIsOpen] = React.useState(false);
  
    const isOpen = controlledIsOpen ?? uncontrolledIsOpen;
  
    const handleToggle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault();
  
      if (disabled) {
        action('button-click')('clicked - accordion is disabled')
        // console.log('Clicked - accordion is disabled');
        return;
      }

      if (isOpen) {
        action('button-click')('clicked - close the accordion')
        // console.log('Clicked - close the accordion');
      } else {
        action('button-click')('clicked - open the accordion')
        // console.log('Clicked - open the accordion');
      }
  
      if (onPanelChange && panelId) {
        onPanelChange(panelId)(e, !isOpen);
        // action('button')('clicked')
        
      } else {
        setUncontrolledIsOpen(!isOpen);
      }
    };
  
    let styleClasses = classNames('accordion', {
      'active': isOpen,
      'disabled': disabled ?? false,
    });
  
    return (
        <div className={styleClasses} onClick={handleToggle}>
          <div className="accordion-header">
            <h1 className="accordion-title">{title}</h1>
            <p className="accordion-subTitle">{subTitle}</p>
          </div>

          <div className="accordion-icon">{expandIcon}</div>
          <div className="content" style={{ maxHeight : isOpen ? '500px' : '0px'}}>
                {children}
            </div>

        </div>

    );
  };

  export default Accordion;


 