import { ReactSVG } from "react-svg"
import { Link } from "react-router-dom"
import style from "../menu.module.css"
import taskIcon from "../../../assets/icons/tasksActive.svg"
import settingsIcon from "../../../assets/icons/settings.svg"
import infoIcon from "../../../assets/icons/infoDefault.svg"

export const Menu = () => {
  return (
    <main className={style.main}>
      <nav className={style.nav}>
        <ul className={style.list}>
          <li>
            <Link to={"tasks"}>
              <ReactSVG src={taskIcon} />
              <span>Задачи</span>
            </Link>
          </li>
          <li className={style.unactive}>
            <Link to={"settings"}>
              <ReactSVG src={settingsIcon} className={style.settingsIcon} />
              <span>Настройки</span>
            </Link>
          </li>
          <li className={style.unactive}>
            <Link to={""}>
              <ReactSVG src={infoIcon} className={style.infoIcon} />
              <span>О системе</span>
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  )
}
