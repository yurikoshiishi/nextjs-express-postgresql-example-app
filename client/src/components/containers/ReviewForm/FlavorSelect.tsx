import React from 'react';
import {
  Box,
  Typography,
  FormControl,
  Select,
  FormHelperText,
} from '@material-ui/core';

interface FlavorSelectProps {
  flavors: {flavor: string; id: string}[];
  setFieldValue: (string, any) => void;
  name: string;
  error: string;
  value: string;
}

const FlavorSelect: React.FC<FlavorSelectProps> = ({
  flavors,
  setFieldValue,
  name,
  error,
  value,
}) => {
  const handleChange = (e) => {
    const variation_id = e.target.value;

    setFieldValue(name, variation_id || '');
  };

  return (
    <Box mb={2}>
      <Typography component="label" variant="body2" color="textSecondary">
        フレーバー
      </Typography>
      <Box mt={1}>
        <FormControl variant="outlined" fullWidth>
          <Select
            native
            value={value}
            onChange={handleChange}
            error={Boolean(error)}
          >
            {flavors.map((flavor) => (
              <option key={flavor.id} value={flavor.id}>
                {flavor.flavor}
              </option>
            ))}
          </Select>
          {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
      </Box>
    </Box>
  );
};

export default FlavorSelect;
