import React from 'react';
import { action } from '@storybook/addon-actions';
import Checkbox, {checkBoxState} from './Checkbox';
import Icon from '../Icon';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

const checkBoxStyle: React.CSSProperties = {
  marginRight: '5px',
  marginTop: '5px',
};

export const DefaultCheckBox = () => (
    <div>
        <Checkbox checkedState={checkBoxState.checked} />
        <Checkbox checkedState={checkBoxState.indeterminate} />
        <Checkbox />
        <Checkbox disabled/>
        <Checkbox disabled checkedState={checkBoxState.indeterminate}/>
        <Checkbox label="Label" />
        <Checkbox label="Disabled" disabled/>
        <Checkbox label="Function" onChange={action('Checkbox clicked')}/>
    </div>
);

export const DiffSizeCheckbox = () => (
  <div>
    <Checkbox checkSize='md' checkedState={checkBoxState.checked}/>
    <Checkbox checkSize='sm' checkedState={checkBoxState.checked}/>
    <Checkbox checkSize='sm' checkedState={checkBoxState.indeterminate} />
  </div>
);

export const DiffTypeCheckbox = () => (
  <div>
    <Checkbox checkedState={checkBoxState.checked} checkType='primary' label='primary'/>
    <Checkbox checkedState={checkBoxState.checked} checkType='secondary' label='secondary'/>
    <Checkbox checkedState={checkBoxState.checked} checkType='default' label='default'/>
  </div>
);

export const DiffIconCheckbox = () => (
  <div>
    <Checkbox icon='bookmark' />
    <Checkbox icon='bookmark' checkType='primary'/>
    <Checkbox icon='bookmark' checkType='secondary'/>
    <Checkbox icon='heart' checkedState={checkBoxState.checked}/>
    <Checkbox icon='heart' checkedState={checkBoxState.checked} checkSize='sm'/>
  </div>
)