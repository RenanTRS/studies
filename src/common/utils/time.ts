export const timeToSeconds = (time: string) => {
    const [hours = '0', minutes = '0', seconds = '0'] = time.split(':') //array contendo 3 itens, separando os elementos a cada ":"

    const hoursToSeconds = Number(hours) * 3600 // 3600s == 1h
    const minutesToSeconds = Number(minutes) * 60
    return hoursToSeconds + minutesToSeconds + Number(seconds)
}