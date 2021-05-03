import React from 'react';
// import { action } from '@storybook/addon-actions';
import Badge from './Badge';

export default {
  title: 'Badge',
  component: Badge,
};

const badgeStyle: React.CSSProperties = {
  marginRight: '10px',
  marginTop: '5px',
};

export const DefaultBadge = () => (
  <div>
    <Badge style={badgeStyle} badgeContent={4} color="primary"></Badge>
    <Badge style={badgeStyle} badgeContent={3} color="secondary"></Badge>
    <Badge style={badgeStyle} badgeContent={2} color="error"></Badge>
  </div>
);

export const ShowZeroBadge = () => (
  <div>
    <Badge style={badgeStyle} badgeContent={0}></Badge>
    <Badge style={badgeStyle} badgeContent={0} showZero={true}></Badge>
    <Badge style={badgeStyle} badgeContent={10} showZero={false}></Badge>
  </div>
);

export const InvisibleBadge = () => (
  <div>
    <Badge style={badgeStyle} badgeContent={10}></Badge>
    <Badge style={badgeStyle} badgeContent={10} invisible={false}></Badge>
  </div>
);

// export const DiffTypeButton = () => (
//   <div>
//     <Button
//       style={buttonStyle}
//       btnType='primary'
//       onClick={action('Primary Button clicked')}
//     >
//       Primary Button
//     </Button>
//     <Button
//       style={buttonStyle}
//       btnType='secondary'
//       onClick={action('Secondary Button clicked')}
//     >
//       Secondary Button
//     </Button>
//     <Button
//       style={buttonStyle}
//       btnType='danger'
//       onClick={action('Danger Button clicked')}
//     >
//       Danger Button
//     </Button>
//     <Button
//       style={buttonStyle}
//       btnType='default'
//       onClick={action('Default Button clicked')}
//     >
//       Default Button
//     </Button>
//     <Button
//       style={buttonStyle}
//       disabled
//       btnType='default'
//       onClick={action('DisabledDefault Button clicked should not work')}
//     >
//       Disabled Default Button
//     </Button>
//     <Button
//       style={buttonStyle}
//       btnType='link'
//       onClick={action('Link Button clicked')}
//     >
//       Link Button
//     </Button>
//     <Button
//       disabled
//       btnType='link'
//       onClick={action('Disabled Link Button clicked should not work')}
//     >
//       Disabled Link Button
//     </Button>
//   </div>
// );
