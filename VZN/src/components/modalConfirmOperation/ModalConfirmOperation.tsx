import React from 'react'
import { useParams } from 'react-router-dom'
import { useStore } from '../../store/Store'
import Button from '../button/Button'
import style from './modalConfirmOperation.module.css'

const ModalConfirmOperation = () => {
	const { listVzn, findDivision, findVzn, boOperation } = useStore()
	const { numberUnicCodeVzn } = useParams<{ numberUnicCodeVzn: string }>()
	const num = numberUnicCodeVzn ? findVzn(+numberUnicCodeVzn) : null
	const itemVzn = React.useMemo(
		() =>
			listVzn.filter(el => {
				if (!numberUnicCodeVzn) return
				if (el.Code === +numberUnicCodeVzn) return el
				return null
			})[0],
		[]
	)

	const sender = findDivision(itemVzn.Sender)
	const taker = findDivision(itemVzn.Receiver)
	return (
		<main className={style.main}>
			<p className={style.confirmText}>Подтвердите выполнение операции: <span className={style.bold}>{boOperation}</span></p>
			<fieldset className={style.fieldset}>
				<legend className={style.legend}>Информация о документе</legend>
			</fieldset>

			<div className={style.infoDocument}>
				<p className={`${style.title} ${style.bold}`}>ВЗН №{num}</p>
				<p className={style.sender}>
					<span className={style.bold}>Отправитель:</span> {sender} / участок Цеха 01
				</p>
				<p className={style.taker}>
					<span className={style.bold}>Получатель:</span> {taker} / участок Цеха 02
				</p>
			</div>

			<div className={style.btns}>
				<Button>Выполнить</Button>
				<Button color='Transparent'>Отмена</Button>
			</div>
		</main>
	)
}

export default ModalConfirmOperation
