import {createMuiTheme} from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Arial',
      '"Hiragino Kaku Gothic Pro"',
      'Meiryo',
      '"メイリオ"',
      '"MS PGothic"',
      'sans-serif',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#6356e5',
    },
    secondary: {
      main: '#55b3f3',
    },
    divider: `1px solid rgba(0,0,0,0.12)`,
  },
  props: {
    MuiButton: {
      disableElevation: true,
    },
  },
});

export default theme;
