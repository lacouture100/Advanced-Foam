import React from 'react';
import ReactDOM from 'react-dom';
import './MainApp.css';
import MainApp from './MainApp';
import StudioApp from './StudioApp';
import registerServiceWorker from './registerServiceWorker';
import SinglePost from './SinglePost'

ReactDOM.render(
    /*<MainApp />,
    /*<StudioApp />, */
    <SinglePost />,
    document.getElementById('root')
);
registerServiceWorker();
