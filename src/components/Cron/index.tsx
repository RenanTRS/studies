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

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Watch time={time} />
            </div>
            <Button>Começar</Button>
        </div>
    )
}