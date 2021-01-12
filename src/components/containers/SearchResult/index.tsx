import {Box} from '@material-ui/core';
import React from 'react';
import {ProductMaster} from '../../../types';
import PaginatedList from '../PaginatedList';
import ProductListItem from '../../elements/ProductListItem';
import NoResult from '../../elements/NoResult';
import SearchHeader from './SearchHeader';
import ProductList from '../ProductList';

interface SearchResultProps {
  product_masters: ProductMaster[];
  product_count: number;
  page_count: number;
}

const SearchResult: React.FC<SearchResultProps> = ({
  product_masters,
  product_count = 0,
  page_count,
}) => {
  const renderItem = (p, i) => (
    <ProductListItem key={p.product_master_id} product={p} index={i} />
  );

  return (
    <div>
      <SearchHeader product_count={product_count} />
      {product_masters ? (
        <Box mb={1}>
          <PaginatedList name="search-result" pageCount={page_count}>
            <ProductList products={product_masters} />
          </PaginatedList>
        </Box>
      ) : (
        <NoResult name="商品" />
      )}
    </div>
  );
};

export default SearchResult;
