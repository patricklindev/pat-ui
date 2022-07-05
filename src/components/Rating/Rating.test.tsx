import Rating from './Rating';
import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';

describe('Rating', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Rating></Rating>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should be able to preview the rating by hovering on the stars', () => {
    const { getAllByRole } = render(<Rating />);
    const allIcons = getAllByRole('button');
    expect(allIcons.length).toBe(5);
    expect(
      (allIcons[2].firstElementChild as HTMLElement).getAttribute('height')
    ).toBe('28');
    expect(
      (allIcons[2].firstElementChild as HTMLElement).getAttribute('class')
    ).toBe('icon medium grey star regular rating-icon');
    fireEvent.mouseMove(allIcons[2]);
    expect(
      (allIcons[2].firstElementChild as HTMLElement).getAttribute('height')
    ).toBe('42');
    expect(
      (allIcons[2].firstElementChild as HTMLElement).getAttribute('class')
    ).toBe('icon large orange star rating-icon');
  });

  it('should be able to disable the component from props ', () => {
    fail('it needs to be done');
  });

  it('should be able to provide the label of the component from props  ', () => {
    fail('it needs to be done');
  });
});
