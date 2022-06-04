import '../NextVideos/NextVideos.scss';
import '../../styles/global.scss';
import '../../data/videos.json';
import { NavLink } from 'react-router-dom';

export default function NextVideos(props) {

    const nextVideos = props.nextVideos.filter((nextVideo) => {
        return nextVideo.id !== props.currentVideo.id;
    });

    return (
        <section className="next-videos">
            <h3 className="next-videos__title">NEXT VIDEOS</h3>
            <div className="next-videos__video-list">
                {nextVideos.map((nextVideo) => {
                    return (
                        <div className="next-videos__video"
                            key={nextVideo.id}
                            onClick={() => {props.clickHandler(nextVideo.id)}}
                        >
                            <img className="next-videos__thumbnail"
                                src={nextVideo.image}
                                alt="video thumbnail"
                            />
                            <div className="next-videos__info">
                                <h6 className="next-videos__video-title">{nextVideo.title}</h6>
                                <p className="next-videos__channel">{nextVideo.channel}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

