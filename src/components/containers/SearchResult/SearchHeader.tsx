import {Box, Typography, makeStyles} from '@material-ui/core';
import {useRouter} from 'next/router';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  textContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    '& h1': {
      lineHeight: 1,
      marginRight: theme.spacing(1),
      [theme.breakpoints.down('xs')]: {
        marginRight: 0,
        marginBottom: theme.spacing(0.5),
      },
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
}));

interface SearchHeaderProps {
  product_count: number;
}

const SearchHeader: React.FC<SearchHeaderProps> = ({product_count}) => {
  const classes = useStyles();
  const router = useRouter();
  const {query} = router;
  const {q} = query;

  const queryString = decodeURIComponent(q.toString());

  return (
    <Box p={1}>
      <div className={classes.textContainer}>
        <Typography variant="h1">"{queryString}"の検索結果</Typography>
        <Typography variant="body2" color="textSecondary">
          {product_count}件
        </Typography>
      </div>
    </Box>
  );
};

export default SearchHeader;
