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
          {this.props.search && <Search/>}
          <Playlist todolist={this.props.todolist}/>
        </main>
        <footer></footer>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {search: state.searchstatus}
};

export default connect(mapStateToProps)(App);