import classes from '*.module.css';
import React from 'react';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& .img': {
      display: 'block',
    },
  },
}));

interface indexProps {
  variant?: 'primary' | 'white';
}

const index: React.FC<indexProps> = ({variant}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img
        src={`/images/brand/logo_${variant || 'primary'}.png`}
        alt="PReview プロテインのレビューサイト"
        height="20px"
      />
    </div>
  );
};

export default index;
