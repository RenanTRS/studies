import style from '../List.module.scss'
type ItemProps = {
    name?: string;
    time?: string;
}
export const Item = ({name, time}: ItemProps) => {
    return(
        <li className={style.item}>
            <h3>{name}</h3>
            <p>{time}</p>
        </li>
    )
}