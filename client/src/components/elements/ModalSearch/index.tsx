import React from 'react';
import {Backdrop, Fade, makeStyles, Modal, TextField} from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import useSearch from '../../../hooks/useSearch';

const useStyles = makeStyles((theme) => ({
  textField: {
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
    '& .MuiInputBase-root': {
      width: '100%',
      height: 50,
    },
    '& .MuiOutlinedInput-root': {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[1],
    },
  },
  form: {
    width: 400,
    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
}));

interface ModalSearchProps {
  open: boolean;
  handleClose: () => void;
}

const ModalSearch: React.FC<ModalSearchProps> = ({open, handleClose}) => {
  const classes = useStyles();

  const {value, handleChange, handleSubmit} = useSearch(handleClose);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 200,
      }}
      className={classes.modal}
    >
      <Fade in={open}>
        <form action="." onSubmit={handleSubmit} className={classes.form}>
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
        </form>
      </Fade>
    </Modal>
  );
};

export default ModalSearch;
