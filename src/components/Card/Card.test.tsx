import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import Card, { CardType, CardSize } from './Card';
describe('Card', () => {
  it('should render default card', () => {
    const cardProps = {
      //   onClick: jest.fn()
      cardType: CardType.Dark,
    };
    const wrapper = render(<Card {...cardProps}>Dark Card</Card>);
    const element = wrapper.queryByText('Dark Card') as HTMLElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('H5');
    const cardElement = wrapper.container.firstChild;
    expect(cardElement).toHaveClass('card card-dark');
    // expect(cardProps.onClick).toHaveBeenCalledTimes(0);
    // fireEvent.click(element);
    // expect(cardProps.onClick).toHaveBeenCalledTimes(1);
  });
});
