import React, { Component, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom"; 
import "./css/style.css";
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <Router>
      <main>
        <Routes/>
     </main>
     </Router>
    );
  }
}

export default App;
