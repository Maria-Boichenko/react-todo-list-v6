import React from 'react';
import {v4 as uuidv4} from "uuid";
import Column from "./Column";

const TodoForm = (props) => {

    const handleChangeForward = (id) => {
        const updatedStatus = props.list.map(el => el.id === id ? {
            ...el,
            status: props.statuses[props.statuses.findIndex((type) => type === el.status) + 1]
        } : el)
        props.setList(updatedStatus)
    }

    const handleChangeBackward = (id) => {
        const updatedStatus = props.list.map(el => el.id === id ? {
            ...el,
            status: props.statuses[props.statuses.findIndex((type) => type === el.status) - 1]
        } : el)
        props.setList(updatedStatus)
    }

    const addTask = () => {
        const newArray = [...props.list]
        newArray.push({id: uuidv4(), title: props.title, status: props.statuses[0]})
        props.setList(newArray)
        props.setTitle("")
    }

    const editTask = (e) => {
        props.setTitle(e.target.value)
    }

    const delTask = (id) => {
        const updatedTask = props.list.filter(el => el.id !== id)
        props.setList(updatedTask)
    }

    return (
        <div className="todo-form">
            <h1>Todo List</h1>
            <input onChange={editTask} value={props.title} />
            <button onClick={addTask}>Add</button>
            <div className="statusTable" key={status}>
                {props.statuses.map((status) => (
                    <Column
                    list={props.list}
                    title={props.title}
                    statuses={props.statuses}
                    status={status}
                    delTask={delTask}
                    handleChangeBackward={handleChangeBackward}
                    handleChangeForward={handleChangeForward}
                    />
                ))}
            </div>
        </div>
    );
};

export default TodoForm;