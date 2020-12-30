import React from 'react';
import PageWithImage from '../components/containers/PageWithImage';
import DefaultLayout from '../components/layouts/DefaultLayout';
import {ApiError} from '../utils/api';

interface ErrorProps {
  error?: ApiError['error'];
}

const Error: React.FC<ErrorProps> = ({error = {}}) => {
  return (
    <DefaultLayout>
      <PageWithImage
        title="エラーが発生しました"
        description={`エラーコード: ${error.status || 404}`}
        imageUrl="/images/illustrations/access_denied.svg"
      />
    </DefaultLayout>
  );
};

export default Error;
