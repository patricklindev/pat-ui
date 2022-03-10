import React, { FC, useState, useEffect, useRef } from 'react';
import { classNames } from '../../Utils/classNames';

type Variant = 'permanent' | 'persistent' | 'temporary';

type Anchor = 'top' | 'bottom' | 'left' | 'right';

interface IDrawerProps {
    open?: boolean;
    anchor?: Anchor;
    className?: string;
    variant?: Variant;
    onClose?: (e?: React.MouseEvent) => void;
    toggleDrawer?: (event: React.MouseEvent) => void;
}

const Drawer: FC<IDrawerProps> = ({
    open,
    anchor,
    variant,
    onClose,
    children,
    className,
}) => {

    const [isOpen, setIsOpen] = useState<boolean>(open? true: false);

    useEffect(() =>{
        setIsOpen(open? true: false);
    },[open]);

    console.log(open, isOpen);

    const toggleDrawer = (event: React.MouseEvent) => {
        setIsOpen(false);
    };

    let styleClasses = classNames('drawer', {
        [`${variant === 'permanent' ? `drawer-${anchor}` : ''}`]: true,
        [`${variant !== 'permanent' ? `drawer-open-${anchor}` : ''}`]: true,
        [`${isOpen ? '' : `drawer-close-${anchor}`}`]: true,
        [`${variant === 'permanent' ? `drawer-permanent` : ''}`]: true,
        [`${variant === 'persistent' ? `drawer-persistent` : ''}`]: true,
        [`${variant === 'temporary' ? `drawer-temporary` : ''}`]: true,
    })
    if (className) {
        styleClasses += ' ' + className;
    }

    let dimBackgroundStyle = '';
    if (variant === 'temporary' && isOpen === true) {
        dimBackgroundStyle = 'drawer-dimBackground';
    }

    const [closeDrawerStyle, setCloseDrawerStyle] = useState<string>('');

    setTimeout(() => {
        let closeDrawer = `${isOpen ? 'drawer-open' : 'drawer-close'}`;
        setCloseDrawerStyle(closeDrawer);
    }, 300)
     
    return (
        <section className={closeDrawerStyle}>
            <div className={dimBackgroundStyle} onClick={toggleDrawer}></div>
            <aside className={styleClasses}>
                {children}
            </aside>
        </section>
    )
}

export default Drawer;




const CustomDrawer: FC = (): JSX.Element =>{



  return(
    <div>
      <button>Drawer Btn</button>
      
      <Drawer anchor='left' open={false}>
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
    
  )
}

export {CustomDrawer};
