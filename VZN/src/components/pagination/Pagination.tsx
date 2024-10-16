import React, { FC } from 'react'
import { ReactSVG } from 'react-svg'
import nextPageIcon from '../../assets/icons/nextPage.svg'
import prevPageIcon from '../../assets/icons/prevPage.svg'
import style from './pagination.module.css'

interface IPaginationProps {
	lastPage: number
}

export const Pagination: FC<IPaginationProps> = ({ lastPage }) => {
	const [currentPage, setCurrentPage] = React.useState<number>(1)

	function handlePageChange(e: React.ChangeEvent<HTMLInputElement>) {
		if(+e.target.value <= lastPage && +e.target.value !== 0)
			setCurrentPage(+e.target.value)
	}

	return (
		<nav className={style.pagination}>
			<li
				className={style.prevPage}
				style={
					currentPage === 1 ? {background: '#dcd8e0'} : {background: '#4680b0'}
				}
				onClick={() => setCurrentPage(prevState => Math.max(prevState - 1, 1))}
			>
				<ReactSVG src={prevPageIcon} wrapper='svg' />
			</li>

			<li>
				<input type='number' placeholder={currentPage.toString()} onInput={handlePageChange}/>
				<span>из {lastPage}</span>
			</li>

			<li
				className={style.nextPage}
				style={
					lastPage === currentPage ? {background: '#dcd8e0'} : {background: '#4680b0'}
				}
				onClick={() =>
					setCurrentPage(prevState => Math.min(prevState + 1, lastPage))
				}
			>
				<ReactSVG src={nextPageIcon} wrapper='svg' />
			</li>
		</nav>
	)
}
