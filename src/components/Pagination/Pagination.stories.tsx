import React from 'react';
import { action } from '@storybook/addon-actions';
import Pagination from './Pagination';

export default {
    title: 'Pagination',
    component: Pagination
};


export const BasicPagination = () => (
    <div>
        <div>Default</div>
        <Pagination rowsPerPage={5} defaultpage={16} count={30}></Pagination>
        <div>Primary</div>
        <Pagination rowsPerPage={5} defaultpage={16} count={30} color='primary'></Pagination>
        <div>Secondary</div>
        <Pagination rowsPerPage={5} defaultpage={16} count={30} color='secondary'></Pagination>
        <div>Disabled</div>
        <Pagination rowsPerPage={5} defaultpage={16} count={30} disabled></Pagination>
    </div>
);


export const TablePagination = () => (
    <div>
        <Pagination rowsPerPage={5} defaultpage={16} count={30} TablePagination></Pagination>
    </div>
);