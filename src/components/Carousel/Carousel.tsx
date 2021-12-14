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

  const timer: { current: any } = useRef(null);
  const timeout: { current: any } = useRef(null);

  useEffect(() => {
    //deal with change in props.style.width of Carousel. set --my-max-width when Carousel renders for the first time
    //and then listen to change in props.style.width to trigger update --my-max-width
    console.log('useeffect [props]');
    if (style) {
      if (style.width) {
        const root = document.documentElement;
        root.style.setProperty('--my-max-width', style.width + 'px');
      }
    }
    //deal with change in props.children of Carousel. set counter to 0 when Carousel renders for the first time.
    //and then listen to change in props change to trigger update counter to 0
    setCounter(0);
    setLength(Array.isArray(children) ? children.length : 1);

    //deal with props.autoPlay. If props.autoPlay===true, then
    if (props.autoPlay === true) {
      setPrevOrNextIsClicked('autoNext');
      timer.current = setInterval(() => {
        setCounter(
          (counter) =>
            (counter + 1) % (Array.isArray(children) ? children.length : 1)
        );
      }, 3000);
    }

    return () => {
      console.log('clear the timer');
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
      onMouseEnter={() => {
        console.log(
          '1onMouseEnter is triggerd. if props.autoPlay=true, the timer.current is cleared now'
        );
        if (props.autoPlay === true) {
          clearInterval(timer.current);
        }
      }}
      onMouseLeave={() => {
        console.log('2onMouseLeave is triggerd. if props.autoPlay=true, ');
        if (props.autoPlay === true) {
          if (prevOrNextIsClicked === 'prevIsClicked') {
            //clearTimeout first(clear the previous timeout) to deal with the case when 2 setTimout functions are invoked within 3s.
            //which is to say, when the last callback function is not pushed to main stack to execute, but a second callback is pushed to pool (possibly within 3s since the first setTimeout is invoked).
            //In this case, we will clear the previous setTimeout so the previous callback function will not be executed.
            //Otherwise, the previous callback function's reference will be lost. In this case, the setInterval function is invoked inside, if the previous setTimout's reference is lost and not cleared, setInterval will not called without our control.
            clearTimeout(timeout.current);
            timeout.current = setTimeout(() => {
              setCounter(
                (counter + 1) % (Array.isArray(children) ? children.length : 1)
              );
              setPrevOrNextIsClicked('autoNext');
              clearInterval(timer.current); //clear the previous timer if any
              //start a new interval
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
            clearInterval(timer.current); //clear the previous timer if any
            //start a new interval
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
