import React from 'react';
import './Home.scss';
import { Component } from 'react';
import axios from 'axios';
import VideoHero from '../../components/VideoHero/VideoHero';
import VideoInfo from '../../components/VideoInfo/VideoInfo';
import NextVideos from '../../components/NextVideos/NextVideos';


const API_URL = "http://localhost:8080";


class Home extends Component {

    state = {
        videos: [],
        currentVideo: {},

        nextVideos: []
    }

    componentDidMount() {
        axios
            .get(`${API_URL}/videos`)
            .then((response) => {
                const videoId = this.props.match.params.id || response.data[0].id;
                this.setState({
                    currentVideo: videoId,
                    nextVideos: response.data
                })

                this.getSelectedVideo(videoId);
            })
            .catch(error => {
                console.log(error);
            })
    }

    componentDidUpdate(prevProps) {
        const prevVideoId = prevProps.match.params.id;
        const currentVideoId = this.props.match.params.id;

        if (prevVideoId !== currentVideoId) {
            this.getSelectedVideo(currentVideoId);
        }
    }


    getSelectedVideo = (videoId) => {
        axios
            .get(`${API_URL}/videos/${videoId}`)
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