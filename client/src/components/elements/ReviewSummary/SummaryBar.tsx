import React from 'react';
import {Box, makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(0.5),
  },
  rating: {
    marginRight: theme.spacing(2),
  },
  barContainer: {
    marginRight: theme.spacing(1),
    flexGrow: 1,
    position: 'relative',
    height: 8,
    backgroundColor: theme.palette.grey[100],
    borderRadius: 16,
    overflow: 'hidden',
    '& .bar': {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      backgroundColor: '#ffb400',
    },
  },
  percent: {
    width: '2rem',
    textAlign: 'right',
  },
}));

interface SummaryBarProps {
  rating: number;
  percent: number;
}

const SummaryBar: React.FC<SummaryBarProps> = ({rating, percent = 0}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.rating}>
        <Typography variant="body2" color="textSecondary">
          {rating}
        </Typography>
      </div>
      <div className={classes.barContainer}>
        <Box width={`${percent}%`} className="bar" />
      </div>
      <div className={classes.percent}>
        <Typography variant="body2" color="textSecondary">
          {Math.round(percent)}%
        </Typography>
      </div>
    </div>
  );
};

export default SummaryBar;
