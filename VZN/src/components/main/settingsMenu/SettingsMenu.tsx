import { ReactSVG } from 'react-svg'
import style from '../menu.module.css'
import factoryIcon from '../../../assets/icons/factory.svg'
import warehouseIcon from '../../../assets/icons/warehouse.svg'

export const SettingsMenu = () => {
	return (
		<main className={style.main}>
			<nav className={style.nav}>
				<ul className={style.list}>
					<li className={style.unactive}>
						<ReactSVG src={warehouseIcon} />
						<span>Настройка 1</span>
					</li>
					<li>
						<ReactSVG src={factoryIcon} />
						<span>Настройка 2</span>
					</li>
				</ul>
			</nav>
		</main>
	)
}
