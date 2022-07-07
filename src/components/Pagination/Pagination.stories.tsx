import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Pagination from './Pagination';

const paginationStyle: React.CSSProperties = {
    marginRight: '5px',
    marginTop: '20px',
  };

export default {
    title: "Pagination",
    component: Pagination
}

export const DefaultPagination = () => (
    <div>
        <Pagination style={paginationStyle} count={0} onChange={action('default Pagination changed')}/>
        <Pagination style={paginationStyle} count={1} onChange={action('default Pagination changed')}/>
        <Pagination style={paginationStyle} count={2} onChange={action('default Pagination changed')}/>
        <Pagination style={paginationStyle} count={10} onChange={action('default Pagination changed')}/>
    </div>
)

export const DiffTypePagination = () => (
    <div>
        <div>Outlined Pagination</div>
        <Pagination style={paginationStyle} type='outlined' count={10}/>
        <Pagination style={paginationStyle} color="secondary" type='outlined' count={10}/>
        <div style={paginationStyle}>Filled Pagination</div>
        <Pagination style={paginationStyle} type='filled' count={10}/>
        <Pagination style={paginationStyle} color="secondary" type='filled' count={10}/>
        <div style={paginationStyle}>Disabled Pagination</div>
        <Pagination style={paginationStyle} disabled type='outlined' count={10}/>
    </div>
)

export const DiffColorPagination = () => (
    <div>
        <Pagination style={paginationStyle} count={10} color="primary"/>
        <Pagination style={paginationStyle} count={10} color="secondary"/>
    </div>
)

export const DiffSizePagination = () => (
    <div>
        <Pagination style={paginationStyle} count={10} size="small"/>
        <Pagination style={paginationStyle} count={10} size="medium"/>
        <Pagination style={paginationStyle} count={10} size="large"/>
    </div>
)

export const ControlledPagination = () => {
    const [page, setPage] = useState<any>(1);
    const handleClick = (event: any, p: number) => {
        setPage(p);
        
    } 

    return <div>
                <div>Page: <input data-testid="input" defaultValue={1} onChange={(e: any) => isNaN(e.target.value) ? setPage(1) : setPage(parseInt(e.target.value))}></input></div>
                <Pagination style={paginationStyle}  count={10} page={page} onChange={handleClick}/>
            </div>
}

export const withDropdown = () => <Pagination style={paginationStyle} count={10} rowsPerPage={10} onChange={action('default Pagination changed')}/>