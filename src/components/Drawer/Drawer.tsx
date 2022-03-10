import React, { FC } from 'react';
import './_Drawer.scss';

// additional features to work on
// 1. miniVariantDrawer?: boolean;


type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface DrawerProps {
  anchor?: Anchor;
  variant?: boolean;
  open?: boolean;
  onClose?: (e?: React.MouseEvent) => void;
}

const Drawer: FC<DrawerProps> = ({
  anchor = 'left',
  open= false,
  onClose,
  children
}): JSX.Element => {


  

  return (
    
    
  <aside className={`drawer ${anchor} ${open? "": "openStateFalse"}`}>
      {children}
  </aside>
  
  )
};

export {Drawer};




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
