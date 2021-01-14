import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom"; 
import "./css/style.css";
import Routes from "./Routes";
import { LOGOUT } from './actions/types';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';



const App = () => {

  useEffect(() => {
    if(localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []); 

    return (
    <Provider store={store}>
      <Router>
      <main>
        <Routes/>
     </main>
     </Router>
    </Provider>
    )
}

export default App;
