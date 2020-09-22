import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MDBIcon, MDBRow, MDBCol, MDBModal, MDBModalHeader, MDBModalBody, MDBBtn, MDBAnimation } from 'mdbreact';
import { Link }  from 'react-router-dom';
import ItemImg from '../../assets/images/swipeswap_item.jpg';
import "../../css/style.css";
import "../../css/mediaQuery.css";

const ItemGalleryItems = ({ item: {_id, itemname, auth, description, photo, category, status} }) => (
    <MDBCol size="4" className="item-gallery-image item-grid" style={{padding: '2px'}}>
        <a href={`/itemDetails/${_id}`}>
            <img src={ItemImg} alt="img.png"/>
        </a>
    </MDBCol>
)

ItemGalleryItems.propTypes = {
    itemname: PropTypes.object.isRequired,
    description: PropTypes.object.isRequired,
    photo: PropTypes.object.isRequired,
    category: PropTypes.object.isRequired,
    status: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(ItemGalleryItems)