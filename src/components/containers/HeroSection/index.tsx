import Image from 'next/image';
import React from 'react';
import {Container, makeStyles, Typography} from '@material-ui/core';
import SearchForm from './SearchForm';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(to left, #8e2de2, #4a00e0)',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'stretch',
      padding: theme.spacing(7, 2),
    },
  },
  textContainer: {
    '& h1': {
      color: theme.palette.primary.contrastText,
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      '& form': {
        maxWidth: 300,
        margin: '0 auto',
      },
    },
  },
  imageContainer: {
    flexShrink: 0,
    position: 'relative',
    width: 350,
    height: 350,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = ({}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="md" className={classes.container}>
        <div className={classes.textContainer}>
          <Typography variant="h1">
            プロテインのレビューなら
            <br />
            PReview
          </Typography>
          <SearchForm />
        </div>
        <div className={classes.imageContainer}>
          <Image
            src={`/images/illustrations/reviews.svg`}
            alt="PReview-トップ画像"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
