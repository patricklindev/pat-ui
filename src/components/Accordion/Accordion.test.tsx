import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Accordion, { patAccordionProps } from './Accordion';

describe('Accordion', () => {

  it('should render default Accordion', () => {
    const accordionProps: patAccordionProps = {
      header: "test default",
    };
    const wrapper = render(<Accordion {...accordionProps}></Accordion>);
    const accordionElement = screen.getByTestId('accordion-element');
    expect(accordionElement).toHaveClass('accordion-card-retracted');
  });

  it('should render expanded Accordion', () => {
    const accordionProps: patAccordionProps = {
      header: "test default",
      expanded: true,
    };
    const wrapper = render(<Accordion {...accordionProps}></Accordion>);
    const accordionElement = screen.getByTestId('accordion-element');
    expect(accordionElement).toHaveClass('accordion-card-expanded');
  });

  it('should render accordion with different props', () => {
    const accordionProps: patAccordionProps = {
      header: "different props",
      headerClassName: "test-header",
      titleClassName: "test-title",
    };
    const wrapper = render(<Accordion {...accordionProps}></Accordion>);
    const accordionElement = wrapper.queryByText('different props');
    expect(accordionElement).toBeInTheDocument();
    const Element = screen.getByTestId('accordion-header');
    expect(Element).toHaveClass('test-header');
  });

  it('should render disabled accordion', () => {
    const accordionProps: patAccordionProps = {
      header: "different props",
      headerClassName: "test-header",
      titleClassName: "test-title",
      disabled: true
    };
    const wrapper = render(<Accordion {...accordionProps}></Accordion>);
    const Element = screen.getByTestId('accordion-element-disabled');
    expect(Element).toHaveClass('accordion-card-disabled');
  });

  it('should render clickable accordion', () => {
    const accordionProps: patAccordionProps = {
      header: "different props",
      onChange: jest.fn(),
    };
    const wrapper = render(<Accordion {...accordionProps}></Accordion>);
    const Element = screen.getByTestId('accordion-header');
    expect(Element.tagName).toBe('DIV');
    expect(accordionProps.onChange).toHaveBeenCalledTimes(0);
    fireEvent.click(Element);
    expect(accordionProps.onChange).toHaveBeenCalledTimes(1);
  });

  // it('should render image with correct source', () => {
  //   const cardProps = {
  //     cardImgSrc: 'png',
  //   };
  //   const wrapper = render(<Card {...cardProps}></Card>);
  //   const imageElement = screen.getByTestId('image-element');
  //   expect(imageElement.tagName).toBe('IMG');
  //   expect(imageElement.getAttribute('src')).toBe('png');
  // });
});
