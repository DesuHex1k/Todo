import { FC } from "react";
import { ITodo } from "../types";
import '../App.css';
interface Todo_itemProps {
    todo: ITodo
    remove: FC
}
 
const Todo_item: FC<Todo_itemProps> = ({todo, remove}) => {
    return ( 
        <div onClick={() => remove(todo)} className="Todo_item">
            <h2 style={{color: 'white'}}>{todo.title}</h2>
        </div>

        
     );
}
 
export default Todo_item;