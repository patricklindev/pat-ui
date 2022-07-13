import React, { FC, ReactNode } from 'react'

interface ListItemProps {
  children?: ReactNode;
  // isOpen?: boolean;
  itemOnClick: () => void;
}

export const ListItem: FC<ListItemProps> = ({ children, itemOnClick }) => {
  return (
    <li onClick={itemOnClick} className='list-content'>{children}</li>
  );
}
