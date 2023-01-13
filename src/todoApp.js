import { useState } from "react";
import TodoItem from "./todoItem";
import './styles.css';

export default function TodoApp(){

    const [title, setTitle] = useState('Hola');
    const [todos, setTodos] = useState([]);
    const [cont, setCont] = useState(1);

    function handleChange(e){
        const curr = e.target.value;
        setTitle(curr);
    }
    function handleSubmit(e){
        e.preventDefault();

        const newTodo = {
            id: cont,
            title: title
        }
        setCont(cont + 1);
        const temp = [...todos];
        temp.unshift(newTodo);
        setTodos(temp);
    }
    function handleUpdate(id, val){
        const temp = [...todos];
        const item = temp.find((item) => item.id === id);
        item.title = val;
        setTodos(temp);
    }
    function handleDelete(id){
        const temp = todos.filter(item => item.id !== id);
        setTodos(temp);
    }
    return <div className="todoContainer">
        <form className="todoCreateForm" onSubmit={handleSubmit}>
            <input onChange={handleChange} className="todoInput" value={title}/>
            <input 
            onClick={handleSubmit}
            type='submit'
            value='Create todo'
            className="buttonCreate"/>
        </form>
        <div className="todosContainer">
            {
                todos.map((item) => {
                   return <TodoItem item={item} onUpdate={handleUpdate} onDelete={handleDelete} />
                })
            }
        </div>
    </div>
}