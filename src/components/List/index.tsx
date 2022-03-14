export const List = () => {
    const tasks = [{
        name: 'React',
        time: '02:00:00'
    },
    {
        name: 'Javascript',
        time: '01:00:00'
    }
    ]
    return(
        <aside>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((task, key)=>{
                    return(
                        <li key={key}>
                            <h3>{task.name}</h3>
                            <p>{task.time}</p>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}