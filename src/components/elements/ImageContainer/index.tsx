import {makeStyles} from '@material-ui/core';
import Image from 'next/image';
import React from 'react';

const useStyles = ({desktopSize, mobileSize}) =>
  makeStyles((theme) => ({
    root: {
      position: 'relative',
      width: desktopSize,
      height: desktopSize,
      borderRadius: 8,
      overflow: 'hidden',
      [theme.breakpoints.down('xs')]: {
        width: mobileSize,
        height: mobileSize,
      },
    },
  }));

interface ImageContainerProps {
  desktopSize: number;
  mobileSize: number;
  src: string;
  alt: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({
  desktopSize,
  mobileSize,
  src,
  alt,
}) => {
  const classes = useStyles({desktopSize, mobileSize})();
  return (
    <div className={`${classes.root} ImageContainer`}>
      <Image src={src} alt={alt} layout="fill" objectFit="contain" />
    </div>
  );
};

export default ImageContainer;
