import { useState } from "react"

export default function TodoItem({ item, onUpdate, onDelete }){

    const [isEdit, setIsEdit] = useState(false);

    function handleClick(){
        setIsEdit(true);
    }
    function TodoEdit(){

        const [newValue, setNewValue] = useState(item.title);

        function handleSubmit(e){
            e.preventDefault();
        }
        function handleChange(e){
            e.preventDefault();
            const tempVal = e.target.value;
            setNewValue(tempVal);
        }
        function handleClickUpdateTodo(){
            onUpdate(item.id, newValue);
            setIsEdit(false);
        }
        return(
            <form className='todoUpdateForm' onSubmit={handleSubmit}>
                <input type='text' onChange={handleChange} className='todoInput' value={newValue} />
                <button className="button" onClick={handleClickUpdateTodo}>Editar</button>
            </form>)
    }
    function Todo(){
        return <div className="todoInfo">
            <span className="todoTitle">{item.title}</span>
            <button className="button" onClick={handleClick}>Edit</button>
            <button className="buttonDelete" onClick={() => onDelete(item.id)}>Delete</button>
        </div>
    }
    return <div className="todo">
            {isEdit ? <TodoEdit /> : <Todo />}
        </div>
}