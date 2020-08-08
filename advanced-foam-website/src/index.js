import React from 'react';
import ReactDOM from 'react-dom';
import './MainApp.css';
import MainApp from './MainApp';
import StudioApp from './StudioApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    /*<MainApp />,*/
    <StudioApp />, 
    document.getElementById('root')
);
registerServiceWorker();
