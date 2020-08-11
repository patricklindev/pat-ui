import React from 'react';
import { action } from '@storybook/addon-actions';
import Card from './Card';
import { Icon } from '../../index';

export default {
  title: 'Card',
  component: Card,
};

export const DefaultCard = () => (
  <div>
    <Card
      btnOnClick={action('Default Button clicked')}
      cardImgSrc={'https://via.placeholder.com/150'}
      cardParagraph={
        <div>
          <Icon disabled={false} loading={false} name='home' size='tiny' />{' '}
          <span>
            You can put any ReactNode including ReactElement, ReactFragment,
            string, number, array of ReactNodes, null, undefined, boolean in the
            card content{' '}
          </span>
        </div>
      }
      cardTitle={'Default Card'}
      buttonTitle={'show more info'}
    ></Card>
  </div>
);

export const DiffModeCard = () => (
  <div>
    <Card
      btnOnClick={action('Default Button clicked')}
      cardImgSrc={'https://via.placeholder.com/150'}
      cardParagraph={
        'Some quick example text to build on the card title and make up the bulk of the card content.'
      }
      cardTitle={'Default Card'}
      buttonTitle={'show more info'}
    ></Card>
    <br></br>
    <Card
      btnOnClick={action('Default Button clicked')}
      cardImgSrc={'https://via.placeholder.com/150'}
      cardParagraph={
        'Some quick example text to build on the card title and make up the bulk of the card content.'
      }
      cardTitle={'Horizontal Card'}
      buttonTitle={'show more info'}
      cardMode='horizontal'
    ></Card>
  </div>
);

export const DiffTypeCard = () => (
  <div>
    <Card
      btnOnClick={action('Default Button clicked')}
      cardImgSrc={'https://via.placeholder.com/150'}
      cardParagraph={
        'Some quick example text to build on the card title and make up the bulk of the card content.'
      }
      cardTitle={'Circle Image Card'}
      buttonTitle={'show more info'}
      cardType='circledImage'
    ></Card>
    <br></br>
    <Card
      btnOnClick={action('Default Button clicked')}
      cardImgSrc={'https://via.placeholder.com/150'}
      cardParagraph={
        'Some quick example text to build on the card title and make up the bulk of the card content.'
      }
      cardTitle={'No Image Card'}
      buttonTitle={'show more info'}
      cardType='noImage'
    ></Card>
    <br></br>
    <Card
      btnOnClick={action('Default Button clicked')}
      cardImgSrc={'https://via.placeholder.com/150'}
      cardTitle={'Large Image Card'}
      cardType='largeImage'
    ></Card>
  </div>
);
export const DiffThemeCard = () => (
  <div>
    <Card
      btnOnClick={action('Dark Button clicked')}
      cardImgSrc={'https://via.placeholder.com/150'}
      cardTitle={'Primary Theme Card'}
      buttonTitle={'show more info'}
      cardTheme='primary'
      cardParagraph={
        'Some quick example text to build on the card title and make up the bulk of the card content.'
      }
    ></Card>
    <br></br>
    <Card
      btnOnClick={action('Dark Button clicked')}
      cardImgSrc={'https://via.placeholder.com/150'}
      cardTitle={'Dark Theme Card'}
      buttonTitle={'show more info'}
      cardTheme='dark'
      cardParagraph={
        'Some quick example text to build on the card title and make up the bulk of the card content.'
      }
    ></Card>
    <br></br>
    <Card
      btnOnClick={action('Purple Button clicked')}
      cardImgSrc={'https://via.placeholder.com/150'}
      cardTitle={'Purple Theme Card'}
      buttonTitle={'show more info'}
      cardTheme='purple'
      cardParagraph={
        'Some quick example text to build on the card title and make up the bulk of the card content.'
      }
    ></Card>
    <br></br>
    <Card
      btnOnClick={action('Yellow Button clicked')}
      cardImgSrc={'https://via.placeholder.com/150'}
      cardTitle={'Yellow Theme Card'}
      buttonTitle={'show more info'}
      cardTheme='yellow'
      cardParagraph={
        'Some quick example text to build on the card title and make up the bulk of the card content.'
      }
    ></Card>
    <br></br>
    <Card
      btnOnClick={action('Blue Button clicked')}
      cardImgSrc={'https://via.placeholder.com/150'}
      cardTitle={'Blue Theme Card'}
      buttonTitle={'show more info'}
      cardTheme='blue'
      cardParagraph={
        'Some quick example text to build on the card title and make up the bulk of the card content.'
      }
    ></Card>
  </div>
);

export const DiffSizeCard = () => (
  <div>
    <Card
      btnOnClick={action('Small Button clicked')}
      cardImgSrc={'https://via.placeholder.com/150'}
      cardParagraph={
        'Some quick example text to build on the card title and make up the bulk of the card content.'
      }
      cardTitle={'Small Card'}
      cardSize='sm'
      buttonTitle={'show more info'}
    ></Card>
    <br></br>

    <Card
      btnOnClick={action('Large Button clicked')}
      cardImgSrc={'https://via.placeholder.com/150'}
      cardParagraph={
        'Some quick example text to build on the card title and make up the bulk of the card content.'
      }
      cardTitle={'Large Card'}
      cardSize='lg'
      buttonTitle={'show more info'}
    ></Card>

    <br></br>
    <Card
      btnOnClick={action('Large Button clicked')}
      cardImgSrc={'https://via.placeholder.com/150'}
      cardParagraph={
        <div>
          <Icon disabled={false} loading={false} name='home' />{' '}
          <span>this is a react node</span>
        </div>
      }
      cardTitle={'Large Card'}
      cardSize='sm'
      buttonTitle={'show more info'}
    ></Card>
  </div>
);
