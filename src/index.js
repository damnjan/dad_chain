import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import saga from './sagas';
import './index.css';
import App from './components/App';
import { Provider } from "react-redux";


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
	reducer,
	composeWithDevTools(
		applyMiddleware(sagaMiddleware)
	)
);

sagaMiddleware.run(saga);

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);