import React, { ChangeEvent } from 'react';

import { render, fireEvent } from '@testing-library/react';
import Slider from './Slider';

describe('Slider', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Slider />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render default Slider', function () {
    const wrapper = render(<Slider />);
    const slider = wrapper.getByRole('slider') as HTMLInputElement;
    expect(slider).toBeInTheDocument();
    expect(slider.tagName).toBe('INPUT');
    expect(slider).toHaveClass('slider');
  });

  it('should render Disabled Slider', function () {
    const wrapper = render(<Slider disabled />);
    const slider = wrapper.getByRole('slider') as HTMLInputElement;
    expect(slider).toBeInTheDocument();
    expect(slider.tagName).toBe('INPUT');
    expect(slider).toHaveClass('disabled');
  });

  it('should render Size Slider', function () {
    const AllSize = ['sm', 'md'];
    for (let i = 0; i < AllSize.length; i++) {
      const wrapper = render(<Slider sliderSize={AllSize[i] as any} />);
      const slider = wrapper.getAllByRole('slider') as HTMLInputElement[];
      expect(slider[i]).toHaveClass(`slider slider-${AllSize[i]}`);
    }
  });

  it('should render Type Slider', function () {
    const AllType = ['primary', 'secondary'];
    for (let i = 0; i < AllType.length; i++) {
      const wrapper = render(<Slider sliderSize={AllType[i] as any} />);
      const slider = wrapper.getAllByRole('slider') as HTMLInputElement[];
      expect(slider[i]).toHaveClass(`slider slider-${AllType[i]}`);
    }
  });

  it('should render Vertical Slider', function () {
    const wrapper = render(<Slider orientation="vertical" />);
    const slider = wrapper.getByRole('slider') as HTMLInputElement;
    expect(slider).toBeInTheDocument();
    expect(slider.tagName).toBe('INPUT');
    expect(slider.parentElement).toHaveClass(
      'slider_container slider_container-vertical'
    );
  });

  it('should change to corresponding value', function () {
    const wrapper = render(<Slider />);
    const slider = wrapper.getByRole('slider') as HTMLInputElement;
    fireEvent.change(slider, { target: { value: 80 } });
    expect(slider.value).toBe('80');
    fireEvent.change(slider, { target: { value: '30' } });
    expect(slider.value).toBe('30');
  });

  it('should have marks and labels', function () {
    const marksAndLabels = [
      { label: 'ten', value: 10 },
      { label: 'twelve', value: 12 },
      { label: 'ninety-eight', value: 98 },
    ];
    const wrapper = render(<Slider marks={marksAndLabels} value={50} />);
    const ten = wrapper.getByText('ten');
    expect(ten).toHaveClass('slider_mark-label');
    expect(ten.getAttribute('data-active')).toBe('true');
    const twelve = wrapper.getByText('twelve');
    expect(twelve).toHaveClass('slider_mark-label');
    expect(twelve.getAttribute('data-active')).toBe('true');
    const ninetyEight = wrapper.getByText('ninety-eight');
    expect(ninetyEight).toHaveClass('slider_mark-label');
    expect(ninetyEight.getAttribute('data-active')).toBe('false');
  });

  it('should render Range Slider', function () {
    const wrapper = render(<Slider value={[40, 60]} />);
    const slider = wrapper.getByRole('slider') as HTMLInputElement;
    expect(slider).toBeInTheDocument();
    expect(slider.tagName).toBe('INPUT');
    expect(slider).toHaveClass('slider');
  });
});
