import {createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles';

let theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Arial',
      '"Hiragino Kaku Gothic Pro"',
      'Meiryo',
      '"メイリオ"',
      '"MS PGothic"',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
  },
  palette: {
    primary: {
      main: '#6356e5',
    },
    secondary: {
      main: '#55b3f3',
    },
    divider: `#E7EDF3`,
  },
  overrides: {
    MuiPaper: {
      outlined: {
        borderRadius: 8,
      },
      elevation1: {
        boxShadow:
          '0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)',
      },
    },
    MuiContainer: {
      root: {
        paddingLeft: 8,
        paddingRight: 8,
      },
    },
  },
  props: {
    MuiButton: {
      disableElevation: true,
    },
  },
});

theme = responsiveFontSizes(theme);

if (process.env.NODE_ENV === 'development') {
  console.log(theme);
}

export default theme;
