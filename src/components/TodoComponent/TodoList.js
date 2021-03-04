import React, { useEffect, useState } from 'react';
import { TodoItem } from './TodoItem';
import Funnel from '../../assets/funnel.svg';

export const TodoList = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storedTodos = localStorage.getItem('LOCAL-TODO-LIST');
        if (storedTodos) setTodos(JSON.parse(storedTodos));
    }, [])

    const handleAddTodo = e => {
        e.preventDefault();
        if (!e.target[0].value) return;
        const newTodo = { id: Date.now(), text: e.target[0].value, done: false }
        if (todos) {
            setTodos(pervTodos => [newTodo, ...pervTodos]);
            localStorage.setItem('LOCAL-TODO-LIST', JSON.stringify([newTodo, ...todos]));
        }
        e.target[0].value = '';
    }

    const handleFunnel = _ => {
        const funneledTodos = todos.filter(todo => !todo.done);
        setTodos(funneledTodos);
        localStorage.setItem('LOCAL-TODO-LIST', JSON.stringify(funneledTodos));
    }

    const handleToggle = id => {
        const targetIndex = todos.map(todo => { return todo.id }).indexOf(id);
        const targetTodo = todos.find(todo => todo.id === id);
        targetTodo.done = !targetTodo.done;
        let filteredTodos = todos.filter(todo => todo.id !== id);
        filteredTodos.splice(targetIndex, 0, targetTodo);
        setTodos(filteredTodos);
        localStorage.setItem('LOCAL-TODO-LIST', JSON.stringify(todos));
    }

    return (
        <div className="list-container">
            <span className="list-border">
                <img id="funnel" onClick={handleFunnel} src={Funnel} />
            </span>
            <form className="list" onSubmit={e => handleAddTodo(e)}>
                <div className="input-field">
                    <input type="text" name="input-text" autoComplete="off" />
                    <label id="input-label">What's on your mind ?</label>
                    <span></span>
                </div>
                {todos && todos.map(todo => <TodoItem todo={todo} handleToggle={handleToggle} />)}
            </form>
        </div>
    )
}