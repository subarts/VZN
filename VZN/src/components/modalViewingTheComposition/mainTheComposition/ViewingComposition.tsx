import React, { FC } from 'react'
import Input from '../../input/Input'
import { Pagination } from '../../pagination/Pagination'
import style from './viewingComposition.module.css'
import { useStore } from '../../../store/Store'




export const ViewingTheComposition: FC = () => {
	const { viewingComposition, page } = useStore()
	const [currentPage, setCurrentPage] = React.useState<number>(page)


	return (
		<main className={style.main}>
			{viewingComposition.slice(currentPage - 1, currentPage).map((item, index) => (
				<React.Fragment key={item.Num + "/" + index}>
					<section className={style.info} >
						<p>№ карточки: {item.Num}</p>
						<p>Обозначение: {item.Sign}</p>
						<p>Наименование: {item.Name}</p>
					</section>

					<section className={style.infoFields}>
						<Input
							placeHolder={`${item.ArrivalQty}`}
							legendText='Выдано (шт)*'
							type='number'
							disabled={true}
						/>
						<Input
							placeHolder={`${item.LeaveQty}`}
							legendText='Получено (шт)*'
							type='number'
							disabled={true}
						/>
						<Input legendText='№ заказа' type='text' disabled={true} />
					</section>
				</React.Fragment>
			))}
			{viewingComposition.length ? <Pagination lastPage={viewingComposition.length} setCurrentPage={setCurrentPage} currentPage={currentPage} /> : null}
		</main>
	)
}
