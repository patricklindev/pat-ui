import React, { FC, useState, useEffect, useRef } from 'react';
import { classNames } from '../../utils/classNames';
import './_Drawer.scss';

// additional features to work on
// 1. miniVariantDrawer?: boolean;

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface DrawerProps {
  anchor?: Anchor;
  variant?: boolean;
  open?: boolean;
  onClose?: (e?: React.MouseEvent) => void;
  className?: string;
}

const Drawer: FC<DrawerProps> = ({
  anchor = 'left',
  open = false,
  onClose,
  children,
  className,
}): JSX.Element => {

  const [isOpen, setIsOpen] = useState<boolean>(open);
  const [anchorPosition, setAnchorPosition] = useState<string>(anchor)
  

  let styleClasses = classNames('drawer', {
    [`drawer-${anchorPosition}`]: true,
    [`${isOpen ? '' : 'drawer-openStateFalse'}`]: true
})
if (className) {
    styleClasses += ' ' + className;
}
  

  
  //click on backdrop to close drawer feature

  let drawerRef = useRef<HTMLDivElement | null>(null);


  useEffect(() =>{

    let handler = (e: any): void=>{
      if (!drawerRef.current?.contains(e.target)){
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handler )

    return ()=>{
      document.removeEventListener("mousedown", handler)
    }

  })

  return (
    <aside ref={drawerRef} className={styleClasses}>
      {children}
    </aside>
  );
};

export { Drawer };

const CustomDrawer: FC = (): JSX.Element => {
  return (
    <div>
      <button>Drawer Btn</button>

      <Drawer anchor="bottom" open={true}>
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
    </div>
  );
};

export { CustomDrawer };
