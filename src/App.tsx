import * as React from 'react';
import { render } from 'react-dom';
import { Tabs } from './components/Tabs/Tabs';

import './styles.css';

function App() {
  return (
    <div className='App'>
      <Tabs>
        {/* Group of tabs */}
        <Tabs.Tab label='a'>Tab A</Tabs.Tab>
        <Tabs.Tab label='b'>Tab B</Tabs.Tab>
        <Tabs.Tab label='c'>Tab C</Tabs.Tab>

        {/* Tab panels */}
        <Tabs.Panel label='a'>
          This is tab A{' '}
          <span role='img' aria-label='Rocket ship'>
            🚀
          </span>
        </Tabs.Panel>
        <Tabs.Panel label='b'>
          This is tab B{' '}
          <span role='img' aria-label='Diamond'>
            💎
          </span>
        </Tabs.Panel>
        <Tabs.Panel label='c'>
          This is tab C{' '}
          <span role='img' aria-label='Ghost'>
            👻
          </span>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}

export default App;
