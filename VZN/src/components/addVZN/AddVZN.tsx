import Button from '../button/Button'
import Input from '../input/Input'
import style from './addVZN.module.css'

export const AddVZN = () => {
	return (
		<form className={style.form}>
			<Input legendText='№ карточки' type='text' />
			<Input legendText='Обозначение' type='text' />
			<Input legendText='Наименование' type='text' />
			<Input legendText='Заводской код' type='text' />

			<div className={style.btns}>
				<Button>Поиск карточки</Button>
				<Button color='Transparent'>Отмена</Button>
			</div>
		</form>
	)
}
