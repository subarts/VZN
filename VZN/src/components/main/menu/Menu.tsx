import { Link } from "react-router-dom"
import style from "../menu.module.css"
import SettingIcon from "../../icons/SettingIcon"
import InfoIcon from "../../icons/InfoIcon"
import TasksIcon from "../../icons/TasksIcon"
export const Menu = () => {
  return (
    <main className={style.main}>
      <nav className={style.nav}>
        <ul className={style.list}>
          <li>
            <Link to={"tasks"}>
              <TasksIcon />
              <span>Задачи</span>
            </Link>
          </li>
          <li className={style.unactive}>
            <Link to={"settings"}>
              <SettingIcon className={"settingsIconDis"} />
              <span>Настройки</span>
            </Link>
          </li>
          <li className={style.unactive}>
            <Link to={""}>
              <InfoIcon className={"infoIconDis"} />
              <span>О системе</span>
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  )
}
