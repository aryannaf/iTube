import '../NextVideos/NextVideos.scss';
import '../../styles/global.scss';
import '../../data/videos.json';

export default function NextVideos(props) {

    const nextVideos = props.nextVideos.filter((nextVideo) => {
        return nextVideo.id !== props.currentVideo.id;
    });

    return (
        <section>
            <h3>NEXT VIDEOS</h3>
            <div>
                {nextVideos.map((nextVideo) => {
                    return (
                        <div
                            key={nextVideo.id}
                            onClick={() => {props.clickHandler(nextVideo.id)}}
                        >
                            <img className=""
                                src={nextVideo.image}
                                alt=""
                            />
                            <div>
                                <h6>{nextVideo.title}</h6>
                                <p>{nextVideo.channel}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

