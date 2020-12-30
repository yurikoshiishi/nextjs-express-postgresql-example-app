import {Button, Card, InputBase, makeStyles} from '@material-ui/core';
import React, {useState} from 'react';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import {useRouter} from 'next/router';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0px 4px 6px rgba(60,64,67,0.3)',
  },
  input: {
    flexGrow: 1,
    padding: theme.spacing(0.5, 0, 0.5, 1),
    '& input': {
      paddingLeft: theme.spacing(0.5),
    },
    '& input::placeholder': {
      fontSize: '14px',
    },
  },
  button: {
    borderRadius: 0,
    alignSelf: 'stretch',
  },
}));

interface SearchFormProps {}

const SearchForm: React.FC<SearchFormProps> = ({}) => {
  const classes = useStyles();
  const [value, setValue] = useState<string>('');
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    router.push({
      pathname: '/search',
      query: {
        q: encodeURIComponent(value),
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <InputBase
        value={value}
        placeholder="商品名やフレーバーで検索"
        startAdornment={<SearchOutlinedIcon color="action" />}
        onChange={handleChange}
        className={classes.input}
      />
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        className={classes.button}
      >
        検索
      </Button>
    </form>
  );
};

export default SearchForm;
