import React from 'react';
import { ToastContainer } from 'react-toastify';
import { css } from 'glamor';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import customTheme from 'theme';
import 'react-toastify/dist/ReactToastify.css';
import { MainPage } from 'pages/MainPage';

function TopLevelLayout() {
  return (
    <StylesProvider>
      <MuiThemeProvider theme={customTheme}>
        <CssBaseline />
        <ToastContainer
          progressClassName={css({
            background: customTheme.palette.primary.main,
          })}
          toastClassName={css({
            backgroundColor: customTheme.palette.background.light,
            color: customTheme.palette.text.primary,
          })}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: '99999',
            padding: 0,
          }}
        />
        <MainPage />
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default TopLevelLayout;
