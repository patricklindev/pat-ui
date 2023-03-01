import {Pagination} from './Pagination';
import React from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Pagination',
    component: Pagination,
};

export const DefaultPagination = () => (

    <Pagination currentPage={6} pageSize={10} total={100}></Pagination>
);

export const DifferentColorPagination = () => (
    <div>
        <Pagination type="primary" currentPage={6} pageSize={10}
                    total={100}></Pagination>
        <Pagination type="secondary" currentPage={6} pageSize={10} total={100}></Pagination>
        <Pagination type="danger" currentPage={6} pageSize={10} total={100}></Pagination>
    </div>

);

export const DifferentSizePagination = () => (
    <div>
        <Pagination size="sm" currentPage={6} pageSize={10}
                    total={100}></Pagination>
        <Pagination currentPage={6} pageSize={10}
                    total={100}></Pagination>
        <Pagination size="lg" currentPage={6} pageSize={10}
                    total={100}></Pagination>
    </div>

);

export const PaginationWithCallback = () => (
    <div>
        <Pagination type="primary" onChange={action('currentPage')} currentPage={6} pageSize={10}
                    total={100}></Pagination>
        <Pagination type="secondary" onChange={action('currentPage')} currentPage={6} pageSize={10}
                    total={100}></Pagination>
        <Pagination type="danger" onChange={action('currentPage')} currentPage={6} pageSize={10}
                    total={100}></Pagination>
    </div>

);