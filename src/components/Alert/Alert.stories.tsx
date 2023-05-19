import React from 'react';
import { action } from '@storybook/addon-actions';
import Alert from './Alert';
import Button from '../Button/Button';

export default {
  title: 'Alert',
  component: Alert,
};

export const DefaultAlert = () => (
  <>
    {/* Standard Alert */}
    <Alert 
      altIcon='error'
      altTextStyle='one-line'
      altType='standard'
      altSuffix={
        <Button>
          Button
        </Button>
      }>
       Error Alert
    </Alert>

    <Alert 
      altIcon='warning'
      altTextStyle='one-line'
      altType='standard'>
       Warning Alert
    </Alert>

    <Alert 
      altIcon='info'
      altTextStyle='one-line'
      altType='standard'>
       Info Alert
    </Alert>

    <Alert 
      altIcon='success'
      altTextStyle='one-line'
      altType='standard'>
       Success Alert
    </Alert>


    {/* Filled Alert */}
    <Alert 
      altIcon='error'
      altTextStyle='one-line'
      altType='filled'
      altSuffix={
        <Button>
          Button
        </Button>
      }>
       Error Alert
    </Alert>

    <Alert 
      altIcon='warning'
      altTextStyle='one-line'
      altType='filled'>
       Warning Alert
    </Alert>

    <Alert 
      altIcon='info'
      altTextStyle='one-line'
      altType='filled'>
       Info Alert
    </Alert>

    <Alert 
      altIcon='success'
      altTextStyle='one-line'
      altType='filled'>
       Success Alert
    </Alert>

    
    {/* Outlined Alert */}
    <Alert 
      altIcon='error'
      altTextStyle='one-line'
      altType='outlined'
      altSuffix={
        <Button>
          Button
        </Button>
      }>
       Error Alert
    </Alert>

    <Alert 
      altIcon='warning'
      altTextStyle='one-line'
      altType='outlined'>
       Warning Alert
    </Alert>

    <Alert 
      altIcon='info'
      altTextStyle='one-line'
      altType='outlined'>
       Info Alert
    </Alert>

    <Alert 
      altIcon='success'
      altTextStyle='one-line'
      altType='outlined'>
       Success Alert
    </Alert>
  </>
);


export const StandardAlert = () => {}

export const FilledAlert = () => {}

export const OutlinedAlert = () => {}

export const DiffSuffixAlert = () => {}

// export const DiffSuffixAlert = () => {
//   <div>
//     <Alert
//       altIcon='error'
//       altSuffix='close-icon'
//       altTextStyle='one-line'
//       altType='standard'
//     >
//       close-icon suffix Alert
//     </Alert>

//     <Alert
//       altIcon='error'
//       altSuffix='close-icon'
//       altTextStyle='one-line'
//       altType='standard'
//     >
//       button suffix Alert
//     </Alert>
//   </div>
// }