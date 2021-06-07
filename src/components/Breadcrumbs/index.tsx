import Bread, { IBreadProps } from './Breadcrumbs';
import BreadOption, { nativeBreadOptionProps } from './BreadcrumbsOption';
import React, { FC } from 'react';
export type TBreadProps = FC<IBreadProps> & {
    Option: FC<nativeBreadOptionProps>
}
const TransBread = Bread as TBreadProps
TransBread.Option = BreadOption;

export default TransBread;