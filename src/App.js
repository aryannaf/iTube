import './App.scss';
import {Component} from 'react';
import Header from './components/Header/Header';
import VideoInfo from './components/VideoInfo/VideoInfo';

class App extends Component {
  
  render () {
    return (
      <>
        <Header />
        <VideoInfo />
      </>
    );
  }
}

export default App;
