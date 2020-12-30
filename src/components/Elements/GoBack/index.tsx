import {Button} from '@material-ui/core';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import Link from 'next/link';
import React from 'react';

interface GoBackProps {
  href: string;
  text: string;
}

const GoBack: React.FC<GoBackProps> = ({href, text}) => {
  return (
    <Link href={href} passHref>
      <Button
        variant="text"
        color="primary"
        startIcon={<ArrowBackOutlinedIcon />}
      >
        {text}
      </Button>
    </Link>
  );
};

export default GoBack;
