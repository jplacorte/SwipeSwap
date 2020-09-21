import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MDBIcon, MDBRow, MDBCol, MDBModal, MDBModalHeader, MDBModalBody, MDBBtn, MDBAnimation } from 'mdbreact';
import { Link }  from 'react-router-dom';
import "../../css/style.css";
import "../../css/mediaQuery.css";

const ItemGalleryItems = ({ item: {_id, itemname, auth, description, photo, category, status} }) => (
    <MDBCol size="4" className="p-0 item-gallery-image item-grid">
        <a href={`/itemDetails/${_id}`}>
            <img src="https://mdbootstrap.com/img/Others/documentation/img%20(151)-mini.jpg" alt="img.png"/>
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