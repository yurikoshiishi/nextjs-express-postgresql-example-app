import React from 'react';
import {makeStyles, Typography} from '@material-ui/core';
import Rating from './Rating';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.grey[100],
    borderRadius: 16,
    padding: theme.spacing(0.5, 2),
    '& .rating': {
      marginLeft: theme.spacing(1),
      color: theme.palette.grey[700],
      fontWeight: 600,
    },
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
  },
}));

interface RatingStarsProps {
  rating: number | string;
  size?: 'small' | 'medium' | 'large';
}

const TYPOGRAPHY_MAP = {
  small: 'body2',
  medium: 'body1',
  large: 'h6',
} as React.CSSProperties;

const RatingStars: React.FC<RatingStarsProps> = ({rating, size}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating rating={Number(rating)} size={size} />
      <Typography className="rating" variant={TYPOGRAPHY_MAP[size] || 'body2'}>
        {rating} / 5
      </Typography>
    </div>
  );
};

export default RatingStars;
