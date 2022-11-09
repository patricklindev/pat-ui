import { ReactNode } from 'react';

export type AccordionData = {
  id: number;
  title: string;
  subTitle: string;
  png: ReactNode;
  content: ReactNode;
};
