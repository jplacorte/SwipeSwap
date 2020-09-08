import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Link, Redirect } from 'react-router-dom';
import { MDBIcon } from 'mdbreact';
import "../css/style.css";
import "../css/mediaQuery.css";

export default class Facebook extends Component {
    state = {
        isLoggedin: false,
        userID: '',
        name:'',
        email:'',
        picture:''
    }

    responseFacebook = response => {
       this.setState({
           isLoggedin:true,
           userID: response.userID,
           name: response.name,
           email: response.email,
           pciture: response.pciture
       })
    }
    componentClicked = () => console.log("clicked")
    render() {
        let fbContent;

        if(this.state.isLoggedin){
           return <Redirect to="/homepage"/>
        }else{
        fbContent= (<FacebookLogin
            appId="234313264450632"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook} 
            icon={<MDBIcon fab icon="facebook-square" className="mr-2" size="lg" />}
            />)
        }
        return (
            <div>
                {fbContent}
                {/* <MDBBtn className="fb-btn my-2 px-5" color="blue-grey"><MDBIcon fab icon="facebook-square" className="mr-2" size="lg" />Login with Facebook</MDBBtn> */}
            </div>
        )
    }
}
