import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodoAction, addName} from './actions';
import {Header, Search, Playlist} from './components';
class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Header/>
        <main>
          <Search enable={this.props.search}/>
          <Playlist todolist={this.props.playlist}/>
        </main>
        <footer></footer>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.searchstatus,
    playlist: state.playlist
  }
};

export default connect(mapStateToProps)(App);