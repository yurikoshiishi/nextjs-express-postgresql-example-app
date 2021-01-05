import {Box, Card, CardContent, Container, Divider} from '@material-ui/core';
import React from 'react';
import Navigation from './Navigation';
import {makeStyles} from '@material-ui/core';
import PostReviewCTA from '../elements/PostReviewCTA';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('md')]: {
      position: 'sticky',
      top: theme.mixins.toolbar.minHeight,
    },
  },
  container: {
    padding: 0,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2, 0, 2, 2),
    },
  },
}));

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = ({}) => {
  const classes = useStyles();
  return (
    <aside className={classes.root}>
      <Container disableGutters className={classes.container}>
        <Card>
          <Navigation />
          <Box my={1}>
            <Divider />
          </Box>
          <PostReviewCTA />
        </Card>
      </Container>
    </aside>
  );
};

export default Sidebar;
