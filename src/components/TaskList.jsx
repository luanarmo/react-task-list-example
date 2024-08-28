
import TaskCard from './TaskCard'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskList() {

    const { tasks } = useContext(TaskContext)

    if (tasks.length === 0) {
        return <div className='text-4xl font-bold text-white text-center'>No hay tareas!</div>
    }

    return (
        <div className='grid grid-cols-4 gap-2'>
            {
                tasks.map((task) => {
                    return (
                        <TaskCard key={task.id} task={task} />
                    )
                })
            }
        </div>
    )

}

export default TaskList