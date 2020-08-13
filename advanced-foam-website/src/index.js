import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './components/_Main/MainApp';
import StudioApp from './components/_Studio/StudioApp';
import ConstructionApp from './components/_Construction/ConstructionApp';
import registerServiceWorker from './registerServiceWorker';
import SinglePost from './components/SinglePost/SinglePost'

ReactDOM.render(
    //<MainApp />,
    <StudioApp />, 
    //<SinglePost />,
    document.getElementById('root')
);
registerServiceWorker();
