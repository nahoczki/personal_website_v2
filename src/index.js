import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import reportWebVitals from './reportWebVitals';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#6564DB"
        },
        secondary: {
            main: "#89D2DC",
        },
    }
});
//https://coolors.co/89d2dc-6564db-232ed1-101d42-0d1317


ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App/>
    </ThemeProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
