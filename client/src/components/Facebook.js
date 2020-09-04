import React, { useState, Fragment } from 'react';
import { MDBBtn, MDBIcon } from 'mdbreact';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login, register } from '../actions/auth';

import 'react-toastify/dist/ReactToastify.css';

const Facebook = ({ login, register, isAuthenticated }) => {
    const [ formData, setFormData ] = useState({ 
        isLoggedin: false,
        userID: '',
        name:'',
        email:''
     });


    const { isLoggedin, userID, name, email } = formData;
    const responseFacebook = response => {
        setFormData({
           ...formData,
           isLoggedin:true,
           userID: response.userID,
           name: response.name,
           email: response.email
       })
       
    }

    const fblogin = () => {
        login(name, email)
    }


    let fbContent;

    if(isLoggedin){
        fbContent = <MDBBtn 
            className="fb-btn my-2 px-5" color="blue-grey" onClick={fblogin}>
            <MDBIcon fab icon="facebook-square" className="mr-2" size="lg"/>Continue with facebook
            </MDBBtn>
    }else{
        fbContent= (<FacebookLogin
            appId="1015477185542718"
            autoLoad={true}
            version="2.3"
            fields="name,email,picture"
            callback={responseFacebook}
            textButton="Login with facebook"
            icon={<MDBIcon fab icon="facebook-square" className="mr-2" size="lg" />}
        />)
    }

    if(isAuthenticated){
        return window.location.href="/profile"
    }
    return (               
            <Fragment>
            <div>
                {fbContent}
                {/* <MDBBtn className="fb-btn my-2 px-5" color="blue-grey"><MDBIcon fab icon="facebook-square" className="mr-2" size="lg" />Login with Facebook</MDBBtn> */}
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
