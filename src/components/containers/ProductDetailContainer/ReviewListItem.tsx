import React from 'react';
import {Review} from '../../../types';
import {makeStyles, Typography} from '@material-ui/core';
import {format, parseISO} from 'date-fns';
import Rating from '../../elements/RatingStars/Rating';
import ThumbsUpButton from '../../elements/ThumbsUpButton';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.grey[50],
    borderRadius: 8,
    padding: theme.spacing(1),
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(1),
  },
  totalRating: {
    display: 'flex',
  },
  content: {
    padding: theme.spacing(0, 0.25),
  },
  description: {
    padding: theme.spacing(1, 0),
    whiteSpace: 'pre-wrap',
  },
  actionContainer: {
    marginTop: theme.spacing(1),
  },
}));

interface ReviewListItemProps {
  review: Review;
}

const ReviewListItem: React.FC<ReviewListItemProps> = ({
  review: {
    review_id,
    total_rating,
    description,
    created_at,
    flavor,
    thumbsup_count,
  },
}) => {
  const classes = useStyles();

  //TODO: add onclick to flavor to filter reviews to that flavor.

  return (
    <div className={classes.root} id={review_id}>
      <div className={classes.header}>
        <div className={classes.totalRating}>
          <Rating rating={total_rating} size="small" />
        </div>
        <Typography variant="caption" color="textSecondary">
          {format(parseISO(created_at), 'yyyy年MM月dd日')}
        </Typography>
      </div>

      <div className={classes.content}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {flavor}
        </Typography>
        <div className={classes.description}>
          <Typography variant="body2">{description}</Typography>
        </div>
      </div>
      <div className={classes.actionContainer}>
        <ThumbsUpButton count={thumbsup_count} review_id={review_id} />
      </div>
    </div>
  );
};

export default ReviewListItem;
