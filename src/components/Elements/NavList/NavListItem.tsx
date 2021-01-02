import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import React from 'react';
import NavLink from '../NavLink';

export interface NavListItemProps {
  text: string;
  icon?: React.ReactElement;
  href: string;
  onClick?: () => void;
}

const NavListItem: React.FC<NavListItemProps> = ({
  href,
  text,
  icon,
  onClick,
}) => {
  return (
    <NavLink href={href}>
      <ListItem button component="li" onClick={onClick}>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText
          primary={<Typography variant="body2">{text}</Typography>}
        />
      </ListItem>
    </NavLink>
  );
};

export default NavListItem;
