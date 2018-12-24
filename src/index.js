import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';
import withGA from './withGA';

ReactDOM.render((
    <BrowserRouter>
        <ScrollToTop>
        <Route component={withGA(App)} />
        </ScrollToTop>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
