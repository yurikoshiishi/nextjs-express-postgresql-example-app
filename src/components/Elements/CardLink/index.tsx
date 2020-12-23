import React from 'react';
import {Card as MuiCard, makeStyles} from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: 'pointer',
    position: 'relative',
    padding: theme.spacing(2),
    border: '2px solid',
    borderColor: '#E7EDF3',
    borderRadius: 16,
    transition: '0.4s',
    overflow: 'hidden',
    '&:hover': {
      borderColor: theme.palette.primary.main,
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1),
    },
  },
}));

interface CardLinkProps {
  className: object | string;
  href: string;
}

const CardLink: React.FC<CardLinkProps> = ({children, className, href}) => {
  const classes = useStyles();

  return (
    <Link href={href} passHref>
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
