import { createMuiTheme } from '@material-ui/core/styles';

const customTheme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#3A4452',
      light: '#5c6674',
      dark: '#2C333A',
      paper: '#445161',
    },
    text: {
      primary: '#FFFFFF',
      dark: '#191D21',
    },
    primary: {
      main: '#FFA117',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#2C333A',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#FC544B',
      dark: '#d32f2f',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#4caf50',
    },
    border: {
      main: '#52585D',
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: '#445161',
      },
    },
    MuiInputBase: {
      input: {
        '&:-webkit-autofill': {
          transitionDelay: '9999s',
          transitionProperty: 'background-color, color',
        },
      },
    },
    MuiCheckbox: {
      root: {
        '&$checked': {
          color: 'rgba(255, 255, 255, 0.7)',
        },
      },
    },
    MuiSwitch: {
      track: {
        backgroundColor: ['#191D21', '!important'],
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
      },
    },
  },
});

export default customTheme;
