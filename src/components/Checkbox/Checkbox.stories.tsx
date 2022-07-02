import React from 'react';
import { action } from '@storybook/addon-actions';
import Checkbox, {checkBoxState, checkboxSize, checkboxType} from './Checkbox';
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
    </div>
);

export const DiffSizeCheckbox = () => (
  <div>
    <Checkbox checkSize={checkboxSize.Medium} checkedState={checkBoxState.checked}/>
    <Checkbox checkSize={checkboxSize.Small} checkedState={checkBoxState.checked}/>
    <Checkbox checkSize={checkboxSize.Small} checkedState={checkBoxState.indeterminate} />
  </div>
);

export const DiffTypeCheckbox = () => (
  <div>
    <Checkbox checkSize={checkboxSize.Medium} checkedState={checkBoxState.checked} checkType={checkboxType.Primary} label='primary'/>
    <Checkbox checkSize={checkboxSize.Medium} checkedState={checkBoxState.checked} checkType={checkboxType.Secondary} label='secondary'/>
    <Checkbox checkSize={checkboxSize.Medium} checkedState={checkBoxState.checked} checkType={checkboxType.Default} label='default'/>
  </div>
);

export const DiffIconCheckbox = () => (
  <div>
    <Checkbox icon={<Icon name="bookmark"/>} />
    <Checkbox icon={<Icon name="heart"/>} checkedState={checkBoxState.checked}/>
  </div>
)