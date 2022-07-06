import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Rating, { IRatingProps } from './Rating';

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
    const iconProps: IRatingProps = {
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
    const iconProps: IRatingProps = {
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

  it('should be able to set the precision of the rating component', () => {
    const iconProps: IRatingProps = {
      half: true,
      defaultRating: 3.5,
    };
    const { getAllByRole } = render(<Rating {...iconProps} />);
    const allIcons = getAllByRole('button');
    const indexOfHalfStar = (iconProps.defaultRating as number) - 0.5;
    expect(allIcons.length).toBe(5);
    // all the child elements should in the document
    for (let i = 0; i < allIcons.length; i++) {
      expect(allIcons[i]).toBeInTheDocument();
    }

    if (iconProps.defaultRating) {
      //  all the stars should be full star before the indexOfHalfStar
      for (let i = 0; i < iconProps.defaultRating; i++) {
        expect(allIcons[i].firstElementChild as HTMLElement).toHaveClass(
          'icon medium orange star rating-icon'
        );
      }
    }
    // the star at indexOfHalfStar should be half star
    expect(
      allIcons[indexOfHalfStar].firstElementChild as HTMLElement
    ).toHaveClass('icon medium orange star half rating-icon');
  });

  it('should choose sizes of the rating component among various predefined options from props ', () => {
    const iconProps: IRatingProps = {
      size: 'large',
    };
    const { getAllByRole } = render(<Rating {...iconProps} />);
    const allIcons = getAllByRole('button');
    expect(allIcons.length).toBe(5);
    // all the child elements should in the document
    for (let i = 0; i < allIcons.length; i++) {
      expect(allIcons[i]).toBeInTheDocument();
    }
    expect(allIcons[3].firstElementChild as HTMLElement).toHaveClass(
      'icon large grey star regular rating-icon'
    );
    fireEvent.mouseMove(allIcons[3]);
    expect(allIcons[3].firstElementChild as HTMLElement).toHaveClass(
      'icon big orange star rating-icon'
    );
  });

  it('should decide the number of stars in total from props ', () => {
    const iconProps: IRatingProps = {
      ratingCount: 15,
    };
    const { getAllByRole } = render(<Rating {...iconProps} />);
    const allIcons = getAllByRole('button');
    expect(allIcons.length).toBe(iconProps.ratingCount);
    // all the child elements should in the document
    for (let i = 0; i < allIcons.length; i++) {
      expect(allIcons[i]).toBeInTheDocument();
    }
  });

  it('should be able to control the value of the rating from outside of the component by providing a prop.  ', () => {
    const iconProps: IRatingProps = {
      defaultRating: 3,
    };
    const { getAllByRole } = render(<Rating {...iconProps} />);
    const allIcons = getAllByRole('button');
    expect(allIcons.length).toBe(5);
    // all the child elements should in the document
    for (let i = 0; i < allIcons.length; i++) {
      expect(allIcons[i]).toBeInTheDocument();
    }
    // the index of stars less than defaultRating should be turned to orange
    if (iconProps.defaultRating) {
      for (let i = 0; i < iconProps.defaultRating; i++) {
        expect(allIcons[i].firstElementChild as HTMLElement).toHaveClass(
          'icon medium orange star rating-icon'
        );
      }
    }
  });

  it('should be able to listen to the change of the value of the component from outside of the component by providing the onChange callback function as a prop', () => {
    const iconProps: IRatingProps = {
      onChange: jest.fn(),
    };
    const { getAllByRole } = render(<Rating {...iconProps} />);
    const allIcons = getAllByRole('button');
    expect(allIcons.length).toBe(5);
    // all the child elements should in the document
    for (let i = 0; i < allIcons.length; i++) {
      expect(allIcons[i]).toBeInTheDocument();
    }
    expect(iconProps.onChange).toHaveBeenCalledTimes(0);
    fireEvent.click(allIcons[4]);
    expect(iconProps.onChange).toHaveBeenCalledTimes(1);
  });
});
