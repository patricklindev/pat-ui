import React, {
  FC,
  CSSProperties,
  useState,
  Children,
  ReactElement,
  cloneElement,
  ReactNode,
} from 'react';

import { IListOptionProps } from './ListOption';

export interface IListProps {
  children?: | ReactElement<IListOptionProps> | ReactElement<IListOptionProps>[];
  className?: string;
  style?: CSSProperties;
}


const List: FC<IListProps> = (props) => {
  const { className, children, style } = props;

  // const [currentActiveOption, setCurrentActiveOption] = useState(
  // )



  return (
    <div className={
      className ? `list__wrapper ${className}` : 'list__wrapper'
    }
      style={style}
    >
      <div></div>    
    </div>
  )
}

export default List;