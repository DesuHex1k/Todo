import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { ITodo } from './types';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import MyModal from './UI/MyModal/MyModal';

function App() {
  const [Todos, setTodos] = useState<ITodo[]>([
    // {id:0, title:'Ничего не делать'},
    // {id:1, title:'Ничего не делать'},
    // {id:2, title:'Ничего не делать'},
    // {id:3, title:'Ничего не делать'},
    // {id:4, title:'Ничего не делать'},
  ]) 

  const [Todo, setTodo] = useState({title: ''})

  const [Visible, setVisible] = useState<Boolean>(false)

  const DelTodo = (todo: any) => {
    setTodos(Todos.filter(p => p.id !== todo.id))  
  }

  const CreateNewTodo = (event: any) => {
    event.preventDefault()

    const newPost = {
        ...Todo, id: Date.now()
    }

    CreateTodo(newPost)

    setTodo({title: ''})
  }

  const CreateTodo = (NewTodo: any) => {
    setTodos([...Todos, NewTodo])
  }

  return (
    <div className="App">
      <div className='Todo'>
          <TodoList remove={DelTodo} Todos={Todos}/>
          <div className='but'>
            <MyButton onClick={() => {setVisible(true)}} >
                <h4>Add Task</h4>
            </MyButton>
          </div>
          
      </div>

      <MyModal visible={Visible} setvisible={setVisible}>
        <h1 className='txt'>Add Task</h1>

        <form onSubmit={CreateNewTodo}>
          <MyInput value={Todo.title} onChange={(e: any) => setTodo({...Todo, title: e.target.value})} type="text" required="required" placeholder="Title" style={{borderRadius: '1rem'}}/>

          <MyButton onClick={() => setVisible(false)} style={{color: 'teal',  border: '2px solid teal', marginTop: '20px'}}>
            Add
          </MyButton>
        </form>

          
      </MyModal>
    </div>
  );
}

export default App;
