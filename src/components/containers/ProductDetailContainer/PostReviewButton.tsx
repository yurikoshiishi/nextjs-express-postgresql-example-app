import {Fab, makeStyles} from '@material-ui/core';
import React from 'react';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    zIndex: theme.zIndex.appBar,
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    boxShadow:
      '0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)',
    transition: 'all .4s ease',
    right: 32,
    bottom: 32,
    [theme.breakpoints.up('lg')]: {
      right: `calc(50% - ${theme.breakpoints.values.lg / 2}px + 32px)`,
    },
    [theme.breakpoints.down('xs')]: {
      right: 20,
      bottom: 20,
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  },
}));

interface PostReviewButtonProps {
  product_master_id: string;
}

const PostReviewButton: React.FC<PostReviewButtonProps> = ({
  product_master_id,
}) => {
  const classes = useStyles();
  return (
    <Link href={`/reviews/${product_master_id}`}>
      <Fab variant="extended" className={classes.root}>
        <CreateOutlinedIcon />
        レビューを書く
      </Fab>
    </Link>
  );
};

export default PostReviewButton;
