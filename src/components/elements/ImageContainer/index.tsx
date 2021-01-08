import {makeStyles} from '@material-ui/core';
import Image from 'next/image';
import React, {useState} from 'react';

const useStyles = ({desktopSize = 200, mobileSize = 100}) =>
  makeStyles((theme) => ({
    root: {
      position: 'relative',
      width: desktopSize,
      height: desktopSize,
      borderRadius: 8,
      overflow: 'hidden',
      [theme.breakpoints.down('md')]: {
        width: desktopSize * 0.85,
        height: desktopSize * 0.85,
      },
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
  const [error, setError] = useState<boolean>(false);
  return (
    <div className={`${classes.root} ImageContainer`}>
      <Image
        src={error ? '/images/fallback.jpg' : src}
        alt={alt}
        layout="fill"
        objectFit="contain"
        onError={() => setError(true)}
      />
    </div>
  );
};

export default ImageContainer;
