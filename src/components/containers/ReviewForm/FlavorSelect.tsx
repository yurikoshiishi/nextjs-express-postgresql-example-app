import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, {
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
} from '@material-ui/lab/Autocomplete';
import {Box, Typography} from '@material-ui/core';
import {Field} from 'formik';

interface FlavorSelectProps {
  flavors: {flavor: string; id: string}[];
  setFieldValue: (string, any) => void;
  name: string;
  error: string;
}

const FlavorSelect: React.FC<FlavorSelectProps> = ({
  flavors,
  setFieldValue,
  name,
  error,
}) => {
  const handleSelect = (
    event: React.ChangeEvent<{}>,
    value: {
      flavor: string;
      id: string;
    },
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<{
      flavor: string;
      id: string;
    }>
  ): void => {
    if (value) {
      setFieldValue(name, value.id);
    } else {
      setFieldValue(name, '');
    }
  };

  return (
    <Box mb={2}>
      <Typography component="label" variant="body2" color="textSecondary">
        風味
      </Typography>
      <Box mt={1}>
        <Autocomplete
          id="flavor-select"
          options={flavors}
          getOptionLabel={(option) => option.flavor}
          renderInput={(params) => (
            <Field
              {...params}
              name={name}
              as={TextField}
              variant="outlined"
              error={Boolean(error)}
              helperText={error}
            />
          )}
          onChange={handleSelect}
          noOptionsText="条件に一致するものがありません。"
        />
      </Box>
    </Box>
  );
};

export default FlavorSelect;
