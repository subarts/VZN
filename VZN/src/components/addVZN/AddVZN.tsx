import { FC } from 'react'
import Button from '../button/Button'
import Input from '../input/Input'
import style from './addVZN.module.css'


type TModalStep = 'first-step' | 'second-step' | 'infoCard' | 'infoCardEdit'
interface IAddVZN {
	setModalStep: React.Dispatch<React.SetStateAction<"" | TModalStep>>
}

export const AddVZN: FC<IAddVZN> = ({setModalStep}) => {
	return (
		<form className={style.form}>
			<Input legendText='№ карточки' type='text' />
			<Input legendText='Обозначение' type='text' />
			<Input legendText='Наименование' type='text' />
			<Input legendText='Заводской код' type='text' />

			<div className={style.btns}>
				<Button onClick={() => setModalStep('second-step')}>Поиск карточки</Button>
				<Button color='Transparent'>Отмена</Button>
			</div>
		</form>
	)
}
