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
      altType='standard'>
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
      altType='filled'>
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
      altType='outlined'>
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

export const DiffSuffixAlert = () => (
  <>
  <Alert>Alert with text only</Alert>

    <Alert onClose={() => {console.log('onClose Click');
    }}>Alert with onClose</Alert>

    <Alert onClick={() => {console.log('onClick Click');
    }}>Alert with onClick</Alert>

    <Alert
      altSuffix={
        <Button color="inherit" onClick={() => console.log('customized button click')}>
          Button
        </Button>
      }
    >
      Alert with altSuffix
    </Alert>
  </>
)

export const DiffTextStyleAlert = () => (
  <>
    <Alert altTextStyle='one-line'>Alert content one-line</Alert>

    <Alert altTextStyle='one-line-bold'>Alert content one-line-bold</Alert>
    
    <Alert altTitle='Alert title' altTextStyle='two-line'>Alert content two-line</Alert>

    <Alert altTitle='Alert title' altTextStyle='two-line-bold'>Alert content two-line-bold</Alert>
  </>
)

export const StandardAlert = () => (
  <>
    Error
    <Alert altType='standard' altIcon='error'>Alert content</Alert>
    <Alert altType='standard' altIcon='error' onClick={() => {}}>Alert content</Alert>
    <Alert altType='standard' altIcon='error' onClose={() => {}}>Alert content</Alert>
    <Alert altType='standard' altIcon='error' altTextStyle='two-line' altTitle='Alert title'>Alert content</Alert>
    <Alert altType='standard' altIcon='error' altTextStyle='two-line' altTitle='Alert title' onClick={() => {}}>Alert content</Alert>
    <Alert altType='standard' altIcon='error' altTextStyle='two-line' altTitle='Alert title' onClose={() => {}}>Alert content</Alert>

    Info
    <Alert altType='standard' altIcon='info'>Alert content</Alert>
    <Alert altType='standard' altIcon='info' onClick={() => {}}>Alert content</Alert>
    <Alert altType='standard' altIcon='info' onClose={() => {}}>Alert content</Alert>
    <Alert altType='standard' altIcon='info' altTextStyle='two-line' altTitle='Alert title'>Alert content</Alert>
    <Alert altType='standard' altIcon='info' altTextStyle='two-line' altTitle='Alert title' onClick={() => {}}>Alert content</Alert>
    <Alert altType='standard' altIcon='info' altTextStyle='two-line' altTitle='Alert title' onClose={() => {}}>Alert content</Alert>

    Success
    <Alert altType='standard' altIcon='success'>Alert content</Alert>
    <Alert altType='standard' altIcon='success' onClick={() => {}}>Alert content</Alert>
    <Alert altType='standard' altIcon='success' onClose={() => {}}>Alert content</Alert>
    <Alert altType='standard' altIcon='success' altTextStyle='two-line' altTitle='Alert title'>Alert content</Alert>
    <Alert altType='standard' altIcon='success' altTextStyle='two-line' altTitle='Alert title' onClick={() => {}}>Alert content</Alert>
    <Alert altType='standard' altIcon='success' altTextStyle='two-line' altTitle='Alert title' onClose={() => {}}>Alert content</Alert>

    Warning
    <Alert altType='standard' altIcon='warning'>Alert content</Alert>
    <Alert altType='standard' altIcon='warning' onClick={() => {}}>Alert content</Alert>
    <Alert altType='standard' altIcon='warning' onClose={() => {}}>Alert content</Alert>
    <Alert altType='standard' altIcon='warning' altTextStyle='two-line' altTitle='Alert title'>Alert content</Alert>
    <Alert altType='standard' altIcon='warning' altTextStyle='two-line' altTitle='Alert title' onClick={() => {}}>Alert content</Alert>
    <Alert altType='standard' altIcon='warning' altTextStyle='two-line' altTitle='Alert title' onClose={() => {}}>Alert content</Alert>
  </>
)

export const FilledAlert = () => (
  <>
    Error
    <Alert altType='filled' altIcon='error'>Alert content</Alert>
    <Alert altType='filled' altIcon='error' onClick={() => {}}>Alert content</Alert>
    <Alert altType='filled' altIcon='error' onClose={() => {}}>Alert content</Alert>
    <Alert altType='filled' altIcon='error' altTextStyle='two-line' altTitle='Alert title'>Alert content</Alert>
    <Alert altType='filled' altIcon='error' altTextStyle='two-line' altTitle='Alert title' onClick={() => {}}>Alert content</Alert>
    <Alert altType='filled' altIcon='error' altTextStyle='two-line' altTitle='Alert title' onClose={() => {}}>Alert content</Alert>

    Info
    <Alert altType='filled' altIcon='info'>Alert content</Alert>
    <Alert altType='filled' altIcon='info' onClick={() => {}}>Alert content</Alert>
    <Alert altType='filled' altIcon='info' onClose={() => {}}>Alert content</Alert>
    <Alert altType='filled' altIcon='info' altTextStyle='two-line' altTitle='Alert title'>Alert content</Alert>
    <Alert altType='filled' altIcon='info' altTextStyle='two-line' altTitle='Alert title' onClick={() => {}}>Alert content</Alert>
    <Alert altType='filled' altIcon='info' altTextStyle='two-line' altTitle='Alert title' onClose={() => {}}>Alert content</Alert>

    Success
    <Alert altType='filled' altIcon='success'>Alert content</Alert>
    <Alert altType='filled' altIcon='success' onClick={() => {}}>Alert content</Alert>
    <Alert altType='filled' altIcon='success' onClose={() => {}}>Alert content</Alert>
    <Alert altType='filled' altIcon='success' altTextStyle='two-line' altTitle='Alert title'>Alert content</Alert>
    <Alert altType='filled' altIcon='success' altTextStyle='two-line' altTitle='Alert title' onClick={() => {}}>Alert content</Alert>
    <Alert altType='filled' altIcon='success' altTextStyle='two-line' altTitle='Alert title' onClose={() => {}}>Alert content</Alert>

    Warning
    <Alert altType='filled' altIcon='warning'>Alert content</Alert>
    <Alert altType='filled' altIcon='warning' onClick={() => {}}>Alert content</Alert>
    <Alert altType='filled' altIcon='warning' onClose={() => {}}>Alert content</Alert>
    <Alert altType='filled' altIcon='warning' altTextStyle='two-line' altTitle='Alert title'>Alert content</Alert>
    <Alert altType='filled' altIcon='warning' altTextStyle='two-line' altTitle='Alert title' onClick={() => {}}>Alert content</Alert>
    <Alert altType='filled' altIcon='warning' altTextStyle='two-line' altTitle='Alert title' onClose={() => {}}>Alert content</Alert>
  </>
)

export const OutlinedAlert = () => (
  <>
    Error
    <Alert altType='outlined' altIcon='error'>Alert content</Alert>
    <Alert altType='outlined' altIcon='error' onClick={() => {}}>Alert content</Alert>
    <Alert altType='outlined' altIcon='error' onClose={() => {}}>Alert content</Alert>
    <Alert altType='outlined' altIcon='error' altTextStyle='two-line' altTitle='Alert title'>Alert content</Alert>
    <Alert altType='outlined' altIcon='error' altTextStyle='two-line' altTitle='Alert title' onClick={() => {}}>Alert content</Alert>
    <Alert altType='outlined' altIcon='error' altTextStyle='two-line' altTitle='Alert title' onClose={() => {}}>Alert content</Alert>

    Info
    <Alert altType='outlined' altIcon='info'>Alert content</Alert>
    <Alert altType='outlined' altIcon='info' onClick={() => {}}>Alert content</Alert>
    <Alert altType='outlined' altIcon='info' onClose={() => {}}>Alert content</Alert>
    <Alert altType='outlined' altIcon='info' altTextStyle='two-line' altTitle='Alert title'>Alert content</Alert>
    <Alert altType='outlined' altIcon='info' altTextStyle='two-line' altTitle='Alert title' onClick={() => {}}>Alert content</Alert>
    <Alert altType='outlined' altIcon='info' altTextStyle='two-line' altTitle='Alert title' onClose={() => {}}>Alert content</Alert>

    Success
    <Alert altType='outlined' altIcon='success'>Alert content</Alert>
    <Alert altType='outlined' altIcon='success' onClick={() => {}}>Alert content</Alert>
    <Alert altType='outlined' altIcon='success' onClose={() => {}}>Alert content</Alert>
    <Alert altType='outlined' altIcon='success' altTextStyle='two-line' altTitle='Alert title'>Alert content</Alert>
    <Alert altType='outlined' altIcon='success' altTextStyle='two-line' altTitle='Alert title' onClick={() => {}}>Alert content</Alert>
    <Alert altType='outlined' altIcon='success' altTextStyle='two-line' altTitle='Alert title' onClose={() => {}}>Alert content</Alert>

    Warning
    <Alert altType='outlined' altIcon='warning'>Alert content</Alert>
    <Alert altType='outlined' altIcon='warning' onClick={() => {}}>Alert content</Alert>
    <Alert altType='outlined' altIcon='warning' onClose={() => {}}>Alert content</Alert>
    <Alert altType='outlined' altIcon='warning' altTextStyle='two-line' altTitle='Alert title'>Alert content</Alert>
    <Alert altType='outlined' altIcon='warning' altTextStyle='two-line' altTitle='Alert title' onClick={() => {}}>Alert content</Alert>
    <Alert altType='outlined' altIcon='warning' altTextStyle='two-line' altTitle='Alert title' onClose={() => {}}>Alert content</Alert>
  </>
)


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