import {Card, CardContent, Typography, makeStyles} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& h1': {
      marginBottom: theme.spacing(4),
    },
    '& h2, h3, h4, h5, h6, ul, ol': {
      marginBottom: theme.spacing(3),
    },
    '& section': {
      marginBottom: theme.spacing(4),
    },
    '& p, li': {
      marginBottom: theme.spacing(2),
    },
    '& ol, li': {
      paddingLeft: theme.spacing(2),
    },
    '& li': {
      listStyle: 'disc inside',
    },
    '& a': {
      color: '#1976d2',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
}));

interface ArticleProps {
  children: React.ReactElement | React.ReactElement[];
  title?: string;
}

const Article: React.FC<ArticleProps> = ({children, title}) => {
  const classes = useStyles();
  return (
    <article className={classes.root}>
      <Card>
        <CardContent>
          {title && <Typography variant="h1">{title}</Typography>}
          {children}
        </CardContent>
      </Card>
    </article>
  );
};

export default Article;
