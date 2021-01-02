import {NextPage} from 'next';
import {Error, fetchSearchResult} from '../utils/api';
import DefaultLayout from '../components/layouts/DefaultLayout';
import SearchResult from '../components/containers/SearchResult';
import {SearchResult as SearchResultType} from '../types';
import SidebarLayout from '../components/layouts/SiderbarLayout';

interface SearchProps {
  error: Error | null;
  data: SearchResultType | null;
}

const Search: NextPage<SearchProps> = ({data}) => {
  return (
    <SidebarLayout noIndex>
      <SearchResult {...data} />
    </SidebarLayout>
  );
};

export const getServerSideProps = async (ctx) => {
  const res = await fetchSearchResult(ctx);
  return {props: {data: res.data, error: res.error}};
};

export default Search;
