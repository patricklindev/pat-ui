import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Switch from './Switch';

describe('Switch', () => {
  it('should render with the default props', () => {
    const { container } = render(<Switch onChange={() => {}} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with the default props and checked', () => {
    const { container } = render(<Switch checked onChange={() => {}} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with the checked props and disabled', () => {
    const { container } = render(<Switch checked disabled onChange={() => {}} />);
    expect(container.firstChild).toMatchSnapshot();
  });
  
  it('should render with the label', () => {
    const label = 'Test Label';
    const { getByText } = render(<Switch label={label} onChange={() => {}} />);
    expect(getByText(label)).toBeInTheDocument();
  });

  it('should render with the label and checked', () => {
    const label = 'Test Label';
    const { getByText } = render(<Switch label={label} checked onChange={() => {}} />);
    expect(getByText(label)).toBeInTheDocument();
  });

  it('should render with the label and disabled', () => {
    const label = 'Test Label';
    const { getByText } = render(<Switch label={label} disabled onChange={() => {}} />);
    expect(getByText(label)).toBeInTheDocument();
  });

  it('should render with the label and checked and disabled', () => {
    const label = 'Test Label';
    const { getByText } = render(<Switch label={label} checked disabled onChange={() => {}} />);
    expect(getByText(label)).toBeInTheDocument();
  });

  it('should render with the primary color', () => {
    const { container } = render(<Switch color="primary" onChange={() => {}} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with the primary color and checked', () => {
    const { container } = render(<Switch color="primary" checked onChange={() => {}} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with the secondary color', () => {
    const { container } = render(<Switch color="secondary" onChange={() => {}} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with the small size', () => {
    const { container } = render(<Switch size="small" onChange={() => {}} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with the small size and disabled and no label', () => {
    const { container } = render(<Switch size="small" disabled />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with the small size and checked', () => {
    const { container } = render(<Switch size="small" checked onChange={() => {}} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with the small size and primary color', () => {
    const { container } = render(<Switch size="small" color="primary" onChange={() => {}} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with the small size and secondary color', () => {
    const { container } = render(<Switch size="small" color="secondary" onChange={() => {}} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should call the onChange function when clicked', () => {
    const onChange = jest.fn();
    const { container } = render(<Switch onChange={onChange} />);
    fireEvent.click(container.firstChild as Element);
    expect(onChange).toHaveBeenCalled();
  });

});
