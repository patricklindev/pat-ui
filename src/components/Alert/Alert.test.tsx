import React from 'react';

import { render} from '@testing-library/react';
import Alert, {PatAlertProps} from './Alert';

describe('Alert', ()=> {
    it('should match snapshot', () => {
        const { asFragment } = render(<Alert> Snapshot Alert </Alert>);
        expect(asFragment()).toMatchSnapshot();
      });

      it('should render default alert', () => {
        const wrapper = render(<Alert>Default Alert</Alert>);
        const element = wrapper.queryByText('Default Alert') as HTMLElement;
        expect(element).toBeInTheDocument();
        expect(element.tagName).toBe('DIV');
        expect(element).toHaveClass('alert alert-default');
      });

      it('should render correct alert based on different props', () => {
        const alertPrimarySmallProps: PatAlertProps = {
          alertType: 'primary',
          alertSize: 'sm',
          className: 'test',
        };
        const alertPrimarySmallWrapper = render(
          <Alert {...alertPrimarySmallProps}>Primary Small Alert</Alert>
        );
        const alertPrimarySmallElement = alertPrimarySmallWrapper.queryByText(
          'Primary Small Alert'
        ) as HTMLElement;
        expect(alertPrimarySmallElement).toBeInTheDocument();
        expect(alertPrimarySmallElement.tagName).toBe('DIV');
        expect(alertPrimarySmallElement).toHaveClass('alert alert-primary alert-sm test');
      });
});