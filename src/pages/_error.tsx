import React from 'react';
import PageWithImage from '../components/containers/PageWithImage';
import {ApiError} from '../utils/api';

interface ErrorProps {
  error?: ApiError['error'];
}

const Error: React.FC<ErrorProps> = ({error = {}}) => {
  return (
    <PageWithImage
      title="エラーが発生しました"
      description={`エラーコード: ${error.status || 404}`}
      imageUrl="/images/illustrations/access_denied.svg"
    />
  );
};

export default Error;
