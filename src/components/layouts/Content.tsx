import React from 'react';
import {Container, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    paddingTop: theme.mixins.toolbar.minHeight,
  },
}));

interface ContentProps {
  children: React.ReactElement;
  disableContainer?: boolean;
}

const Content: React.FC<ContentProps> = ({children, disableContainer}) => {
  const classes = useStyles();

  if (disableContainer) {
    return <div className={classes.content}>{children}</div>;
  }

  return (
    <Container maxWidth="lg" disableGutters className={classes.content}>
      {children}
    </Container>
  );
};

export default Content;
