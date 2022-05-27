import './VideoInfo.scss';
import '../../data/video-details.json';
import views from '../../assets/images/views.svg';
import likes from '../../assets/images/likes.svg';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import commentIcon from '../../assets/images/add_comment.svg';

export default function VideoInfo() {


    return (
        <section className="video">
            <img className="video__display"
                src=""
                alt=""
            />
            <h1></h1>
            <div>
                <div>
                    <h6></h6>
                    <p></p>
                </div>
                <div>
                    <div>
                        <img className="video__display__"
                            src={views}
                            alt="views icon"
                        />
                        <p></p>
                    </div>
                    <div>
                        <img className="video__display__"
                            src={likes}
                            alt="likes icon"
                        />
                    </div>
                </div>
            </div>
            <p></p>
            <h6></h6>
            <div>
                <img className="video__comment__avatar" src={avatar} alt="profile picture"/>
                <div>
                    <h3>JOIN THE CONVERSATION</h3>
                    <textarea className="" placeholder="Add a new comment"
                    >
                    </textarea>
                    <button>
                        <img className=""
                            src={commentIcon}
                            alt="comment icon"
                        />
                        COMMENT</button>
                </div>
            </div>
        </section>
    )
}

