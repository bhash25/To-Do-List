import React from "react";
import ToDo from "./ToDo"

function ToDoList(props){
    return (
        <div>
             <div className="todo-container">
                <ul className="todo-list">
                    {props.filteredToDo.map(todo => (
                        <ToDo
                        id = {todo.id}
                        key = {todo.id}
                        text = {todo.text}
                        todo= {todo}
                        toDo= {props.toDo}
                        setToDo= {props.setToDo} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ToDoList;