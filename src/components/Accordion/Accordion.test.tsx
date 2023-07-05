import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import Accordion from './Accordion';

describe('Accordion', () => {
  it('test information', () => {
    render(
      <Accordion expanded title="Expansion Panel">
        Test Expansion Panel
      </Accordion>
    );
    const accordionElement = screen.getByTestId('accordion-element');
    // Test the props
    expect(accordionElement).toHaveTextContent('Expansion Panel'); // Test if the 'title' prop is passed
    // Test the children
    const accordionContent = screen.getByText('Test Expansion Panel');
    expect(accordionContent).toBeInTheDocument(); // Test if the children content is rendered
  });

  test('Accordion expands and retracts when title is clicked', () => {
    render(<Accordion title="Accordion title">Accordion content</Accordion>);

    const titleButton = screen.getByRole('button', {
      name: /Accordion title/i,
    });
    const contentElement = screen.getByText(/Accordion content/i);
    expect(contentElement).toHaveClass('hidden');
    fireEvent.click(titleButton);
    expect(contentElement).not.toHaveClass('hidden');
    fireEvent.click(titleButton);
    expect(contentElement).toHaveClass('hidden');
  });

  describe('Developers can control the expand/retract state of the component from props', () => {
    test('initial state is expanded', () => {
      render(
        <Accordion expanded={true} title="Accordion title">
          Accordion content
        </Accordion>
      );
      let contentElement = screen.getByText(/Accordion content/i);
      expect(contentElement).not.toHaveClass('hidden');
      expect(contentElement).toHaveClass('accordion-description');
    });

    test('initial state is retracted', () => {
      render(
        <Accordion expanded={false} title="Accordion title">
          Accordion content
        </Accordion>
      );
      let contentElement = screen.getByText(/Accordion content/i);
      expect(contentElement).toHaveClass('accordion-description hidden');
    });
  });

  test('Developers can listen to the expand/retract change of the component by providing the onChange callback function', () => {
    const mockOnChange = jest.fn();

    render(
      <Accordion
        expanded={false}
        title="Accordion title"
        onChange={mockOnChange}
      >
        Accordion content
      </Accordion>
    );
    const titleButton = screen.getByRole('button', {
      name: /Accordion title/i,
    });
    fireEvent.click(titleButton);
    expect(mockOnChange).toBeCalledTimes(1);
    fireEvent.click(titleButton);
    expect(mockOnChange).toBeCalledTimes(2);
  });
});
