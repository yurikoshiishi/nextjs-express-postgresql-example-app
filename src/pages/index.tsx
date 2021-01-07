import {NextPage} from 'next';
import {Error, fetchHomePage} from '../utils/api';
import HeroSection from '../components/containers/HeroSection';
import DefaultLayout from '../components/layouts/DefaultLayout';
import {Box, Container} from '@material-ui/core';
import HomePageSection from '../components/containers/HomePageSection';
import {HomePageData} from '../types';
import ProductListCard from '../components/containers/HomePageSection/ProductListCard';

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
          <HomePageSection
            title="最も高評価のプロテイン"
            content={<ProductListCard products={data.top_rated} />}
            href="/categories/top-rated"
            buttonText="高評価プロテインを見る"
          />
          <HomePageSection
            title="最もレビューの多いプロテイン"
            content={<ProductListCard products={data.most_reviewed} />}
            href="/categories/most-reviewed"
            buttonText="レビューの多いプロテインを見る"
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
