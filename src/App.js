import React, {Component} from 'react';
import './App.css';

import todosData from './data/todosData';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import TodoItem from './TodoItem/TodoItem';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todosData: todosData,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(id) {
    const newTodos = this.state.todosData.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });

    this.setState({
      todosData: newTodos,
    });
  }

  render() {
    const todoItems = this.state.todosData.map(todo => {
      return (
        <TodoItem key={todo.id} item={todo} onChange={this.handleOnChange} />
      );
    });

    const pendingTodos = this.state.todosData.filter(item => {
      return !item.completed;
    });

    return (
      <div className="App">
        <Header />
        <p>
          There {pendingTodos.length > 1 ? 'are' : 'is'} {pendingTodos.length}{' '}
          pending item
          {pendingTodos.length > 1 && 's'}
        </p>
        {todoItems}
        <Footer />
      </div>
    );
  }
}

export default App;
