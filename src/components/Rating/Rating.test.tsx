import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Rating from './Rating';

// Testing props
test('render correctly', () => {
  render(<Rating name='rating'/>);
  expect(screen.getByRole('radiogroup')).toBeInTheDocument();
})

describe('Props: max', () => {
  test('By default, max = 5', () => {
    render(<Rating name='rating'/>);
    const stars = screen.getAllByTestId('star-icon');
    expect(stars.length).toBe(5);
  });

  test('max should be configurable', () => {
    render(<Rating max={10} name='rating'/>);
    const stars = screen.getAllByTestId('star-icon');
    expect(stars.length).toBe(10);
  });
})

describe('Props: precision', () => {
  test('By default, precision = 1', async () => {
    render(<Rating name='rating'/>);
    const radioButtons = screen.getAllByRole('radio');
    expect(radioButtons.length).toBe(6);
  });

  test('precision should be configurable', () => {
    render(<Rating precision={0.5} name='rating'/>);
    const radioButtons = screen.getAllByRole('radio');
    expect(radioButtons.length).toBe(11);
  });
})