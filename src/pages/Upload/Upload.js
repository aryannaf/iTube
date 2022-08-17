import { Component } from 'react';
import './Upload.scss';
import '../../styles/global.scss';
import UploadNotif from '../../components/UploadNotif/UploadNotif';
import { NavLink } from 'react-router-dom';
import publish from '../../assets/images/publish.svg';
import thumbnail from '../../assets/images/Upload-video-preview.jpg';
import axios from 'axios';
const { v4: uuid } = require('uuid');


const API_URL = "http://localhost:8080";


class Upload extends Component {

    state = {
        successfulUpload: false
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let id = uuid();
        let title = e.target.title.value;
        let description = e.target.description.value;

        if (title && description) {
            this.setState({
                successfulUpload: true
            })

            axios.post(`${API_URL}/videos`, { id, title, description });
        }
        else {
            alert("Upload unsuccessful - please try again");
        }
    };

    render() {
        return (
            <div>
                {this.state.successfulUpload === true
                    ?
                    <UploadNotif />
                    :
                    <main className="upload">
                        <div className="upload__section">
                            <h1 className="upload__title">Upload Video</h1>
                            <form className="upload__form" onSubmit={this.handleSubmit}>
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
                                    <button className="upload__publish" type="submit" >
                                        <img className="upload__publish-icon" src={publish} alt="publish icon" />
                                        PUBLISH
                                    </button>
                                    <NavLink to="/" className="upload__cancel-link">
                                        <button className="upload__cancel">CANCEL</button>
                                    </NavLink>
                                </div>
                            </form>
                        </div>
                    </main>
                }
            </div>
        )
    }

}

export default Upload