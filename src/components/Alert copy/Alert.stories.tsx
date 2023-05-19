import React from 'react';
import { action } from '@storybook/addon-actions';
import Alert from './Alert';

export default {
  title: 'Alert',
  component: Alert,
};

export const DefaultAlert = () => (
  <>
    <Alert 
      atIcon='error'
      atTextStyle='one-line'
      atType='standard'
      atSuffix='button'>
        Default Error Alert
    </Alert>

    <Alert 
      atIcon='warning'
      atTextStyle='one-line'
      atType='standard'>
        Default Warning Alert
    </Alert>

    <Alert 
      atIcon='info'
      atTextStyle='one-line'
      atType='standard'>
        Default info Alert
    </Alert>

    <Alert 
      atIcon='success'
      atTextStyle='one-line'
      atType='standard'>
        Default Warning Alert
    </Alert>
  </>
);

// export const DiffSuffixAlert = () => {
//   <div>
//     <Alert
//       atIcon='error'
//       atSuffix='close-icon'
//       atTextStyle='one-line'
//       atType='standard'
//     >
//       close-icon suffix Alert
//     </Alert>

//     <Alert
//       atIcon='error'
//       atSuffix='close-icon'
//       atTextStyle='one-line'
//       atType='standard'
//     >
//       button suffix Alert
//     </Alert>
//   </div>
// }