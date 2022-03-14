import { Button } from "../Button"

export const Form = () => {
    return(
        <form>
            <div>
                <label htmlFor="task">Task</label>
                <input type="text" id="task" placeholder="O que você precisa estudar" required />
            </div>
            <div>
                <label htmlFor="time">Time</label>
                <input type="time" id="time" placeholder="" step="1" min="00:00:00" max="01:30:00" required />
            </div>
            <Button />
        </form>
    )
}