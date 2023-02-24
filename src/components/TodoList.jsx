import React from 'react';

const TodoList = ({todoList, setTodoList}) => {
    
    const filteredTodoList = todoList.filter( item => item.isDeleted === false )

    // I adapted code from https://upmostly.com/tutorials/how-to-update-state-onchange-in-an-array-of-objects-using-react-hooks to allow me to modify a property in an array of objects in state

    const handleCheckbox = (index) => (e) => {
        console.log("handleCheckbox firing")
        const updatedArray = filteredTodoList.map( (item, idx) => {
            if (index === idx) {
                if (item.isCompleted === false) {
                    return {...item, [e.target.name]: true};
                } else {
                    return {...item, [e.target.name]: false};
                }
            } else {
                return item;
            }
        } );
        setTodoList(updatedArray);
        console.log(`${JSON.stringify(todoList)}`)
    }

    const handleButton = (index) => (e) => {
        console.log("handleButton firing")
        const updatedArray = filteredTodoList.map( (item, idx) => {
            if (index === idx) {
                return {...item, [e.target.name]: true};
            } else {
                return item;
            }
        } );
        setTodoList(updatedArray);
        console.log(`${JSON.stringify(todoList)}`)
    }

    return (
        <div className="col-sm-6 mt-2">
            {
                filteredTodoList.map( (item, index) =>  
                    
                    <div key={index} className="d-flex flex-row justify-content-start align-items-center my-2 mx-4">
                        <div className="form-check me-2">
                            <input type="checkbox" name="isCompleted" className="form-check-input" onChange={ handleCheckbox(index) }/>
                            {
                                item.isCompleted === false ?
                                <label className="form-check-label">{ item.task }</label> :
                                <label className="form-check-label"><del>{ item.task }</del></label>
                            }
                        </div>
                        <div>
                            <button className="btn btn-dark ms-2" name="isDeleted" onClick={ handleButton(index) }>Delete</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default TodoList