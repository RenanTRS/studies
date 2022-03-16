import { ListProps } from '../../types/tasks';
import style from '../List.module.scss'

interface Props extends ListProps{
    selectTask: (task: ListProps) => void;
}
export const Item = ({name, time, completed, selected, id, selectTask}: Props) => {
    
    return(
        <li className={`${style.item} ${selected? style.itemSelecionado : ''} ${completed? style.itemCompletado : ''}`} onClick={()=> !completed && selectTask({name, time, completed, selected, id})}>
            <h3>{name}</h3>
            <span>{time}</span>
            {completed && <span className={style.concluido} aria-label="Tarefa concluída"></span>}
        </li>
    )
}