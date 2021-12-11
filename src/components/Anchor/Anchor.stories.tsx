import React from 'react';
import { action } from '@storybook/addon-actions';
import Anchor from './Anchor';

export default {
  title: 'Anchor',
  component: Anchor,
};

const marginSpacing: React.CSSProperties = {
  margin: '5px',
};

export const DefaultAnchor = () => (
  <div>
    This is default "
    <Anchor
      style={{ margin: '5px', color: 'red' }}
      onClick={action('default anchor clicked')}
      href="#"
    >
      anchor
    </Anchor>
    "
  </div>
);

export const DiffVariantAnchor = () => (
  <div>
    <Anchor style={marginSpacing} variant="h1" href="#">
      H1 Anchor
    </Anchor>
    <Anchor style={marginSpacing} variant="h2" href="#">
      H2 Anchor
    </Anchor>
    <Anchor style={marginSpacing} variant="h3" href="#">
      H3 Anchor
    </Anchor>
    <Anchor style={marginSpacing} variant="body1" href="#">
      body1 Anchor
    </Anchor>
    <Anchor style={marginSpacing} variant="body2" href="#">
      body2 Anchor
    </Anchor>
  </div>
);

export const DiffTypeAnchor = () => (
  <div>
    <h3>
      <Anchor style={marginSpacing} anchorType="default" href="#">
        Default Anchor
      </Anchor>
      <Anchor style={marginSpacing} anchorType="primary" href="#">
        Primary Anchor
      </Anchor>
      <Anchor style={marginSpacing} anchorType="secondary" href="#">
        Secondary Anchor
      </Anchor>
    </h3>
  </div>
);

export const DiffUnderlineAnchor = () => (
  <h3>
    <Anchor style={marginSpacing} underline="always" href="#">
      Underline always
    </Anchor>
    <Anchor style={marginSpacing} underline="hover" href="#">
      Underline on hover
    </Anchor>
    <Anchor style={marginSpacing} underline="none" href="#">
      Underline none
    </Anchor>
  </h3>
);
