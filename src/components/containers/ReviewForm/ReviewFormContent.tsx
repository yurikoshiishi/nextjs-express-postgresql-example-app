import React, {useMemo, useState} from 'react';
import * as yup from 'yup';
import {Formik, Form} from 'formik';
import RatingField from './RatingField';
import FlavorSelect from './FlavorSelect';
import {ProductVariation, ReviewFormValues} from '../../../types';
import DescriptionField from './DescriptionField';
import {Box, Button, Container} from '@material-ui/core';
import UserIdField from './UserIdField';
import {createReview} from '../../../utils/api';
import {useRouter} from 'next/router';
import {Alert} from '@material-ui/lab';
import LoadingButton from '../../elements/LoadingButton';

interface ReviewFormContentProps {
  product_master_id: string;
  product_variations: ProductVariation[];
}

const getInitialValues = (product_master_id: string): ReviewFormValues => {
  const initialValues: ReviewFormValues = {
    product_master_id: product_master_id,
    product_variation_id: '',
    user_id: '',
    taste_rating: 3,
    mix_rating: 3,
    total_rating: 3,
    description: '',
  };
  return initialValues;
};

const validationSchema = yup.object().shape({
  product_master_id: yup.string().required(),
  product_variation_id: yup.string().required('風味を選択してください。'),
  user_id: yup.string().required('レビューの投稿にはログインが必要です。'),
  taste_rating: yup.number().min(1).max(5).required('必須項目です。'),
  mix_rating: yup.number().min(1).max(5).required('必須項目です。'),
  total_rating: yup.number().min(1).max(5).required('必須項目です。'),
  description: yup
    .string()
    .required('レビューを入力してください。')
    .trim()
    .min(20, 'レビューは最低20文字必要です。')
    .max(1000, 'レビューは最大1,000文字までです。'),
});

const ReviewFormContent: React.FC<ReviewFormContentProps> = ({
  product_master_id,
  product_variations,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handlePostReview = async (data) => {
    setError(null);
    setIsLoading(true);
    try {
      const res = await createReview(data);
      if (res.error) {
        setError(
          res.error.data.message ||
            'データ送信中にエラーが発生しました。再度お試しください。'
        );
        setIsLoading(false);

        return;
      }
      router.push({
        pathname: '/reviews/success',
        query: {
          product_master_id: product_master_id,
        },
      });
    } catch (err) {
      setError('データ送信中にエラーが発生しました。再度お試しください。');
      setIsLoading(false);
    }
  };

  const flavors = useMemo(() => {
    return product_variations.map((v) => ({
      flavor: v.flavor,
      id: v.product_variation_id,
    }));
  }, [product_variations]);

  return (
    <Container maxWidth="sm">
      <Formik
        validationSchema={validationSchema}
        initialValues={getInitialValues(product_master_id)}
        onSubmit={(data) => {
          handlePostReview(data);
        }}
      >
        {({values, errors, touched, setFieldValue, handleSubmit}) => (
          <Form onSubmit={handleSubmit}>
            <FlavorSelect
              name="product_variation_id"
              flavors={flavors}
              setFieldValue={setFieldValue}
              error={
                errors.product_variation_id && touched.product_variation_id
                  ? errors.product_variation_id
                  : ''
              }
            />
            <RatingField
              name="total_rating"
              value={values.total_rating}
              label="総合評価"
              setFieldValue={setFieldValue}
            />
            <RatingField
              name="taste_rating"
              value={values.taste_rating}
              label="味"
              setFieldValue={setFieldValue}
            />
            <RatingField
              name="mix_rating"
              value={values.mix_rating}
              label="溶けやすさ"
              setFieldValue={setFieldValue}
            />
            <DescriptionField
              name="description"
              label="レビュー"
              error={
                errors.description && touched.description
                  ? errors.description
                  : ''
              }
            />
            <Box my={3}>
              <UserIdField name="user_id" setFieldValue={setFieldValue} />
            </Box>
            {error && (
              <Box my={2}>
                <Alert severity="error">{error}</Alert>
              </Box>
            )}
            <Box>
              <LoadingButton
                fullWidth
                type="submit"
                color="primary"
                variant="contained"
                disabled={
                  Object.keys(errors).length > 0 ||
                  !values.user_id ||
                  !values.product_variation_id ||
                  !values.description ||
                  isLoading
                }
                isLoading={isLoading}
              >
                レビューを投稿する
              </LoadingButton>
            </Box>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default ReviewFormContent;
