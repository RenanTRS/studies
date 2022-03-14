import style from './Cron.module.scss'

import { Watch } from "./Watch"
import { Button } from "../Button"

export const Cron = () => {
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Watch />
            </div>
            <Button>Começar</Button>
        </div>
    )
}