import React from 'react';
import './todoItem.css';

export default class TodoItem extends React.Component {
 
    removeTodo(id) {
        this.props.removeTodo(id);
    }

    render(){
        return(
            <div className="todoWrapper">
                {this.props.todo.text}<button className="removeTodo" onClick={(e)=> this.removeTodo(this.props.id)}>remove</button>
            </div>
        )
    }
}
