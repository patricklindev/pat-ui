import Icon from '../Icon';
import React from 'react';

 export const steps =  [ {
    id: 0,
    label: 'Shipping',
    description: 'Choose your shipping option',
    icon: <Icon name='truck'/> ,
    enable: true
},
{
    id:1,
    label: 'Billing',
    description: 'Enter billing information',
    icon: <Icon name='credit card'/>,
    enable: false
},
{
    id:2,
    label: 'Confirm Order',
    description: 'Verify order details',
    icon: <Icon name='info'/>,
    enable: false
}
] 

