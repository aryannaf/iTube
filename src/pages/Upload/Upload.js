import React from 'react';
import './Upload.scss';
import '../../styles/global.scss';
import { NavLink } from 'react-router-dom';
import publish from '../../assets/images/publish.svg';
import thumbnail from '../../assets/images/Upload-video-preview.jpg';

function Upload() {

    return (
        <main>
            <h1>Upload Video</h1>
            <form>
                <h4>VIDEO THUMBNAIL</h4>
                <img src={thumbnail} alt="video thumbnail" />
                <h4>TITLE YOUR VIDEO</h4>
                <input type="text" placeholder="Add a title to your video"></input>
                <h4>ADD A VIDEO DESCRIPTION</h4>
                <textarea placeholder="Add a description to your video"></textarea>
                <NavLink to="/">
                    <button type="submit">PUBLISH</button>
                </NavLink>
                <img src={publish} alt="publish icon" />
            </form>
            <button>CANCEL</button>
        </main>
    )
}

export default Upload