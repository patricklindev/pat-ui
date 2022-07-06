import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Rating from './Rating';

describe('Rating', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Rating></Rating>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should be able to preview the rating by hovering on the stars', () => {
    const { getAllByRole } = render(<Rating />);
    const allIcons = getAllByRole('button');
    expect(allIcons.length).toBe(5);
    // all the child elements should in the document
    for (let i = 0; i < allIcons.length; i++) {
      expect(allIcons[i]).toBeInTheDocument();
    }
    // svg child elements should have height and class before hovering
    expect(
      (allIcons[2].firstElementChild as HTMLElement).getAttribute('height')
    ).toBe('28');
    expect(allIcons[2].firstElementChild as HTMLElement).toHaveClass(
      'icon medium grey star regular rating-icon'
    );
    fireEvent.mouseMove(allIcons[2]);
    // svg child element should have height and class after hovering
    expect(
      (allIcons[2].firstElementChild as HTMLElement).getAttribute('height')
    ).toBe('42');
    expect(allIcons[2].firstElementChild as HTMLElement).toHaveClass(
      'icon large orange star rating-icon'
    );
  });

  it('should be able to disable the component from props ', () => {
    const iconProps = {
      disabled: true,
    };
    const { getAllByRole } = render(<Rating {...iconProps} />);
    const allIcons = getAllByRole('button');
    expect(allIcons.length).toBe(5);
    // all the child elements should in the document
    for (let i = 0; i < allIcons.length; i++) {
      expect(allIcons[i]).toBeInTheDocument();
    }
    // div icon-containers should have disabled class
    for (let i = 0; i < allIcons.length; i++) {
      expect(allIcons[i]).toHaveClass('disabled');
    }
    //svg child elements should have disabled class
    for (let i = 0; i < allIcons.length; i++) {
      expect(allIcons[i].firstElementChild as HTMLElement).toHaveClass(
        'disabled'
      );
    }
  });

  it('should be able to provide the label of the component from props  ', () => {
    const iconProps = {
      isLabel: true,
    };
    const { getByRole } = render(<Rating {...iconProps} />);
    const allIconsContainer = getByRole('group');
    expect(allIconsContainer).toBeInTheDocument();
    // if isLabel is true last child of container should have label tag
    expect((allIconsContainer.lastElementChild as HTMLElement).tagName).toBe(
      'LABEL'
    );
  });

  // it('should be able to set the precision of the rating component', () => {
  //   const iconProps = {
  //     half: true,
  //   };
  //   const { getAllByRole } = render(<Rating {...iconProps} />);
  //   const allIcons = getAllByRole('button');
  // });
});
