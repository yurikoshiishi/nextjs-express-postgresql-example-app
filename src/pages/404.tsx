import React from 'react';
import PageWithImage from '../components/containers/PageWithImage';

interface Custom404Props {}

const Custom404: React.FC<Custom404Props> = ({}) => {
  return (
    <PageWithImage
      title="ページが見つかりませんでした"
      imageUrl="/images/illustrations/page_not_found.svg"
    />
  );
};

export default Custom404;
