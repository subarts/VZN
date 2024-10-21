import React from 'react'
import Input from '../../input/Input'
import { Pagination } from '../../pagination/Pagination'
import style from './viewingComposition.module.css'


interface IData {
	id: number
	designation: string
	name: string
	issued: number
	received: number
}

const data: IData[] = [
	{
		id: 1010,
		designation: '574-1700010-03',
		name: 'Коробока передач',
		issued: 3,
		received: 3
	},

	// {
	// 	id: 10182,
	// 	designation: '915121',
	// 	name: 'Кольцо 2В 75  ГОСТ 13940-86',
	// 	issued: 2,
	// 	received: 2
	// },

	// {
	// 	id: 100082,
	// 	designation: '915121',
	// 	name: 'Кольцо 2В 75  ГОСТ 13940-86',
	// 	issued: 1,
	// 	received: 1
	// },
]
export const ViewingTheComposition = () => {
	const [currentPage, setCurrentPage] = React.useState<number>(1)
	
	return (
		<main className={style.main}>
			{data.slice(currentPage - 1, currentPage).map(item => (
				<React.Fragment key={item.id}>
					<section className={style.info} >
						<p>№ карточки: {item.id}</p>
						<p>Обозначение: {item.designation}</p>
						<p>Наименование: {item.name}</p>
					</section>

					<section className={style.infoFields}>
						<Input
							placeHolder={`${item.issued}`}
							legendText='Выдано (шт)*'
							type='number'
							disabled={'disabled'}
						/>
						<Input
							placeHolder={`${item.received}`}
							legendText='Получено (шт)*'
							type='number'
							disabled={'disabled'}
						/>
						<Input legendText='№ заказа' type='text' disabled={'disabled'} />
					</section>
				</React.Fragment>
			))}
			{data.length ? <Pagination lastPage={data.length} setCurrentPage={setCurrentPage} currentPage={currentPage} /> : null}
		</main>
	)
}
