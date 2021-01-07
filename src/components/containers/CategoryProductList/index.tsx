import {useRouter} from 'next/router';
import React from 'react';
import {CATEGORIES} from '../../../constants';
import {ProductMasterWithReview} from '../../../types';
import PageTitle from '../../elements/PageTitle';
import ProductListItem from '../../elements/ProductListItem';

interface CategoryProductListProps {
  products: ProductMasterWithReview[];
}

const CategoryProductList: React.FC<CategoryProductListProps> = ({
  products,
}) => {
  const {query} = useRouter();
  const categoryId = query.id.toString();

  return (
    <div>
      <PageTitle title={`${CATEGORIES[categoryId].title}ランキング`} />
      <ul>
        {products.map((p, i) => (
          <ProductListItem
            key={p.product_master_id}
            product={p}
            reviews={p.reviews}
            badgeText={`${i + 1}位`}
            index={i}
          />
        ))}
      </ul>
    </div>
  );
};

export default CategoryProductList;
