import React, { useState } from 'react';
import { JsxElement } from 'typescript';

interface ICarousel {
  children: JSX.Element | JSX.Element[];

  style?: object;
}

const Carousel: React.FunctionComponent<ICarousel> = (props: ICarousel) => {
  const [counter, setCounter] = useState(0);

  const { children } = props;
  const [length, setLength] = useState(
    Array.isArray(children) ? children.length : 1
  );
  let classNameList: string[] = [];
  console.log('c', children);

  const classNames = classNameList.join('');

  const handleClick = (event: React.MouseEvent) => {
    //console.log(event.currentTarget.id)
    setCounter(parseInt(event.currentTarget.id));
  };
  const handleClickPrev = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    } else {
      setCounter(length - 1);
    }
  };
  const handleClickNext = () => {
    if (counter < length - 1) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
  };

  //deal with children

  return children && Array.isArray(children) ? (
    <div
      className="Carousel"
      style={{
        ...props.style,
        backgroundImage: `url(${children[counter].props.children.props.src})`,
        backgroundSize: `${children[counter].props.children.props.style.width}`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <a className="prev" onClick={handleClickPrev}>
        &#10094;
      </a>
      <a className="next" onClick={handleClickNext}>
        &#10095;
      </a>
      <div className="center dots">
        {children.map((src, index) => (
          <span
            id={index.toString()}
            className={index === counter ? 'dot active' : 'dot'}
            onClick={handleClick}
          ></span>
        ))}
      </div>
    </div>
  ) : null;
};
export default Carousel;
