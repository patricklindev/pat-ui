import '../src/styles/index.scss';
import {addDecorator, addParameters} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import React from 'react';

const wrapperStyle: React.CSSProperties = {
  padding: '20px 40px',
};
const storyWrapper = (storyFn: any) => (
  <div style={wrapperStyle}>
    <h3>Examples:</h3>
    <hr />
    {storyFn()}
  </div>
);

addDecorator(storyWrapper);
addDecorator(withInfo);
addParameters({
  info: {
    inline: true,
    header: false,
  },
});
