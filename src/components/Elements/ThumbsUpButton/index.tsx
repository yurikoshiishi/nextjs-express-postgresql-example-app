import React, {useEffect, useState, useRef} from 'react';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import {Button, Typography} from '@material-ui/core';
import {decrementThumbsUp, incrementThumbsUp} from '../../../utils/api';
import {STORAGE_KEYS} from '../../../constants';
import DataStorage from '../../../utils/DataStorage';

interface ThumbsUpButtonProps {
  count: number;
  review_id: string;
}

const ThumbsUpButton: React.FC<ThumbsUpButtonProps> = ({
  count = 0,
  review_id,
}) => {
  const [currentCount, setCurrentCount] = useState(count);
  const storage = useRef(null);
  const [hasThumbsUpped, setHasThumbsUpped] = useState(false);

  useEffect(() => {
    if (window && window.localStorage) {
      const newStorage = new DataStorage(window.localStorage);
      storage.current = newStorage;
      setHasThumbsUpped(
        storage.current.hasItem(STORAGE_KEYS.thumbsup, review_id)
      );
    }
  }, []);

  const handleClick = async () => {
    if (!storage) {
      return;
    }

    try {
      if (hasThumbsUpped) {
        if (currentCount <= 0) {
          return;
        }
        setCurrentCount((prevCount) => (prevCount - 1 < 0 ? 0 : prevCount - 1));
        setHasThumbsUpped(false);
        await decrementThumbsUp(review_id);
        storage.current.removeItem(STORAGE_KEYS.thumbsup, review_id);
      } else {
        setCurrentCount((prevCount) => prevCount + 1);
        setHasThumbsUpped(true);
        await incrementThumbsUp(review_id);
        storage.current.addItem(STORAGE_KEYS.thumbsup, review_id);
      }
    } catch (err) {}
  };

  return (
    <Button
      variant="text"
      size="small"
      color={hasThumbsUpped ? 'primary' : 'default'}
      startIcon={
        <ThumbUpOutlinedIcon color={hasThumbsUpped ? 'primary' : 'action'} />
      }
      onClick={handleClick}
      disabled={!review_id}
    >
      <Typography
        variant="body2"
        color={hasThumbsUpped ? 'primary' : 'textSecondary'}
      >
        参考になった {currentCount}
      </Typography>
    </Button>
  );
};

export default ThumbsUpButton;
