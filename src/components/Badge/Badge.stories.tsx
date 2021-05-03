import React from 'react';
// import { action } from '@storybook/addon-actions';
import Badge from './Badge';

export default {
  title: 'Badge',
  component: Badge,
};

const badgeStyle: React.CSSProperties = {
  marginRight: '15px',
  marginTop: '10px',
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

export const MaxBadge = () => (
  <div>
    <Badge style={badgeStyle} badgeContent={50} max={10}></Badge>
    <Badge style={badgeStyle} badgeContent={50}></Badge>
  </div>
);

export const IconBadge = () => (
  <div>
    <Badge style={badgeStyle} badgeContent={50} max={10} icon={'mail'}></Badge>
    <Badge style={badgeStyle} badgeContent={50} max={10} icon={'star'}></Badge>
    <Badge style={badgeStyle} badgeContent={50} max={10} icon={'moon'}></Badge>
  </div>
);

export const VariantBadge = () => (
  <div>
    <Badge style={badgeStyle} badgeContent={50} icon={'mail'}></Badge>
    <Badge
      style={badgeStyle}
      badgeContent={50}
      max={10}
      icon={'star'}
      variant={'dot'}
    ></Badge>
    <Badge
      style={badgeStyle}
      badgeContent={50}
      color={'error'}
      max={10}
      variant={'dot'}
    ></Badge>
  </div>
);
