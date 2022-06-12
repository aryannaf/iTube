import React from 'react';
import './UploadNotif.scss';
import '../../styles/global.scss';
import { NavLink } from 'react-router-dom';

function UploadNotif() {

    return (
        <div className="upload-notification">
            <h2 className="upload-notification__title">UPLOAD SUCCESSFUL!</h2>
            <NavLink to="/" className="upload-notification__return-link">
                <button className="upload-notification__return-home">RETURN TO HOME</button>
            </NavLink>
        </div>
    )
}

export default UploadNotif