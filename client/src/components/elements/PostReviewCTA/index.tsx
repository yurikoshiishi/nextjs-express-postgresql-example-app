import {Box, Typography, Button, makeStyles} from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ModalSearch from '../ModalSearch';
import {getNumberWithCommas} from '../../../utils';
import {PROTEIN_REQUEST_FORM} from '../../../constants';
import {getBaseURL} from '../../../utils/api';

const useStyles = makeStyles((theme) => ({
  copy: {
    fontWeight: theme.typography.fontWeightBold,
    '& > span': {
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightBold,
    },
  },
  buttonGroup: {
    '& .MuiButton-root': {
      '&:not(:first-child)': {
        marginTop: theme.spacing(1),
      },
    },
  },
}));

interface PostReviewCTAProps {}

const PostReviewCTA: React.FC<PostReviewCTAProps> = ({}) => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [reviewCount, setReviewCount] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchTotalReviewCount = async () => {
      try {
        const res = await axios.get(`${getBaseURL()}/api/reviews/count`);
        if (res.data?.total_review_count) {
          setReviewCount(res.data.total_review_count);
        }
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };

    fetchTotalReviewCount();
  }, []);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  //TODO: search should be done in dialog async

  return (
    <Box
      height="100%"
      maxWidth={400}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      p={{xs: 4, md: 3}}
    >
      <Box mb={2} textAlign="left">
        <Box mb={1}>
          <Typography
            variant="body1"
            color="textPrimary"
            className={classes.copy}
          >
            {!isLoading && reviewCount ? (
              <>
                PReviewには
                <span>{getNumberWithCommas(reviewCount)}件</span>
                のレビューが集まっています
              </>
            ) : (
              'PReviewはプロテインのレビューが集まるサイトです'
            )}
          </Typography>
        </Box>
        <Typography variant="body2" color="textSecondary">
          あなたも最近飲んだプロテインのレビューを共有してみませんか？
        </Typography>
      </Box>
      <Box textAlign="center" className={classes.buttonGroup}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleOpen}
        >
          商品を探す
        </Button>
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          href={PROTEIN_REQUEST_FORM}
        >
          見つからない方へ
        </Button>
      </Box>
      <ModalSearch open={isModalOpen} handleClose={handleClose} />
    </Box>
  );
};

export default PostReviewCTA;
