import React from 'react';
import './Upload.scss';
import publish from '../../assets/images/publish.svg';

function Upload() {

    return (
        <main>
            <h1>Upload Video</h1>
            <form>
                <h4>VIDEO THUMBNAIL</h4>
                <img src="" alt="" />
                <h4>TITLE YOUR VIDEO</h4>
                <input type="text" placeholder="Add a title to your video"></input>
                <h4>ADD A VIDEO DESCRIPTION</h4>
                <textarea placeholder="Add a description to your video"></textarea>
                <button type="submit">PUBLISH</button>
                <img src={publish} alt="publish icon" />
            </form>
            <button>CANCEL</button>
        </main>
    )
}

export default Upload