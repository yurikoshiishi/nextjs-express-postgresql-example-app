import {NextPage} from 'next';
import {ProductMaster} from '../types';
import ProductList from '../components/containers/ProductList';
import {fetchProductMasters} from '../utils/api';
import HeroSection from '../components/containers/HeroSection';
import DefaultLayout from '../components/layouts/DefaultLayout';
import {Container} from '@material-ui/core';

interface HomeProps {
  products: ProductMaster[];
}

const Home: NextPage<HomeProps> = ({products}) => {
  return (
    <DefaultLayout disableContainer>
      <HeroSection />
      <Container maxWidth="md">
        <ProductList products={products} />
      </Container>
    </DefaultLayout>
  );
};

export const getServerSideProps = async (ctx) => {
  const products = await fetchProductMasters(ctx.req);
  return {props: {products}};
};

export default Home;
