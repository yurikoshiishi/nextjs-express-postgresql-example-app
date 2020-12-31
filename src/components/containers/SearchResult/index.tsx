import {Box} from '@material-ui/core';
import React from 'react';
import {ProductMaster} from '../../../types';
import PaginatedList from '../PaginatedList';
import ProductListItem from '../ProductList/ProductListItem';
import NoResult from './NoResult';
import SearchHeader from './SearchHeader';

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
  const renderItem = (product_master) => (
    <ProductListItem
      key={product_master.product_master_id}
      product={product_master}
    />
  );

  return (
    <div>
      <SearchHeader product_count={product_count} />
      {product_masters ? (
        <Box mb={1}>
          <PaginatedList
            name="search-result"
            items={product_masters}
            pageCount={page_count}
            renderItem={renderItem}
          />
        </Box>
      ) : (
        <NoResult />
      )}
    </div>
  );
};

export default SearchResult;
