import style from './Button.module.scss'
import {ButtonHTMLAttributes} from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> //Tipage para button, já vem com children incluso

export const Button = ({...props}: ButtonProps) => {
    return (
        <button {...props} className={style.botao} />
    )
}