import { Item } from './Item'
import style from './List.module.scss'
import { useContext } from 'react'
import { TaskContext } from '../../App'
import { ListProps } from '../types/tasks'

export const List = () => {
    const {tasks, setSelect, setTasks} = useContext(TaskContext)
    const selectTask = (taskSelect: ListProps) => {
        setSelect(taskSelect)
        setTasks(tasks.map((task)=>({
            ...task, 
            selected: task.id === taskSelect.id ? true : false
        }))) //Refaz o array
    }
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((task)=>{
                    return(
                        <Item {...task} selectTask={selectTask} key={task.id} />
                    )
                })}
            </ul>
        </aside>
    )
}