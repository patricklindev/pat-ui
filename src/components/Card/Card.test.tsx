import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Card, { myCardProps } from './Card';
describe('Card', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Card> Snapshot Card </Card>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render default card', () => {
    const cardProps = {
      onClick: jest.fn(),
    };
    const wrapper = render(<Card {...cardProps}></Card>);
    const cardElement = screen.getByTestId('card-element');
    expect(cardElement).toHaveClass('card card-default');
  });
  it('should render dark card with correct title', () => {
    const cardProps: myCardProps = {
      cardTheme: 'dark',
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
  it('should render card on different props', () => {
    const cardProps: myCardProps = {
      cardSize: 'lg',
      cardType: 'noImage',
      className: 'test',
    };
    const wrapper = render(<Card {...cardProps}>noImage Card</Card>);
    //test h5 title
    const titleElement = wrapper.queryByText('noImage Card') as HTMLElement;
    expect(titleElement).toBeInTheDocument();
    //test class name
    const cardElement = screen.getByTestId('card-body-element');
    expect(cardElement).toHaveClass('card card-noImage card-lg body test');
    const cardBodyElement = screen.getByTestId('card-image-element');
    expect(cardBodyElement).toHaveClass('card card-noImage card-lg image test');
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
  it('should render image with correct source', () => {
    const cardProps = {
      src: 'png',
    };
    const wrapper = render(<Card {...cardProps}></Card>);
    const imageElement = screen.getByTestId('image-element');
    expect(imageElement.tagName).toBe('IMG');
    expect(imageElement.getAttribute('src')).toBe('png');
  });
});
