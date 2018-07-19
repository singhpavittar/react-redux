import React, {
    Component
} from 'react';
import YouTubePlayer from 'youtube-player';
import FontAwesome from 'react-fontawesome';
import {Jumbotron,Row,Col} from 'react-bootstrap';

class Player extends Component {
    constructor(props){
        super(props);
        this.state = {
            player: {},
            playPause: true
        };
        this.videoControl = this.videoControl.bind(this);
    }

    componentWillMount(){
    }

    componentDidMount(){
        let player = YouTubePlayer('video-player')
        this.props.videoId && player.loadVideoById(this.props.videoId);
        this.props.videoId && player.playVideo();
        this.setState({player});
    }

    videoControl(videoId = this.props.videoId){
        let {player} = this.state;
        if(!player){
            return;
        }
        player.stopVideo().then(() => {
            player.loadVideoById(videoId);
            player.playVideo();
        });
    }

    stopYoutubeVideo = () => {
        let {player, playPause} = this.state;
        player.stopVideo();
        playPause = false;
        this.setState({playPause});
    };

    playYoutubeVideo = () => {
        let {player, playPause} = this.state;
        player.playVideo();
        playPause = true;
        this.setState({playPause});
    };

    componentWillReceiveProps(props){
        if (props.videoId != this.props.videoId) {
            this.videoControl(props.videoId);   
        }
    }

    render() {
        let {playPause} = this.state;
        let activeItem = this.props.playlist.find(x=> x.id == this.props.videoId);
        return (
            <div className="player">
                <div className="visibility-hidden" id="video-player"></div>
                <Jumbotron className="half-width col-centered player-background" style={{'background-image': activeItem?activeItem.thumbnails.high.url:'url(https://www.coinslot.co.uk/wp-content/uploads/2017/01/2506-review-nsm-music-background.jpg)'}}>
                    <Row>
                        <Col xs={12} sm={12} lg={12} >
                            <Col xs={2} sm={2} lg={2}>
                                {!playPause && <p><FontAwesome name="play"/></p>}
                                {playPause &&  <p><FontAwesome name="pause"/></p>}
                            </Col>
                            <Col xs={10} sm={10} lg={10} className="caption">
                                <h3 className="mt-5">{activeItem ? activeItem.title : 'hello'}</h3>
                            </Col>
                        </Col>
                    </Row>
                    
                </Jumbotron>
            </div>
        );
    }
}

export default Player;