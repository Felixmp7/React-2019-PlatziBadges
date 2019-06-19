import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App'
import './global.css';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons';


const container = document.getElementById('app');
// library.add(fab)
// console.log(fab.faTwitter);

ReactDOM.render(<App/>,container);
