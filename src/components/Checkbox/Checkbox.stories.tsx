import React,{useState}  from 'react';
import { action } from '@storybook/addon-actions';
import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

export const BasicCheckboxes = () => {
  return (
    <div className='basicCheckboxWrapper'>
      <Checkbox />
      <Checkbox checkBgTheme='secondary'/>
      <Checkbox checkBgTheme='primary'/>
      <Checkbox checkSize='large'/>
    </div>
  );
}

export const DiffThemeCheckbox = () => (
  <div className='diffThemeCheckboxWrapper'>
    <Checkbox checkedBgTheme="primary" checked />
    <Checkbox checkedBgTheme="secondary" checked/>
    <Checkbox checkedBgTheme="success" checked/>
    <Checkbox checkedBgTheme="info" checked/>
    <Checkbox checkedBgTheme="warning" checked/>
    <Checkbox checkedBgTheme="danger" checked/>
    <Checkbox checkedBgTheme="default" checked/>
    <Checkbox checkedBgTheme="dark" checked/>
  </div>
);

export const DiffIconCheckbox = () => (
  <div className='diffIconCheckboxWrapper'>
    <Checkbox icon="home" />
    <Checkbox icon="spinner" />
    <Checkbox icon="angle down" />
    <Checkbox icon="plus" />
    <Checkbox icon="home" />
    <Checkbox icon="users" />
    <Checkbox icon="times" />
    <Checkbox icon="search" />
    <Checkbox icon="star" />
    <Checkbox icon="moon" />
    <Checkbox icon="heart" />
    <Checkbox icon="smile wink" />
    <Checkbox icon="truck" />
    <Checkbox icon="credit card" />
    <Checkbox icon="batch" />
  </div>
);

export const DiffIconThemeCheckbox = () => (
  <div className='diffIconThemeCheckboxWrapper'>
    <Checkbox icon="home" iconTheme="primary" checked/>
    <Checkbox icon="spinner" iconTheme="secondary" checked/>
    <Checkbox icon="angle down" iconTheme="success" checked/>
    <Checkbox icon="plus" iconTheme="info" checked/>
    <Checkbox icon="home" iconTheme="warning" checked/>
    <Checkbox icon="users" iconTheme="danger" checked/>
    <Checkbox icon="search" iconTheme="dark" checked/>
    <Checkbox icon="batch" iconTheme="primary" checked/>
  </div>
);

export const CheckboxWithLabel = () => (
  <div className='checkboxWithLabelWrapper'>
    <Checkbox label='Hello,World' />
    <Checkbox icon="home" checked label='Hello,World'/>
    <Checkbox icon="users" iconTheme="warning" checked label='Hello,World'/>
  </div>
);


export const ControlCheckStateByCallbackFunc = () => {
  const [isCheck,setIsCheck] = useState(false)

  const handleChange = ()=>{
    setIsCheck(!isCheck)
  }

  return (
    <div className='basicCheckboxWrapper'>
      <Checkbox icon='home' iconTheme='primary' checked={isCheck} onChange={handleChange}/>
    </div>
  );
}