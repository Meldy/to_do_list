import './App.css';
import Todotable from "./components/Todotable";
function App() {

    const todos = [
        {rowNumber : 1 , rowDescription : 'feed dog', rowAssigned : 'user one'},
        {rowNumber : 2 , rowDescription : 'water plants', rowAssigned : 'user two'},
        {rowNumber : 3 , rowDescription : 'Make dinner', rowAssigned : 'user one'},
        {rowNumber : 4 , rowDescription : 'Charge phone', rowAssigned : 'user one'}
    ]
const  addTodo = () => {
        if (todos.length > 0){
           const newTodo = {
               rowNumber : todos.length + 1,
               rowDescription: 'New Todo',
               rowAssigned: 'User Three'
           }
           todos.push(newTodo); // adding the new todo to our list of todos
           console.log(todos); //then console log all the todos
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
         </div>
     </div>
    </div>
  );
}

export default App;
