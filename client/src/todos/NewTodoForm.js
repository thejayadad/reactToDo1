import React, { useState } from 'react';
import './NewTodoForm.css';

import {connect} from "react-redux"


const NewTodoForm = () => {
    const [inputValue, setInputValue] = useState('');

    return (
            <div className="new-todo-form">
            <input
                className="new-todo-input"
                type="text"
                placeholder="Type your new todo here"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)} />
            <button className='btn'><i class="fas fa-plus-circle"></i></button>
        </div>
    );
};

const mapStateToProps = state => ({});;
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);