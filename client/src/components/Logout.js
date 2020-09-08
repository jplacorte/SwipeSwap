import React, { useState, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';
import { MDBIcon } from 'mdbreact';

const Logout = ({ isAuthenticated, logout }) => {

    return (        
        <Fragment>
            <div>
            <a onClick={logout} href="#!" className="sidemenu-footer px-3 py-2 white-text"><MDBIcon icon="power-off" className="mr-3"/>Log-out</a>
            </div>
        </Fragment>
    )
}

Logout.propTypes = {
    logout: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}
  
const mapStateProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
  
export default connect(mapStateProps, { logout } )(Logout)