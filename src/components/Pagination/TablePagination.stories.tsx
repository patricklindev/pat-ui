import React from 'react';
import TablePagination from './TablePagination';
// import { action } from '@storybook/addon-actions';

export default {
  title: 'TablePagination',
  component: TablePagination,
};

export const DefaultTablePagination = () => (
  <div>
    <h1>TablePagination</h1>
    <p>A standard TablePagination field.</p>
    <TablePagination count={99} />
  </div>
);
