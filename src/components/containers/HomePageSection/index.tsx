import {Button, Typography, makeStyles} from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import {ProductMasterWithReview} from '../../../types';
import ProductListCard from './ProductListCard';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(6),
    },
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  buttonContainer: {
    marginTop: theme.spacing(3),
    textAlign: 'center',
    maxWidth: 300,
    margin: '0 auto',
  },
}));

interface HomePageProductSectionProps {
  title: string;
  href?: string;
  content: React.ReactElement;
  buttonText?: string;
}

const HomePageProductSection: React.FC<HomePageProductSectionProps> = ({
  title,
  href,
  buttonText = 'もっと見る',
  content,
}) => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        {title}
      </Typography>
      {content}
      {href && (
        <div className={classes.buttonContainer}>
          <Link href={href} passHref>
            <Button variant="outlined" color="primary" fullWidth>
              {buttonText}
            </Button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default HomePageProductSection;
