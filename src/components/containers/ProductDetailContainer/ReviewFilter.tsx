import {TextField} from '@material-ui/core';
import {
  Autocomplete,
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
} from '@material-ui/lab';
import {useRouter} from 'next/router';
import React, {useState} from 'react';
import _ from 'lodash';

type Flavor = {id: string; flavor: string};

interface ReviewFilterProps {
  flavors: Flavor[];
}

const ReviewFilter: React.FC<ReviewFilterProps> = ({flavors}) => {
  const router = useRouter();
  const [value, setValue] = useState<Flavor | null>(
    router.query.variation_id
      ? flavors.find((f) => f.id === router.query.variation_id)
      : null
  );

  const handleSelect = (
    event: React.ChangeEvent<{}>,
    value: {
      id: string;
      flavor: string;
    },
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<{
      id: string;
      flavor: string;
    }>
  ) => {
    const variation_id = value ? value.id : null;

    setValue(value);

    if (variation_id === router.query.variation_id) {
      //NOTE: if value hasn't changed, return early.
      return;
    }

    if (!variation_id) {
      return router.push({
        pathname: `/products/${router.query.id}`,
        query: _.omit(router.query, 'variation_id'),
      });
    }

    router.push({
      pathname: `/products/${router.query.id}`,
      query: {...router.query, variation_id},
    });
  };

  return (
    <Autocomplete
      id="flavor-select"
      options={flavors}
      value={value}
      getOptionLabel={(option: Flavor) => option.flavor}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="フレーバー"
          placeholder="フレーバーで絞り込む"
        />
      )}
      onChange={handleSelect}
      noOptionsText="条件に一致するものがありません。"
      fullWidth
      blurOnSelect
    />
  );
};

export default ReviewFilter;
