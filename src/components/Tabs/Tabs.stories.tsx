import React from 'react';
import { action } from '@storybook/addon-actions';
import TabsPanel from './TabsPanel';
import Tab from './TabsPanel';
import TabsContent from './TabsContent';
import Tabs from './Tabs';

export default {
  title: 'Tabs',
  component: Tabs,
};

export const tabs = () => (
  <Tabs tabOnClick={action('tabs selected')}>
    <TabsPanel>
      <Tab value="one" label="tab one"></Tab>
      <Tab value="two" label="tab two"></Tab>
    </TabsPanel>
    <TabsContent index="one">
      <div>
        <h2>content1</h2>
        <p>text</p>
      </div>
      {/* test */}
    </TabsContent>
    <TabsContent index="two">
      <div>
        <h2>content2</h2>
        <p>text</p>
      </div>
    </TabsContent>
  </Tabs>
);
