import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CardsVzn } from '../../api/CardsVzn'
import { InfoCardsVzn } from '../../api/InfoCardsVzn'
import { nameCardsVZN } from '../../api/nameCardsVZN'
import { useStore } from '../../store/Store'
import Button from '../button/Button'
import style from './aboutVZN.module.css'

interface IInfoCardResult {
	ArrivalCardCode: number
	ArrivalCardType: number
	ArrivalQty: number
	ArticleOfExpense: number
	Code: number
	InplantCode: number
	LeaveCardCode: number
	LeaveQty: number
	LotCode: number
	OrderCode: number
}

interface INameCardResult {
	BaseCode: number
	BaseType: number
	Code: number
	Description: string
	KoType: number
	MeasCode: number
	Name: string
	NomNum: string
	Notice: string
	Sign: string
}

type TRequestVzn = {
	infoCard: IInfoCardResult[]
	nameCard: INameCardResult[]
}

type TCards = {
	ArrivalQty?: number
	LeaveQty?: number
	Name?: string
	Sign?: string
}
export const AboutVZN = () => {
	const listVzn = useStore(state => state.listVzn)
	const numberUnicCodeVzn = useParams()
	const bodyRequest = { WsInplantCode: listVzn.Num }
	const { findDivison } = useStore(state => state)
	const [cards, setCards] = useState<TCards[]>([])

	const requestVzn = async (): Promise<TRequestVzn> => {
		const cardsVzn = await CardsVzn()
		const codes: number[] = []
		cardsVzn.depotcards.forEach(item => codes.push(item.StockobjCode))
		const infoCardResult = await InfoCardsVzn()
		const nameCardResult = await nameCardsVZN(codes)
		return {
			infoCard: infoCardResult,
			nameCard: nameCardResult.stockobjs,
		}
		// setCards((prev) => [...prev, {
		//   ArrivalQty: ,
		//   LeaveQty:
		//     Name:,
		//   Sign:
		// }])
	}
	useEffect(() => {
		async function getData() {
			const { infoCard, nameCard } = await requestVzn()
			const cards: Array<TCards> = []
			infoCard.forEach(item => {
				cards.push({
					ArrivalQty: item.ArrivalQty,
					LeaveQty: item.LeaveQty,
				})
			})

			nameCard.forEach((item, index) => {
				cards[index]['Name'] = item.Name
				cards[index]['Sign'] = item.Sign
			})

			setCards(cards)
		}
		getData()
	}, [])

	const itemVzn = listVzn.filter(
		el => el.Code == numberUnicCodeVzn.numberUnicCodeVzn
	)

	const senderName = findDivison(itemVzn[0].Sender)
	const receiverName = findDivison(itemVzn[0].Receiver)

	return (
		<main className={style.main}>
			<section className={style.info}>
				<p>
					<span className={style.bold}>Отправитель: </span>
					{senderName[0].name}/ участок Цеха 01
				</p>
				<p>
					<span className={style.bold}>Получатель: </span>
					{receiverName[0].name} / участок Цеха 02
				</p>
				<p>
					<span className={style.bold}>Статус: </span>НеУтв
				</p>
				<p>
					<span className={style.bold}>Дата выдачи: </span>
					{itemVzn.LeaveMoveDate}
				</p>
			</section>
			<section className={style.listSection}>
				<div className={style.createBtn}>
					<Button size='Small'>Создать</Button>
				</div>

				<div className={style.list}>
					{cards.map((el, index) => {
						return (
              <div key={index}>
                <p>{el.Sign} -- {el.Name}</p>
								<p>Выдано:{el.LeaveQty}</p>
								<p>Принято:{el.ArrivalQty}</p>
								{/* <p>{el.Code}</p> */}
							</div>
						)
					})}
				</div>
			</section>
		</main>
	)
}
