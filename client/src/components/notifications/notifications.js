import React, { useEffect } from 'react';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Notification from './notification';
import SwipeSwapLogo from '../../assets/images/ssicon.png';
import { connect } from 'react-redux';
import { getAllMatch } from '../../actions/match';

const Notifications = ({ getAllMatch, match:{ matches, loading }, auth: { isAuthenticated, user } }) => {
    
    useEffect(() => {
        getAllMatch()
    }, [getAllMatch])

    return (
     <div className="notifications">
         {
            matches.length > 0 ? matches.map(match => (
            <Notification 
                name="SwipeSwap Team"
                message={`${isAuthenticated ? (user.name = match.users[0].name ? match.users[1].name : match.users[0].name) : match.users[0].name} matched with you!`}
                profilePic={SwipeSwapLogo}
            />)):(<h1>No notifs</h1>)
         }
    </div>
    );
}
const mapStateToProps = state => ({
    match: state.match,
    auth: state.auth
})

export default connect(mapStateToProps, { getAllMatch })(Notifications);