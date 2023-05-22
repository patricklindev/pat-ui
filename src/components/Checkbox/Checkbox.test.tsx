import React from 'react';

import { render } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox Test cases', () => {

  it('should render default checkbox', () => {
    const wrapper = render(<Checkbox chkboxName="DefaultCheckbox" chkboxValue="DefaultCheckbox" />);
    const element = wrapper.container.querySelector( '#DefaultCheckbox' ) as HTMLElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('INPUT');
    expect(element).toHaveClass('chkbox chkbox-default');
  });

  it('should render small checkbox', () => {
    const chkboxSmallWrapper = render(
      <Checkbox chkboxName="SmallCheckbox" chkboxValue="SmallCheckbox" chkboxSize="sm" />
    );
    const chkboxSmallElement = chkboxSmallWrapper.container.querySelector( '#SmallCheckbox' ) as HTMLElement;
    expect(chkboxSmallElement).toBeInTheDocument();
    expect(chkboxSmallElement.tagName).toBe('INPUT');
    expect(chkboxSmallElement).toHaveClass('chkbox chkbox-default chkbox-sm');
  });

  it('should render large primary checkbox', () => {
    const chkboxPrimaryLargeWrapper = render(
      <Checkbox chkboxName="LargePrimaryCheckbox" chkboxValue="LargePrimaryCheckbox" chkboxLabel="Primary Checkbox" chkboxType="primary" chkboxSize="lg" />
    );
    const chkboxPrimaryLargeElement = chkboxPrimaryLargeWrapper.container.querySelector('#LargePrimaryCheckbox' ) as HTMLElement;
    expect(chkboxPrimaryLargeElement).toBeInTheDocument();
    expect(chkboxPrimaryLargeElement.tagName).toBe('INPUT');
    expect(chkboxPrimaryLargeElement).toHaveClass('chkbox chkbox-primary chkbox-lg');
  });

  it('should render checked checkbox', () => {
    const chkboxCheckedWrapper = render(
      <Checkbox chkboxName="CheckedCheckbox" chkboxValue="CheckedCheckbox" chkboxLabel="Checked Checkbox" checked />
    );
    const chkboxCheckedElement = chkboxCheckedWrapper.container.querySelector('#CheckedCheckbox' ) as HTMLElement;
    expect(chkboxCheckedElement).toBeInTheDocument();
    expect(chkboxCheckedElement.tagName).toBe('INPUT');
    expect(chkboxCheckedElement).toHaveClass('chkbox chkbox-default');
  });

  it('should render indeterminate checkbox', () => {
    const chkboxIndeterminateWrapper = render(
      <Checkbox chkboxName="IndeterminateCheckbox" chkboxValue="IndeterminateCheckbox" chkboxLabel="Indeterminate Checkbox" indeterminate />
    );
    const chkboxIndeterminateElement = chkboxIndeterminateWrapper.container.querySelector('#IndeterminateCheckbox' ) as HTMLElement;
    expect(chkboxIndeterminateElement).toBeInTheDocument();
    expect(chkboxIndeterminateElement.tagName).toBe('INPUT');
    expect(chkboxIndeterminateElement).toHaveClass('chkbox chkbox-default indeterminate');
  });

  it('should render disabled checkbox', () => {
    const chkboxDisabledWrapper = render(
      <Checkbox chkboxName="DisabledCheckbox" chkboxValue="DisabledCheckbox" disabled />
    );
    const chkboxDisabledElement = chkboxDisabledWrapper.container.querySelector('#DisabledCheckbox' ) as HTMLElement;
    expect(chkboxDisabledElement).toBeInTheDocument();
    expect(chkboxDisabledElement.tagName).toBe('INPUT');
    expect(chkboxDisabledElement).toHaveClass('chkbox chkbox-default disabled');    
  });
});