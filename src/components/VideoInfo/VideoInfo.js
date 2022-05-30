import './VideoInfo.scss';
import '../../styles/global.scss';
import '../../data/video-details.json';
import views from '../../assets/images/views.svg';
import likes from '../../assets/images/likes.svg';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import commentIcon from '../../assets/images/add_comment.svg';
import playButton from '../../assets/images/play.svg';
import fullscreen from '../../assets/images/fullscreen.svg';
import volume from '../../assets/images/volume_up.svg';

export default function VideoInfo({ video }) {


    return (
        <section className="video">
            <div className="video__display">
                <video className="video__image"
                    poster={video.image}
                >
                    <source src={video.video}></source>
                </video>
                <div className="video__controls">
                    <div className="video__control">
                        <img className="video__play"
                            src={playButton}
                            alt="play button"
                        />
                    </div>
                    <div className="video__control video__control--scrub">
                        <div className="video__scrub-bar"></div>
                        <p className="video__duration">0:00 / {video.duration}</p>
                    </div>
                    <div className="video__control">
                        <img className="video__fullscreen"
                            src={fullscreen}
                            alt="fullscreen"
                        />
                        <img className="video__volume"
                            src={volume}
                            alt="volume"
                        />
                    </div>
                </div>
            </div>
            <div className="video__info-section">
                <h1 className="video__title">{video.title}</h1>
                <div className="video__info">
                    <div className="video__details">
                        <h5 className="video__channel">By {video.channel}</h5>
                        <p className="video__date">{video.timestamp}</p>
                    </div>
                    <div className="video__stats">
                        <div className="video__stat">
                            <img className="video__stat-icon"
                                src={views}
                                alt="views icon"
                            />
                            <p className="video__stat-count">{video.views}</p>
                        </div>
                        <div className="video__stat">
                            <img className="video__stat-icon"
                                src={likes}
                                alt="likes icon"
                            />
                            <p className="video__stat-count">{video.likes}</p>
                        </div>
                    </div>
                </div>
                <p className="video__description">{video.description}</p>
                <h6 className="video__comment-count">{video.comments.length} Comments</h6>
                <div className="video__comment-form">
                    <img className="video__comment-form__avatar" src={avatar} alt="profile picture" />
                    <div className="video__comment-form__details">
                        <h3 className="video__comment-form__title">JOIN THE CONVERSATION</h3>
                        <textarea className="video__comment-form__input" placeholder="Add a new comment"
                        >
                        </textarea>
                        <button className="video__comment-form__submit">
                            <img className="video__comment-form__comment-icon"
                                src={commentIcon}
                                alt="comment icon"
                            />
                            COMMENT</button>
                    </div>
                </div>
                <div className="video__comments">
                    {video.comments.map((comment) => {
                        return (
                            <div className="video__comment">
                                <div className="video__comment__avatar"></div>
                                <div className="video__comment__info">
                                    <div className="video__comment__details">
                                        <h6 className="video__comment__name">{comment.name}</h6>
                                        <p className="video__comment__date">{comment.timestamp}</p>
                                    </div>
                                    <p className="video__comment__content">{comment.comment}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

