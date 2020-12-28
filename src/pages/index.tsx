import {NextPage} from 'next';
import {ProductMaster} from '../types';
import ProductList from '../components/containers/Login/ProductList';
import {fetchProductMasters} from '../utils/api';

interface HomeProps {
  products: ProductMaster[];
}

const Home: NextPage<HomeProps> = ({products}) => {
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const products = await fetchProductMasters(ctx.req);
  return {props: {products}};
};

export default Home;
