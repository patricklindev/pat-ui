import React from 'react';

import { render, fireEvent, screen } from '@testing-library/react';
import Carousel from './Carousel';

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

describe('Carousel', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <Carousel
        style={{
          width: 600,
          height: 240,
        }}
      >
        {imageSrc4.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              style={{
                width: '100%',
              }}
            />
          </div>
        ))}
      </Carousel>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('If user passes Carousel component N inner elements following the correct syntax as below. If N>=3, it should render a carousel that has 3 images and N dots', () => {
    const wrapper = render(
      <Carousel
        style={{
          width: 600,
          height: 240,
        }}
      >
        {imageSrc4.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              style={{
                width: '100%',
              }}
            />
          </div>
        ))}
      </Carousel>
    );

    const container = document.querySelector('.Carousel');
    expect(container).toBeInTheDocument();

    const dots = document.querySelector('.Carousel__dots');
    expect(dots).toBeInTheDocument();
    expect(dots?.children.length).toEqual(4);

    const imgs = document.querySelector('.Carousel__img-wrapper');
    expect(imgs).toBeInTheDocument();
    expect(imgs?.children.length).toEqual(3);
  });

  it('If user passes Carousel component N inner elements following the correct syntax as below. If N=2, it should render a carousel that has 2 images and N dots', () => {
    const wrapper = render(
      <Carousel
        style={{
          width: 600,
          height: 240,
        }}
      >
        {imageSrc2.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              style={{
                width: '100%',
              }}
            />
          </div>
        ))}
      </Carousel>
    );

    const container = document.querySelector('.Carousel');
    expect(container).toBeInTheDocument();

    const dots = document.querySelector('.Carousel__dots');
    expect(dots).toBeInTheDocument();
    expect(dots?.children.length).toEqual(2);

    const imgs = document.querySelector('.Carousel__img-wrapper');
    expect(imgs).toBeInTheDocument();
    expect(imgs?.children.length).toEqual(2);
  });

  it('If user passes Carousel component N inner elements following the correct syntax as below. If N=1, it should render a carousel that has 1 image and N dots', () => {
    const wrapper = render(
      <Carousel
        style={{
          width: 600,
          height: 240,
        }}
      >
        {imageSrc1.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              style={{
                width: '100%',
              }}
            />
          </div>
        ))}
      </Carousel>
    );

    const container = document.querySelector('.Carousel');
    expect(container).toBeInTheDocument();

    const dots = document.querySelector('.Carousel__dots');
    expect(dots).toBeInTheDocument();
    expect(dots?.children.length).toEqual(1);

    const imgs = document.querySelector('.Carousel__img-wrapper');
    expect(imgs).toBeInTheDocument();
    expect(imgs?.children.length).toEqual(1);
  });
});
