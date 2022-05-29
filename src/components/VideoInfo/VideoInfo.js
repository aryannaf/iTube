import './VideoInfo.scss';
import '../../styles/global.scss';
import '../../data/video-details.json';
import views from '../../assets/images/views.svg';
import likes from '../../assets/images/likes.svg';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import commentIcon from '../../assets/images/add_comment.svg';
import playButton from '../../assets/images/play.svg';
import scrub from '../../assets/images/scrub.svg';
import fullscreen from '../../assets/images/fullscreen.svg';
import volume from '../../assets/images/volume_up.svg';

export default function VideoInfo({ video }) {


    return (
        <section className="video">
            <video className="video__display"
                poster={video.image}
            >
                <source src={video.video}></source>
            </video>
            <h1>{video.title}</h1>
            <div>
                <div>
                    <h6>By {video.channel}</h6>
                    <p>{video.timestamp}</p>
                </div>
                <div>
                    <div>
                        <img className="video__display__"
                            src={views}
                            alt="views icon"
                        />
                        <p>{video.views}</p>
                    </div>
                    <div>
                        <img className="video__display__"
                            src={likes}
                            alt="likes icon"
                        />
                        <p>{video.likes}</p>
                    </div>
                </div>
            </div>
            <p>{video.description}</p>
            <h6>{video.comments.length} Comments</h6>
            <div>
                <img className="video__comment__avatar" src={avatar} alt="profile picture" />
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
            <div>
                {video.comments.map((comment) => {
                    return (
                        <div>
                            <img className=""
                                src=""
                                alt=""
                            />
                            <div>
                                <div>
                                    <h6>{comment.name}</h6>
                                    <p>{comment.timestamp}</p>
                                </div>
                                <p>{comment.comment}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

