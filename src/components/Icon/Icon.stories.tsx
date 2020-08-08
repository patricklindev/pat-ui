import React from 'react';
// import { action } from '@storybook/addon-actions';
import Icon from './Icon';

export default {
  title: 'Icon',
  component: Icon,
};

export const DefaultIcon = () => <Icon name="home" />;

export const DisabledIcon = () => <Icon name="users" disabled />;

export const DiffSizeIcon = () => (
  <div>
    <Icon name="plus" size="mini" />
    <Icon name="plus" size="tiny" />
    <Icon name="plus" size="small" />
    <Icon name="plus" />
    <Icon name="plus" size="large" />
    <Icon name="plus" size="big" />
    <Icon name="plus" size="huge" />
    <Icon name="plus" size="massive" />
  </div>
);

export const DiffColorIcon = () => (
  <div>
    <Icon color="red" name="users" />
    <Icon color="orange" name="users" />
    <Icon color="yellow" name="users" />
    <Icon color="olive" name="users" />
    <Icon color="green" name="users" />
    <Icon color="teal" name="users" />
    <Icon color="blue" name="users" />
    <Icon color="violet" name="users" />
    <Icon color="purple" name="users" />
    <Icon color="pink" name="users" />
    <Icon color="brown" name="users" />
    <Icon color="grey" name="users" />
    <Icon color="black" name="users" />
  </div>
);

export const LoadingIcon = () => <Icon name="spinner" loading />;
