import React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';
import App from './components/App/App';
import GlobalStyle from './styled/globalStyled';

ReactDOM.render(
  <>
    <Normalize />
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);
