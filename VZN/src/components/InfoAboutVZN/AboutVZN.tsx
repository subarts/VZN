import Button from '../button/Button'
import style from './aboutVZN.module.css'

export const AboutVZN = () => {
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
					<Button size='Small'>Создать</Button>
				</div>

				<div className={style.list}>
					Cписок пуст...
				</div>
			</section>
		</main>
	);
}
