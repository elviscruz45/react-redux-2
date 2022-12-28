import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/App';
import "./css/index.css"
import "./css/iconos.css"

//Estamos creando el store , que es el primer paso para crear el Redux
import {legacy_createStore as createStore,applyMiddleware } from "redux"
import {Provider} from "react-redux"
import reduxThunk from "redux-thunk"

import reducers from "./reducers"

const store=createStore(
  reducers,//Todos los reducers,
  {},//Estado Inicial
  applyMiddleware(reduxThunk)
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

