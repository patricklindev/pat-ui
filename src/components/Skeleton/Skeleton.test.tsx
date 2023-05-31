import { render } from '@testing-library/react';
import Skeleton from './Skeleton';
import React from 'react';

describe('Skeleton', () => {
    it('should match snapshot', () => {
        const { container } = render(<Skeleton></Skeleton>);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should render with default props', () => {
        const { getByTestId } = render(<Skeleton data-testid="skeleton" />);
        const skeleton = getByTestId('skeleton');

        expect(skeleton).toHaveClass('skeleton');
        expect(skeleton).toHaveClass('text');
        expect(skeleton).not.toHaveClass('pulse');
    });

    it('should render with pulse animation when prop is provided', () => {
        const { getByTestId } = render(<Skeleton animation='pulse' data-testid="skeleton" />);
        const skeleton = getByTestId('skeleton');

        expect(skeleton).toHaveClass('pulse');
    });

    it('should render with the correct variant when prop is provided', () => {
        const { getByTestId } = render(<Skeleton variant='circular' data-testid="skeleton" />);
        const skeleton = getByTestId('skeleton');

        expect(skeleton).toHaveClass('circular');
    });

    it('should render with the correct height and width when props are provided', () => {
        const { getByTestId } = render(<Skeleton height='100px' width='200px' data-testid="skeleton" />);
        const skeleton = getByTestId('skeleton');

        expect(skeleton).toHaveStyle('width: 200px');
        expect(skeleton).toHaveStyle('height: 100px');
    });

    it('should render a custom component when prop is provided', () => {
        const CustomComponent = (props: any) => <span {...props} />;
        const { container } = render(<Skeleton component={CustomComponent} data-testid="skeleton" />);
        expect(container.querySelector('span')).not.toBeNull();
    });

    it('should render child elements correctly', () => {
        const { getByText } = render(
            <Skeleton>
                <div>Test child</div>
            </Skeleton>
        );

        expect(getByText('Test child')).toBeInTheDocument();
    });

    it('should not render any animation when animation prop is false', () => {
        const { getByTestId } = render(<Skeleton animation={false} data-testid="skeleton" />);
        const skeleton = getByTestId('skeleton');

        expect(skeleton).not.toHaveClass('pulse');
        expect(skeleton).not.toHaveClass('wave');
    });

    it('should pass other html attributes correctly to the root node', () => {
        const { getByTestId } = render(<Skeleton id="testId" data-testid="skeleton" />);
        const skeleton = getByTestId('skeleton');

        expect(skeleton.id).toBe('testId');
    });

    it('should render as a div when the component prop is not provided', () => {
        const { container } = render(<Skeleton data-testid="skeleton" />);
        expect(container.querySelector('div')).not.toBeNull();
    });

    it('should render as a span when the component prop is a span', () => {
        const { container } = render(<Skeleton component="span" data-testid="skeleton" />);
        expect(container.querySelector('span')).not.toBeNull();
    });

    it('should render as a section when the component prop is a section', () => {
        const { container } = render(<Skeleton component="section" data-testid="skeleton" />);
        expect(container.querySelector('section')).not.toBeNull();
    });

    it('should render a custom React component when prop is provided', () => {
        const CustomComponent = (props: any) => <div {...props}></div>;
        const { container } = render(<Skeleton component={CustomComponent} data-testid="skeleton" />);
        expect(container.querySelector('div')).not.toBeNull();
    });
});
