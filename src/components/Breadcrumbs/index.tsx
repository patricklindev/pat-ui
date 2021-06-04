import Bread, { IBreadProps } from './Breadcrumbs';
import BreadOption, { nativeBreadOptionProps } from './BreadcrumbsOption';
import React from 'react';

export type TBreadProps = React.FC<IBreadProps> & {
    Option: React.FC<nativeBreadOptionProps>
}

const TransBread = Bread as TBreadProps
TransBread.Option = BreadOption;
export default TransBread;