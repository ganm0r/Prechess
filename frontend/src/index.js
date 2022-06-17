import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { createGlobalStyle } from "styled-components";
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

const GlobalStyles = createGlobalStyle`
  html {
    scrollbar-width: none;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Nunito Sans';
    letter-spacing: 1.5px;
    overflow: hidden;
    overflow-y: scroll;
  }
`;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>
);