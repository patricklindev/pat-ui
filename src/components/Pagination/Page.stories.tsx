import React from 'react';

import Pagination from './Pagination';

export default {
    title: 'Pagination',
    component: Pagination,
};

export const DifferentThemesOfPagination = () => (
    <React.Fragment>
        <Pagination pageType={"primary"}>
            <Pagination.Item>Previous</Pagination.Item>
            <Pagination.Item>1</Pagination.Item>
            <Pagination.Item>2</Pagination.Item>
            <Pagination.Item>3</Pagination.Item>
            <Pagination.Item>Next</Pagination.Item>
        </Pagination>
        <br />
        <Pagination pageType={"secondary"}>
            <Pagination.Item>Previous</Pagination.Item>
            <Pagination.Item>1</Pagination.Item>
            <Pagination.Item>2</Pagination.Item>
            <Pagination.Item>3</Pagination.Item>
            <Pagination.Item>Next</Pagination.Item>
        </Pagination>
        <br />
        <div>
            <Pagination.Item>Previous</Pagination.Item>
            <Pagination.Item>1</Pagination.Item>
            <Pagination.Item>2</Pagination.Item>
            <Pagination.Item>3</Pagination.Item>
            <Pagination.Item>Next</Pagination.Item>
        </div>
    </React.Fragment>

);

export const DisabledPaginationItem = () => (
    <React.Fragment>
        <Pagination.Item >Previous</Pagination.Item>
        <Pagination.Item >1</Pagination.Item>
        <Pagination.Item disabled>2</Pagination.Item>
        <Pagination.Item>3</Pagination.Item>
        <Pagination.Item>Next</Pagination.Item>
    </React.Fragment>
);