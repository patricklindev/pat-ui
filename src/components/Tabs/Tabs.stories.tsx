import React from 'react';
import { action } from '@storybook/addon-actions';
import Tabs from '../Tabs/Tabs';

export default {
  title: 'Tabs',
  component: Tabs,
};

export const DefaultTabs = () => {
  return (
    <div className='DefaultTabs' onChange={action('defaultTab')}>
      <h1>Esther's Tab Component Demo</h1>

      <Tabs headings={['Tab1', 'Tab2']} tabType='basic' />
    </div>
  );
};
