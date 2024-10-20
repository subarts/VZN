import style from "../menu.module.css"
import { Link } from "react-router-dom"
import WarehouseIcon from "../../icons/WarehouseIcon"
import FactoryIcon from "../../icons/FactoryIcon"

export const SettingsMenu = () => {
  return (
    <main className={style.main}>
      <nav className={style.nav}>
        <ul className={style.list}>
          <li className={style.unactive}>
            <Link to={""}>
              <WarehouseIcon className={"warehouseIconDis"} />
              <span>Настройка 1</span>
            </Link>
          </li>
          <li className={style.unactive}>
            <Link to={""}>
              <FactoryIcon className={"factoryIconDis"} />
              <span>Настройка 2</span>
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  )
}
