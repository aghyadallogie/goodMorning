import React from 'react';
import { ListItem } from './Styles';

export const TodoItem = ({ todo, handleToggle }) => {
    return (
        <label key={todo.id} className="list-label">
            <input type="checkbox" className="list-checkbox" checked={todo.done} onChange={() => handleToggle(todo.id)} />
            <i className="list-icon"></i>
            <span className="item-text">{todo.text}</span>
        </label>
    )
}
