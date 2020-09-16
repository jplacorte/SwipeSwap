import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom"; 
import "./css/style.css";
import Routes from "./Routes";
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

// Redux
import { Provider } from 'react-redux';
import store from './store';

if(localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
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
