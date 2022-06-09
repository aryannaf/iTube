import './VideoHero.scss';
import '../../styles/global.scss';
import playButton from '../../assets/images/play.svg';
import fullscreen from '../../assets/images/fullscreen.svg';
import volume from '../../assets/images/volume_up.svg';

export default function VideoHero({ video }) {


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
        </section>
    )
}