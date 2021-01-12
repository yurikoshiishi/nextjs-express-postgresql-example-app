import {NextPageContext} from 'next';
import React from 'react';
import MyReviewList from '../../components/containers/MyReviewList';
import PageWithImage from '../../components/containers/PageWithImage';
import FirebaseLogin from '../../components/elements/FirebaseLogin';
import SidebarLayout from '../../components/layouts/SiderbarLayout';
import {useAuth} from '../../contexts/auth';
import nookies from 'nookies';
import firebaseAdmin from '../../utils/firebaseAdmin';

interface MyReviewsProps {
  [key: string]: any;
}

const MyReviews: React.FC<MyReviewsProps> = (props) => {
  const {user} = useAuth();

  return (
    <SidebarLayout title="自分のレビュー">
      {user ? (
        <MyReviewList />
      ) : (
        <PageWithImage
          title="ログインが必要です"
          imageUrl="/images/illustrations/authentication.svg"
          action={<FirebaseLogin />}
        />
      )}
    </SidebarLayout>
  );
};

export default MyReviews;
