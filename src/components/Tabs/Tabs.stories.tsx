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
        tabs={[
          {
            heading: 'Tab1',
            content: <div>This is tab1</div>,
          },
          {
            heading: 'Tab2',
            content: <div>This is tab2</div>,
            active: true,
          },
          {
            heading: 'Tab3',
            content: <div>This is tab3</div>,
          },
        ]}
      ></Tabs>
    </div>
  );
};
