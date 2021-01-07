import React from 'react';
import {fade, List, ListSubheader, makeStyles} from '@material-ui/core';
import NavListItem, {NavListItemProps} from './NavListItem';

const useStyles = makeStyles((theme) => ({
  subheader: {
    height: 36,
  },
  root: {
    '& li': {
      width: '90%',
      margin: '0 auto',
      borderRadius: 8,
      '& .MuiListItemIcon-root': {
        minWidth: 48,
      },
      '&.active': {
        '&:hover': {
          backgroundColor: fade(theme.palette.primary.main, 0.1),
        },
        '& *': {
          color: theme.palette.primary.main,
          fontWeight: theme.typography.fontWeightBold,
        },
      },
    },
  },
}));

interface NavListProps {
  component?: 'nav' | 'ul' | 'div';
  subheader?: string;
  items: NavListItemProps[];
  onItemClick?: () => void;
}

const NavList: React.FC<NavListProps> = ({
  component = 'ul',
  subheader,
  items,
  onItemClick,
}) => {
  const classes = useStyles();
  return (
    <List
      component={component}
      subheader={
        subheader ? (
          <ListSubheader
            component="div"
            className={classes.subheader}
            disableSticky
          >
            {subheader}
          </ListSubheader>
        ) : null
      }
      className={classes.root}
    >
      {items.map((item) => (
        <NavListItem key={item.href} {...item} onClick={onItemClick} />
      ))}
    </List>
  );
};

export default NavList;
