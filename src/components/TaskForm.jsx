import { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskForm() {

    const [title, settitle] = useState("")

    const [description, setDescription] = useState("")

    const { createTask } = useContext(TaskContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        createTask({ title, description })
        settitle("")
        setDescription("")
    }

    return (
        <div className='max-w-md mx-auto'>
            <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
                <h1 className='text-2xl font-bold text-white mb-2'>Crea tu tarea</h1>
                <input type="text" placeholder="Escribe tu tarea" value={title}
                    onChange={(event) => settitle(event.target.value)} autoFocus
                    className='bg-slate-300 p-3 w-full mb-2 rounded-md'
                />
                <textarea placeholder='Escribe la descripcion de la tarea' value={description} onChange={
                    (event) => setDescription(event.target.value)
                }
                    className='bg-slate-300 p-3 w-full mb-2 rounded-md'
                />
                <button className='bg-indigo-600 px-3 py-1 text-white'>Guardar</button>
            </form>
        </div>
    )
}

export default TaskForm