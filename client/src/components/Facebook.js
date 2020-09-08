import React, { useState, Fragment } from 'react';
import { MDBBtn, MDBIcon } from 'mdbreact';
import FacebookLogin from 'react-facebook-login';
import { Link, Redirect } from 'react-router-dom';
import { MDBIcon } from 'mdbreact';
import "../css/style.css";
import "../css/mediaQuery.css";

import 'react-toastify/dist/ReactToastify.css';

const Facebook = ({ login, register, isAuthenticated }) => {

    const responseFacebook = response => {
        login(response.name, response.email)
    }

    let fbContent;

    fbContent= (<FacebookLogin
        appId="1015477185542718"
        fields="name,email,picture"
        callback={responseFacebook}
        textButton="Login with facebook"
        icon={<MDBIcon fab icon="facebook-square" className="mr-2" size="lg" />}
    />)

    if(isAuthenticated){
        return window.location.href="/profile"
    }
    return (               
        <Fragment>
        <div>
            {fbContent}
        </div>
        </Fragment>     
    )
}

Facebook.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}
  
const mapStateProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
  
export default connect(mapStateProps, { login, register } )(Facebook)
