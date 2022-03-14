import React, { FC, useState, useEffect, useRef } from 'react';
import { classNames } from '../../utils/classNames';
import './_Drawer.scss';

type Variant =  'persistent' | 'temporary';

type Anchor = 'top' | 'left' | 'bottom' | 'right' | string

interface DrawerProps {
  anchor?: Anchor;
  variant?: Variant;
  open?: boolean;
  onToggleCallback?: () => void;
  className?: string;
}

const Drawer: FC<DrawerProps> = ({
  anchor = 'left',
  open = false,
  onToggleCallback,
  variant = 'temporary',
  children,
  className,
}): JSX.Element => {



  let styleClasses = classNames('drawer', {
    // [`drawer-${anchor}-open`]: true,
    [`${open ? `drawer-${anchor}-open` : 'drawer-openStateFalse'}`]: true,
 
  });
  if (className) {
    styleClasses += ' ' + className;
  }


  //click on backdrop to close drawer feature

  const handleToggleDrawer = (event: React.MouseEvent) => {
    if (onToggleCallback) {
        onToggleCallback();
    }
};

  // dimmed background

  let dimBackgroundStyle = '';
  if (variant === 'temporary' && open) {
    dimBackgroundStyle = 'drawer-dimBackground';
  }


  return (
    <section>
      <div className={dimBackgroundStyle} onClick={handleToggleDrawer}></div>
      <aside className={styleClasses}>
        {children}
      </aside>
    </section>
  );
};

export { Drawer };

const CustomDrawer: FC = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  const handleButtonOnClick = (): void => {
    setOpen(!open);
  };

  return (
    <div>
      <button
        onClick={handleButtonOnClick}
        style={{ marginTop: '300px', marginLeft: '300px' }}
      >
        Drawer Btn
      </button>

      <Drawer anchor="bottom" open={open} variant="persistent" onToggleCallback={handleButtonOnClick}>
        <h1>email</h1>
        <h1>contacts</h1>
        <h1>drafts</h1>
        <h1>email</h1>
        <h1>contacts</h1>
        <h1>drafts</h1>
        <h1>email</h1>
        <h1>contacts</h1>
        <h1>drafts</h1>
      </Drawer>
      <div >Hello World</div>
    </div>
  );
};

export { CustomDrawer };