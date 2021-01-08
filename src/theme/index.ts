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
      main: '#e5a556',
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
    MuiAutoComplete: {
      noOptionsText: '条件に一致するものがありません。',
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
  MuiSelect: {
    select: {
      '&:focus': {
        backgroundColor: '#fff',
      },
    },
  },
  MuiPaper: {
    root: {
      borderColor: '#E7EDF3',
      border: '1px solid #E7EDF3',
      [theme.breakpoints.down('xs')]: {
        borderRadius: 0,
        borderLeft: 'none',
        borderRight: 'none',
      },
    },
    rounded: {
      borderRadius: 8,
    },
    outlined: {
      border: '1px solid #E7EDF3',
      borderRadius: 8,
      [theme.breakpoints.down('xs')]: {
        borderRadius: 0,
        borderLeft: 'none',
        borderRight: 'none',
      },
    },
    elevation1: {
      //NOTE: using elevation1 variant as with-border paper. (usual outlined has no border in xs and down)
      border: '1px solid #E7EDF3',
      borderRadius: 8,
      boxShadow: 'none',
    },
  },
  MuiCardContent: {
    root: {
      '&:last-child': {
        paddingBottom: 16,
      },
      [theme.breakpoints.down('xs')]: {
        padding: 16,
        '&:last-child': {
          paddingBottom: 16,
        },
      },
      '& .MuiDivider-root': {
        marginLeft: '-16px',
        marginRight: '-16px',
      },
    },
  },
  MuiContainer: {
    disableGutters: {
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
      paddingBottom: 16,
      [theme.breakpoints.down('xs')]: {
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
  },
};

theme = responsiveFontSizes(theme);

if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
  window.console.log(theme);
}

export default theme;
