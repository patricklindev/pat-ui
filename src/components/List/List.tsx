import React, { FC, ReactElement, cloneElement, CSSProperties } from 'react';
import { classNames } from '../../utils/classNames';
import PropTypes from "prop-types";

import ListItem, { PatListItemProps } from './ListItem';
import ListContent, { ListContentProps } from './ListContent';

import _ from 'lodash';

import {
    PatShorthandCollection,
    PatShorthandContent,
} from './Utils/Util';

//import { isNil } from './Utils/childrenUtils';
import getElementType from './Utils/getElementType';

export interface PatListProps {

    /** element type declaration */
    as?: any;

    /** classes */
    className?: string;

    /** content */
    children?: ReactElement | ReactElement[];

    /** Shorthand for content */
    content?: PatShorthandContent;

    /** shorthand array of props */
    items?: PatShorthandCollection<PatListItemProps>;

    /** format the list to appear horizontally */
    horizontal?: boolean;

    /** For navigation link usage */
    link?: boolean;

    /** mark item with bullet ahead */
    //selection?: boolean | 'very';

    /** bulleted */
    //bulleted?: boolean;

}



export interface ListComponent {
    Content: typeof ListContent;
    Item: typeof ListItem;
}



export const List: FC<PatListProps> & ListComponent = (props) => {

    
    //export const List: ListComponent = (props) => {
    // declare props
    const {
        as, className, children, content, items, link, horizontal, ...rest
    } = props;

    const styleClasses = classNames('list');

    // check if there is any children component
    const ElementType = getElementType(List, props);
    let list;




    // check if there is any child element

    if (children) {
        list = (
            <ElementType className={styleClasses} {...rest}>
                {children ? React.Children.map(children, (child: ReactElement) =>
                    cloneElement(child, { link, horizontal })
                )
                    : children}
            </ElementType>
        )
    }
    // use content
    else if (content) {
        list = (
            <ElementType className={styleClasses} {...rest}>
                ???
            </ElementType>
        )
    }
    // use items if there is no children
    else if (items) {
        list = (
            <ElementType className={styleClasses} {...rest}>
                {props.items?.map((item, i) => (
                    <ListItem horizontal={horizontal} link={link} key={i}>
                        {item}
                    </ListItem>
                ))}
            </ElementType>
        )
    }
    else {
        list = (
            <div className={styleClasses}>
                dude u r screwed
            </div>
        )
    }





    return list;
}

List.Item = ListItem;
List.Content = ListContent;


List.defaultProps = {
    link: false,
};

export default List;

//declare const List: ListComponent;

//export default List;

// type NativeListProps = IListProps & React.OlHTMLAttributes<HTMLLIElement>;
// type PatListProps = NativeListProps;

// const List: React.FC<ListProps> = (props) => {
//     const { children, className, items, ...rest } = props;

//     let styleClasses = classNames('list', {

//     });

//     // check if class name is provided
//     if (className) {
//         styleClasses += ' ' + className;
//     }


//     let list;
//     list = (
//         <div className={styleClasses}>
//             {props.children}
//             {props.items!.map(item =>
//                 <div>
//                     {item}
//                 </div>
//             )}
//         </div>
//     )

//     return list;
// }

// List.propTypes = {
//     items: PropTypes.array.isRequired
// };
