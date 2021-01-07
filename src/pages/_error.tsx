import React from 'react';
import PageWithImage from '../components/containers/PageWithImage';
import DefaultLayout from '../components/layouts/DefaultLayout';
import {Error as ErrorType} from '../utils/api';
import Custom404 from './404';

interface ErrorProps {
  error?: ErrorType;
}

const Error: React.FC<ErrorProps> = ({error = {}}) => {
  if (error && error.status === 404) {
    return <Custom404 />;
  }

  return (
    <DefaultLayout noIndex title="エラーが発生しました" centerContent>
      <PageWithImage
        title="エラーが発生しました"
        description={`エラーコード: ${error.status || 404}`}
        imageUrl="/images/illustrations/access_denied.svg"
      />
    </DefaultLayout>
  );
};

export default Error;
