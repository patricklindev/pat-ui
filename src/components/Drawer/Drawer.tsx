import React, { FC, useState, useEffect, useRef } from 'react';
import { classNames } from '../../utils/classNames';
import './_Drawer.scss';

type Variant =  'persistent' | 'temporary';

type Anchor = 'top' | 'left' | 'bottom' | 'right' 

interface IDrawerProps {
  /** Sets the Drawer's position */
  anchor?: Anchor;
  /** Allows developer to set the variant of the Drawer, ( persistent | temporary ) */
  variant?: Variant;
  /** Sets the Drawer's open or closed state */
  open?: boolean;
  /** The user must pass in a callback function for controling the open / close state of the drawer */
  onToggleCallback?: () => void;
  /** Allows developer to set custom styles to the Drawer */
  className?: string; 
}
 
/**     
 * A Drawer component is used to display information or a meun on the side of the page.
 *
 * ```js
 * import { Drawer } from 'pat-ui'
 * ```
 * 
 *  
 * 
 * 
 *  Example of a onToggleCallback function that controls the open state
 * 
 * ```js
 *  const [isOpen, setIsOpen] = useState<boolean>(true);
 * 
 *  function handleToggle (){
      setIsOpen(!isOpen);
 *  }
 * 
 * ```
 * 
 * ```html
 * <Drawer open={isOpen} onToggleCallback={handleToggle} />
 * ```
 * 
 */
 
const Drawer: FC<DrawerProps> = ({ 
  anchor = 'left',
  open = false,
  onToggleCallback,
  variant = 'temporary',
  children,
  className,
}): JSX.Element => {

 

  let styleClasses = classNames('drawer', {

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

