import {Container, Typography, makeStyles, Button} from '@material-ui/core';
import Link from 'next/link';
import {useRouter} from 'next/router';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4, 0),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(6, 2, 4),
    },
  },
  img: {
    maxWidth: '80%',
    maxHeight: 300,
    display: 'block',
    margin: '0 auto',
    marginBottom: theme.spacing(4),
  },
  textContainer: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
    '& h1': {
      marginBottom: theme.spacing(1),
    },
  },
  action: {
    textAlign: 'center',
    maxWidth: 300,
    margin: '0 auto',
    '& a, button': {
      width: '100%',
      marginBottom: theme.spacing(1),
      '&:last-child': {
        marginBottom: 0,
      },
    },
  },
}));

interface PageWithImageProps {
  title: string;
  imageUrl: string;
  maxWidth?: 'xs' | 'sm' | 'md';
  description?: React.ReactElement | string;
  action?: React.ReactElement;
}

const PageWithImage: React.FC<PageWithImageProps> = ({
  title,
  imageUrl,
  maxWidth = 'sm',
  description,
  action,
}) => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Container maxWidth={maxWidth} className={classes.root}>
      <img src={imageUrl} alt={`${title}の画像`} className={classes.img} />
      <div className={classes.textContainer}>
        <Typography variant="h1">{title}</Typography>
        {description && (
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        )}
      </div>
      <div className={classes.action}>
        {action ? (
          action
        ) : (
          <>
            <Link href="/" passHref>
              <Button variant="contained" color="primary" fullWidth>
                トップに戻る
              </Button>
            </Link>
            <Button
              variant="outlined"
              color="primary"
              onClick={router.back}
              fullWidth
            >
              前のページに戻る
            </Button>
          </>
        )}
      </div>
    </Container>
  );
};

export default PageWithImage;
