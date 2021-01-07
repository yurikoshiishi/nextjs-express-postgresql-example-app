import {Box, Typography, makeStyles} from '@material-ui/core';
import React from 'react';
import {MuiTypography} from '../../../types';

const useStyles = makeStyles((theme) => ({
  title: {
    position: 'relative',
    '&:after': {
      position: 'absolute',
      content: '""',
      left: 0,
      bottom: -8,
      width: 120,
      height: 4,
      borderRadius: 8,
      backgroundColor: theme.palette.primary.main,
      [theme.breakpoints.down('xs')]: {
        width: 50,
      },
    },
  },
}));

interface PageTitleProps {
  title: string;
  variant?: MuiTypography;
  component?: 'h1' | 'h2' | 'h3' | 'p' | 'div';
  withBorder?: boolean;
}

const PageTitle: React.FC<PageTitleProps> = ({
  title,
  variant = 'h1',
  component = 'h1',
  withBorder,
}) => {
  const classes = useStyles();
  return (
    <Box my={3} px={2}>
      <Typography
        variant={variant}
        component={component}
        className={withBorder ? classes.title : null}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default PageTitle;
