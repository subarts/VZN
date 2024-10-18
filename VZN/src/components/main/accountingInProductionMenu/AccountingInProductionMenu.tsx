import { Link } from "react-router-dom"
import style from "../menu.module.css"

export const AccountingInProductionMenu = () => {
  return (
    <main className={style.main}>
      <nav className={style.nav}>
        <ul className={`${style.list} ${style.specialPaddings}`}>
          <li>
            <Link to={""}>
              <span>Акты инвентаризации</span>
            </Link>
          </li>
          <li>
            <Link to={""}>
              <span>Внутризаводские накладные (Приход)</span>
            </Link>
          </li>
          <li>
            <Link to={""}>
              <span>Внутризаводские накладные (Расход)</span>
            </Link>
          </li>
          <li>
            <Link to={""}>
              <span>Лимитные карты (Приход)</span>
            </Link>
          </li>
          <li>
            <Link to={""}>
              <span>Цеховая номенклатура</span>
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  )
}
