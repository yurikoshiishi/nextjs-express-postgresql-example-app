import {ProductMaster} from '../../types';

interface ProductListProps {
  products: ProductMaster[];
}

const ProductList: React.FC<ProductListProps> = ({products}) => {
  return (
    <div>
      {products.map((product) => (
        <pre key={product.product_master_id}>
          {JSON.stringify(product, null, 2)}
        </pre>
      ))}
    </div>
  );
};

export default ProductList;
