import {useRouter} from 'next/router';
import React, {useEffect, useRef} from 'react';
import Pagination from '../../elements/Pagination';
import {scroller, Element} from 'react-scroll';

interface PaginatedListProps {
  name?: string;
  items: any[];
  pageCount: number;
  renderItem: (any) => React.ReactElement;
}

const PaginatedList: React.FC<PaginatedListProps> = ({
  name = 'paginated-list',
  items,
  pageCount,
  renderItem,
}) => {
  const router = useRouter();
  const isFirstRender = useRef<Boolean>(true);
  const currentPage = Number(router.query.page) || 1;

  useEffect(() => {
    //NOTE: do not scroll to top of the list when it's first render.
    //should only fire when a user navigates to different review list page.
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      scroller.scrollTo(name, {
        duration: 500,
        delay: 50,
        smooth: true,
        offset: -80,
      });
    }
  }, [currentPage]);

  const handlePageChange = (e: React.ChangeEvent, page: number) => {
    const path = router.pathname;
    const query = router.query;
    query.page = `${page}`;
    router.push({
      pathname: path,
      query: query,
    });
  };

  return (
    <Element name={name}>
      {items.map((item) => renderItem(item))}
      <Pagination
        currentPage={currentPage}
        pageCount={pageCount}
        onChange={handlePageChange}
      />
    </Element>
  );
};

export default PaginatedList;
