import React from 'react';
import './Home.scss';
import { Component } from 'react';
import axios from 'axios';
import VideoHero from '../../components/VideoHero/VideoHero';
import VideoInfo from '../../components/VideoInfo/VideoInfo';
import NextVideos from '../../components/NextVideos/NextVideos';


const API_URL = "https://project-2-api.herokuapp.com";
const API_KEY_STRING = "?api_key=c15b9918-67c3-4825-848e-97410116a38a";


class Home extends Component {

    state = {
        videos: [],
        currentVideo: {},

        nextVideos: []
    }

    componentDidMount() {
        axios
            .get(`${API_URL}/videos${API_KEY_STRING}`)
            .then((response) => {
                const videoId = this.props.match.params.videoId || response.data[0].id;
                this.setState({
                    currentVideo: videoId,
                    nextVideos: response.data
                })

                

                this.getSelectedVideo(videoId);
            })
    }

    componentDidUpdate(prevProps) {
        const prevVideoId = prevProps.match.params.videoId;
        const currentVideoId = this.props.match.params.videoId;

        if (prevVideoId !== currentVideoId) {
            this.getSelectedVideo(currentVideoId);
        }
    }


    getSelectedVideo = (videoId) => {
        axios
            .get(`${API_URL}/videos/${videoId}${API_KEY_STRING}`)
            .then((response) => {
                this.setState({
                    currentVideo: response.data,

                })
            })
    }

    render() {
        return (
            <main>
                <VideoHero className="video-hero" video={this.state.currentVideo} />
                <section className="main-container">
                    <VideoInfo className="video-info" video={this.state.currentVideo} />
                    <NextVideos
                        nextVideos={this.state.nextVideos}
                        currentVideo={this.state.currentVideo}
                    />
                </section>
            </main>
        )
    }
}

export default Home