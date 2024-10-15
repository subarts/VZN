import styles from './Footer.module.css'
import { ReactSVG } from 'react-svg'
import menu from '../../assets/icons/burgerBlack.svg'
import scaner from '../../assets/icons/scanDefault.svg'
import backArrow from '../../assets/icons/arrowBack.svg'

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <ReactSVG src={menu} />
                    <p className={styles.text}>
                        Меню
                    </p>
                </li>
                <li className={styles.item}>
                    <ReactSVG src={scaner} />
                    <p className={styles.text}>
                        Сканер
                    </p>
                </li>
                <li className={styles.item}>
                    <ReactSVG src={backArrow} />
                    <p className={styles.text}>
                        Назад
                    </p>
                </li>
            </ul>
        </footer>
    )
}