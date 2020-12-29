import {Box} from '@material-ui/core';
import {ProductMaster} from '../../../types';
import ProductListItem from './ProductListItem';

interface ProductListProps {
  products: ProductMaster[];
}

const ProductList: React.FC<ProductListProps> = ({products}) => {
  return (
    <Box py={2}>
      {products.map((product) => (
        <ProductListItem key={product.product_master_id} product={product} />
      ))}
    </Box>
  );
};

export default ProductList;
