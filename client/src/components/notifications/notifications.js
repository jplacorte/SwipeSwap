import React, { useEffect } from 'react';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Notification from './notification';
import SwipeSwapLogo from '../../assets/icons/icon.png';
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
                match.users.length > 1 && match.users.superwant != true ? (
                <Notification
                id={match._id} 
                name="Swipe Swap Team"
                message={`${isAuthenticated ? ( user.name == match.users[0].name ? match.users[1].name : match.users[0].name) : ''} matched with you!`}
                profilePic={SwipeSwapLogo}
                />): '')):(<h1>No notifs</h1>)
         }
         {
             transactions.length > 0 ? transactions.map(superwant => (
                 superwant.superwant === true ? (
                <Notification
                id={superwant._id} 
                name="Swipe Swap Team"
                message={`${superwant.users[0].userwantname} wants your item`}
                profilePic={SwipeSwapLogo}
                />): '')):("")
         }
    </div>
    );
}
const mapStateToProps = state => ({
    transaction: state.transaction,
    auth: state.auth
})

export default connect(mapStateToProps, { getAllTransaction })(Notifications);