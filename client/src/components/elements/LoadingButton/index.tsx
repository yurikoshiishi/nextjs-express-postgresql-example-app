import {Button, ButtonProps, CircularProgress} from '@material-ui/core';
import React from 'react';

interface LoadingButtonProps extends ButtonProps {
  isLoading: boolean;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  isLoading,
  children,
  ...rest
}) => {
  return (
    <Button {...rest}>
      {isLoading ? <CircularProgress size={24} /> : children}
    </Button>
  );
};

export default LoadingButton;
