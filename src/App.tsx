import style from './App.module.scss'

import { Form } from "./components/Form"
import { List } from "./components/List"
import { Cron } from "./components/Cron"

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Cron />
    </div>
  )
}

export default App
