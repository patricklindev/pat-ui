import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import Tabs from './Tabs';
import TabsPanel from './TabsPanel';
import Tab from './Tab';
import TabsContent from './TabsContent';

describe('Tabs', () => {
  it('should render a tabs with two tabs and tabs content', () => {
    const tabsProps = {
      onClick: jest.fn(),
    };
    const wrapper = render(
      <Tabs {...tabsProps}>
        <TabsPanel>
          <Tab value="one" label="tab one"></Tab>
          <Tab value="two" label="tab two"></Tab>
        </TabsPanel>
        <TabsContent index="one">
          <div>
            <h4>content one</h4>
            <p>text</p>
          </div>
        </TabsContent>
        <TabsContent index="two">
          <div>
            <h4>content two</h4>
            <p>text</p>
          </div>
        </TabsContent>
      </Tabs>
    ).container.firstChild;

    expect(wrapper).toHaveClass('tabs');
    expect(wrapper?.childNodes.length).toBe(3);
    expect(wrapper?.firstChild?.childNodes.length).toBe(2);
    expect(wrapper?.firstChild).toHaveClass('tabs__panel');
    expect(wrapper?.lastChild).toHaveClass('tabs__content');

    fireEvent.click(
      wrapper?.firstChild?.lastChild?.childNodes.item(0) as HTMLElement
    );
    expect(tabsProps.onClick).toBeCalledTimes(1);
  });
  it('should render a correct tabs based on different props', () => {
    const tabsProps = {
      defaultTab: 'two',
      vertical: true,
      onClick: jest.fn(),
    };
    const wrapper = render(
      <Tabs {...tabsProps}>
        <TabsPanel scrollable type="primary">
          <Tab value="one" label="tab one" disabled></Tab>
          <Tab value="two" label="tab two"></Tab>
        </TabsPanel>
        <TabsContent index="one">
          <div>
            <h4>content one</h4>
            <p>text</p>
          </div>
        </TabsContent>
        <TabsContent index="two">
          <div>
            <h4>content two</h4>
            <p>text</p>
          </div>
        </TabsContent>
      </Tabs>
    ).container.firstChild;

    expect(wrapper).toHaveClass('vertical');
    expect(wrapper?.firstChild).toHaveClass(
      'vertical scrollable-col panel-type-primary'
    );
    expect(wrapper?.firstChild?.lastChild?.firstChild).toHaveClass(
      'actived-vertical'
    );
    window.HTMLElement.prototype.scrollIntoView = function () {};
    fireEvent.click(
      wrapper?.firstChild?.firstChild?.childNodes.item(0) as HTMLElement
    );
    expect(tabsProps.onClick).toHaveBeenCalledTimes(0);
  });
});
