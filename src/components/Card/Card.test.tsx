import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Card, { CardType, CardSize } from './Card';
describe('Card', () => {
  it('should render default card', () => {
    const cardProps = {
      onClick: jest.fn(),
    };
    const wrapper = render(<Card {...cardProps}></Card>);
    const cardElement = screen.getByTestId('card-element');
    expect(cardElement).toHaveClass('card card-default');
  });
  it('should render dark card with correct title', () => {
    const cardProps = {
      cardType: CardType.Dark,
      onClick: jest.fn(),
    };
    const wrapper = render(<Card {...cardProps}>Dark Card</Card>);
    //test h5 title
    const titleElement = wrapper.queryByText('Dark Card') as HTMLElement;
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe('H5');
    //test class name
    const cardElement = screen.getByTestId('card-element');
    expect(cardElement).toHaveClass('card card-dark');
  });
  it('should render small size card', () => {
    const cardProps = {
      cardSize: CardSize.Small,
      onClick: jest.fn(),
    };
    const wrapper = render(<Card {...cardProps}>Small Card</Card>);
    const cardElement = screen.getByTestId('card-element');
    expect(cardElement).toHaveClass('card card-default card-sm');
  });
  it('should render button can be clicked', () => {
    const cardProps = {
      onClick: jest.fn(),
    };
    //test button
    const wrapper = render(<Card {...cardProps}></Card>);
    const buttonElement = screen.getByTestId('button-element');
    expect(buttonElement.tagName).toBe('BUTTON');
    expect(cardProps.onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(buttonElement);
    expect(cardProps.onClick).toHaveBeenCalledTimes(1);
  });
});
