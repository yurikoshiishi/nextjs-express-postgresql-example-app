import React from 'react';
import {Review} from '../../../types';
import {Button, makeStyles, Typography} from '@material-ui/core';
import {format, parseISO} from 'date-fns';
import Rating from '../../elements/RatingStars/Rating';
import ThumbsUpButton from '../../elements/ThumbsUpButton';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.grey[100],
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
  flavor: {
    color: 'rgba(0,0,0,0.8)',
    fontWeight: theme.typography.fontWeightBold,
  },
  description: {
    padding: theme.spacing(1, 0),
    whiteSpace: 'pre-wrap',
    color: 'rgba(0,0,0,0.8)',
  },
  actionContainer: {
    marginTop: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

interface ReviewListItemProps {
  review: Review;
  disableThumbsUp?: boolean;
}

const ReviewListItem: React.FC<ReviewListItemProps> = ({
  review: {
    review_id,
    total_rating,
    description,
    created_at,
    flavor,
    thumbsup_count,
    url_amazon,
    url_iherb,
    url_myprotein,
  },
  disableThumbsUp,
}) => {
  const classes = useStyles();

  const url = url_myprotein || url_iherb || url_amazon;

  return (
    <div className={`${classes.root} ReviewListItem`} id={review_id}>
      <div className={classes.header}>
        <div className={classes.totalRating}>
          <Rating rating={total_rating} size="small" />
        </div>
        <Typography variant="caption" color="textSecondary">
          {format(parseISO(created_at), 'yyyy年MM月dd日')}
        </Typography>
      </div>

      <div className={classes.content}>
        <Typography
          variant="body2"
          color="textSecondary"
          component="h2"
          className={classes.flavor}
        >
          {flavor}
        </Typography>
        <div className={classes.description}>
          <Typography variant="body2">{description}</Typography>
        </div>
      </div>
      {!disableThumbsUp && (
        <div className={classes.actionContainer}>
          <ThumbsUpButton count={thumbsup_count} review_id={review_id} />
          {url && (
            <Button
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              variant="text"
              color="primary"
              href={url}
            >
              ショップを見る
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default ReviewListItem;
