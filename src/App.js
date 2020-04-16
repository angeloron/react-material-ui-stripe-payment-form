import React from 'react';
import { StateProvider } from './StateContext';
import { ThemeProvider } from '@material-ui/styles';
import theme from './constants/theme';

import Header from "./Components/Header";
import Main from "./Views/Main"
import Footer from './Components/Footer';
import LegalNoticePopup from './Components/LegalNoticePopus.js/LegalNoticePopup';

const App = () => 
   <ThemeProvider theme={theme}>
    <StateProvider>
      <div style={{ flexGrow: 1 }}>
        <Header title="PAYMENT FORM" logoLink="logo.svg" />
        <Main />
        <Footer />
      </div>
      <LegalNoticePopup />
    </StateProvider>
  </ThemeProvider>

console.log(`%cPRODUCED AND DESIGNED BY\n      __      __\n     /\\ \\    / /\\\n    /  \\ \\  / /  \\\n   / /\\ \\ \\/ / /\\ \\\n  / ____ \\  / ____ \\\n /_/    \\_\\/_/    \\_\\ `, 'color: #5d9cb3;');

export default App;