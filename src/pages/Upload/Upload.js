import React from 'react';
import './Upload.scss';
import '../../styles/global.scss';
import { NavLink } from 'react-router-dom';
import publish from '../../assets/images/publish.svg';
import thumbnail from '../../assets/images/Upload-video-preview.jpg';

function Upload() {

    const uploadSuccess = () => {
        alert("Upload Successful!");
    }

    return (
        <main className="upload">
            <div className="upload__section">
                <h1 className="upload__title">Upload Video</h1>
                <form className="upload__form">
                    <div className="upload__inputs">
                        <div className="upload__thumbnail">
                            <h4 className="upload__thumbnail-title">VIDEO THUMBNAIL</h4>
                            <img className="upload__thumbnail-image" src={thumbnail} alt="video thumbnail" />
                        </div>
                        <div className="upload__form-fields">
                            <h4 className="upload__title-prompt">TITLE YOUR VIDEO</h4>
                            <input className="upload__title-input" type="text" name="title" placeholder="Add a title to your video" required></input>
                            <h4 className="upload__description-title">ADD A VIDEO DESCRIPTION</h4>
                            <textarea className="upload__description-input" name="description" placeholder="Add a description to your video" required></textarea>
                        </div>
                    </div>
                    <div className="upload__buttons">
                        <NavLink to="/" className="upload__publish-link" onClick={() => { uploadSuccess() }} >
                            <button className="upload__publish" type="submit">
                                <img className="upload__publish-icon" src={publish} alt="publish icon" />
                                PUBLISH
                            </button>
                        </NavLink>
                        <NavLink to="/" className="upload__cancel-link">
                            <button className="upload__cancel">CANCEL</button>
                        </NavLink>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Upload