import React from 'react';
import { action } from '@storybook/addon-actions';
import TabsPanel from './Tabs';
import Tab from './Tabs';
import TabsContent from './TabsContent';

export default {
  title: 'Tabs',
  component: TabsPanel,
};

export const tabs = () => (
  <div>
    <TabsPanel btnOnClick={action('selected')}>
      <Tab value="one" label="tab one"></Tab>
      <Tab value="two" label="tab two"></Tab>
    </TabsPanel>
    <TabsContent index="one">content</TabsContent>
    <TabsContent index="two">
      <div>
        <h2>content2</h2>
        <p>text</p>
      </div>
    </TabsContent>
  </div>
);
