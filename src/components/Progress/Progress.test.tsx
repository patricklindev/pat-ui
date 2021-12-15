import React from 'react';

import { render } from '@testing-library/react';
import Progress from './Progress';

describe('Progress', () => {
  // snapshot testing
  it('should match snapshot', () => {
    // const { asFragment } = render(<Progress pgValue={0}></Progress>);
    // expect(asFragment()).toMatchSnapshot();

    const { container } = render(<Progress pgValue={0}></Progress>);
    expect(container.firstChild).toMatchSnapshot();
  });

  // default progress (linear)
  it('should render default progress, which is linear progress', () => {
    const wrapper = render(<Progress pgValue={0}></Progress>);
    const element = wrapper.queryByRole('progressbar');
    const bar = wrapper.queryByTestId('linear-bar');

    expect(element).toBeInTheDocument();
    expect(element?.firstChild).toHaveClass('pg-linear pg-linear-md');
    expect(element?.querySelector('.pg-linear-text')).toBeNull();
    expect(bar).toHaveStyle('width: 0%');
  });

  // circular progress
  it('should render circular progress', () => {
    const wrapper = render(<Progress pgType="circular" pgValue={0}></Progress>);
    const element = wrapper.queryByRole('progressbar');
    const bar = wrapper.queryByTestId('circular-bar');

    const circumference = 30 * 2 * Math.PI;
    const strokeDashoffset = circumference - (0 / 100) * circumference;

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('pg-circular pg-circular-md');
    expect(element?.querySelector('.pg-circular-text')).toBeNull();
    expect(bar).toHaveStyle(`stroke-dashoffset: ${strokeDashoffset}`);
  });

  // render linear progress based on props
  it('should render linear progress with showPercentage, pgColor: primary and pgSize: sm', () => {
    const wrapper = render(
      <Progress
        showPercentage
        pgColor="primary"
        pgSize="sm"
        pgValue={0}
      ></Progress>
    );
    const element = wrapper.queryByRole('progressbar');
    const bar = wrapper.queryByTestId('linear-bar');

    expect(element).toBeInTheDocument();
    expect(element?.firstChild).toHaveClass(
      'pg-linear pg-linear-sm pg-linear-primary'
    );
    expect(element?.querySelector('.pg-linear-text')).toBeInTheDocument();
    expect(bar).toHaveStyle('width: 0%');
  });

  // render circular progress based on props
  it('should render circular progress with showPercentage, pgColor: info and pgSize: lg', () => {
    const wrapper = render(
      <Progress
        showPercentage
        pgType="circular"
        pgColor="info"
        pgSize="lg"
        pgValue={0}
      ></Progress>
    );
    const element = wrapper.queryByRole('progressbar');
    const bar = wrapper.queryByTestId('circular-bar');

    const circumference = 40 * 2 * Math.PI;
    const strokeDashoffset = circumference - (0 / 100) * circumference;

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('pg-circular pg-circular-lg pg-circular-info');
    expect(element?.querySelector('.pg-circular-text')).toBeInTheDocument();
    expect(bar).toHaveStyle(`stroke-dashoffset: ${strokeDashoffset}`);
  });
});
