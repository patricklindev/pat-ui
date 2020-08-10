import React ,{ FC } from 'react';

import {
    PatShorthandContent,
  } from './Utils/Util';

  export interface ListContentProps {
    [key: string] : any;

    /** render */
    as?: any;

    /** html sub-content */
    children?: React.ReactNode;

    /** class */
    className?: string;

    /** content */
    content?: PatShorthandContent;

  }

  declare const ListContent: FC<ListContentProps>;

  export default ListContent;