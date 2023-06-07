function TodoRowItem(props) { //props will have a key value pair for each item you just passed in

    return(
        <tr>
            <th scope = 'row'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
        </tr>
    )
}

export default TodoRowItem