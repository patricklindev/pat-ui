import React, { useState, useEffect, useRef } from 'react';

export type AutoPlay = true | false;
export type styleType = { width?: number; height?: number };
export interface ICarouselProps {
  children: JSX.Element | JSX.Element[];
  style?: styleType;
  /* set autopplay */
  autoPlay?: AutoPlay;
}

export type PatCarouselProps = ICarouselProps;

export const Carousel: React.FunctionComponent<PatCarouselProps> = (
  props: PatCarouselProps
) => {
  const { children, style, autoPlay, ...rest } = props;

  const [counter, setCounter] = useState(0);
  const [length, setLength] = useState(
    Array.isArray(children) ? children.length : 1
  );
  const [prevOrNextIsClicked, setPrevOrNextIsClicked] = useState('');

  const timer = useRef(setInterval(() => {}, 0));

  const [update, forceUpdate] = useState(false);
  useEffect(() => {
    if (style) {
      if (style.width) {
        console.log(style.width);
        const root = document.documentElement;
        root.style.setProperty('--my-max-width', style.width + 'px');
        console.log(
          document.documentElement.style.getPropertyValue('--my-max-width')
        );

        forceUpdate((pre) => !pre);
      }
    }
  }, [props.style?.width]);

  useEffect(() => {
    if (style) {
      if (style.width) {
        console.log(style.width);
        const root = document.documentElement;
        root.style.setProperty('--max-width', style.width + 'px');
        console.log(
          document.documentElement.style.getPropertyValue('--max-width')
        );

        forceUpdate((pre) => !pre);
      }
    }

    setCounter(0);
    setLength(Array.isArray(children) ? children.length : 1);
    if (props.autoPlay) {
      setPrevOrNextIsClicked('autoNext');
      timer.current = setInterval(() => {
        setCounter(
          (counter) =>
            (counter + 1) % (Array.isArray(children) ? children.length : 1)
        );
      }, 3000);
    }

    return () => {
      clearInterval(timer.current);
    };
  }, [props]); //when props.children change, we should set counter=0. so change of props.children determine counter

  let classNameList: string[] = [];

  const classNames = classNameList.join('');

  const handleClick = (event: React.MouseEvent) => {
    setCounter(parseInt(event.currentTarget.id));
    if (parseInt(event.currentTarget.id) > counter) {
      setPrevOrNextIsClicked('nextIsClicked');
    } else {
      setPrevOrNextIsClicked('prevIsClicked');
    }
  };
  const handleClickPrev = () => {
    setPrevOrNextIsClicked('prevIsClicked');
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(length - 1);
    }
  };
  const handleClickNext = () => {
    setPrevOrNextIsClicked('nextIsClicked');
    if (counter < length - 1) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
  };

  function createNewReactElements(
    children: React.ReactElement[] | React.ReactElement
  ): (React.ReactElement | null)[] | React.ReactElement {
    if (Array.isArray(children)) {
      const length = children.length;
      if (length >= 3) {
        const result = children.map((item, index) => {
          if (index === counter - 1 || index === counter - 1 + length) {
            let result = React.cloneElement(item, {
              style: { display: 'block' },
              id: (function () {
                if (prevOrNextIsClicked === '') return 'Carousel__img__left';
                //trigger when next is clicked or when auto property
                else if (
                  prevOrNextIsClicked === 'nextIsClicked' ||
                  prevOrNextIsClicked === 'autoNext'
                )
                  return 'Carousel__img__center-to-left';
                //trigger when prev is clicked
                else if (prevOrNextIsClicked === 'prevIsClicked')
                  return 'Carousel__img__mostleft-to-left';
              })(),
            });

            return result;
          } else if (index === counter) {
            let result = React.cloneElement(item, {
              style: { display: 'block' },
              id: (function () {
                if (prevOrNextIsClicked === '') return 'Carousel__img__center';
                //trigger when prev is clicked
                else if (prevOrNextIsClicked === 'prevIsClicked')
                  return 'Carousel__img__left-to-center';
                //trigger when next is clicked or when auto property
                else if (
                  prevOrNextIsClicked === 'nextIsClicked' ||
                  prevOrNextIsClicked === 'autoNext'
                )
                  return 'Carousel__img__right-to-center';
              })(),
            });

            return result;
          } else if (index === counter + 1 || index === counter + 1 - length) {
            let result = React.cloneElement(item, {
              style: { display: 'block' },
              id: (function () {
                if (prevOrNextIsClicked === '') return 'Carousel__img__right';
                //trigger when prev is click
                else if (prevOrNextIsClicked === 'prevIsClicked')
                  return 'Carousel__img__center-to-right';
                //trigger when next is click or when auto property
                else if (
                  prevOrNextIsClicked === 'nextIsClicked' ||
                  prevOrNextIsClicked === 'autoNext'
                )
                  return 'Carousel__img__mostright-to-right';
              })(),
            });

            return result;
          } else {
            return null;
          }
        });
        return result;
      } else if (length === 2) {
        const result = children.map((item, index) => {
          if (index === counter) {
            return React.cloneElement(item, {
              style: { display: 'block' },
              id: (function () {
                if (prevOrNextIsClicked === '') return 'Carousel__img__center';
                //trigger when prev is clicked
                else if (prevOrNextIsClicked === 'prevIsClicked')
                  return 'Carousel__img__left-to-center';
                //trigger when next is clicked or when auto property
                else if (
                  prevOrNextIsClicked === 'nextIsClicked' ||
                  prevOrNextIsClicked === 'autoNext'
                )
                  return 'Carousel__img__right-to-center';
              })(),
            });
          } else {
            //the previous one or the next one of the index===counter one
            return React.cloneElement(item, {
              style: { display: 'block' },
              id: (function () {
                if (prevOrNextIsClicked === '') return 'Carousel__img__right';
                //trigger when prev is click
                else if (prevOrNextIsClicked === 'prevIsClicked')
                  return 'Carousel__img__center-to-right';
                //trigger when next is click or when auto property
                else if (
                  prevOrNextIsClicked === 'nextIsClicked' ||
                  prevOrNextIsClicked === 'autoNext'
                )
                  return 'Carousel__img__center-to-left';
              })(),
            });
          }
        });
        return result;
      } else {
        return children;
      }
    } else {
      return children;
    }
  }

  return children && Array.isArray(children) ? (
    <div
      className="Carousel"
      style={{
        ...props.style,
      }}
      onMouseOver={() => {
        if (props.autoPlay === true) {
          clearInterval(timer.current);
        }
      }}
      onMouseLeave={() => {
        if (props.autoPlay === true) {
          if (prevOrNextIsClicked === 'prevIsClicked') {
            setTimeout(() => {
              setCounter(
                (counter + 1) % (Array.isArray(children) ? children.length : 1)
              );
              setPrevOrNextIsClicked('autoNext');
              timer.current = setInterval(() => {
                setCounter(
                  (counter) =>
                    (counter + 1) %
                    (Array.isArray(children) ? children.length : 1)
                );
              }, 3000);
            }, 3000);
          } else {
            setPrevOrNextIsClicked('autoNext');
            timer.current = setInterval(() => {
              setCounter(
                (counter) =>
                  (counter + 1) %
                  (Array.isArray(children) ? children.length : 1)
              );
            }, 3000);
          }
        }
      }}
    >
      <div className="Carousel__img-wrapper">
        {createNewReactElements(children)}
      </div>

      <span className="Carousel__prev" onClick={handleClickPrev}>
        &#10094;
      </span>

      <span className="Carousel__next" onClick={handleClickNext}>
        &#10095;
      </span>

      <div className="Carousel__center Carousel__dots">
        {children.map((src, index) => (
          <span
            key={index}
            id={index.toString()}
            className={
              index === counter
                ? 'Carousel__dot Carousel__dot-active'
                : 'Carousel__dot'
            }
            onClick={handleClick}
          ></span>
        ))}
      </div>
    </div>
  ) : null;
};

Carousel.defaultProps = {
  autoPlay: false,
};
export default Carousel;
