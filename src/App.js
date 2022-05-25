import React, {useEffect, useState} from "react";
import Form from "./components/Form";
import  ToDoList from "./components/ToDoList";
import './App.css';

function App() {


  const [inputText, setInputText] = useState("");
  const [toDo, setToDo] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredToDo, setFilteredToDo] = useState([]);

  useEffect(() => {
    getLocalTodo();
  }, [])

  useEffect(()=>{
    filterToDoHandler();
    saveLocalTodo();
  }, [toDo, filter])

  function saveLocalTodo(){
    localStorage.setItem("toDo", JSON.stringify(toDo));
  }

  function getLocalTodo(){
    if(localStorage.getItem("toDo")===null){
      localStorage.setItem("toDo", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("toDo"));
      setToDo(todoLocal);
    }
  }

  function filterToDoHandler(){
    switch (filter) {
      case "completed":
        setFilteredToDo(toDo.filter(todo => todo.complete === true))
        break;
      case "uncompleted":
        setFilteredToDo(toDo.filter(todo => todo.complete === false))
        break;
      default:
        setFilteredToDo(toDo)
        break;
    }
  }

  return (
    <div className="App">
      <header>
        My ToDo List
      </header>
      <div>
        <Form
        setInputText= {setInputText}
        setToDo= {setToDo}
        setFilter = {setFilter}
        toDo= {toDo}
        inputText = {inputText}
        /> 
        <ToDoList
        toDo= {toDo}
        setToDo= {setToDo}
        filteredToDo = {filteredToDo} />
      </div>
      
      
    </div>
  );
}

export default App;
