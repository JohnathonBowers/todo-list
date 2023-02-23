import React, { useState } from 'react';

const Form = ({todoList, setTodoList}) => {
    
    const [todo, setTodo] = useState({
        task: "",
        isCompleted: false
    })

    const changeHandler = (e) => {
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

    const submitHandler = (e) => {
        e.preventDefault();
        let isValid = todoValidation();
        if (isValid) {
            setTodoList([...todoList, todo]);
            setTodo({
                task: "",
                isCompleted: false
            })
        }
    }
    
    return (
        <div className="col-sm-6">
            <form onSubmit={ submitHandler }>
                <div className="row m-4">
                    <label htmlFor="task" className="col-sm-2 col-form-label">Todo:</label>
                    <div className="col-sm-10">
                        <input type="text" name="task" className="form-control" onChange={ changeHandler }/>
                        {
                            !todo.task ?
                            <p className="text-danger my-2">Todo must not be empty.</p> :
                            ""
                        }
                    </div>
                </div>
                <div className="row m-4 justify-content-end">
                    <input type="submit" className="btn btn-primary col-sm-2"/>
                </div>
            </form>
        </div>
    )
}

export default Form;