import React, {
  useState,
  InputHTMLAttributes,
  useEffect,
  ReactElement,
} from 'react';
import AccordionDetail from './AccordionDetail';
import AccordionHeader from './AccordionHeader';
import { classNames } from '../../utils/classNames';
import { AccordionDetailProps } from './AccordionDetail';
import { AccordionHeaderProps } from './AccordionHeader';

export type AccordionType =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'info'
  | 'default';

export interface IAccordionProps {
  children: [
    ReactElement<AccordionHeaderProps>,
    ReactElement<AccordionDetailProps>
  ];
  disabled?: boolean;
  expanded?: boolean;
  sx?: {};
  rounded?: boolean;
  onClick?: (a?: boolean) => void;
  key?: number | string;
  accordionType?: AccordionType;
}

export type bhdrProps = InputHTMLAttributes<HTMLInputElement>;
type InputArgs = IAccordionProps & Omit<bhdrProps, keyof IAccordionProps>;
function Accordion(props: InputArgs) {
  const { children, disabled, accordionType, onClick, expanded, sx, key } =
    props;

  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    setOpen(expanded as boolean);
  }, [expanded]);

  const btnOnClick = (a: boolean) => {
    if (!disabled) {
      setOpen(!a);
    }
  };

  const checkOpenorNot = () => {
    if (typeof onClick === 'function') {
      onClick?.(!open);
    }
  };
  let styleClasses = classNames('accordion-container', {
    [`acc-${accordionType}`]: true,
    disabled: !!disabled,
  });

  return (
    <div
      onClick={checkOpenorNot}
      className={`${styleClasses} ${expanded || open ? 'active' : ''}`}
      style={sx}
    >
      <AccordionHeader
        isOpen={open}
        btnOnClick={() => btnOnClick(open)}
        key={`header${key}`}
        expandedStyle={children[0]?.props['expandedStyle']}
      >
        {children[0].props.children}
      </AccordionHeader>

      <AccordionDetail
        expanded={props.expanded}
        isOpen={open}
        key={`detail${key}`}
      >
        {children[1].props.children}
      </AccordionDetail>
    </div>
  );
}

export default Accordion;
