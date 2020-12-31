import React from 'react';
import {Container, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.mixins.toolbar.minHeight,
  },
}));

interface MainProps {
  disableContainer?: boolean;
}

const Main: React.FC<MainProps> = ({children, disableContainer}) => {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      {!disableContainer ? (
        <Container maxWidth="md" disableGutters>
          {children}
        </Container>
      ) : (
        children
      )}
    </main>
  );
};

export default Main;
