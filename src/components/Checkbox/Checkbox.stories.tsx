import React  from 'react';
import { action } from '@storybook/addon-actions';
import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

export const BasicCheckboxes = () => (
  <div className='basicCheckboxWrapper'>
    <Checkbox />

    {/* <Checkbox checkBgTheme='primary'/> */}

    <Checkbox checkedBgTheme='secondary'/>

    <Checkbox checkedBgTheme='primary'/>

    <Checkbox checkedBgTheme='info'/>

    {/* <Checkbox checkBgTheme='primary'/> */}
  </div>
);

// export const DiffThemeCheckbox = () => (
//   <div className='diffThemeCheckboxWrapper'>
//     <Checkbox checkboxColor="primary" checked />
//     <Checkbox checkboxColor="secondary" checked/>
//     <Checkbox checkboxColor="success" checked/>
//     <Checkbox checkboxColor="info" checked/>
//     <Checkbox checkboxColor="warning" checked/>
//     <Checkbox checkboxColor="danger" checked/>
//     <Checkbox checkboxColor="light" checked/>
//     <Checkbox checkboxColor="dark" checked/>
//   </div>
// );

// export const DiffIconCheckbox = () => (
//   <div className='diffIconCheckboxWrapper'>
//     <Checkbox icon="home" />
//     <Checkbox icon="spinner" />
//     <Checkbox icon="angle down" />
//     <Checkbox icon="plus" />
//     <Checkbox icon="home" />
//     <Checkbox icon="users" />
//     <Checkbox icon="times" />
//     <Checkbox icon="search" />
//     <Checkbox icon="star" />
//     <Checkbox icon="moon" />
//     <Checkbox icon="heart" />
//     <Checkbox icon="smile wink" />
//     <Checkbox icon="truck" />
//     <Checkbox icon="credit card" />
//   </div>
// );

// export const DiffIconThemeCheckbox = () => (
//   <div className='diffIconThemeCheckboxWrapper'>
//     <Checkbox icon="home" iconTheme="primary" checked/>
//     <Checkbox icon="spinner" iconTheme="secondary" checked/>
//     <Checkbox icon="angle down" iconTheme="success" checked/>
//     <Checkbox icon="plus" iconTheme="info" checked/>
//     <Checkbox icon="home" iconTheme="warning" checked/>
//     <Checkbox icon="users" iconTheme="danger" checked/>
//     <Checkbox icon="search" iconTheme="dark" checked/>
//   </div>
// );

// export const CheckboxWithLabel = () => (
//   <div className='checkboxWithLabelWrapper'>
//     <Checkbox label='Hello,World' />
//     <Checkbox icon="home" checked label='Hello,World'/>
//     <Checkbox icon="users" iconTheme="warning" checked label='Hello,World'/>
//   </div>
// );


// export const checkboxDisabled = () => (
//   <div className='checkboxDisableWrapper'>
//     <Checkbox label='disabled' disabled/>
//     <Checkbox label='disabled' checked disabled/>
//     <Checkbox icon="users" iconTheme="warning" disabled label='disabled'/>
//   </div>
// );

// export const ControlCheckStateByCallbackFunc = () => {

//   const [check,setCheck] = useState(false)

//   const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=> {
//     setCheck(!check)
//   }

//   return (
//     <div>
//       <Checkbox label='Check Control by Callback'  onChange={handleChange}/>
//     </div>
//   );
// }