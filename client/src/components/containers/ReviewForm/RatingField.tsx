import {Box, IconButton, makeStyles, Typography} from '@material-ui/core';
import {Rating} from '@material-ui/lab';
import React from 'react';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';

const useStyles = makeStyles((theme) => ({
  field: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

interface RatingFieldProps {
  label: string;
  name: string;
  setFieldValue: (string, any) => void;
  value: number;
  size?: 'small' | 'medium' | 'large';
}

const RatingField: React.FC<RatingFieldProps> = ({
  label,
  name,
  setFieldValue,
  value,
  size = 'large',
}) => {
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{}>, value: number) => {
    setFieldValue(name, value);
  };

  const handleIncrement = () => {
    if (value <= 4) {
      setFieldValue(name, value + 1);
    }
  };
  const handleDecrement = () => {
    if (value >= 2) {
      setFieldValue(name, value - 1);
    }
  };

  return (
    <Box mb={2}>
      <Typography component="legend" variant="body2" color="textSecondary">
        {label}
      </Typography>
      <div className={classes.field}>
        <IconButton color="default" onClick={handleDecrement}>
          <RemoveOutlinedIcon />
        </IconButton>
        <Rating
          id={name}
          name={name}
          value={value}
          size={size}
          precision={1}
          emptyIcon={<StarBorderOutlinedIcon fontSize="inherit" />}
          onChange={handleChange}
        />
        <IconButton color="default" onClick={handleIncrement}>
          <AddOutlinedIcon />
        </IconButton>
      </div>
    </Box>
  );
};

export default RatingField;
