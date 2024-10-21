import { FC } from 'react'
import style from './listCards.module.css'

type TModalStep = 'first-step' | 'second-step' | 'infoCard' | 'infoCardEdit'
interface IListCardsProps {
	setModalStep: React.Dispatch<React.SetStateAction<"" | TModalStep>>
}

const ListCards: FC<IListCardsProps> = ({setModalStep}) => {
	return (
		<main className={style.main}>
			<ul className={style.list} onClick={() => setModalStep('infoCard')}>
				<li>
					<p>Карточка №115</p>
					<p><span className={style.bold}>Номенклатура: </span>55102-8601047 - Косынка с длинным названием 7510002</p>
					<p><span className={style.bold}>Тип продукции: </span>Готовая</p>
				</li>
			</ul>
		</main>
	);
}
 
export default ListCards;