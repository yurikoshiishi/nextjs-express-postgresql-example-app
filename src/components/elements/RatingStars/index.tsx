import React from 'react';
import {makeStyles, Typography} from '@material-ui/core';
import Rating from './Rating';

const useStyles = ({backgroundColor}) =>
  makeStyles((theme) => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: backgroundColor || theme.palette.grey[100],
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
  backgroundColor?: string;
}

const TYPOGRAPHY_MAP = {
  small: 'body2',
  medium: 'body1',
  large: 'h6',
} as React.CSSProperties;

const RatingStars: React.FC<RatingStarsProps> = ({
  rating = 0,
  size,
  backgroundColor,
}) => {
  const classes = useStyles({backgroundColor})();

  return (
    <div className={classes.root}>
      <Rating rating={Number(rating)} size={size} />
      <Typography className="rating" variant={TYPOGRAPHY_MAP[size] || 'body2'}>
        {Number(rating).toFixed(1)}
      </Typography>
    </div>
  );
};

export default RatingStars;
