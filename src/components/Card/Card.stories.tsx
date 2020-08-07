import React from 'react';
import { action } from '@storybook/addon-actions';
import Card from './Card';

export default {
  title: 'Card',
  component: Card,
};

export const DefaultCard = () => (
  <Card
    onClick={action('Default Button clicked')}
    src={'https://via.placeholder.com/150'}
  >
    Default Card
  </Card>
);

export const DiffSizeCard = () => (
  <div>
    <Card
      onClick={action('Default Button clicked')}
      src={'https://via.placeholder.com/150'}
      cardSize='sm'
    >
      Small Card
    </Card>

    <Card
      onClick={action('Default Button clicked')}
      src={'https://via.placeholder.com/150'}
      cardSize='lg'
    >
      Large Card
    </Card>
  </div>
);
export const DiffTypeCard = () => (
  <div>
    <Card
      onClick={action('Default Button clicked')}
      src={'https://via.placeholder.com/150'}
      cardType='horizontal'
    >
      Horizontal Card
    </Card>
    <Card
      onClick={action('Default Button clicked')}
      src={'https://via.placeholder.com/150'}
      cardType='circledImage'
    >
      Circled Image Card
    </Card>
    <Card
      onClick={action('Default Button clicked')}
      src={'https://via.placeholder.com/150'}
      cardType='noImage'
    >
      No Image Card
    </Card>
    <Card
      onClick={action('Default Button clicked')}
      src={'https://via.placeholder.com/150'}
      cardType='largeImage'
    >
      Large Image Card
    </Card>
  </div>
);
export const DiffThemeCard = () => (
  <div>
    <Card
      onClick={action('Dark Button clicked')}
      src={'https://via.placeholder.com/150'}
      cardTheme='dark'
    >
      Dark Theme Card
    </Card>

    <Card
      onClick={action('Purple Button clicked')}
      src={'https://via.placeholder.com/150'}
      cardTheme='purple'
    >
      Purple Theme Card
    </Card>
    <Card
      onClick={action('Yellow Button clicked')}
      src={'https://via.placeholder.com/150'}
      cardTheme='yellow'
    >
      Yellow Theme Card
    </Card>
    <Card
      onClick={action('Blue Button clicked')}
      src={'https://via.placeholder.com/150'}
      cardTheme='blue'
    >
      Blue Theme Card
    </Card>
  </div>
);
