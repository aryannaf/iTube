import React from 'react';
import './Upload.scss';
import '../../styles/global.scss';
import { NavLink } from 'react-router-dom';
import publish from '../../assets/images/publish.svg';
import thumbnail from '../../assets/images/Upload-video-preview.jpg';

function Upload() {

    return (
        <main className="upload">
            <div className="upload__section">
                <h1 className="upload__title">Upload Video</h1>
                <form className="upload__form">
                    <h4 className="upload__thumbnail-title">VIDEO THUMBNAIL</h4>
                    <img className="upload__thumbnail-image" src={thumbnail} alt="video thumbnail" />
                    <h4 className="upload__title-prompt">TITLE YOUR VIDEO</h4>
                    <input className="upload__title-input" type="text" placeholder="Add a title to your video"></input>
                    <h4 className="upload__description-title">ADD A VIDEO DESCRIPTION</h4>
                    <textarea className="upload__description-input" placeholder="Add a description to your video"></textarea>
                    <NavLink to="/" className="upload__publish-link">
                        <button className="upload__publish" type="submit">
                            <img className="upload__publish-icon" src={publish} alt="publish icon" />
                            PUBLISH
                        </button>
                    </NavLink>
                </form>
                <button className="upload__cancel">CANCEL</button>
            </div>
        </main>
    )
}

export default Upload