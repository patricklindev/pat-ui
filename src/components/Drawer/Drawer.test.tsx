import React from 'react';

import {Drawer} from './Drawer';

import { fireEvent, render, screen } from '@testing-library/react';

describe('Drawer', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Drawer />);
    expect(asFragment()).toMatchSnapshot();
  });


  it('Developers can control the open state of the component from props.', () => {
    render(<Drawer open={true} />);
    const drawerElement = screen.getByTestId('drawer');
    expect(drawerElement).toHaveClass('drawer-left-open');
    expect(drawerElement).not.toHaveClass('drawer-openStateFalse');
  });

  it('Developers can control the close state of the component from props.', () => {
    render(<Drawer open={false} />);
    const drawerElement = screen.getByTestId('drawer');
    expect(drawerElement).toHaveClass('drawer-openStateFalse');
    expect(drawerElement).not.toHaveClass('drawer-left-open');
  });

  it('Developers should see a dimed backdrop when the drawer component is open when style is set to temporary.', () => {
    render(<Drawer open={true} variant="temporary" />);
    const drawerElement = screen.getByTestId('dimmed-background');
    expect(drawerElement).toHaveClass('drawer-dimBackground');
  });

  it('Developers should not see a dimed backdrop when the drawer component is closed.', () => {
    render(<Drawer open={false} variant="temporary" />);
    const dimmedBackgroundDivElement = screen.getByTestId('dimmed-background');
    expect(dimmedBackgroundDivElement).not.toHaveClass('drawer-dimBackground');
  });

  it('Developers should not see a dimed backdrop when the drawer component style is set to persistent.', () => {
    render(<Drawer open={true} variant="persistent" />);
    const dimmedBackgroundDivElement = screen.getByTestId('dimmed-background');
    expect(dimmedBackgroundDivElement).not.toHaveClass('drawer-dimBackground');
  });

  it('Developers should be able to choose the left open direction of the drawer component from props.', () => {
    render(<Drawer open={true} anchor="left" />);
    const drawerElement = screen.getByTestId('drawer');
    expect(drawerElement).toHaveClass('drawer-left-open');
    expect(drawerElement).not.toHaveClass('drawer-right-open');
    expect(drawerElement).not.toHaveClass('drawer-top-open');
    expect(drawerElement).not.toHaveClass('drawer-bottom-open');
  });

  it('Developers should be able to choose the right open direction of the drawer component from props.', () => {
    render(<Drawer open={true} anchor="right" />);
    const drawerElement = screen.getByTestId('drawer');
    expect(drawerElement).toHaveClass('drawer-right-open');
    expect(drawerElement).not.toHaveClass('drawer-left-open');
    expect(drawerElement).not.toHaveClass('drawer-top-open');
    expect(drawerElement).not.toHaveClass('drawer-bottom-open');
  });

  it('Developers should be able to choose the top open direction of the drawer component from props.', () => {
    render(<Drawer open={true} anchor="top" />);
    const drawerElement = screen.getByTestId('drawer');
    expect(drawerElement).toHaveClass('drawer-top-open');
    expect(drawerElement).not.toHaveClass('drawer-left-open');
    expect(drawerElement).not.toHaveClass('drawer-right-open');
    expect(drawerElement).not.toHaveClass('drawer-bottom-open');
  });

  it('Developers should be able to choose the bottom open direction of the drawer component from props.', () => {
    render(<Drawer open={true} anchor="bottom" />);
    const drawerElement = screen.getByTestId('drawer');
    expect(drawerElement).toHaveClass('drawer-bottom-open');
    expect(drawerElement).not.toHaveClass('drawer-left-open');
    expect(drawerElement).not.toHaveClass('drawer-right-open');
    expect(drawerElement).not.toHaveClass('drawer-top-open');
  });

  it('will invoke the handleToggleDrawer once the user clicks on the backdrop', () => {
    const mockHandleToggleDrawer = jest.fn();

    render(<Drawer open onToggleCallback={mockHandleToggleDrawer} />);

    expect(mockHandleToggleDrawer).toBeCalledTimes(0);

    const backdrop = screen.getByTestId('dimmed-background');

    fireEvent.click(backdrop);

    expect(mockHandleToggleDrawer).toBeCalledTimes(1);
  });
});
