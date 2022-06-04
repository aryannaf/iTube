import './App.scss';
import { Component } from 'react';
import Header from './components/Header/Header';
import VideoHero from './components/VideoHero/VideoHero';
import VideoInfo from './components/VideoInfo/VideoInfo';
import NextVideos from './components/NextVideos/NextVideos';
import videos from './data/video-details.json';
import nextVideos from './data/videos.json';


class App extends Component {


  // state = {
  //   videos,
  //   currentVideo: videos[0],

  //   nextVideos,
  // };

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
        {/* <VideoHero className="video-hero" video={this.state.currentVideo} />
        <section className="main-container">
          <VideoInfo className="video-info" video={this.state.currentVideo} />
          <NextVideos
            nextVideos={this.state.nextVideos}
            clickHandler={this.handleClick}
            currentVideo={this.state.currentVideo}
          />
        </section> */}
      </div>
    );
  }
}

export default App;
