import style from './Form.module.scss'
import { useState, FormEvent, useContext } from 'react'
import { Button } from "../Button"
import {TaskContext} from '../../App'
import {v4 as uuidv4} from 'uuid'

export const Form = ()  => {
    const {tasks, setTasks} = useContext(TaskContext) //Context

    const [time, setTime] = useState<string>('00:00:00')
    const [name, setName] = useState<string>('')

    const handlerSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const newTask = {
            name: name,
            time: time,
            selected: false,
            completed: false,
            id: uuidv4()
        }
        console.log(newTask)

        //Reset states
        setName('')
        setTime('00:00:00')

        //Add task
        setTasks([...tasks, newTask])
    }
    return(
        <form className={style.novaTarefa} onSubmit={event => handlerSubmit(event)}>
            <div className={style.inputContainer}>
                <label htmlFor="task">Task</label>
                <input 
                    type="text" 
                    id="task" 
                    placeholder="O que você precisa estudar" 
                    value={name}
                    onChange={event => setName(event.target.value)}
                    required 
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="time">Time</label>
                <input 
                    type="time" 
                    id="time" 
                    placeholder="" 
                    step="1" 
                    min="00:00:00" 
                    max="01:30:00" 
                    value={time}
                    onChange={event => setTime(event.target.value)}
                    required 
                />
            </div>
            <Button type="submit">Adicionar</Button>
        </form>
    )
}