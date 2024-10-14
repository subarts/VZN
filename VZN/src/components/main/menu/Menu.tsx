import { ReactSVG } from 'react-svg'
import style from '../menu.module.css'
import taskIcon from '../../../assets/icons/tasksActive.svg'
import settingsIcon from '../../../assets/icons/settings.svg'
import infoIcon from '../../../assets/icons/infoDefault.svg'

export const Menu = () => {
	return (
		<main className={style.main}>
			<nav className={style.nav}>
				<ul className={style.list}>
					<li>
						<ReactSVG src={taskIcon} />
						<span>Задачи</span>
					</li>
					<li className={style.unActive}>
						<ReactSVG src={settingsIcon} />
						<span>Настройки</span>
					</li>
					<li className={style.unActive}>
						<ReactSVG src={infoIcon} />
						<span>О системе</span>
					</li>
				</ul>
			</nav>
		</main>
	)
}
