import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Firebase, { FirebaseContext } from './Components/Firebase';
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "./Reducers/reducer";

const store = createStore(rootReducer)


ReactDOM.render(

    <Provider store = {store}>
    <FirebaseContext.Provider value={new Firebase()}>

        <App />

    </FirebaseContext.Provider>
    </Provider>,
    document.getElementById('root'),
);

serviceWorker.unregister();
