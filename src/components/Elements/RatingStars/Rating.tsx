import React from 'react';
import {Rating as MuiRating} from '@material-ui/lab';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';

interface RatingProps {
  rating: number;
  size?: 'small' | 'medium' | 'large';
  name?: string;
}

const Rating: React.FC<RatingProps> = ({rating, size, name}) => {
  return (
    <MuiRating
      name={name || '評価'}
      value={Number(rating)}
      readOnly
      precision={0.25}
      size={size || 'small'}
      emptyIcon={<StarBorderOutlinedIcon fontSize="inherit" />}
    />
  );
};

export default Rating;
