import React, {useContext} from 'react';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
  Button,
  Container,
  Avatar,
  Box,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../elements/Logo';
import LogoutButton from '../elements/FirebaseLogin/LogoutButton';
import {useAuth} from '../../contexts/auth';
import Search from './Search';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: 'none',
    borderBottom: `1px solid ${theme.palette.divider}`,
    height: theme.mixins.toolbar.minHeight,
  },
  container: {
    padding: 0,
  },
  toolbar: {
    height: theme.mixins.toolbar.minHeight,
  },
  right: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  searchContainer: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      marginRight: theme.spacing(1),
    },
  },
}));

interface HeaderProps {
  handleDrawerOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({handleDrawerOpen}) => {
  const classes = useStyles();
  const {user, signIn} = useAuth();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Container maxWidth="lg" disableGutters className={classes.container}>
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
          <div className={classes.right}>
            <div className={classes.searchContainer}>
              <Search />
            </div>
            {user ? (
              <Box display="flex" alignItems="center">
                <Avatar src={user.photoURL} alt={user.uid} />
              </Box>
            ) : (
              <Button color="primary" variant="text" onClick={signIn}>
                ログイン
              </Button>
            )}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
