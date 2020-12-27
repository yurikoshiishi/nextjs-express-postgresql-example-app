import {NextPageContext} from 'next';
import React from 'react';
import nookies from 'nookies';
import firebaseAdmin from '../../utils/firebaseAdmin';

interface PostReviewPageProps {
  [key: string]: any;
}

const PostReviewPage: React.FC<PostReviewPageProps> = (props) => {
  return <div></div>;
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  try {
    const cookies = nookies.get(ctx);
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);

    //TODO: fetch data for page

    return {
      props: {token},
    };
  } catch (err) {
    return {
      props: {},
    };
  }
};

export default PostReviewPage;
