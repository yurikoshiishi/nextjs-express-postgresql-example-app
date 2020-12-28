import {Box, TextField, Typography} from '@material-ui/core';
import {Field} from 'formik';
import React from 'react';

interface DescriptionFieldProps {
  label: string;
  name: string;
  error: string;
}

const DescriptionField: React.FC<DescriptionFieldProps> = ({
  name,
  label,
  error,
}) => {
  return (
    <div>
      <Typography component="label" variant="body2" color="textSecondary">
        {label}
      </Typography>
      <Box mt={1}>
        <Field
          name={name}
          as={TextField}
          variant="outlined"
          multiline
          rows={10}
          rowsMax={20}
          fullWidth
          error={Boolean(error)}
          helperText={error}
        />
      </Box>
    </div>
  );
};

export default DescriptionField;
