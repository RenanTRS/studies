import style from './Form.module.scss'
import { useState, FormEvent } from 'react'
import { Button } from "../Button"

export const Form = () => {
    const [time, setTime] = useState('00:00:00')
    const [task, setTask] = useState('')

    const handlerSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const teste = {
            task,
            time
        }
        console.log(teste)
    }
    return(
        <form className={style.novaTarefa} onSubmit={event => handlerSubmit(event)}>
            <div className={style.inputContainer}>
                <label htmlFor="task">Task</label>
                <input 
                    type="text" 
                    id="task" 
                    placeholder="O que você precisa estudar" 
                    value={task}
                    onChange={event => setTask(event.target.value)}
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