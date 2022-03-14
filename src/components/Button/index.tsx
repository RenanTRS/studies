import style from './Button.module.scss'
import {ReactNode} from 'react'

type ButtonProps = {
    children?: ReactNode;
}

export const Button = ({children}: ButtonProps) => {
    return (
        <button className={style.botao}>{children}</button>
    )
}