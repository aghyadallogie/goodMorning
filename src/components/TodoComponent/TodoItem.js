import React from 'react';
import { ListItem } from './Styles';

export const TodoItem = ({ todo, handleToggle }) => {
    return (
        <label key={todo.id}>
            <input type="checkbox" checked={todo.done} onChange={() => handleToggle(todo.id)} />
            <i></i>
            <span>{todo.text}</span>
        </label>
    )
}
