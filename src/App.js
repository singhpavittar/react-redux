import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodoAction, addName, enableSearch} from './actions';
import {Header, Search, Playlist} from './components';
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
          <Search enable={this.props.search}/>
          {(this.props.playlist.length != 0) && <Playlist playlist={this.props.playlist}/>}
          {!this.props.playlist.length &&  <React.Fragment>
              <a href="javascript:void(0)" className="homeSearch" onClick={()=>this.props.enableSearch(true)}>
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
  return {
    search: state.searchstatus,
    playlist: state.playlist,
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
      enableSearch: (isEnable = false) => dispatch(enableSearch(isEnable))
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
