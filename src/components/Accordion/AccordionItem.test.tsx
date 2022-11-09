import { render, screen } from '@testing-library/react';
import React from 'react';
import AccordionItem from './AccordionItem';

describe('<AccordionItem />', () => {
  it('accordion item should render content', () => {
    const title = 'Accordion header 1';
    const content = 'Accordion content 1';
    const disabled = false;

    render(
      <AccordionItem
        data={{ title, content, disabled }}
        isOpen={true}
        btnOnClick={jest.fn()}
        expansionType="basic"
        optionalStyles={{}}
        expandIcon={''}
      />
    );

    const titleEl = screen.queryByText(title);
    const contentEl = screen.queryByText(content);

    expect(titleEl).toBeInTheDocument();
    expect(contentEl).toBeInTheDocument();
  });

  it('basic accordion should not display content if isOpen is false', () => {
    const title = 'Accordion header 1';
    const content = 'Accordion content 1';
    const disabled = false;

    render(
      <AccordionItem
        data={{
          title,
          content,
          disabled,
        }}
        isOpen={false}
        btnOnClick={jest.fn()}
        expansionType="basic"
        optionalStyles={{}}
        expandIcon={''}
      />
    );

    const titleEl = screen.queryByText(title);
    const listEl = titleEl?.closest('li');

    expect(listEl).not.toHaveClass('active');
  });

  it('basic accordion should display content if isOpen is true', () => {
    const title = 'Accordion header 1';
    const content = 'Accordion content 1';
    const disabled = false;

    render(
      <AccordionItem
        data={{
          title,
          content,
          disabled,
        }}
        isOpen={true}
        btnOnClick={jest.fn()}
        expansionType="basic"
        optionalStyles={{}}
        expandIcon={''}
      />
    );

    const titleEl = screen.queryByText(title);
    const listEl = titleEl?.closest('li');

    expect(listEl).toHaveClass('active');
  });

  it('controlled accordion should not display content if open is false', () => {
    const title = 'Accordion header 1';
    const content = 'Accordion content 1';
    const disabled = false;

    render(
      <AccordionItem
        data={{
          title,
          content,
          disabled,
        }}
        isOpen={false}
        btnOnClick={jest.fn()}
        expansionType="controlled"
        optionalStyles={{}}
        expandIcon={''}
      />
    );

    const titleEl = screen.queryByText(title);
    const listEl = titleEl?.closest('li');

    expect(listEl).not.toHaveClass('active');
  });

  it('controlled accordion should display content if open is true', () => {
    const title = 'Accordion header 1';
    const content = 'Accordion content 1';
    const disabled = false;

    render(
      <AccordionItem
        data={{
          title,
          content,
          disabled,
        }}
        isOpen={true}
        btnOnClick={jest.fn()}
        expansionType="controlled"
        optionalStyles={{}}
        expandIcon={''}
      />
    );

    const titleEl = screen.queryByText(title);
    const listEl = titleEl?.closest('li');

    expect(listEl).toHaveClass('active');
  });
});
