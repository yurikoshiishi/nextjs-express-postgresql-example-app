import React from 'react';
import PageWithImage from '../components/containers/PageWithImage';
import DefaultLayout from '../components/layouts/DefaultLayout';

interface Custom404Props {}

const Custom404: React.FC<Custom404Props> = ({}) => {
  return (
    <DefaultLayout>
      <PageWithImage
        title="ページが見つかりませんでした"
        imageUrl="/images/illustrations/page_not_found.svg"
      />
    </DefaultLayout>
  );
};

export default Custom404;
