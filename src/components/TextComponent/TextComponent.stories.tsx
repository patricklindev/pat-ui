import React from 'react';
import { action } from '@storybook/addon-actions';
import TextComponent from './TextComponent';

export default {
  title: 'TextComponent',
  component: TextComponent,
};

export const TextInput = () => <TextComponent inputValue="" placeholderText="Placeholder" error={false}/>;
// include onChange later
// export const TextComponent = () => <TextComponent inputValue="" placeholderText="Placeholder" error={false}/>;
// export const ErrorTextComponent = () => <TextComponent inputValue="" error={true}/>;