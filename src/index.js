import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
// import { TennoProvider } from './context/context';

import ScrollToTop from './ScrollToTop';

ReactDOM.render((
    // <TennoProvider>
    <BrowserRouter>
        <ScrollToTop>
            {/* <TennoProvider> */}
                <App />
            {/* </TennoProvider> */}
        </ScrollToTop>
    </BrowserRouter>
    // </TennoProvider>
), document.getElementById('root'));
registerServiceWorker();
