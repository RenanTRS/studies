import style from './Cron.module.scss'

import { useContext, useEffect, useState } from 'react'
import { TaskContext } from '../../App'
import { Watch } from "./Watch"
import { Button } from "../Button"
import { timeToSeconds } from '../../common/utils/time'

export const Cron = () => {
    const {select} = useContext(TaskContext)
    const [time, setTime] = useState<number>()

    useEffect(()=>{
        if(select?.time){
            setTime(timeToSeconds(select.time))
        }
    },[select])

    const regress = (cont: number = 0) => {
        //Função que faz a contagem regressiva
        setTimeout(()=>{
            if(cont > 0){
                setTime(cont -1)
                return regress(cont - 1) //Recursiva
            }
        }, 1000)
    }

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Watch time={time} />
            </div>
            <Button onClick={()=> regress(time)}>
                Começar
            </Button>
        </div>
    )
}