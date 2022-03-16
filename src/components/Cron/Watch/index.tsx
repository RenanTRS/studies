import style from './Watch.module.scss'

interface Props {
    time?: number
}
export const Watch = ({time = 0}: Props) => { //Se não vier valor, o time será igual à 0

    const minutes = Math.floor(time / 60)
    const second = time % 60
    
    const [tenMinutes, unityMinutes] = String(minutes).padStart(2, '0') //Pega o primeiro valor em dezena e o segundo em unidade, caso algum valor seja vazio é adicionado um padStart
    const [tenSecond, unitySecond] = String(second).padStart(2, '0')

    /*
    
    */
    return(
        <>
            <span className={style.relogioNumero}>{tenMinutes}</span>
            <span className={style.relogioNumero}>{unityMinutes}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{tenSecond}</span>
            <span className={style.relogioNumero}>{unitySecond}</span>
        </>
    )
}