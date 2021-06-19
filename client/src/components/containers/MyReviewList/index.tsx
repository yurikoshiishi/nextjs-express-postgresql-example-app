import React from 'react';
import PageTitle from '../../elements/PageTitle';
import MyReviewListContent from './MyReviewListContent';

interface MyReviewListProps {}

const MyReviewList: React.FC<MyReviewListProps> = ({}) => {
  return (
    <div>
      <PageTitle title="自分のレビュー" />
      <MyReviewListContent />
    </div>
  );
};

export default MyReviewList;
