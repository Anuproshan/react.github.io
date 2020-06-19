import React from 'react';
import ReactDom from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
ReactDom.render(<App />, document.getElementById('root'));
serviceWorker.register();
