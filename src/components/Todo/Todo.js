import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TodoForm from './Form/TodoForm'
import TodoList from './List/TodoList'

function Todo(props) {

    const URL = 'http://localhost:3001/todo'

    useEffect(() => {
        registerTask('12121')
    }, [])

    const registerTask  = descParam => {
        axios.post(`${URL}`, { description: descParam, done: false})
        .then((response)=> {
            console.log(response)
        })
    }

    return(
        <>
        <TodoForm/>
        <TodoList/>
        </>
    )
}

export default Todo