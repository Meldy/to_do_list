import TodoRowItem from "./TodoRowItem";

function Todotable(props){

    return (
        <table className= "table table-hover">
            <thead>
            <tr>
                <hd scope = 'col'>#</hd>
                <th scope = 'col'>Description</th>
                <th scope = 'col'>Assigned</th>
            </tr>
            </thead>
            <tbody>
            {props.todos.map(todo => ( //Use to render components based on the number of items with in an array
                    <TodoRowItem
                    rowNumber = {todo.rowNumber}
                    rowDescription = {todo.rowDescription}
                    rowAssigned = {todo.rowAssigned}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default Todotable