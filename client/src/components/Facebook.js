import React, { Fragment } from 'react';
import { MDBIcon } from 'mdbreact';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/auth';
import FacebookLogin from 'react-facebook-login';
import "../css/style.css";
import "../css/mediaQuery.css";

import 'react-toastify/dist/ReactToastify.css';

const Facebook = ({ login, isAuthenticated }) => {

    const responseFacebook = response => {
        login(response.name, response.email, response.picture)
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
  
export default connect(mapStateProps, { login } )(Facebook)
