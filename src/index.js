import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducers from './reducers';

// Before
// ReactDOM.render(<App/>, document.querySelector('#root'));

// The prop passed to the PROVIDER component must be named 'store'
ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);