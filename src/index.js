import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

let apiUrl;
if (process.env.NODE_ENV === "production") {
  apiUrl = "https://cors-anywhere.herokuapp.com/";
}
else {
  apiUrl = "https://content.viaplay.se/pc-se/serier/samtliga";
}

axios.defaults.baseURL = apiUrl;
ReactDOM.render(<App />,
document.getElementById('root')
);

serviceWorker.unregister();
