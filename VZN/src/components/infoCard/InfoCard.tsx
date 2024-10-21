import { FC } from 'react'
import Button from '../button/Button'
import Input from '../input/Input'
import { Pagination } from '../pagination/Pagination'
import style from './infoCard.module.css'

type TModalStep = 'first-step' | 'second-step' | 'infoCard' | 'infoCardEdit'
interface IInfoCard {
	modalStep: TModalStep
	setModalStep: React.Dispatch<React.SetStateAction<"" | TModalStep>>
}

const InfoCard: FC<IInfoCard> = ({modalStep, setModalStep}) => {
	return (
		<main className={style.main}>
			<form>
				<section className={style.info}>
					<p>
						<span className={style.bold}>№ карточки: </span>115
					</p>
					<p>
						<span className={style.bold}>Обозначение: </span>55102-8601047
					</p>
					<p>
						<span className={style.bold}>Наименование: </span>Косынка с длинным названием
					</p>
					<p>
						<span className={style.bold}>Заводской код: </span>7510002
					</p>
					<p>
						<span className={style.bold}>Тип продукции: </span>Готовая
					</p>
				</section>
				<div className={style.btn}>
					<Button size={'Small'} onClick={() => setModalStep('first-step')}>Сменить карточку</Button>
				</div>
				<section className={style.infoFields}>
					<Input
						placeHolder='5'
						legendText='Выдано (шт)*'
						type='number'
					/>
					<Input
						placeHolder='5'
						legendText='Получено (шт)*'
						type='number'
						disabled={true}
					/>
					<Input legendText='№ заказа' type='text' />
				</section>
				{modalStep === 'infoCardEdit' ? 'pagination' : null}
				<div className={style.btns}>
					<Button>Добавь</Button>
					<Button color='Transparent'>Отмена</Button>
				</div>
			</form>
		</main>
	)
}

export default InfoCard
