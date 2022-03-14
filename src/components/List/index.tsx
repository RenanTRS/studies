import { Item } from './Item'
import style from './List.module.scss'
export const List = () => {
    const tasks = [{
        name: 'React',
        time: '02:00:00'
    },
    {
        name: 'JavaScript',
        time: '01:00:00'
    },
    {
        name: 'TypeScript',
        time: '03:00:00'
    }
    ]
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