import React, {useState} from 'react';
import TodoForm from "./TodoForm";

const TodoList = () => {

   const initialList = [
        {
            id: 1,
            title: "Learn React",
            status: "TODO"
        },
        {
            id: 2,
            title: "Learn JS",
            status: "IN PROGRESS"
        },
        {
            id: 3,
            title: "Learn Redux",
            status: "REVIEW"
        },
        {
            id: 4,
            title: "Learn Python",
            status: "DONE"
        },
    ]

    const statuses = ["TODO",  "IN PROGRESS","REVIEW", "DONE"]

    const [list, setList] = useState(initialList)
    const [title, setTitle] = useState(" ")


    return (
        <div>
            <TodoForm list={list} setList={setList} title={title} setTitle={setTitle} statuses={statuses} />
        </div>
    );
};

export default TodoList;