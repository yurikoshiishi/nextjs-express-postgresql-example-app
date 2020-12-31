import {NextPage} from 'next';
import {Error, fetchHomePage} from '../utils/api';
import HeroSection from '../components/containers/HeroSection';
import DefaultLayout from '../components/layouts/DefaultLayout';
import {Box, Container} from '@material-ui/core';
import HomePageProductSection from '../components/containers/HomePageProductSection';
import {HomePageData} from '../types';

interface HomeProps {
  error: Error | null;
  data: HomePageData;
}

const Home: NextPage<HomeProps> = ({data}) => {
  return (
    <DefaultLayout disableContainer>
      <HeroSection />
      <Container maxWidth="md">
        <Box py={5} px={2}>
          <HomePageProductSection
            title="最も高評価のプロテイン"
            products={data.top_rated}
            href="/categories/top-rated"
          />
          <HomePageProductSection
            title="最もレビューの多いプロテイン"
            products={data.most_reviewed}
            href="/categories/most-reviewed"
          />
        </Box>
      </Container>
    </DefaultLayout>
  );
};

export const getServerSideProps = async (ctx) => {
  const res = await fetchHomePage(ctx);
  return {props: {data: res.data, error: res.error}};
};

export default Home;
