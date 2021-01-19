import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginPage from "../login/";
import IntroFormPage from "../introForm";
import HomePage from "../homepage";
import Conversation from "../conversation";
import ChatScreen from "../conversation/chatScreen";
import Notifications from "../notifications";
import Profile from "../profile";
import ItemDetails from "../profile/itemDetails";
import Settings from "../settings";
import EditCategories from "../settings/editCategories";
import SwapCoins from "../swapCoins";
import Support from "../support";
import Marketplace from "../marketplace";
import EndUserAgreement from "../support/endUserAgreement";
import PrivacyPolicy from "../support/privacyPolicy";
import ProhibitedItems from "../support/prohibitedItems";
import LandingPage from "../landing";
import PrivateRoute from '../routing/PrivateRoute';

const Routes = props => {
    return (
        <Switch>
            <Route exact path="/login" component={LoginPage} />
            <PrivateRoute exact path="/introForm" component={IntroFormPage} />
            <PrivateRoute exact path="/homepage" component={HomePage} />
            <PrivateRoute exact path="/conversation" component={Conversation} />
            <PrivateRoute exact path="/chatScreen/:conID/:id" component={ChatScreen} />
            <PrivateRoute exact path="/notifications" component={Notifications} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/itemDetails/:id" component={ItemDetails} />
            <PrivateRoute exact path="/settings" component={Settings} />
            <PrivateRoute exact path="/editCategories" component={EditCategories} />
            <PrivateRoute exact path="/swapCoins" component={SwapCoins} />
            <PrivateRoute exact path="/support" component={Support} />
            <PrivateRoute exact path="/marketplace" component={Marketplace} />
            <PrivateRoute exact path="/endUserAgreement" component={EndUserAgreement} />
            <PrivateRoute exact path="/privacyPolicy" component={PrivacyPolicy} />
            <PrivateRoute exact path="/prohibitedItems" component={ProhibitedItems} />
            <Route exact path="/" component={LandingPage} />
            <Route
                render={function () {
                return <h1>Not Found</h1>;
            }}
        />
        </Switch>
    )
}

export default Routes;