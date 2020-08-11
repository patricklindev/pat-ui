import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Card, { patCardProps } from './Card';
describe('Card', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Card> Snapshot Card </Card>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render default card', () => {
    const cardProps: patCardProps = {
      btnOnClick: jest.fn(),
    };
    const wrapper = render(<Card {...cardProps}></Card>);
    const cardElement = screen.getByTestId('card-element');
    expect(cardElement).toHaveClass('card card-default');
  });
  it('should render card with different props', () => {
    const cardProps: patCardProps = {
      cardTheme: 'dark',
      cardTitle: 'Dark Card',
      cardSize: 'sm',
      cardType: 'circledImage',
      cardMode: 'horizontal',
      className: 'test',
    };
    const wrapper = render(<Card {...cardProps}></Card>);
    const cardElement = wrapper.queryByText('Dark Card');
    expect(cardElement).toBeInTheDocument();
    const Element = screen.getByTestId('card-element');
    expect(Element).toHaveClass('card card-horizontal card-dark card-sm test');
  });

  it('should render button can be clicked', () => {
    const cardProps = {
      buttonTitle: 'title',
      btnOnClick: jest.fn(),
    };
    //test button
    const wrapper = render(<Card {...cardProps}></Card>);
    const buttonElement = screen.getByTestId('button-element');
    expect(buttonElement.tagName).toBe('BUTTON');
    expect(buttonElement).toHaveTextContent('title');
    expect(cardProps.btnOnClick).toHaveBeenCalledTimes(0);
    fireEvent.click(buttonElement);
    expect(cardProps.btnOnClick).toHaveBeenCalledTimes(1);
  });
  it('should render image with correct source', () => {
    const cardProps = {
      cardImgSrc: 'png',
    };
    const wrapper = render(<Card {...cardProps}></Card>);
    const imageElement = screen.getByTestId('image-element');
    expect(imageElement.tagName).toBe('IMG');
    expect(imageElement.getAttribute('src')).toBe('png');
  });
});
