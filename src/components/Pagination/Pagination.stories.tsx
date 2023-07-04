import React,{useState} from 'react';
import Pagination from './Pagination';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Pagination',
    component: Pagination,
}

export const DefaultPagination = () => (
    <div>
        <h1>Pagination</h1>
        <p>A standard pagination field.</p>
       <Pagination count={10}></Pagination>
    </div>
);

export const ColorPagination = () => (
    <div>
        <h1>Pagination</h1>
        <p>A standard pagination field.</p>
        <Pagination count={10}></Pagination>
        <br/>
        <br/>
        <h1>Primary</h1>
        <p>A hovered and focused button with primary color</p>
        <Pagination count={10} color="primary"></Pagination>
        <br/>
        <br/>
        <h1>Secondary</h1>
        <p>A hovered and focused button with secondary color</p>
        <Pagination count={10} color="secondary"></Pagination>
        <h1>Primary-Outlined</h1>
        <p>A hovered and focused outlined button with primary color</p>
        <Pagination count={10} color="primary" variant="outlined"></Pagination>
        <br/>
        <br/>
        <h1>Secondary</h1>
        <p>A hovered and focused outlined button with secondary color</p>
        <Pagination count={10} color="secondary" variant="outlined"></Pagination>


    </div>
);
export const SizePagination = () => (
    <div>
        <h1>Size</h1>
        <p>A Pagination can show with different sizes.</p>
        <Pagination count={10}></Pagination>
        <br/>
        <br/>
        <h1>Large</h1>
        <p>A Pagination can show with large size.</p>
        <Pagination count={10} size="large"></Pagination>
        <br/>
        <br/>
        <h1>Medium</h1>
        <p>A Pagination can show with medium size.</p>
        <Pagination count={10} size="medium"></Pagination>
        <br/>
        <br/>
        <h1>Small</h1>
        <p>A Pagination can show with small size.</p>
        <Pagination count={10} size="small"></Pagination>
        <br/>
        <br/>
    </div>
);
export const ShapePagination = () => (
    <div>
        <h1>Rounded</h1>
        <p>A Pagination can show with rounded shape.</p>
        <Pagination count={10} shape="rounded"></Pagination>
        <br/>
        <br/>
        <h1>Circular</h1>
        <p>A Pagination can show with circular shape.</p>
        <Pagination count={10} shape="circular"></Pagination>
        <br/>
        <br/>
    </div>
);
export const CountPagination = () => (
    <div>
        <h1>Count</h1>
        <p>This is to specify how many pages in total</p>
        <Pagination count={10}></Pagination>
        <br/>
        <br/>
        <h1>Boundry Count</h1>
        <p>This is to specify that how many pages would show around the boundry</p>
        <Pagination count={10} boundryCount={3} page={5}></Pagination>
        <br/>
        <br/>
        <h1>Siblings Count</h1>
        <p>This is to specify that how many pages would show around the current page</p>
        <Pagination count={10} siblingCount={2}></Pagination>
        <br/>
        <br/>
        <h1>Default Page</h1>
        <p>This is to specify where is the current page when you first erender</p>
        <Pagination count={10} defaultPage={2}></Pagination>
        <br/>
        <br/>
    </div>
);
export const DisabledPagination = () => (
    <div>
        <h1>Disabled</h1>
        <p>A Pagination can show that it is disabled.</p>
        <Pagination count={10} disabled></Pagination>
        <br/>
        <br/>
    </div>
);
export const ButtonPagination = ()=>(
    <div>
        <h1>Show First Button</h1>
        <p>This is to show the button which could navigate to the first page.</p>
        <Pagination count={10} showFirstButton></Pagination>
        <h1>Show Last Button</h1>
        <p>This is to show the button which could navigate to the last page.</p>
        <Pagination count={10} showLastButton></Pagination>
        <h1>Hide Previous Button</h1>
        <p>This is to hide the button which could navigate to the previous page.</p>
        <Pagination count={10} hidePrevButton></Pagination>
        <h1>Hide Next Button</h1>
        <p>This is to hide the button which could navigate to the next page.</p>
        <Pagination count={10} hideNextButton></Pagination>
    </div>
)
export const FunctionPagination = () =>{
    const [page,setPage] = useState(1);
    return(
        <div>
        <h1>onChange</h1>
        <p>This is to let the pagination react when the page is changed</p>
        <Pagination count={10} onChange={()=>{console.log('changed')}}></Pagination>
        <h1>page</h1>
        <p>This is to show the current page</p>
        <p>page:{page}</p>
        <Pagination count={10} page={page} onChange={(p:number)=>{setPage(p)}}></Pagination>
    </div>
    )
}