import {NextPageContext} from 'next';
import React from 'react';
import nookies from 'nookies';
import firebaseAdmin from '../utils/firebaseAdmin';
import Login from '../components/Login';

interface LoginPageProps {
  [key: string]: any;
}

const LoginPage: React.FC<LoginPageProps> = (props) => {
  return (
    <div>
      <Login />
    </div>
  );
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  try {
    const cookies = nookies.get(ctx);
    await firebaseAdmin.auth().verifyIdToken(cookies.token);

    //NOTE: if user is authenticated, refirect to home page

    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
      props: {},
    };
  } catch (err) {
    return {
      props: {},
    };
  }
};

export default LoginPage;
