import {Button} from '@material-ui/core';
import Link from 'next/link';
import {useRouter} from 'next/router';
import React from 'react';
import PageWithImage from '../../components/containers/PageWithImage';

interface ReviewCreateSuccessProps {}

const ReviewCreateSuccess: React.FC<ReviewCreateSuccessProps> = (props) => {
  const router = useRouter();

  const {product_master_id} = router.query;

  return (
    <PageWithImage
      title="レビューが投稿されました"
      imageUrl="/images/illustrations/done.svg"
      description="ご協力ありがとうございます！レビューの投稿が完了しました。"
      action={
        <>
          <Link href="/" passHref>
            <Button variant="contained" color="primary">
              トップに戻る
            </Button>
          </Link>
          {product_master_id && (
            <Link href={`/products/${product_master_id}`} passHref>
              <Button variant="outlined" color="primary">
                商品ページに戻る
              </Button>
            </Link>
          )}
        </>
      }
    />
  );
};

export default ReviewCreateSuccess;
