import Link from 'next/link';
import {NextPage} from 'next';
import axios from 'axios';
import {ProductMaster} from './types';
import ProductList from './components/ProductList';
import {getAbsoluteUrl} from './utils';

interface HomeProps {
  products: ProductMaster[];
}

const Home: NextPage<HomeProps> = ({products}) => {
  return (
    <div>
      <ProductList products={products} />
      <Link href="/products/new">Create Review</Link>;
    </div>
  );
};

Home.getInitialProps = async (ctx) => {
  const res = await axios(`${getAbsoluteUrl(ctx.req).origin}/api/products`);
  const products = res.data;
  return {products};
};

export default Home;
