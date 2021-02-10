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

    let fbContent, disabled = false;

    const responseFacebook = response => {
        login(response.name, response.email, response.picture)
    }

    const redirect = () => {
        //Dev
        // window.location.href="/profile"
        
        //Deploy
        // For ios compatibility
        window.location.href = "https://swipeswap.me/profile"

        return false
    }

    if(isAuthenticated){
        disabled = true
        redirect()
    }
    
    fbContent = (<FacebookLogin
        appId="3246631198738334"
        fields="name,email,picture"
        disableMobileRedirect={true}
        callback={responseFacebook}
        textButton={isAuthenticated ? "Redirecting..." : "Login with facebook"}
        icon={<MDBIcon fab icon="facebook-square" className="mr-2" size="lg" />}
        isDisabled={disabled}
    />)

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
