import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TodoForm from './Form/TodoForm'
import TodoList from './List/TodoList'

function Todo(props) {

    const URL = 'http://localhost:3001/todo'
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        getTasks()
    }, [])

    const getTasks = () => {
        axios.get(`${URL}`)
        .then((response)=> {
            setTasks(response.data)
        })
    }

    const registerTask  = (descParam) => {
        axios.post(`${URL}`, { description: descParam, done: false})
        .then((response)=> {
            getTasks()
        })
    }

    const doneTask = (task) => {
        axios.put(`${URL}/${task.id}`, {...task, done: true})
        .then(response => {
            getTasks()
        })
    }

    const pendingTask = (task) => {
        axios.put(`${URL}/${task.id}`, {...task, done: false})
        .then(response => {
            getTasks()
        })
    }

    const deleteTask = (id) => {
        axios.delete(`${URL}/${id}`)
        .then(response => {
            getTasks()
        })
    }

    return(
        <>
        <TodoForm funcRegister={registerTask}/>
        <TodoList tasksProp={tasks}
            doneTaskProp={doneTask}
            pendingTaskProp={pendingTask}
            deleteProp={deleteTask}/>
        </>
    )
}

export default Todo