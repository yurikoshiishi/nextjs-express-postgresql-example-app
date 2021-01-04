import {makeStyles, FormControl, InputLabel, Select} from '@material-ui/core';
import {useRouter} from 'next/router';
import React, {useState} from 'react';
import _ from 'lodash';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450,
  },
}));

type Flavor = {id: string; flavor: string};

interface ReviewFilterProps {
  flavors: Flavor[];
}

const ReviewFilter: React.FC<ReviewFilterProps> = ({flavors}) => {
  const classes = useStyles();
  const router = useRouter();
  const [value, setValue] = useState<string>(
    router.query.variation_id ? router.query.variation_id.toString() : 'null'
  );

  const handleChange = (e) => {
    const variation_id = e.target.value;

    setValue(variation_id);

    if (variation_id === router.query.variation_id) {
      //NOTE: if value hasn't changed, return early.
      return;
    }

    if (variation_id === 'null' || !variation_id) {
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
    <FormControl variant="outlined" className={classes.root} fullWidth>
      <InputLabel htmlFor="review-flavor-options">フレーバー</InputLabel>
      <Select
        native
        value={value}
        onChange={handleChange}
        label="フレーバー"
        inputProps={{
          name: 'フレーバー',
          id: 'review-flavor-options',
        }}
      >
        <option value="null">全てのフレーバー</option>
        {flavors.map((flavor) => (
          <option key={flavor.id} value={flavor.id}>
            {flavor.flavor}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default ReviewFilter;
