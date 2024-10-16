import styles from "./Footer.module.css"
import { ReactSVG } from "react-svg"
import menu from "../../assets/icons/burgerBlack.svg"
import scaner from "../../assets/icons/scanDefault.svg"
import backArrow from "../../assets/icons/arrowBack.svg"
import { Link, useNavigate } from "react-router-dom"

export default function Footer() {
  const navigate = useNavigate()
  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/">
            <ReactSVG src={menu} />
            <p className={styles.text}>Меню</p>
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="">
            <ReactSVG src={scaner} />
            <p className={styles.text}>Сканер</p>
          </Link>
        </li>
        <li className={styles.item} onClick={() => navigate(-1)}>
          <ReactSVG src={backArrow} />
          <p className={styles.text}>Назад</p>
        </li>
      </ul>
    </footer>
  )
}
