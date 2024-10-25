import styles from "./Footer.module.css"
import { Link, useNavigate } from "react-router-dom"
import ArrowBackIcon from "../icons/ArrowBackIcon"
import ScannerIcon from "../icons/ScannerIcon"
import MenuIcon from "../icons/MenuIcon"

export default function Footer() {
  const navigate = useNavigate()
  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/menu">
            <MenuIcon />
            <p className={styles.text}>Меню</p>
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="/menu/modalScan">
            <ScannerIcon />
            <p className={styles.text}>Сканер</p>
          </Link>
        </li>
        <li className={styles.item} onClick={() => navigate(-1)}>
          <ArrowBackIcon />
          <p className={styles.text}>Назад</p>
        </li>
      </ul>
    </footer>
  )
}
