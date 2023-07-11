import React from "react";
function NewTodoForm(){
    return(
        <div className= 'mt-5'>
            <form>
                <div className= 'mb-3'>
                    <label className= 'form-label'>Assigned</label>
                    <input type= 'text' className= 'form-control' required />
                </div>
                <div className= 'mb-3'>
                    <label className= 'form-label'>Description</label>
                    <textarea className= 'form-control' rows = {3} required></textarea>
                </div>
                <button type= 'button' className= 'btn btn-primary mt-3'>Add Todo</button>
            </form>
        </div>
    )
}
export default NewTodoForm