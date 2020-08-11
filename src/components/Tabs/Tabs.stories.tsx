import React from 'react';
import { action } from '@storybook/addon-actions';
import Tabs from '../Tabs/Tabs';

export default {
  title: 'Tabs',
  component: Tabs,
};

export const DefaultTabs = () => {
  return (
    <div onChange={action('defaultTab')}>
      <Tabs
        headings={['Tab1', 'Tab2']}
        tabType='basic'
        content={['This is Tab1', 'This is Tab2']}
      ></Tabs>
    </div>
  );
};
