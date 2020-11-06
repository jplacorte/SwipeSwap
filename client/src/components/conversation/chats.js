import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllTransaction } from '../../actions/transaction';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Chat from './chat';

const Chats = ({ getAllTransaction, transaction: { transactions, loading }, auth: { isAuthenticated, user } }) => {
    useEffect(() => {
        getAllTransaction()
    }, [getAllTransaction])
    return (
     <div className="chats">
            {
             transactions.length > 0 ? (
                 transactions.map( transaction => (
                    transaction.users.length > 1 ? (
                    <Chat
                        id={transaction._id}
                        name={isAuthenticated ? ( user.name === transaction.users[0].name ? transaction.users[1].name : transaction.users[0].name) : ''}
                        message="Hello!"
                        timestamp="40 seconds ago"
                        profilePic="https://res.cloudinary.com/dibx7ua1g/image/upload/v1602141359/swipeSwap/jrpcj5s7vpijiqxau5x0.jpg"
                    />
                ): '')) 
             ):(<h4>Chat is empty....</h4>)
            }
    </div>
    );
}

const mapStateToProps = state => ({
    transaction: state.transaction,
    auth: state.auth
})

export default connect(mapStateToProps, { getAllTransaction })(Chats);