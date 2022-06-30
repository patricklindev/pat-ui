import React from 'react';
import Example from './Example';
// SECTION 1 Import your component and REACT libary

//SECTION 2: Define default render 
export default {
    title: 'Example',
    component: Example
}

//SECTION 3: Define what is shown on Storybook

export const DefaultExample = () => (
    <div>
        <Example
            exampleOptions={'Option3'}
        ></Example>
    </div>
)