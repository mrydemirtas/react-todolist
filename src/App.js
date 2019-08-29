import React, {Component} from 'react';
import './App.css';
import Header from './components/header';
import TodoInput from './components/todoInput';
import TodoItem from './components/todoItem';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: JSON.parse(localStorage.getItem('todolist')),
    }
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo =this.removeTodo.bind(this);
  }

  addTodo(todoText) {
    let todos = this.state.todos
    todos.push({id: Math.random(), text: todoText});
    this.setState({
      todos:todos,
    });
    localStorage.setItem('todolist', JSON.stringify(this.state.todos))
  }

  removeTodo(todo) {
    let todos = this.state.todos
    const id = todo.id
    todos.splice(id, 1);
    localStorage.setItem('todolist', JSON.stringify(this.state.todos))
  }

  render() { 
  return ( 
    <div className="App">
    <div className="todo-wrapper">
    <Header/>
    <TodoInput todoText ="" addTodo={this.addTodo}/>
    <ul>
      {
        this.state.todos.map((todo) => {
          return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
        })
      }
    </ul>
    </div>
  </div>
  
     );
   }
}

export default App;
