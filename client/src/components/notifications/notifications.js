import React, { useEffect } from 'react';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Notification from './notification';
import SwipeSwapLogo from '../../assets/icons/icon.png';
import { connect } from 'react-redux';
import { getAllTransaction, getUserWantTransaction, getUserWant1, getUserWant2 } from '../../actions/transaction';

const Notifications = ({ getAllTransaction, getUserWantTransaction, getUserWant1, getUserWant2, transaction: { transactions, userwanttransaction, transaction1, transaction2 }, auth: { isAuthenticated, user } }) => {
    
    useEffect(() => {
        getAllTransaction()
        getUserWantTransaction()
        getUserWant1()
        getUserWant2()
    }, [getAllTransaction, getUserWantTransaction, getUserWant1, getUserWant2])

    return (
     <div className="notifications">
         {
            transaction1.length > 0 ? transaction1.map(match => (
                match.superwant != true && match.user2 && match.item1 ? (
                <Notification
                id={match._id} 
                userID={match.user2}
                name="Swipe Swap Team"
                message={`${match.username2} matched with you!`}
                profilePic={SwipeSwapLogo}
                superwant = "false"
                usersuperwant="false"
                messaged={match.messaged}
                />): ''))
                :
            transaction2.map(match =>(
                match.superwant != true && match.user1 && match.item1 ? (
                <Notification
                id={match._id} 
                userID={match.user1}
                name="Swipe Swap Team"
                message={`${match.username1} matched with you!`}
                profilePic={SwipeSwapLogo}
                superwant = "false"
                usersuperwant="false"
                messaged={match.messaged}
                />): ''))
         }
         {
             transactions.length > 0 ? transactions.map(superwant => (
                superwant.superwant === true ? (
                <Notification
                id={superwant._id}
                userID={superwant.userwant} 
                name="Swipe Swap Team"
                message={superwant.accepted ? `Accepted ${superwant.userwantname}'s super want` : `${superwant.userwantname} wants your item`}
                profilePic={SwipeSwapLogo}
                superwant = "true"
                accepted = {superwant.accepted}
                usersuperwant="false"
                messaged={superwant.messaged}
                />): '')):("")
         }
         {
             userwanttransaction.length > 0 ? userwanttransaction.map(usertrans => (
                usertrans.superwant === true ? (
                    <Notification
                    id={usertrans._id} 
                    userID={usertrans.owner}
                    name="Swipe Swap Team"
                    message={usertrans.accepted ? `${usertrans.ownername} accepted your super want` : `Waiting for ${usertrans.ownername}'s Approval`}
                    profilePic={SwipeSwapLogo}
                    superwant = "true"
                    accepted = {usertrans.accepted}
                    usersuperwant="true"
                    messaged={usertrans.messaged}
                    />): '')):("")
         }
    </div>
    );
}
const mapStateToProps = state => ({
    transaction: state.transaction,
    auth: state.auth
})

export default connect(mapStateToProps, { getAllTransaction, getUserWantTransaction, getUserWant1, getUserWant2 })(Notifications);