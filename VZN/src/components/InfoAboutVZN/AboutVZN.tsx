import { FC } from 'react'
import Button from '../button/Button'
import style from './aboutVZN.module.css'

type TModalStep = 'first-step' | 'second-step' | 'infoCard' | 'infoCardEdit'
interface IAboutVZN {
	setModalStep: React.Dispatch<React.SetStateAction<"" | TModalStep>>
}

export const AboutVZN: FC<IAboutVZN> = ({setModalStep}) => {
	return (
		<main className={style.main}>
			<section className={style.info}>
				<p><span className={style.bold}>Отправитель: </span>Цех 01 / участок Цеха 01</p>
				<p><span className={style.bold}>Получатель: </span>Цех 02 / участок Цеха 02</p>
				<p><span className={style.bold}>Статус: </span>НеУтв</p>
				<p><span className={style.bold}>Дата выдачи: </span>15.06.2024</p>
			</section>
			<section className={style.listSection}>
				<div className={style.createBtn}>
					<Button size='Small' onClick={() => setModalStep('first-step')}>Создать</Button>
				</div>

				<ul className={style.list}>
					<li onClick={() => setModalStep('infoCardEdit')}>
						<p>55102-8601047 -- Косынка с длинным названием 7510002</p>
						<p>Выдано: </p>
						<p>Принято: </p>
					</li>
				</ul>
			</section>
		</main>
	);
}
