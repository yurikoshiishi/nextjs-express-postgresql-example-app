import React from 'react';
import {Review} from '../../types';
import {makeStyles, Typography} from '@material-ui/core';
import {format, parseISO} from 'date-fns';
import Rating from '../elements/RatingStars/Rating';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3),
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  totalRating: {
    marginBottom: theme.spacing(1),
    display: 'flex',
  },
  content: {},
  description: {
    padding: theme.spacing(1, 0),
  },
}));

interface ReviewListItemProps {
  review: Review;
}

const ReviewListItem: React.FC<ReviewListItemProps> = ({
  review: {total_rating, description, created_at, flavor},
}) => {
  const classes = useStyles();

  //TODO: add onclick to flavor to filter reviews to that flavor.

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.totalRating}>
          <Rating rating={total_rating} size="small" />
        </div>
        <Typography variant="caption" color="textSecondary">
          {format(parseISO(created_at), 'yyyy年MM月dd日')}
        </Typography>
      </div>

      <div className={classes.content}>
        <Typography variant="body2" color="textSecondary">
          {flavor}
        </Typography>
        <div className={classes.description}>
          <Typography variant="body2">{description}</Typography>
        </div>
      </div>
    </div>
  );
};

export default ReviewListItem;
