import {
  createMuiTheme,
  responsiveFontSizes,
  Theme,
  ThemeOptions,
} from '@material-ui/core/styles';

interface Palette {
  main: string;
  dark: string;
  light: string;
}

export interface CustomThemeOptions extends ThemeOptions {
  thirdParties: {
    palette: {
      [key: string]: Palette;
    };
  };
}

export interface CustomTheme extends Theme {
  thirdParties: {
    palette: {
      [key: string]: Palette;
    };
  };
}

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
      fontSize: '1.75rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.5rem',
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
    text: {
      primary: 'rgba(0,0,0,0.75)',
    },
    divider: `#E7EDF3`,
  },
  thirdParties: {
    palette: {
      amazon: {
        main: '#febd69',
        dark: '#c88d3b',
        light: '#ffef99',
      },
      myprotein: {
        main: '#4ca6b1',
        dark: '#005462',
        light: '#4fb1c0',
      },
      iherb: {
        main: '#458500',
        dark: '#0e5700',
        light: '#77b53c',
      },
    },
  },
  props: {
    MuiButton: {
      disableElevation: true,
    },
    MuiCard: {
      variant: 'outlined',
    },
  },
} as CustomThemeOptions);

theme.overrides = {
  MuiButton: {
    root: {
      textTransform: 'none',
    },
  },
  MuiDialog: {
    paper: {
      borderRadius: 12,
      margin: 12,
    },
  },
  MuiPaper: {
    root: {
      borderColor: '#E7EDF3',
    },
    rounded: {
      borderRadius: 12,
    },
    outlined: {
      border: '1px solid #E7EDF3',
      borderRadius: 12,
      [theme.breakpoints.down('xs')]: {
        borderRadius: 0,
        borderLeft: 'none',
        borderRight: 'none',
      },
    },
    elevation1: {
      boxShadow:
        '0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)',
    },
  },
  MuiCardContent: {
    root: {
      '&:last-child': {
        paddingBottom: 16,
      },
      [theme.breakpoints.down('xs')]: {
        padding: 8,
        '&:last-child': {
          paddingBottom: 8,
        },
      },
      '& .MuiDivider-root': {
        marginLeft: '-16px',
        marginRight: '-16px',
      },
    },
  },
  MuiContainer: {
    root: {
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 16,
      paddingBottom: 16,
      [theme.breakpoints.down('xs')]: {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
  },
};

theme = responsiveFontSizes(theme);

export default theme;
