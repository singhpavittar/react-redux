import React, {Component} from 'react';
import {connect} from 'react-redux';
import {enableSearch, addToPlay} from './actions';
import {Header, Search, Playlist, Player} from './components';
import {Tooltip, OverlayTrigger} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
class App extends Component {

  _tooltip  = (<Tooltip id="tooltip">
  <strong>Create Playlist</strong>
</Tooltip>);

  render() {
    return (
      <React.Fragment>
        <Header/>
        <main>
          {/* Search container */}
          <Search enable={this.props.search}/>
            {/* Player */}
            {this.props.videoId && <Player videoId={this.props.videoId} playlist={this.props.playlist} />}
            {/* Playlist */}
            {(this.props.playlist.length !== 0 && !this.props.search) && <Playlist playlist={this.props.playlist} addToPlay={this.props.addToPlay}/>}
            {/* Search */}
            {!this.props.playlist.length &&  <React.Fragment>
              <a className="homeSearch pointer" onClick={()=>this.props.enableSearch(true)}>
                <OverlayTrigger placement="bottom" overlay={this._tooltip}>
                  <FontAwesome name="search-plus"/>
                </OverlayTrigger>
              </a>
            </React.Fragment>}
        </main>
        <footer></footer>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  
  return {
    search: state.searchstatus,
    playlist: state.playlist,
    videoId: state.videoId
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
      enableSearch: (isEnable = false) => dispatch(enableSearch(isEnable)),
      addToPlay: (id = '') => dispatch(addToPlay(id))
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
