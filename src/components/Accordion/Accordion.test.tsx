import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Accordion from './Accordion';

describe('<Accordion />', () => {
  it('basic accordion should render items', () => {
    const items = [];

    for (let i = 0; i < 3; i++) {
      items.push({
        title: `Accordion header ${i}`,
        content: `Accordion content ${i}`,
        disabled: false,
      });
    }

    render(<Accordion items={items} expansionType={'basic'} />);

    items.forEach(({ title, content }) => {
      const titleEl = screen.queryByText(title);
      const contentEl = screen.queryByText(content);

      expect(titleEl).toBeInTheDocument();
      expect(contentEl).toBeInTheDocument();
    });
  });

  it('controlled accordion should render items', () => {
    const items = [];

    for (let i = 0; i < 3; i++) {
      items.push({
        title: `Accordion header ${i}`,
        content: `Accordion content body ${i}`,
        disabled: false,
      });
    }

    render(<Accordion items={items} expansionType={'controlled'} />);

    items.forEach(({ title, content }) => {
      const titleEl = screen.queryByText(title);
      const contentEl = screen.queryByText(content);

      expect(titleEl).toBeInTheDocument();
      expect(contentEl).toBeInTheDocument();
    });
  });

  it('basic accordion should open one at a time', () => {
    const items = [];

    for (let i = 0; i < 3; i++) {
      items.push({
        title: `Accordion header ${i}`,
        content: `Accordion content ${i}`,
        disabled: false,
      });
    }

    render(<Accordion items={items} expansionType={'basic'} />);

    items.forEach(({ title }) => {
      const titleEl = screen.queryByText(title) as HTMLButtonElement;

      fireEvent.click(titleEl);

      const currentListEl = titleEl.closest('li');
      const activeListEls = document.querySelectorAll('li.active');
      const activeListEl = activeListEls[0];

      expect(activeListEls.length).toBe(1);
      expect(activeListEl).toEqual(currentListEl);
    });
  });

  it('controlled accordion should allow multiple open at a time', () => {
    const items = [];

    for (let i = 0; i < 3; i++) {
      items.push({
        title: `Accordion header ${i}`,
        content: `Accordion content ${i}`,
        disabled: false,
      });
    }

    render(<Accordion items={items} expansionType={'controlled'} />);

    items.forEach(({ title }, index) => {
      const titleEl = screen.queryByText(title) as HTMLButtonElement;
      fireEvent.click(titleEl);
    });
    const activeListEls = document.querySelectorAll('li.active');
    expect(activeListEls.length).toBe(items.length);
  });

  it('should close item if already opened', () => {
    const items = [];

    for (let i = 0; i < 3; i++) {
      items.push({
        title: `Accordion header ${i}`,
        content: `Accordion content ${i}`,
        disabled: false,
      });
    }

    render(<Accordion items={items} expansionType={'basic'} />);

    items.forEach(({ title }) => {
      const titleEl = screen.queryByText(title) as HTMLButtonElement;

      fireEvent.click(titleEl);
      fireEvent.click(titleEl);

      const currentListEl = titleEl.closest('li');

      expect(currentListEl).not.toHaveClass('active');
    });
  });

  it('should not allow clicks if button is disabled', () => {
    const items = [];

    for (let i = 0; i < 3; i++) {
      items.push({
        title: `Accordion header ${i}`,
        content: `Accordion content ${i}`,
        disabled: true,
      });
    }

    render(<Accordion items={items} expansionType={'basic'} />);

    items.forEach(({ title }) => {
      const titleEl = screen.queryByText(title) as HTMLButtonElement;

      fireEvent.click(titleEl);

      const currentListEl = titleEl.closest('li');

      expect(currentListEl).not.toHaveClass('active');
    });
  });

  it('accordion should allow custom image source', () => {
    const items = [];

    for (let i = 0; i < 1; i++) {
      items.push({
        title: `Accordion header ${i}`,
        content: `Accordion content ${i}`,
        disabled: true,
      });
    }

    render(
      <Accordion
        items={items}
        expandIcon={
          'https://images.emojiterra.com/google/android-11/512px/263a.png'
        }
      />
    );

    const customImage = document.querySelector('img') as HTMLImageElement;
    expect(customImage).toHaveAttribute(
      'src',
      'https://images.emojiterra.com/google/android-11/512px/263a.png'
    );
  });

  it('accordion should allow custom styles (lightgreen background)', () => {
    const items = [];

    for (let i = 0; i < 3; i++) {
      items.push({
        title: `Accordion header ${i}`,
        content: `Accordion content ${i}`,
        disabled: true,
      });
    }

    render(
      <Accordion
        items={items}
        optionalStyles={{
          backgroundColor: 'lightgreen',
        }}
      />
    );

    items.forEach(({ title }) => {
      const titleEl = screen.queryByText(title) as HTMLButtonElement;

      expect(titleEl).toHaveStyle('background-color: lightgreen');
    });
  });
});
