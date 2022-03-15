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
  setTasks: Dispatch<taskProps[]>; //tipagem para o setTasks
  select?: taskProps;
  setSelect: Dispatch<taskProps>;
}

export const TaskContext = createContext({} as TaskContextType)

function App() {
  const [tasks, setTasks] = useState<taskProps[]>([])
  const [select, setSelect] = useState<taskProps>()

  return (
    <TaskContext.Provider value={{tasks, setTasks, select, setSelect}}>
      <div className={style.AppStyle}>
        <Form />
        <List />
        <Cron />
      </div>
    </TaskContext.Provider>
  )
}

export default App
