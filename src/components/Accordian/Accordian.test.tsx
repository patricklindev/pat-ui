import "@testing-library/jest-dom/extend-expect";
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Accordion, { AccordionProps } from './Accordian';

describe('Accordion', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Accordion title="Snapshot Accordion">Snapshot Content</Accordion>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render accordion with given title and content', () => {
    const accordionProps: AccordionProps = {
      title: 'Test Accordion',
      children: <div>Some child component</div>
    };
    const wrapper = render(<Accordion {...accordionProps}>Test Content</Accordion>);
    const titleElement = wrapper.queryByText('Test Accordion') as HTMLElement;
    const contentElement = wrapper.queryByText('Test Content') as HTMLElement;
    expect(titleElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
    expect(contentElement).not.toBeVisible();

    //click
    fireEvent.click(titleElement);
    expect(contentElement).toBeVisible();

    //2nd click
    fireEvent.click(titleElement);
    expect(contentElement).not.toBeVisible();
  });
});
