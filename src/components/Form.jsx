import React, { useState } from 'react';

const Form = ({todoList, setTodoList}) => {
    
    const [todo, setTodo] = useState({
        task: "",
        isCompleted: false,
        isDeleted: false
    })

    const handleChange = (e) => {
        setTodo({...todo, [e.target.name]: e.target.value});
    }

    const todoValidation = (e) => {
        let isValid = true;
        if (!todo.task) {
            isValid = false;
            console.log("Todo field was empty.")
            return isValid;
        } else {
            console.log("Valid submission")
            return isValid;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = todoValidation();
        if (isValid) {
            setTodoList([...todoList, todo]);
            console.log("Todo submitted");
            setTodo({
                task: "",
                isCompleted: false,
                isDeleted: false
            })
        }
    }
    
    return (
        <div className="col-sm-6">
            <form onSubmit={ handleSubmit }>
                <div className="row m-4">
                    <label htmlFor="task" className="col-sm-2 col-form-label">Todo:</label>
                    <div className="col-sm-10">
                        <input type="text" name="task" className="form-control" onChange={ handleChange } value={todo.task}/>
                        {
                            !todo.task ?
                            <p className="text-danger my-2">Todo must not be empty.</p> :
                            ""
                        }
                    </div>
                </div>
                <div className="row m-4 justify-content-end">
                    {
                        !todo.task ?
                        <input type="submit" className="btn btn-primary col-sm-2" value="Add" disabled/> :
                        <input type="submit" className="btn btn-primary col-sm-2" value="Add"/>
                    }
                </div>
            </form>
        </div>
    )
}

export default Form;