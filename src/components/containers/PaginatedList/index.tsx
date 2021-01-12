import {useRouter} from 'next/router';
import React from 'react';
import Pagination from '../../elements/Pagination';
import {scroller, Element} from 'react-scroll';
import {Box} from '@material-ui/core';

interface PaginatedListProps {
  name?: string;
  items?: any[];
  renderItem?: (any) => React.ReactElement;
  pageCount: number;
  listParentComponent?: 'div' | 'ul';
  scrollOffset?: number;
  shallow?: boolean;
}

const PaginatedList: React.FC<PaginatedListProps> = ({
  name = 'paginated-list',
  items,
  pageCount,
  renderItem,
  listParentComponent = 'ul',
  children,
  scrollOffset,
  shallow = false,
}) => {
  const router = useRouter();
  const currentPage = Number(router.query.page) || 1;

  const handlePageChange = (e: React.ChangeEvent, page: number) => {
    const {pathname, query} = router;
    query.page = `${page}`;
    router.push(
      {
        pathname,
        query,
      },
      undefined,
      {shallow}
    );
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
      <Box mt={2}>
        <Pagination
          currentPage={currentPage}
          pageCount={pageCount}
          onChange={handlePageChange}
        />
      </Box>
    </Element>
  );
};

export default PaginatedList;
