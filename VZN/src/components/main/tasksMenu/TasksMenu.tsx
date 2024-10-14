import { ReactSVG } from 'react-svg'
import style from '../menu.module.css'
import factoryIcon from '../../../assets/icons/factory.svg'
import wareHouseIcon from '../../../assets/icons/warehouse.svg'

export const TasksMenu = () => {
	return (
		<main className={style.main}>
			<nav className={style.nav}>
				<ul className={style.list}>
					<li className={style.unActive}>
						<ReactSVG src={wareHouseIcon} />
						<span>Складской учет</span>
					</li>
					<li>
						<ReactSVG src={factoryIcon} />
						<span>Учет в производстве</span>
					</li>
				</ul>
			</nav>
		</main>
	)
}
