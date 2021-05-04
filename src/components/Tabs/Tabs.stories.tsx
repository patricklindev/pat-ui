import React from 'react';
import { action } from '@storybook/addon-actions';
import TabsPanel from './TabsPanel';
import Tab from './Tab';
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
export const DisabledTabs = () => (
  <div>
    <Tabs defaultTab="one" onClick={action('tabs selected')}>
      <TabsPanel>
        <Tab value="one" label="tab one"></Tab>
        <Tab value="two" label="tab two" disabled></Tab>
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
  </div>
);
export const centeredTabs = () => (
  <div>
    <Tabs defaultTab="one" onClick={action('tabs selected')}>
      <TabsPanel centered>
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
export const scrollableTabs = () => (
  <div>
    <Tabs defaultTab="one" onClick={action('tabs selected')}>
      <TabsPanel scrollable>
        <Tab value="one" label="tab one"></Tab>
        <Tab value="two" label="tab two"></Tab>
        <Tab value="three" label="tab three"></Tab>
        <Tab value="four" label="tab four"></Tab>
        <Tab value="five" label="tab five"></Tab>
        <Tab value="six" label="tab six"></Tab>
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
      <TabsContent index="three">
        <div>
          <h4>content three</h4>
          <p>text</p>
        </div>
      </TabsContent>
      <TabsContent index="four">
        <div>
          <h4>content four</h4>
          <p>text</p>
        </div>
      </TabsContent>
      <TabsContent index="five">
        <div>
          <h4>content five</h4>
          <p>text</p>
        </div>
      </TabsContent>
      <TabsContent index="six">
        <div>
          <h4>content six</h4>
          <p>text</p>
        </div>
      </TabsContent>
    </Tabs>
  </div>
);
export const verticalTabs = () => (
  <div>
    <Tabs vertical defaultTab="one" onClick={action('tabs selected')}>
      <TabsPanel scrollable>
        <Tab value="one" label="tab one"></Tab>
        <Tab value="two" label="tab two"></Tab>
        <Tab value="three" label="tab three"></Tab>
        <Tab value="four" label="tab four"></Tab>
        <Tab value="five" label="tab five"></Tab>
        <Tab value="six" label="tab six"></Tab>
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
      <TabsContent index="three">
        <div>
          <h4>content three</h4>
          <p>text</p>
        </div>
      </TabsContent>
      <TabsContent index="four">
        <div>
          <h4>content four</h4>
          <p>text</p>
        </div>
      </TabsContent>
      <TabsContent index="five">
        <div>
          <h4>content five</h4>
          <p>text</p>
        </div>
      </TabsContent>
      <TabsContent index="six">
        <div>
          <h4>content six</h4>
          <p>text</p>
        </div>
      </TabsContent>
    </Tabs>
  </div>
);
