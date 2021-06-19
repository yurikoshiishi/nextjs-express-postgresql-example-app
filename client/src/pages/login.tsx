import {NextPageContext} from 'next';
import nookies from 'nookies';
import React from 'react';
import PageWithImage from '../components/containers/PageWithImage';
import FirebaseLogin from '../components/elements/FirebaseLogin';
import DefaultLayout from '../components/layouts/DefaultLayout';
import {checkAuth} from '../utils/api';

interface LoginPageProps {
  [key: string]: any;
}

const LoginPage: React.FC<LoginPageProps> = (props) => {
  return (
    <DefaultLayout noIndex title="ログインはこちら" centerContent>
      <PageWithImage
        title="ログインはこちら"
        imageUrl="/images/illustrations/authentication.svg"
        action={<FirebaseLogin />}
      />
    </DefaultLayout>
  );
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  try {
    const cookies = nookies.get(ctx);
    const token = cookies.token;

    const res = await checkAuth(token);

    //NOTE: if user is authenticated, refirect to home page
    if (res.data.status === 'success') {
      return {
        redirect: {
          permanent: false,
          destination: '/',
        },
        props: {},
      };
    } else {
      throw Error('');
    }
  } catch (err) {
    return {
      props: {},
    };
  }
};

export default LoginPage;
