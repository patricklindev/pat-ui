import React from 'react';
import {Pagination} from "../Pagination";
import {action} from '@storybook/addon-actions';

export default {
    title: 'Pagination',
    component: Pagination,
}

export const DefaultPagination = () => (
    <div>
        <h1>Pagination</h1>
        <p>A standard input field.</p>
        <Pagination count={20} page={10} siblingCount={1} size={'default'} disabled={false} color={'secondary'} shape={'round'}/>
    </div>
);
//
// export const TypesPagination = () => (
//     <div>
//         <h1>Focus</h1>
//         <p>An input field can show a user is currently interacting with it.</p>
//             <Pagination count={20} page={10} siblingCount={1}  />
//     </div>
// );
//
// export const DisabledErrorPagination = () => (
//     <div>
//         <h1>Disabled</h1>
//         <p>An input field can show that it is disabled.</p>
//             <Pagination count={20} page={10} siblingCount={1}  />
//             <br/>
//         <br/>
//         <h1>Error</h1>
//         <p>An input field can show that the data contains errors.</p>
//             <Pagination count={20} page={10} siblingCount={1}  />
//
//     </div>
// );
//
// export const LoadingPagination = () => (
//     <div>
//         <h1>Loading</h1>
//         <p>An icon input field can show that it is currently loading data.</p>
//             <Pagination count={20} page={10} siblingCount={1}  />
//         <br/>
//         <br/>
//             <Pagination count={20} page={10} siblingCount={1}  />
//         <br/>
//         <br/>
//         <p>An input field can show that it is currently loading data without an icon, too.</p>
//             <Pagination count={20} page={10} siblingCount={1}  />
//     </div>
// );
//
// export const IconPagination = () => (
//     <div>
//         <h1>ICON</h1>
//         <p>An input can be formatted with an icon.</p>
//             <Pagination count={20} page={10} siblingCount={1}  />
//         <br/>
//         <br/>
//         <p>You can position the icon</p>
//             <Pagination count={20} page={10} siblingCount={1}  />
//         <br/>
//         <br/>
//         <p>You can pass an Icon props object.</p>
//             <Pagination count={20} page={10} siblingCount={1}  />
//
//     </div>
// );
//
// export const SizePagination = () => (
//     <div>
//             <Pagination count={20} page={10} siblingCount={1}  />
//     </div>
// );
