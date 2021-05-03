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

export const DefaultTabs = () => (
  <Tabs onClick={action('tabs selected')}>
    <TabsPanel>
      <Tab value="one" label="tab one"></Tab>
      <Tab value="two" label="tab two"></Tab>
    </TabsPanel>
    <TabsContent index="one">
      <div>
        <h4>content one</h4>
        <p>text</p>
      </div>
      {/* test */}
    </TabsContent>
    <TabsContent index="two">
      <div>
        <h4>content two</h4>
        <p>text</p>
      </div>
    </TabsContent>
  </Tabs>
);

export const SetDefaultTabs = () => (
  <div>
    <Tabs defaultTab="one" onClick={action('tabs selected')}>
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
    <hr />
    <Tabs defaultTab="two" onClick={action('tabs selected')}>
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
  </div>
);

export const DiffTypeTabs = () => (
  <div>
    <Tabs defaultTab="one" onClick={action('tabs selected')}>
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
    <hr />
    <Tabs defaultTab="one" onClick={action('tabs selected')}>
      <TabsPanel type="primary">
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
  </div>
);
export const WrappedTabs = () => (
  <div>
    <Tabs defaultTab="one" onClick={action('tabs selected')}>
      <TabsPanel>
        <Tab
          value="one"
          label="New Arrivals in the Longest Text of Nonfiction"
          wrapped
        ></Tab>
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
    <hr />
    <Tabs defaultTab="one" onClick={action('tabs selected')}>
      <TabsPanel>
        <Tab
          value="one"
          label="New Arrivals in the Longest Text of Nonfiction"
        ></Tab>
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
  </div>
);
export const centeredTabs = () => (
  <div>
    <Tabs defaultTab="one" onClick={action('tabs selected')}>
      <TabsPanel centered>
        <Tab
          value="one"
          label="tab one"
          wrapped
        ></Tab>
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
    <hr />
    <Tabs defaultTab="one" onClick={action('tabs selected')}>
      <TabsPanel>
        <Tab
          value="one"
          label="tab one"
        ></Tab>
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
  </div>
);
