import React from 'react';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
  Button,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../elements/Logo';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: 'none',
    borderBottom: `1px solid ${theme.palette.divider}`,
    height: theme.mixins.toolbar.minHeight,
  },
  toolbar: {
    height: theme.mixins.toolbar.minHeight,
  },
}));

interface HeaderProps {
  handleDrawerOpen: () => void;
}

//TODO: replace title to logo

const Header: React.FC<HeaderProps> = ({handleDrawerOpen}) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar} variant="dense">
        <IconButton
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
        >
          <MenuIcon color="action" />
        </IconButton>
        <div>
          <Link href="/">
            <Button variant="text" color="primary">
              <Logo />
            </Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
