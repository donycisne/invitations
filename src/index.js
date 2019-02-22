import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "./components/Context";
import './css/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
