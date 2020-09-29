import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllTransaction } from '../../actions/transaction';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Chat from './chat';

const Chats = ({ getAllTransaction, transaction: { transactions, loading } }) => {
    useEffect(() => {
        getAllTransaction()
    }, [getAllTransaction])
    return (
     <div className="chats">
         {
             transactions.length > 0 ? (
                 transactions.map( transaction => (
                    <Chat
                        id={transaction._id}
                        name="Mac"
                        message="Hello!"
                        timestamp="40 seconds ago"
                        profilePic="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg"
                    />
                ))
             ):(<h4>Chat is empty....</h4>)
         }
    </div>
    );
}

const mapStateToProps = state => ({
    transaction: state.transaction
})

export default connect(mapStateToProps, { getAllTransaction })(Chats);