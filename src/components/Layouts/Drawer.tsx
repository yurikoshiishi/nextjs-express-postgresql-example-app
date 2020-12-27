import React from 'react';
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

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    width: '250px',
    [theme.breakpoints.down('xs')]: {
      width: '80vw',
    },
  },
  bottomContainer: {
    marginTop: 'auto',
    textAlign: 'center',
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
    >
      <UserInfo />
      <Divider />
      <div className={classes.bottomContainer}>
        <Divider />
        <Box p={1}>
          {user ? (
            <LogoutButton />
          ) : (
            <Button variant="text" color="primary" onClick={handleSignIn}>
              ログインはこちら
            </Button>
          )}
        </Box>
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
