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
      <div className={dimBackgroundStyle} onClick={handleToggleDrawer} data-testid='dimmed-background'></div>
      <aside className={styleClasses} data-testid="drawer">
        {children}
      </aside>
    </section>
  );
};

export {Drawer};

