import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from "react-hot-loader";

import App from "./App.jsx";

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    );
};

render(App);

if(module.hot) {
    module.hot.accept('./App.jsx', () => {
        const NewApp = require('./App.jsx').default;
        render(NewApp);
     });
}