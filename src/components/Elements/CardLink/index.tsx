import React from 'react';
import {Card as MuiCard, makeStyles} from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    transition: '0.4s',
    '&:hover': {
      borderColor: theme.palette.primary.main + '!important',
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1),
    },
  },
}));

interface CardLinkProps {
  className?: object | string;
  href: string;
}

const CardLink: React.FC<CardLinkProps> = ({children, className, href}) => {
  const classes = useStyles();

  return (
    <Link href={href}>
      <MuiCard
        className={`${classes.root} ${className ? className : ''}`}
        variant="outlined"
      >
        {children}
      </MuiCard>
    </Link>
  );
};

export default CardLink;
