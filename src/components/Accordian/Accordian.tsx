
import * as React from 'react';
import { classNames } from '../../utils/classNames';


interface IAccordionProps {
    /** set the title of the accordion */
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
    onPanelChange?: (panelId: string) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
}

// type DivAccordionProps = IAccordionProps & React.HTMLAttributes<React.HTMLDivElement>;
export type AccordionProps = React.PropsWithChildren<IAccordionProps> & React.HTMLAttributes<HTMLDivElement>;

export const Accordion: React.FC<AccordionProps> = (props) => { 
    const { title, subTitle, disabled, isOpen: controlledIsOpen, onPanelChange, panelId, children } = props;
    const [uncontrolledIsOpen, setUncontrolledIsOpen] = React.useState(false);
  
    const isOpen = controlledIsOpen ?? uncontrolledIsOpen;
  
    const handleToggle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault();
  
      if (disabled) {
        console.log('Clicked - accordion is disabled');
        return;
      }

      if (isOpen) {
        console.log('Clicked - close the accordion');
      } else {
        console.log('Clicked - open the accordion');
      }
  
      if (onPanelChange && panelId) {
        onPanelChange(panelId)(e, !isOpen);
        
      } else {
        setUncontrolledIsOpen(!isOpen);
      }
    };
  
    let styleClasses = classNames('accordion', {
      'active': isOpen,
      'disabled': disabled ?? false,
    });
  
    return (
      <>
        <div className={styleClasses} onClick={handleToggle}>
          <div className="accordion-header">
            <h1 className="accordion-title">{title}</h1>
            <p className="accordion-subTitle">{subTitle}</p>
          </div>
          <div className="accordion-icon"></div>
        </div>
        <div className="content" 
        style={{ display: isOpen ? 'block' : 'none',
        
        }}>
          {children}
        </div>
      </>
    );
  };

  export default Accordion;


 