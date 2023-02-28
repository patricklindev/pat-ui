import {Pagination} from './Pagination';
import React from "react";

export default {
    title: 'Pagination',
    component: Pagination,
};

export const DefaultPagination = () => (
    <Pagination currentPage={6} pageSize={10} total={100}></Pagination>
);

export const DifferentColorPagination = () => (
    <div>
        <Pagination type="primary" currentPage={6} pageSize={10} total={100}></Pagination>
        <Pagination type="secondary" currentPage={6} pageSize={10} total={100}></Pagination>
        <Pagination type="danger" currentPage={6} pageSize={10} total={100}></Pagination>
    </div>

);