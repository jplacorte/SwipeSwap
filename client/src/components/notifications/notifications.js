import React, { useEffect } from 'react';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Notification from './notification';
import SwipeSwapLogo from '../../assets/images/ssicon.png';
import { connect } from 'react-redux';
import { getAllTransaction } from '../../actions/transaction';

const Notifications = ({ getAllTransaction, transaction: { transactions, loading }, auth: { isAuthenticated, user } }) => {
    
    useEffect(() => {
        getAllTransaction()
    }, [getAllTransaction])

    return (
     <div className="notifications">
         {
            transactions.length > 0 ? transactions.map(match => (
                match.users.length > 1 ? (
                <Notification
                id={match._id} 
                name="Swipe Swap Team"
                message={`${isAuthenticated ? ( user.name == match.users[0].name ? match.users[1].name : match.users[0].name) : ''} matched with you!`}
                profilePic={SwipeSwapLogo}
                />): '')):(<h1>No notifs</h1>)
         }
    </div>
    );
}
const mapStateToProps = state => ({
    transaction: state.transaction,
    auth: state.auth
})

export default connect(mapStateToProps, { getAllTransaction })(Notifications);