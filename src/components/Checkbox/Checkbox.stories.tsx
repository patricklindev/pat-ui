import React from 'react';
import { action } from '@storybook/addon-actions';
import Checkbox from './Checkbox';


export default {
  title: 'Checkbox',
  component: Checkbox,
};


export const CheckboxNoLabel = () => (
  <div>
    <p className="chkbox-group-label"> Checkboxes without Label </p>
    <Checkbox chkboxName='noLabelUnchecked' chkboxValue='noLabelUnchecked' disabled={false} chkboxLabel=''/>
    <Checkbox chkboxName='noLabelDisabled' chkboxValue='noLabelDisabled' disabled={true} chkboxLabel=''/>
    <Checkbox chkboxName='noLabelChecked' chkboxValue='noLabelChecked' chkboxLabel='' checked/>
    <Checkbox chkboxName='noLabelIndeterminate' chkboxValue='noLabelIndeterminate' chkboxLabel='' indeterminate/>
  </div> 
);
export const DefaultCheckboxWithLabel= () => (
  <div>
    <p className="chkbox-group-label"> Checkboxes with Label </p>
    <Checkbox chkboxName='defaultWithLabel' chkboxValue='defaultWithLabel' disabled={false} chkboxLabel='Default Checkbox'/>
    <Checkbox chkboxName='disabledWithLabel' chkboxValue='disabledWithLabel' disabled={true} chkboxLabel='Disabled Checkbox'/>
    <Checkbox chkboxName='checkedWithLabel' chkboxValue='checkedWithLabel' chkboxLabel='Checked Checkbox' checked/>
    <Checkbox chkboxName='indeterminateWithLabel' chkboxValue='indeterminateWithLabel' chkboxLabel='Indeterminate Checkbox' indeterminate/>
  </div>
);

export const CheckboxSize= () => (

  <div>
    <p className="chkbox-group-label"> Large Checkboxes</p>
    <Checkbox chkboxName='defaultLarge' chkboxValue='defaultLarge' disabled={false} chkboxLabel='Default Checkbox'  chkboxSize='lg'/>
    <Checkbox chkboxName='disabledLarge' chkboxValue='disabledLarge' disabled={true} chkboxLabel='Disabled Checkbox'  chkboxSize='lg'/>
    <Checkbox chkboxName='checkedLarge' chkboxValue='checkedLarge' chkboxLabel='Checked Checkbox' checked chkboxSize='lg'/>
    <Checkbox chkboxName='indeterminateLarge' chkboxValue='indeterminateLarge' chkboxLabel='Indeterminate Checkbox' indeterminate chkboxSize='lg'/>
    <p className="chkbox-group-label"> Small Checkboxes</p>
    <Checkbox chkboxName='defaultSmall' chkboxValue='defaultSmall' disabled={false} chkboxLabel='Default Checkbox' chkboxSize='sm'/>
    <Checkbox chkboxName='disabledSmall' chkboxValue='disabledSmall' disabled={true} chkboxLabel='Disabled Checkbox' chkboxSize='sm'/>
    <Checkbox chkboxName='checkedSmall' chkboxValue='checkedSmall' chkboxLabel='Checked Checkbox' checked chkboxSize='sm'/>
    <Checkbox chkboxName='indeterminateSmall' chkboxValue='indeterminateSmall' chkboxLabel='Indeterminate Checkbox' indeterminate chkboxSize='sm'/>
  </div>
);

export const CheckboxColors= () => (
  <div>
    <p className="chkbox-group-label"> Primary Checkboxes</p>
    <Checkbox chkboxName='defaultPrimary' chkboxValue='defaultPrimary' disabled={false} chkboxLabel='Default Checkbox'   chkboxType='primary'/>
    <Checkbox chkboxName='disabledPrimary' chkboxValue='disabledPrimary' disabled={true} chkboxLabel='Disabled Checkbox'   chkboxType='primary'/>
    <Checkbox chkboxName='checkedPrimary' chkboxValue='checkedPrimary' chkboxLabel='Checked Checkbox' checked  chkboxType='primary'/>
    <Checkbox chkboxName='indeterminatePrimary' chkboxValue='indeterminatePrimary' chkboxLabel='Indeterminate Checkbox'  chkboxType='primary' indeterminate/>

    <p className="chkbox-group-label"> Secondary Checkboxes</p>
    <Checkbox chkboxName='defaultSecondary' chkboxValue='defaultSecondary' disabled={false} chkboxLabel='Default Checkbox'  chkboxType='secondary'/>
    <Checkbox chkboxName='disabledSecondary' chkboxValue='disabledSecondary' disabled={true} chkboxLabel='Disabled Checkbox'  chkboxType='secondary'/>
    <Checkbox chkboxName='checkedSecondary' chkboxValue='checkedSecondary' chkboxLabel='Checked Checkbox' checked  chkboxType='secondary'/>
    <Checkbox chkboxName='indeterminateSecondary' chkboxValue='indeterminateSecondary' chkboxLabel='Indeterminate Checkbox'   chkboxType='secondary' indeterminate/>
  </div>
);