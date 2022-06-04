import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import VideoHero from './components/VideoHero/VideoHero';
import VideoInfo from './components/VideoInfo/VideoInfo';
import NextVideos from './components/NextVideos/NextVideos';
import videos from './data/video-details.json';
import nextVideos from './data/videos.json';


function App() {


  // state = {
  //   videos,
  //   currentVideo: videos[0],

  //   nextVideos,
  // };

  // handleClick = (id) => {
  //   let clickedVideo = this.state.videos.find((video) => video.id === id);

  //   this.setState({
  //     currentVideo: clickedVideo,
  //   });
  // };


    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/video/:videoId" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
}

export default App;
