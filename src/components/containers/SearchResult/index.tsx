import React from 'react';
import {ProductMaster} from '../../../types';

interface SearchResultProps {
  product_masters: ProductMaster[];
  product_count: number;
  page_count: number;
}

const SearchResult: React.FC<SearchResultProps> = (props) => {
  return (
    <div>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

export default SearchResult;
