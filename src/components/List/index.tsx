import { Item } from './Item'
import style from './List.module.scss'
import { useContext } from 'react'
import { TaskContext } from '../../App'

export const List = () => {
    const {tasks} = useContext(TaskContext)
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((task, key)=>{
                    return(
                        <Item {...task} key={key} />
                    )
                })}
            </ul>
        </aside>
    )
}