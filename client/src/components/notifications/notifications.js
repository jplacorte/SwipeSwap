import React, { useEffect } from 'react';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Notification from './notification';
import SwipeSwapLogo from '../../assets/icons/icon.png';
import { connect } from 'react-redux';
import { getAllTransaction, getUserWantTransaction } from '../../actions/transaction';

const Notifications = ({ getAllTransaction, getUserWantTransaction, transaction: { transactions, userwanttransaction }, auth: { isAuthenticated, user } }) => {
    
    useEffect(() => {
        getAllTransaction()
        getUserWantTransaction()
    }, [getAllTransaction, getUserWantTransaction])

    return (
     <div className="notifications">
         {
            transactions.length > 0 ? transactions.map(match => (
                match.users.length > 1 && match.users.superwant != true ? (
                <Notification
                id={match._id} 
                name="Swipe Swap Team"
                message={`${isAuthenticated ? ( user.name === match.users[0].name ? match.users[1].name : match.users[0].name) : ''} matched with you!`}
                profilePic={SwipeSwapLogo}
                superwant = "false"
                usersuperwant="false"
                />): '')):("")
         }
         {
             transactions.length > 0 ? transactions.map(superwant => (
                superwant.superwant === true ? (
                <Notification
                id={superwant._id} 
                name="Swipe Swap Team"
                message={superwant.accepted ? `Accepted ${superwant.users[0].userwantname}'s super want` : `${superwant.users[0].userwantname} wants your item`}
                profilePic={SwipeSwapLogo}
                superwant = "true"
                accepted = {superwant.accepted}
                usersuperwant="false"
                />): '')):("")
         }
         {
             userwanttransaction.length > 0 ? userwanttransaction.map(usertrans => (
                usertrans.superwant === true ? (
                    <Notification
                    id={usertrans._id} 
                    name="Swipe Swap Team"
                    message={usertrans.accepted ? `${usertrans.users[0].ownername} accepted your super want` : `Waiting for ${usertrans.users[0].ownername}'s Approval`}
                    profilePic={SwipeSwapLogo}
                    superwant = "true"
                    accepted = {usertrans.accepted}
                    usersuperwant="true"
                    />): '')):("")
         }
    </div>
    );
}
const mapStateToProps = state => ({
    transaction: state.transaction,
    auth: state.auth
})

export default connect(mapStateToProps, { getAllTransaction, getUserWantTransaction })(Notifications);