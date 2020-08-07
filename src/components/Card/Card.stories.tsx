import React from 'react';
import { action } from '@storybook/addon-actions';
import Card from './Card';

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
        "Some quick example text to build on the card title and make up the bulk of the card's content."
      }
      cardTitle={'Default card'}
      buttonHref={'#'}
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
        "Some quick example text to build on the card title and make up the bulk of the card's content."
      }
      cardTitle={'Default card'}
      buttonHref={'#'}
      buttonTitle={'show more info'}
    ></Card>
    <Card
      btnOnClick={action('Default Button clicked')}
      cardImgSrc={'https://via.placeholder.com/150'}
      cardParagraph={
        "Some quick example text to build on the card title and make up the bulk of the card's content."
      }
      cardTitle={'Horizontal card'}
      buttonHref={'#'}
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
        "Some quick example text to build on the card title and make up the bulk of the card's content."
      }
      cardTitle={'Circled image card'}
      buttonHref={'#'}
      buttonTitle={'show more info'}
      cardType='circledImage'
    ></Card>
    <Card
      btnOnClick={action('Default Button clicked')}
      cardImgSrc={'https://via.placeholder.com/150'}
      cardParagraph={
        "Some quick example text to build on the card title and make up the bulk of the card's content."
      }
      cardTitle={'No image card'}
      buttonHref={'#'}
      buttonTitle={'show more info'}
      cardType='noImage'
    ></Card>
    <Card
      btnOnClick={action('Default Button clicked')}
      cardImgSrc={'https://via.placeholder.com/150'}
      cardTitle={'Large image card'}
      cardType='largeImage'
    ></Card>
  </div>
);
export const DiffThemeCard = () => (
  <div>
    <Card
      btnOnClick={action('Dark Button clicked')}
      cardImgSrc={'https://via.placeholder.com/150'}
      cardTitle={'Dark image card'}
      buttonHref={'#'}
      buttonTitle={'show more info'}
      cardTheme='dark'
      cardParagraph={
        "Some quick example text to build on the card title and make up the bulk of the card's content."
      }
    ></Card>

    <Card
      btnOnClick={action('Purple Button clicked')}
      cardImgSrc={'https://via.placeholder.com/150'}
      cardTitle={'Purple image card'}
      buttonHref={'#'}
      buttonTitle={'show more info'}
      cardTheme='purple'
      cardParagraph={
        "Some quick example text to build on the card title and make up the bulk of the card's content."
      }
    ></Card>
    <Card
      btnOnClick={action('Yellow Button clicked')}
      cardImgSrc={'https://via.placeholder.com/150'}
      cardTitle={'Yellow image card'}
      buttonHref={'#'}
      buttonTitle={'show more info'}
      cardTheme='yellow'
      cardParagraph={
        "Some quick example text to build on the card title and make up the bulk of the card's content."
      }
    ></Card>
    <Card
      btnOnClick={action('Blue Button clicked')}
      cardImgSrc={'https://via.placeholder.com/150'}
      cardTitle={'Blue image card'}
      buttonHref={'#'}
      buttonTitle={'show more info'}
      cardTheme='blue'
      cardParagraph={
        "Some quick example text to build on the card title and make up the bulk of the card's content."
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
        "Some quick example text to build on the card title and make up the bulk of the card's content."
      }
      cardTitle={'Small card'}
      buttonHref={'#'}
      cardSize='sm'
      buttonTitle={'show more info'}
    ></Card>

    <Card
      btnOnClick={action('Large Button clicked')}
      cardImgSrc={'https://via.placeholder.com/150'}
      cardParagraph={
        "Some quick example text to build on the card title and make up the bulk of the card's content."
      }
      cardTitle={'Large card'}
      buttonHref={'#'}
      cardSize='lg'
      buttonTitle={'show more info'}
    ></Card>
  </div>
);
