import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import LoginPage from "./components/login/";
import IntroFormPage from "./components/introForm";
import HomePage from "./components/homepage";
import Conversation from "./components/conversation";
import ChatScreen from "./components/conversation/chatScreen";
import Notifications from "./components/notifications";
import Profile from "./components/profile";


class Routes extends React.Component {
  render() {
    return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/introForm" component={IntroFormPage} />
        <Route exact path="/homepage" component={HomePage} />
        <Route exact path="/conversation" component={Conversation} />
        <Route exact path="/chatScreen" component={ChatScreen} />
        <Route exact path="/notifications" component={Notifications} />
        <Route exact path="/profile" component={Profile} />
        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
      </Fragment>
    );
  }
}

export default Routes;
