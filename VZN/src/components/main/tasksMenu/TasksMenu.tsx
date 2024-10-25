import style from "../menu.module.css"
import { Link } from "react-router-dom"
import WarehouseIcon from "../../icons/WarehouseIcon"
import FactoryIcon from "../../icons/FactoryIcon"
export const TasksMenu = () => {
  return (
    <main className={style.main}>
      <nav className={style.nav}>
        <ul className={style.list}>
          <li className={style.unactive}>
            <Link to={""}>
              <WarehouseIcon className={"warehouseIconDis"} />
              <span>Складской учет</span>
            </Link>
          </li>
          <li>
            <Link to={"AccountingInProduction"}>
              <FactoryIcon />
              <span>Учет в производстве</span>
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  )
}
