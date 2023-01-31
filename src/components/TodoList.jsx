import React from 'react';
import TodoItem from './TodoItem';
import '../App.css';

function Todo_list({Todos, remove}) {
    return ( 
        <div>
            <h1 style={{color: 'white'}}>Todo List</h1>
            
            <div className='Todo_list'>  
                    {Todos.map((todo => 
                        <TodoItem remove={remove} todo={todo} key={todo.id}/>
                    ))
                    }
            </div>

        </div>
     );
}

export default Todo_list;