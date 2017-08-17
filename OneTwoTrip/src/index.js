import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import SelectCompany from './components/selectCompany';
import  { flights } from '../data.json';


function reducers(state=[], action) {
    switch(action.type) {
        case 'FLIGHTS_DATA':
            return action.payload;
        default:
            return state
    }
}

const App = () => {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    store.dispatch({
        type: 'FLIGHTS_DATA',
        payload: flights
    });

    return (
        <Provider store={store}>
            <SelectCompany />
        </Provider>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));