import '../NextVideos/NextVideos.scss';
import '../../styles/global.scss';
import '../../data/videos.json';

export default function NextVideos() {

    const videos = '../../data/videos.json';
    
    axios.get(videos)

    return (
        <>
        </>
    )
}

