import { FC } from 'react';
import Accordion, { IAccordionProps } from './Accordion';
import AccordionDetail, { AccordionDetailProps } from './AccordionDetail';
import AccordionHeader, { AccordionHeaderProps } from './AccordionHeader';

export type PatAccordionComponent = FC<IAccordionProps> & {
  Header: FC<AccordionHeaderProps>;
  Detail: FC<AccordionDetailProps>;
};

const TransAccordion = Accordion as PatAccordionComponent;

TransAccordion.Header = AccordionHeader;
TransAccordion.Detail = AccordionDetail;

export default TransAccordion;
