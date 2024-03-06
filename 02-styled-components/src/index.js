import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from "styled-components";
import App from './App';

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111111"
}
const lightTheme = {
  textColor: "#111111",
  backgroundColor: "whitesmoke"
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);