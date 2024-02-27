import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter } from 'react-router-dom';
import './index.scss'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>   
       <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
