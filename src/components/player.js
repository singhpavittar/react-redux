import React, {
    Component
} from 'react';
import YouTubePlayer from 'youtube-player';

class Player extends Component {
    constructor(props){
        super(props);
        this.state = {
            player:''
        }
    }
    componentWillMount(){
        let player;
        player = YouTubePlayer('video-player');
        // 'loadVideoById' is queued until the player is ready to receive API calls.
        player.loadVideoById('M7lc1UVf-VE');
        // 'playVideo' is queue until the player is ready to received API calls and after 'loadVideoById' has been called.
        player.playVideo();
        // 'stopVideo' is queued after 'playVideo'.
        player.stopVideo().then(() => {
                // Every function returns a promise that is resolved after the target function has been executed.
        });
        this.setState({player})
    }
    render() {
        let url = `https://www.youtube.com/embed/${this.props.videoId}?enablejsapi=1`
        return (<div className="player"><iframe width="140" height="140" src={url}></iframe></div>);
    }
}

export default Player;

// let loadYT

// export default class YouTube extends Component {
//   componentDidMount () {
//     if (!loadYT) {
//       loadYT = new Promise((resolve) => {
//         const tag = document.createElement('script')
//         tag.src = 'https://www.youtube.com/iframe_api'
//         const firstScriptTag = document.getElementsByTagName('script')[0]
//         firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
//         window.onYouTubeIframeAPIReady = () => resolve(window.YT)
//       })
//     }
//     loadYT.then((YT) => {
//       this.player = new YT.Player(this.youtubePlayerAnchor, {
//         height: this.props.height || 390,
//         width: this.props.width || 640,
//         videoId: this.props.videoId,
//         events: {
//           onStateChange: this.onPlayerStateChange
//         }
//       })
//     })
//   }

//   onPlayerStateChange = (e) => {
//       console.log(this.props);
      
//     if (typeof this.props.onStateChange === 'function') {
//       this.props.onStateChange(e)
//     }
//   }

//   render () {
//     return (
//       <section className='youtubeComponent-wrapper'>
//         <div ref={(r) => { this.youtubePlayerAnchor = r }}></div>
//       </section>
//     )
//   }
// }
