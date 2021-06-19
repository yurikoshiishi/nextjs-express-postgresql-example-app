import {FormControl, InputLabel, Select} from '@material-ui/core';
import {useRouter} from 'next/router';
import React, {useState} from 'react';
import {DB_COLUMNS} from '../../../constants';

interface ReviewSortSelectProps {}

const ReviewSortSelect: React.FC<ReviewSortSelectProps> = ({}) => {
  const router = useRouter();
  const [sort, setSort] = useState<string>(
    router.query.sort ? router.query.sort.toString() : DB_COLUMNS.thumbsup_count
  );

  const handleChange = (
    e: React.ChangeEvent<{
      name?: string;
      value: string;
    }>,
    child: React.ReactNode
  ) => {
    const sort = e.target.value;
    router.push({
      pathname: `/products/${router.query.product_id}`,
      query: {
        ...router.query,
        sort,
      },
    });
    setSort(sort);
  };

  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor="review-sorting-options">並び替え</InputLabel>
      <Select
        native
        value={sort}
        onChange={handleChange}
        label="並び替え"
        inputProps={{
          name: '並び替え',
          id: 'review-sorting-options',
        }}
      >
        <option value={DB_COLUMNS.thumbsup_count}>参考になった</option>
        <option value={DB_COLUMNS.created_at}>最新の投稿</option>
        <option value={DB_COLUMNS.total_rating}>評価が高い</option>
      </Select>
    </FormControl>
  );
};

export default ReviewSortSelect;
