import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import {store} from "../src/app/store"
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const container = document.getElementById('root');
const root = createRoot(container);

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#040714",
      },
    },
  },
})

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={customTheme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
