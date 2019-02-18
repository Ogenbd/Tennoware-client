import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';
import GenErrorBoundary from './components/errorboundaries/GenErrorBoundary';
import withGA from './withGA';

ReactDOM.render((
    <BrowserRouter>
        <GenErrorBoundary>
            <ScrollToTop>
                <Route component={withGA(App)} />
                {/* <App /> */}
            </ScrollToTop>
        </GenErrorBoundary>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
