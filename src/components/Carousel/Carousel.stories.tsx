import React from 'react';
import { action } from '@storybook/addon-actions';
import Carousel from './Carousel';

export default {
  title: 'Carousel',
  component: Carousel,
};

const imageSrc4 = [
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp',
];

const imageSrc2 = [
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
];

const imageSrc1 = [
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
];

const buttonStyle: React.CSSProperties = {
  marginRight: '5px',
  marginTop: '5px',
};

export const DefaultCarousel = () => (
  <div>
    <p>More than 2 images</p>
    <Carousel
      autoPlay={false}
      style={{
        width: 600,
        height: 240,
      }}
    >
      {imageSrc4.map((src, index) => (
        <div key={index}>
          <img src={src} style={{ width: '100%' }} />
        </div>
      ))}
    </Carousel>

    <br />

    <p>2 images</p>
    <Carousel
      autoPlay={false}
      style={{
        width: 600,
        height: 240,
      }}
    >
      {imageSrc2.map((src, index) => (
        <div key={index}>
          <img src={src} style={{ width: '100%' }} />
        </div>
      ))}
    </Carousel>

    <br />

    <p>1 image</p>
    <Carousel
      autoPlay={false}
      style={{
        width: 600,
        height: 240,
      }}
    >
      {imageSrc1.map((src, index) => (
        <div key={index}>
          <img src={src} style={{ width: '100%' }} />
        </div>
      ))}
    </Carousel>
  </div>
);

export const AutoPlayCarousel = () => (
  <div>
    <p>
      When mouse moves into the Carousel component, auto play is paused. When
      mouse moves out of Carousel component again, auto play resumes.{' '}
    </p>
    <Carousel
      autoPlay={true}
      style={{
        width: 600,
        height: 240,
      }}
    >
      {imageSrc4.map((src, index) => (
        <div key={index}>
          <img src={src} style={{ width: '100%' }} />
        </div>
      ))}
    </Carousel>
  </div>
);

export const DiffSizeCarousel = () => (
  <div>
    <Carousel
      autoPlay={true}
      style={{
        width: 400,
        height: 200,
      }}
    >
      {imageSrc4.map((src, index) => (
        <div key={index}>
          <img src={src} style={{ width: '100%' }} />
        </div>
      ))}
    </Carousel>

    <br />

    <Carousel
      autoPlay={true}
      style={{
        width: 600,
        height: 240,
      }}
    >
      {imageSrc4.map((src, index) => (
        <div key={index}>
          <img src={src} style={{ width: '100%' }} />
        </div>
      ))}
    </Carousel>
  </div>
);
