import React from 'react';

const Column = (props) => {
    return (
        <div className={props.status} key={props.status}>
            <strong>{props.status}</strong>
            {props.list
                .filter((list) => (list.status === props.status))
                .map(list => (
                    <div key={list.id}>
                        {(list.status !== props.statuses[0]) ?
                            <button onClick={()=>props.changeStatusBackward(list.id)}>Left</button> : <></>}
                        {list.title}
                        {(list.status !== props.statuses[props.statuses.length - 1]) ?
                            <button onClick={()=> props.changeStatusForward(list.id)}>Right</button> : <></>}
                        <button onClick={()=>props.delTask(list.id)}>DEL</button>
                    </div>
                ))}
        </div>
    );
};

export default Column;