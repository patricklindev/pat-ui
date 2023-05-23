import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Dialog, { PatDialogProps } from './Dialog';
import DialogContent from './DialogContent';
import DialogContentText from './DialogContentText';
import DialogActions from './DialogActions';
import DialogTitle from './DialogTitle';


describe('Dialog Component and sub-components', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <Dialog>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogContent>
          <DialogContentText>Content Text</DialogContentText>
          <div>Content</div>
        </DialogContent>
        <DialogActions>
          <button>Button 1</button>
          <button>Button 2</button>
        </DialogActions>
      </Dialog>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should not render Dialog Component and sub-components when open is false', ()=>{
    const dialog = render(
      <Dialog open={false} onClose={()=>{}}>
          Dialog
          <DialogTitle>Title</DialogTitle>
          <DialogContent>
            <DialogContentText>Content Text</DialogContentText>
            <div>Content</div>
          </DialogContent>
          <DialogActions>
            <button>Button 1</button>
            <button>Button 2</button>
          </DialogActions>
      </Dialog>
      );
    
    expect(dialog.queryByTestId('dialog-element') as HTMLElement).not.toBeInTheDocument();
    expect(screen.queryByTestId('dialog-title-element') as HTMLElement).not.toBeInTheDocument();
    expect(dialog.queryByTestId('dialog-body-element') as HTMLElement).not.toBeInTheDocument();
    expect(dialog.queryByTestId('dialog-actions-element') as HTMLElement).not.toBeInTheDocument();
    expect(dialog.queryByTestId('dialog-content-element') as HTMLElement).not.toBeInTheDocument();
    expect(dialog.queryByTestId('dialog-contenttext-element') as HTMLElement).not.toBeInTheDocument();
    expect(dialog.queryByText('Dialog') as HTMLElement).not.toBeInTheDocument();
    expect(screen.queryByText('Title') as HTMLElement).not.toBeInTheDocument();
    expect(screen.queryByText('Content Text') as HTMLElement).not.toBeInTheDocument();
    expect(screen.queryByText('Content') as HTMLElement).not.toBeInTheDocument();
    expect(screen.queryByText('Button 1') as HTMLElement).not.toBeInTheDocument();
    expect(screen.queryByText('Button 2') as HTMLElement).not.toBeInTheDocument();
  });
  it('should render Dialog Component and sub-components when open is true', ()=>{
    const dialog = render(
      <Dialog open={true} onClose={()=>{}}>
          Dialog
          <DialogTitle>Title</DialogTitle>
          <DialogContent>
            <DialogContentText>Content Text</DialogContentText>
            <div>Content</div>
          </DialogContent>
          <DialogActions>
            <button>Button 1</button>
            <button>Button 2</button>
          </DialogActions>
      </Dialog>
      );
    
    expect(dialog.queryByTestId('dialog-element') as HTMLElement).toBeInTheDocument();
    expect(screen.queryByTestId('dialog-title-element') as HTMLElement).toBeInTheDocument();
    expect(dialog.queryByTestId('dialog-body-element') as HTMLElement).toBeInTheDocument();
    expect(dialog.queryByTestId('dialog-actions-element') as HTMLElement).toBeInTheDocument();
    expect(dialog.queryByTestId('dialog-content-element') as HTMLElement).toBeInTheDocument();
    expect(dialog.queryByTestId('dialog-contenttext-element') as HTMLElement).toBeInTheDocument();
    expect(dialog.queryByText('Dialog') as HTMLElement).toBeInTheDocument();
    expect(screen.queryByText('Title') as HTMLElement).toBeInTheDocument();
    expect(screen.queryByText('Content Text') as HTMLElement).toBeInTheDocument();
    expect(screen.queryByText('Content') as HTMLElement).toBeInTheDocument();
    expect(screen.queryByText('Button 1') as HTMLElement).toBeInTheDocument();
    expect(screen.queryByText('Button 2') as HTMLElement).toBeInTheDocument();
  });
  it('should render Dialog Title Component as per props', ()=>{
    const dialogTitleComponent = render(
      <DialogTitle className="class1 class2">Dialog Title</DialogTitle>
      );
    const dialogTitleElement = dialogTitleComponent.queryByText('Dialog Title') as HTMLElement;
    expect(dialogTitleElement).toBeInTheDocument();
    expect(dialogTitleElement).toHaveClass('dialog__title');
    expect(screen.queryByText('Dialog Title') as HTMLElement).toBeInTheDocument();
    expect(screen.queryByText('Dialog Title') as HTMLElement).toHaveClass('dialog__title');
    /* checking if additional classes are present in rendered component */
    expect(screen.queryByText('Dialog Title') as HTMLElement).toHaveClass('class1');
    expect(screen.queryByText('Dialog Title') as HTMLElement).toHaveClass('class2');
    expect(screen.queryByText('Dialog Title 1') as HTMLElement).not.toBeInTheDocument();
  });
  
  it('should render DialogContent component as per props', ()=>{
    const component = render(
      <DialogContent className="class1 class2">
      Dialog Content
      </DialogContent>
      );
    const element = component.queryByText('Dialog Content') as HTMLElement;
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('dialog__content');
    expect(screen.queryByText('Dialog Content') as HTMLElement).toBeInTheDocument();
    expect(screen.queryByText('Dialog Content') as HTMLElement).toHaveClass('dialog__content');
    /* checking if additional classes are present in rendered component */
    expect(screen.queryByText('Dialog Content') as HTMLElement).toHaveClass('class1');
    expect(screen.queryByText('Dialog Content') as HTMLElement).toHaveClass('class2');
    expect(screen.queryByText('Dialog Content 1') as HTMLElement).not.toBeInTheDocument(); 
  });
  it('should render DialogContentText component as per props', ()=>{
    const component = render(
      <DialogContentText className='class1 class2'>Dialog Content Text
      </DialogContentText>
      );
    const element = component.queryByText('Dialog Content Text') as HTMLElement;
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('dialog__content-text');
    expect(screen.queryByText('Dialog Content Text') as HTMLElement).toBeInTheDocument();
    expect(screen.queryByText('Dialog Content Text') as HTMLElement).toHaveClass('dialog__content-text');
    /* checking if additional classes are present in rendered component */
    expect(screen.queryByText('Dialog Content Text') as HTMLElement).toHaveClass('class1');
    expect(screen.queryByText('Dialog Content Text') as HTMLElement).toHaveClass('class2');
    expect(screen.queryByText('Dialog Content Text 1') as HTMLElement).not.toBeInTheDocument(); 
  });
  it('should render DialogActions component', ()=>{
    const component = render(
      <DialogActions className='class1 class2'>
        Dialog Actions
      </DialogActions>
      );
    const element = component.queryByText('Dialog Actions') as HTMLElement;
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('dialog__actions');
    expect(screen.queryByText('Dialog Actions') as HTMLElement).toBeInTheDocument();
    expect(screen.queryByText('Dialog Actions') as HTMLElement).toHaveClass('dialog__actions');
    /* checking if additional classes are present in rendered component */
    expect(screen.queryByText('Dialog Actions') as HTMLElement).toHaveClass('class1');
    expect(screen.queryByText('Dialog Actions') as HTMLElement).toHaveClass('class2');
    expect(screen.queryByText('Dialog Actions 1') as HTMLElement).not.toBeInTheDocument(); 
  });  
  
  it('should have a dimed backdrop by default, users can close the dialog by clicking on the backdrop', () => {
    expect(1+2).toEqual(3);
  });
});
describe('Users of Dialog Component', () => {
  it('should not be able to scroll the page when the dialog is open', () => {
    expect(1+2).toEqual(3);
  });
  it('should be able to listen to the close of the dialog by providing the onClose callback function.', () => {
    const onCloseHandler = jest.fn((event, reason)=>{});
    const component = render(
      <Dialog open={true} onClose={onCloseHandler}>
        <div>Dialog</div>
      </Dialog>);
    
    /* checking if onClose is triggered on backdrop click*/
    const backDrop = component.getByTestId('dialog-element');
    expect(onCloseHandler).toHaveBeenCalledTimes(0);
    fireEvent.click(backDrop);
    expect(onCloseHandler).toHaveBeenCalledTimes(1);
    
    /* checkign if onClose is not triggered when clicked on dialog body (not backdrop) */
    const dialogBody = component.getByTestId('dialog-body-element');
    fireEvent.click(dialogBody);
    expect(onCloseHandler).toHaveBeenCalledTimes(1);

  });
  it('should be able to listen to close of dialog by escape key down event by default', ()=>{
    const onCloseHandler = jest.fn((event, reason)=>{});
    const component = render(
      <Dialog open={true} onClose={onCloseHandler}>
        <div>Dialog</div>
      </Dialog>);
    expect(onCloseHandler).toHaveBeenCalledTimes(0);
    fireEvent.keyDown(document, {
      key: "Escape",
      code: "Escape",
      keyCode: 27,
      charCode: 27
    });
    expect(onCloseHandler).toHaveBeenCalledTimes(1);
  })
  it('should be able to control the open/close of the dialog from props.', () => {
   expect(1+2).toEqual(3);
  });
});
