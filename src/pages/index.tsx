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
      <Container maxWidth="lg">
        <Box py={5}>
          <HomePageProductSection
            title="最も高評価のプロテイン"
            products={data.top_rated}
            href="/categories/top-rated"
            buttonText="高評価順で見る"
          />
          <HomePageProductSection
            title="最もレビューの多いプロテイン"
            products={data.most_reviewed}
            href="/categories/most-reviewed"
            buttonText="投稿数順で見る"
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
