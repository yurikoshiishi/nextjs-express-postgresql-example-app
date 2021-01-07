import React, {useEffect} from 'react';
import {
  Box,
  Button,
  Divider,
  Drawer as MuiDrawer,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import UserInfo from '../elements/UserInfo';
import LogoutButton from '../elements/FirebaseLogin/LogoutButton';
import {useAuth} from '../../contexts/auth';
import Navigation from './Navigation';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    width: '250px',
    [theme.breakpoints.down('xs')]: {
      width: '80vw',
    },
  },
  nav: {
    flexGrow: 1,
    overflowY: 'scroll',
  },
  bottomContainer: {
    textAlign: 'center',
  },
  authButton: {
    position: 'relative',
    height: theme.spacing(6),
    '& .MuiButton-root': {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
    },
  },
  closeContainer: {
    textAlign: 'right',
  },
}));

interface DrawerProps {
  open: boolean;
  handleDrawerClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({open, handleDrawerClose}) => {
  const classes = useStyles();
  const {user, signIn} = useAuth();

  const handleSignIn = () => {
    handleDrawerClose();
    signIn();
  };

  return (
    <MuiDrawer
      anchor="left"
      open={open}
      onClose={handleDrawerClose}
      classes={{paper: classes.paper}}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <UserInfo />
      <Divider />
      <Navigation className={classes.nav} onItemClick={handleDrawerClose} />
      <div className={classes.bottomContainer}>
        <Divider />
        <div className={classes.authButton}>
          {user ? (
            <LogoutButton />
          ) : (
            <Button variant="text" color="primary" onClick={handleSignIn}>
              ログインはこちら
            </Button>
          )}
        </div>
        <Divider />
        <div className={classes.closeContainer}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
      </div>
    </MuiDrawer>
  );
};

export default Drawer;
