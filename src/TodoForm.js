import React from 'react';
import Column from "./Column";

const TodoForm = (props) => {

    const changeStatusForward = (id) => {
        const newStatus = props.list.map(el => (el.id === id) ? {
            ...el,
            status: props.statuses[props.statuses.findIndex((type) => type === el.status) + 1]
        } : el)
        props.setList(newStatus)
    }

    const changeStatusBackward = (id) => {
        const newStatus = props.list.map(el => (el.id === id) ?
            {
                ...el,
                status: props.statuses[props.statuses.findIndex((type) => type === el.status) - 1]
            } : el)
        props.setList(newStatus)
    }

    const addTask = () => {
        const newTodo = [...props.list]
        newTodo.push({id: Math.random(), title: props.title, status: props.statuses[0]})
        props.setList(newTodo)
        props.setTitle("")
    }

    const delTask = (id) => {
        const newTodo = props.list.filter(el => el.id !== id)
        props.setList(newTodo)
    }

    const editTask = (e) => {
        props.setTitle(e.target.value)
    }

    return (
        <div className="todo-form">
            <h1>Todo List</h1>
            <input onChange={editTask} value={props.title}/>
            <button onClick={addTask}>Add</button>
            <div className="statusTable">
                {props.statuses.map((status) => (
                    <Column list={props.list} title={props.title}
                            statuses={props.statuses} status={status}
                            delTask={delTask} changeStatusBackward={changeStatusBackward}
                            changeStatusForward={changeStatusForward}
                    />
                ))}

            </div>
        </div>
    );
};

export default TodoForm;