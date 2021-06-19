import Image from 'next/image';
import React from 'react';
import {Container, fade, makeStyles, Typography} from '@material-ui/core';
import SearchForm from './SearchForm';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(to left, #8e2de2, #4a00e0)',
    borderRadius: '0 0 120px 0',
    '@media (max-width: 767px)': {
      borderRadius: '0',
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: theme.spacing(5, 0),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(5, 2),
    },
    '@media (max-width: 767px)': {
      flexDirection: 'column',
      alignItems: 'stretch',
      padding: theme.spacing(7, 2),
    },
  },
  textContainer: {
    [theme.breakpoints.down('xs')]: {
      '& form': {
        maxWidth: 300,
        margin: '0 auto',
      },
    },
  },
  copyContainer: {
    marginBottom: theme.spacing(7),
    '& h1': {
      marginBottom: theme.spacing(1),
      color: theme.palette.primary.contrastText,
      fontSize: '2.25rem',
      [theme.breakpoints.down('md')]: {
        fontSize: '2rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
      },
    },
    '& p': {
      color: fade(theme.palette.primary.contrastText, 0.85),
      [theme.breakpoints.down('xs')]: {
        fontSize: theme.typography.body2.fontSize,
      },
    },
    '@media (max-width: 767px)': {
      textAlign: 'center',
      marginBottom: theme.spacing(5),
    },
  },
  imageContainer: {
    flexShrink: 0,
    position: 'relative',
    width: 400 * 1.45,
    height: 400,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      width: 350 * 1.45,
      height: 350,
    },
    [theme.breakpoints.down('sm')]: {
      width: 250 * 1.45,
      height: 250,
    },
    '@media (max-width: 767px)': {
      display: 'none',
    },
  },
}));

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = ({}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.container}>
        <div className={classes.textContainer}>
          <div className={classes.copyContainer}>
            <Typography variant="h1">
              プロテインのレビューなら
              <br />
              PReview
            </Typography>
            <Typography variant="body1">
              筋肉の、筋肉による、筋肉のためのウェブサイト
            </Typography>
          </div>
          <SearchForm />
        </div>
        <div className={classes.imageContainer}>
          <Image
            src={`/images/illustrations/protein_bodybuilder.svg`}
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
