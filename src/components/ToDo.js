import React from "react";

function ToDo(props){

    function deleteHandler(){
        props.setToDo(
            props.toDo.filter(el => el.id !== props.todo.id)
        )
    }

    function completeHandler(){
        props.setToDo(
            props.toDo.map(item => {
                if(item.id === props.todo.id){
                   return {
                    ...item, complete: !item.complete
                   }
                }
                return item;
            })
        )
    }


    return (
        <div className="todo">
            <li className={`todo-item" ${props.todo.complete ? "completed" : ""}`}>
                {props.text}
            </li>
            <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    )
}

export default ToDo;