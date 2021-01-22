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

    let fbContent;

    const responseFacebook = response => {
        login(response.name, response.email, response.picture)
    }

    fbContent = (<FacebookLogin
        appId="3246631198738334"
        fields="name,email,picture"
        disableMobileRedirect={true}
        callback={responseFacebook}
        textButton="Login with facebook"
        icon={<MDBIcon fab icon="facebook-square" className="mr-2" size="lg" />}
    />)

    if(isAuthenticated){
        fbContent = (<FacebookLogin
            appId="3246631198738334"
            fields="name,email,picture"
            disableMobileRedirect={true}
            callback={responseFacebook}
            textButton="Redirecting..."
            icon={<MDBIcon fab icon="facebook-square" className="mr-2" size="lg" />}
            isDisabled
        />)
        window.location="/profile"   
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
