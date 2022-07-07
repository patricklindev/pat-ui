// import React from 'react';

// import { render, fireEvent } from '@testing-library/react';
// import Dialog, { PatDialogProps } from './Dialog';

// const wrapper = render(<Dialog dialogTitle='A Title' dialogParagraph='some text here'
//     id='theIdis'>
//     example
// </Dialog>)

// const element = wrapper.queryByText("example") as HTMLElement
// const title = wrapper.queryByText('A Title') as HTMLElement
// const paragraph = wrapper.queryByText('some text here') as HTMLElement


// // test("className strings", ()=>{

// //     expect(Dialog.defaultProps).toContain({"dialogType": "alert"})
// // })

// test("className and Ids", () => {

//     expect(element.tagName).toBe('DIALOG')
//     expect(element.firstChild).toBe(title)
//     expect(element.children[1]).toBe(paragraph)
//     expect(title.tagName).toBe('H3')
//     //    expect(exampleOne).toHaveProperty('className')
// })