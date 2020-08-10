import React, { FC, ReactElement, cloneElement, CSSProperties } from 'react';
import PropTypes from "prop-types";
import { classNames } from '../../utils/classNames';



import {

  PatShorthandItem,

} from './Utils/Util';

import { ListContentProps } from "./ListContent";

import './_ListItem.scss';

export interface PatListItemProps {
  [key: string]: any;

  /** content */
  children?: React.ReactNode;
  //children?: ReactElement | ReactElement[];

  /** classes */
  className?: string;

  /** content */
  content?: PatShorthandItem<ListContentProps>;

  /** decide if the item is active */
  active?: boolean;

  link?: boolean;

  horizontal?: boolean;

}

export const ListItem: FC<PatListItemProps> = (props) => {
  // declare props
  const {
    className, children, content, active, link, horizontal, ...rest
  } = props;

  const activeFlag = active ? 'activated' : 'deactivated';

  const styleClasses = classNames('list-item', activeFlag);

  let listItem;

  const ElementType = horizontal ? 'span' : 'div';
  const HrefType = link ? 'a' : 'div';
  

  if (children) {
    listItem = (
      <ElementType className={styleClasses}>
        {/* {link?         <HrefType href='#'>
          {children}
        </HrefType> : } */}
        <HrefType href='#'>
          {children}
        </HrefType>
                        {/* {children ? React.Children.map(children, (child: ReactElement) =>
                    cloneElement(child, { link, horizontal })
                )
                    : children} */}
      </ElementType>
    )
  }
  else {
    listItem = (
      <ElementType className={styleClasses}>
        <HrefType href='#'>
          {content}
        </HrefType>
      </ElementType>
    )
  }


  // if (link) {
  //   if(children) {
  //     listItem = (
  //       <a href="#" className={styleClasses}>
  //         {children}
  //       </a>
  //     )
  //   }
  //   else{
  //     listItem = (
  //       <a href="#" className={styleClasses}>
  //         {content}
  //       </a>
  //     )
  //   }
  // }
  // else{
  //   if(children) {
  //     listItem = (
  //       <div className={styleClasses}>
  //         {children}
  //       </div>
  //     )
  //   }
  //   else{
  //     listItem = (
  //       <div className={styleClasses}>
  //         {content}
  //       </div>
  //     )
  //   }
  // }



  return listItem;

}

ListItem.defaultProps = {
  active: true,
  link: false,
};

//declare const ListItem: React.StatelessComponent<ListItemProps>;

// export default ListItem

// export const ListItem: React.StatelessComponent<ListItemProps> = (props) => {
//   return (
//     <div className="item">
//       <span>{props.name}</span>
//     </div>
//   );
// }

// ListItem.propTypes = {
//   name: PropTypes.string.isRequired
// };

export default ListItem;