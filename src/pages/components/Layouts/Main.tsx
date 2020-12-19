import React from 'react';
import {Container, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.mixins.toolbar.minHeight,
  },
}));

interface MainProps {}

const Main: React.FC<MainProps> = ({children}) => {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <Container maxWidth="md">{children}</Container>
    </main>
  );
};

export default Main;
