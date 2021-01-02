import React from 'react';
import {Container, makeStyles} from '@material-ui/core';

const useStyles = ({centerContent}) =>
  makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      paddingTop: theme.mixins.toolbar.minHeight,
      ...(centerContent && {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }),
    },
  }));

interface MainProps {
  disableContainer?: boolean;
  centerContent?: boolean;
}

const Main: React.FC<MainProps> = ({
  children,
  disableContainer,
  centerContent,
}) => {
  const classes = useStyles({centerContent})();
  return (
    <main className={classes.root}>
      {!disableContainer ? (
        <Container maxWidth="lg" disableGutters>
          {children}
        </Container>
      ) : (
        children
      )}
    </main>
  );
};

export default Main;
