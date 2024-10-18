import { ReactSVG } from "react-svg"
import style from "../menu.module.css"
import factoryIcon from "../../../assets/icons/factory.svg"
import warehouseIcon from "../../../assets/icons/warehouse.svg"
import { Link } from "react-router-dom"
export const TasksMenu = () => {
  return (
    <main className={style.main}>
      <nav className={style.nav}>
        <ul className={style.list}>
          <li className={style.unactive}>
            <Link to={""}>
              <ReactSVG src={warehouseIcon} className={style.warehouseIcon} />
              <span>Складской учет</span>
            </Link>
          </li>
          <li>
            <Link to={"AccountingInProduction"}>
              <ReactSVG src={factoryIcon} />
              <span>Учет в производстве</span>
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  )
}
