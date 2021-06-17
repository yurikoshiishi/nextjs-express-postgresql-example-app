import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import React from 'react';

interface PrevArrowProps {
  className?: string;
  style?: object;
  onClick?: () => void;
}

const PrevArrow: React.FC<PrevArrowProps> = (props) => {
  const {className, style, onClick} = props;
  return (
    <ArrowBackIosOutlinedIcon
      className={className}
      style={{...style}}
      onClick={onClick}
      color="action"
    />
  );
};

export default PrevArrow;
