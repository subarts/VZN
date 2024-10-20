import styles from "./Footer.module.css"

import menu from "../../assets/icons/burgerBlack.svg"
import scaner from "../../assets/icons/scanDefault.svg"
import { Link, useNavigate } from "react-router-dom"
import ArrowBack from "../icons/ArrowBack"
import ScannerIcon from "../icons/ScannerIcon"
import MenuIcon from "../icons/MenuIcon"

export default function Footer() {
  const navigate = useNavigate()
  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/menu">
            <MenuIcon className={""} />
            <p className={styles.text}>Меню</p>
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="">
            <ScannerIcon className={""} />
            <p className={styles.text}>Сканер</p>
          </Link>
        </li>
        <li className={styles.item} onClick={() => navigate(-1)}>
          <ArrowBack className="" />
          <p className={styles.text}>Назад</p>
        </li>
      </ul>
    </footer>
  )
}
