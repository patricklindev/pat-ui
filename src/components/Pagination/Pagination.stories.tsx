import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Pagination from './Pagination';

export default {
    title: 'Pagination',
    component: Pagination
};


export const BasicPagination = () => (
    <div>
        <div>Default</div>
        <Pagination rowsPerPage={5} defaultpage={16} count={30} onChange={action('change page')}></Pagination>
        <div>Primary</div>
        <Pagination rowsPerPage={5} defaultpage={16} count={30} onChange={action('change page')} color='primary'></Pagination>
        <div>Secondary</div>
        <Pagination rowsPerPage={5} defaultpage={16} count={30} onChange={action('change page')} color='secondary'></Pagination>
        <div>Disabled</div>
        <Pagination rowsPerPage={5} defaultpage={16} count={30} onChange={action('change page')} disabled></Pagination>
    </div>
);

export const TablePagination = () => (
    <div>
        <div>This is a table pagination</div>
        <Pagination rowsPerPage={5} defaultpage={16} count={30} TablePagination onChange={action('change page')}></Pagination>
    </div>
);

export const Controlled = () => {
    const [page, setPage] = useState(1);
    const handleChange = (value: number) => {
        setPage(value);
    };
    return (
        <div>
            <div>This is a controlled pagiantion</div>
            <div>Page: {page}</div>
            <Pagination defaultpage={1} rowsPerPage={5} count={30} onChange={handleChange}></Pagination>
        </div>
    )
}