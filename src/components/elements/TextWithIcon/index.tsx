import React from 'react';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      width: '1.125rem',
      height: '1.125rem',
      marginRight: theme.spacing(0.5),
      color: theme.palette.text.secondary,
      fill: theme.palette.text.secondary,
    },
    '& p': {
      fontSize: '0.875rem',
      color: theme.palette.text.secondary,
      fontWeight: 500,
    },
  },
}));

interface TextWithIconProps {
  className?: object | string;
  icon: React.ReactNode;
  text: string;
}

const TextWithIcon: React.FC<TextWithIconProps> = ({className, icon, text}) => {
  const classes = useStyles();
  return (
    <div className={`${classes.root} ${className ? className : ''}`}>
      {icon}
      <p>{text}</p>
    </div>
  );
};

export default TextWithIcon;
