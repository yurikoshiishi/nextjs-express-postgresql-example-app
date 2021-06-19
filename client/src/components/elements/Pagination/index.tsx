import React from 'react';
import {Pagination as MuiPagination} from '@material-ui/lab';

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  pageCount,
  currentPage,
  onChange,
}) => {
  return (
    <MuiPagination
      page={currentPage}
      count={parseInt(`${pageCount}`)}
      onChange={onChange}
      shape="rounded"
      color="primary"
    />
  );
};

export default Pagination;
