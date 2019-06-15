import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faTwitter } from '@fortawesome/free-solid-svg-icons'
import './global.css';
//import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges';

const container = document.getElementById('app');
// library.add(fab, faTwitter)

ReactDOM.render(<Badges/>,container);
