import {useRouter} from 'next/router';
import React from 'react';
import Pagination from '../../elements/Pagination';
import {scroller, Element} from 'react-scroll';

interface PaginatedListProps {
  name?: string;
  items: any[];
  pageCount: number;
  renderItem: (any) => React.ReactElement;
  listParentComponent?: 'div' | 'ul';
  scrollOffset?: number;
}

const PaginatedList: React.FC<PaginatedListProps> = ({
  name = 'paginated-list',
  items,
  pageCount,
  renderItem,
  listParentComponent = 'ul',
  children,
  scrollOffset,
}) => {
  const router = useRouter();
  const currentPage = Number(router.query.page) || 1;

  const handlePageChange = (e: React.ChangeEvent, page: number) => {
    const {pathname, query} = router;
    query.page = `${page}`;
    router.push({
      pathname,
      query,
    });
    scroller.scrollTo(name, {
      duration: 500,
      delay: 50,
      smooth: true,
      offset: scrollOffset || -150,
    });
  };

  return (
    <Element name={name}>
      {items && renderItem
        ? React.createElement(listParentComponent, {
            children: items.map((item) => renderItem(item)),
          })
        : children}
      <Pagination
        currentPage={currentPage}
        pageCount={pageCount}
        onChange={handlePageChange}
      />
    </Element>
  );
};

export default PaginatedList;
