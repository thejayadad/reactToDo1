import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ todo }) => (

    <div className="todo-item-container">
        <div className='box'>
            <h3>{todo.text}</h3>
        </div>
        <div className="buttons-container">
            <button className="completed-button"><i id='completed' class="fas fa-check-circle"></i></button>
            <button className="remove-button"><i id='remove' class="fas fa-minus-circle"></i></button>
        </div>
    </div>
);

export default TodoListItem;