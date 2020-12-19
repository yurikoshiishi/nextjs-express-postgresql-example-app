import React from 'react';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(2),
    borderTop: theme.palette.divider,
    textAlign: 'center',
  },
}));

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      {' '}
      {'Copyright © '}
      プロテインレビュー {new Date().getFullYear()}
      {'.'}
    </footer>
  );
};

export default Footer;
