import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import React from 'react';

interface NextArrowProps {
  className?: string;
  style?: object;
  onClick?: () => void;
}

const NextArrow: React.FC<NextArrowProps> = (props) => {
  const {className, style, onClick} = props;
  return (
    <ArrowForwardIosOutlinedIcon
      className={className}
      style={{...style}}
      onClick={onClick}
      color="action"
    />
  );
};

export default NextArrow;
