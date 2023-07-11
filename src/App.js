import React, {useState} from 'react'; // add state functionality into our component
import './App.css';
import Todotable from './components/Todotable';
import NewTodoForm from './components/NewTodoForm';
function App() {

  const [todos, setTodos ] = useState( [ // destructuring the state that we passed in to rerender the page
        {rowNumber : 1 , rowDescription : 'feed dog', rowAssigned : 'user one'},
        {rowNumber : 2 , rowDescription : 'water plants', rowAssigned : 'user two'},
        {rowNumber : 3 , rowDescription : 'Make dinner', rowAssigned : 'user one'},
        {rowNumber : 4 , rowDescription : 'Charge phone', rowAssigned : 'user one'}
    ]
  )
const  addTodo = () => {
        if (todos.length > 0){
           const newTodo = {
               rowNumber : todos.length + 1,
               rowDescription: 'New Todo',
               rowAssigned: 'User Three'
           }
           setTodos(todos => [...todos, newTodo])
        }
}
  return (
    <div className= 'mt-5 container'>
     <div className = "card">
         <div className = "card-header">
             Your Todo' s
         </div>
         <div className = "card-body">
             <Todotable todos = {todos}/>
             <button className= 'btn btn-primary' onClick= {addTodo} >
                 Add new todo
             </button>
             <NewTodoForm/>
         </div>
     </div>
    </div>
  );
}

export default App;
