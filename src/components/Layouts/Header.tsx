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
  authContainer: {
    marginLeft: 'auto',
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
      <Container maxWidth="md" disableGutters className={classes.container}>
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
          <div className={classes.authContainer}>
            {user ? (
              <Box display="flex" alignItems="center">
                <Avatar src={user.photoURL} alt={user.uid} />
              </Box>
            ) : (
              <Button color="primary" variant="outlined" onClick={signIn}>
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
