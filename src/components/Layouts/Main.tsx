import React from 'react';
import {makeStyles} from '@material-ui/core';

const useStyles = ({centerContent, disableContainer}) =>
  makeStyles((theme) => ({
    root: {
      padding: theme.spacing(disableContainer ? 0 : 2, 0),
      ...(centerContent && {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }),
    },
  }));

interface MainProps {
  centerContent?: boolean;
  disableContainer?: boolean;
}

const Main: React.FC<MainProps> = ({
  children,
  centerContent,
  disableContainer,
}) => {
  const classes = useStyles({centerContent, disableContainer})();
  return <main className={classes.root}>{children}</main>;
};

export default Main;
