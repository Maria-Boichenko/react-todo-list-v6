import React, {useState} from 'react';
import {v4 as uuidv4} from "uuid"
import TodoForm from "./TodoForm";


const TodoList = () => {

    const initialList = [
        {
            id: uuidv4(),
            title: "Learn React",
            status: "Todo"
        },
        {
            id: uuidv4(),
            title: "Learn CSS",
            status: "In Progress"
        },
        {
            id: uuidv4(),
            title: "Learn Js",
            status: "Review"
        },
        {
            id: uuidv4(),
            title: "Learn Redux",
            status: "Done"
        },
    ]

    const statuses = ["Todo", "In Progress", "Review", "Done"]

    const [list, setList] = useState(initialList);
    const [title, setTitle] = useState("");

    return (
        <div>
            <TodoForm
                list={list}
                title={title}
                statuses={statuses}
                setList={setList}
                setTitle={setTitle}
            />
        </div>
    );
};

export default TodoList;