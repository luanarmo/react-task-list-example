import { createContext, useState, useEffect } from 'react'
import { tasks as data } from '../data/task'

export const TaskContext = createContext()

export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([])


    useEffect(() => {
        setTasks(data)
    }, [])

    function createTask(task) {

        const newTask = {
            id: tasks.length,
            title: task.title,
            description: task.description,
            completed: false
        }

        setTasks([
            ...tasks,
            newTask
        ])
    }

    function deleteTask(id) {
        const newTasks = tasks.filter(task => task.id !== id)
        setTasks(newTasks)
    }



    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}
