import React, {useRef, useState} from 'react';
import {
  Backdrop,
  Fade,
  Hidden,
  IconButton,
  makeStyles,
  Modal,
  TextField,
} from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import useSearch from '../../hooks/useSearch';

const useStyles = makeStyles((theme) => ({
  textField: {
    '& .MuiInputBase-root': {
      width: 350,
      height: 36,
      [theme.breakpoints.down('sm')]: {
        width: 250,
      },
    },
    '& .MuiOutlinedInput-input': {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    '& .Mui-focused': {
      '& .MuiSvgIcon-root': {
        color: theme.palette.primary.main,
      },
    },
    '& input::placeholder': {
      fontSize: '14px',
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& .MuiFormControl-root': {
      width: '90%',
    },
    '& .MuiInputBase-root': {
      width: '100%',
      height: 50,
    },
    '& .MuiOutlinedInput-root': {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[1],
    },
  },
}));

interface SearchProps {}

const Search: React.FC<SearchProps> = ({}) => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const {value, handleChange, handleSubmit} = useSearch(handleCloseModal);

  return (
    <form action="." onSubmit={handleSubmit} ref={formRef}>
      <Hidden xsDown>
        <TextField
          size="small"
          variant="outlined"
          placeholder="商品名やフレーバーで検索"
          InputProps={{
            startAdornment: <SearchOutlinedIcon color="action" />,
          }}
          className={classes.textField}
          value={value}
          onChange={handleChange}
        />
      </Hidden>
      <Hidden smUp>
        <IconButton onClick={handleOpenModal} edge="end">
          <SearchOutlinedIcon color="action" />
        </IconButton>
        <Modal
          open={open}
          onClose={handleCloseModal}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 200,
          }}
          className={classes.modal}
          container={formRef.current}
        >
          <Fade in={open}>
            <TextField
              size="medium"
              variant="outlined"
              placeholder="商品名やフレーバーで検索"
              InputProps={{
                startAdornment: <SearchOutlinedIcon color="action" />,
              }}
              autoFocus
              fullWidth
              className={classes.textField}
              value={value}
              onChange={handleChange}
              inputProps={{
                type: 'search',
                autoCapitalize: 'off',
                autoCorrect: 'off',
                autoComplete: 'off',
              }}
            />
          </Fade>
        </Modal>
      </Hidden>
    </form>
  );
};

export default Search;
