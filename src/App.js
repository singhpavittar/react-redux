import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodoAction, addName } from './actions';
import {Header, Search} from './components';
class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Header/>
        <main>
        {this.props.search && <Search/>}
          <p> Hello</p>
          <input type="text" onChange={(e)=>this.props.onChangeText(e.target.value)}/>
          <button onClick={()=> this.props.onAddClick(this.props.name)}>add</button>
          <ul>
            {this.props.todolist.map((x,i)=>(<li key={i}>{x}</li>))}
          </ul>
        </main>
        <footer></footer>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todolist: state.todo,
    name: state.name,
    search: state.searchstatus
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddClick: (text = 'hello') => dispatch(addTodoAction(text)),
    onChangeText: (name = 'hello') => dispatch(addName(name))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);