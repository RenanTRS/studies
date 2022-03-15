import style from './App.module.scss'

import { Form } from "./components/Form"
import { List } from "./components/List"
import { Cron } from "./components/Cron"
import { useState, createContext, Dispatch } from 'react'

type taskProps = {
  name: string;
  time: string;
  selected: boolean;
  completed: boolean;
  id: string;
}
type TaskContextType = {
  tasks: taskProps[];
  setTasks: Dispatch<taskProps[]> //tipage para o setTasks
}
export const TaskContext = createContext({} as TaskContextType)

function App() {
  const [tasks, setTasks] = useState<taskProps[]>([])
  return (
    <TaskContext.Provider value={{tasks, setTasks}}>
      <div className={style.AppStyle}>
        <Form />
        <List />
        <Cron />
      </div>
    </TaskContext.Provider>
  )
}

export default App
