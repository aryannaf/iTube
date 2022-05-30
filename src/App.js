import './App.scss';
import {Component} from 'react';
import Header from './components/Header/Header';
import VideoInfo from './components/VideoInfo/VideoInfo';
import NextVideos from './components/NextVideos/NextVideos';
import videos from './data/video-details.json';
import nextVideos from './data/videos.json';


class App extends Component {


  state = {
    videos,
    currentVideo: videos[0],

    nextVideos,
  };

  handleClick = (id) => {
    let clickedVideo = this.state.videos.find((video) => video.id === id);

    this.setState({
      currentVideo: clickedVideo,
    });
  };
  
  
  render() {
    return (
      <div>
        <Header />
        <VideoInfo video={this.state.currentVideo}/>
        <NextVideos
          nextVideos={this.state.nextVideos}
          clickHandler={this.handleClick}
          currentVideo={this.state.currentVideo}
        />
      </div>
    );
  }
}

export default App;
