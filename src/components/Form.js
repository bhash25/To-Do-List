import React from "react";

function Form(props){


    function inputTextHandler(event){
        props.setInputText(event.target.value);
    }

    function addToDo(event){
        props.setToDo([
            ...props.toDo, {text: props.inputText, complete: false, id: Math.floor(Math.random()*100)}
        ]);
        props.setInputText("");
        event.preventDefault();
    }

    function filterHandler(event){
        props.setFilter(event.target.value)
    }

    return (
        <div>
            <form>
                <input onChange={inputTextHandler} type="text" className="todo-input" value={props.inputText} />
                <button onClick={addToDo} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select onChange={filterHandler} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}    

export default Form;