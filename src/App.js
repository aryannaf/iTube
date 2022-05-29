import './App.scss';
import {Component} from 'react';
import Header from './components/Header/Header';
import VideoInfo from './components/VideoInfo/VideoInfo';
import videos from './data/video-details.json';

class App extends Component {

  state = {
    videos,
    currentVideo: videos[0],
  };
  
  render () {
    return (
      <>
        <Header />
        <VideoInfo video={this.state.currentVideo}/>
      </>
    );
  }
}

export default App;
