import { ReactSVG } from "react-svg"
import style from "../menu.module.css"
import factoryIcon from "../../../assets/icons/factory.svg"
import warehouseIcon from "../../../assets/icons/warehouse.svg"
import { Link } from "react-router-dom"

export const SettingsMenu = () => {
  return (
    <main className={style.main}>
      <nav className={style.nav}>
        <ul className={style.list}>
          <li className={style.unactive}>
            <Link to={""}>
              <ReactSVG src={warehouseIcon} className={style.warehouseIcon} />
              <span>Настройка 1</span>
            </Link>
          </li>
          <li className={style.unactive}>
            <Link to={""}>
              <ReactSVG src={factoryIcon} className={style.factoryIcon} />
              <span>Настройка 2</span>
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  )
}
