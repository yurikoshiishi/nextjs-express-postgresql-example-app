import {Box} from '@material-ui/core';
import React from 'react';
import {ProductMaster} from '../../../types';
import GoBack from '../../elements/GoBack';
import PaginatedList from '../PaginatedList';
import ProductListItem from '../ProductList/ProductListItem';
import SearchHeader from './SearchHeader';

interface SearchResultProps {
  product_masters: ProductMaster[];
  product_count: number;
  page_count: number;
}

const SearchResult: React.FC<SearchResultProps> = ({
  product_masters,
  product_count,
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
      <PaginatedList
        name="search-result"
        items={product_masters}
        pageCount={page_count}
        renderItem={renderItem}
      />
      <Box m={1}>
        <GoBack href="/" text="トップに戻る" />
      </Box>
    </div>
  );
};

export default SearchResult;
