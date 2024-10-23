import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { CardsVzn } from "../../api/CardsVzn"
import { InfoCardsVzn } from "../../api/InfoCardsVzn"
import { NameCardsVZN } from "../../api/NameCardsVZN"
import { useStore } from "../../store/Store"
import Button from "../button/Button"
import style from "./aboutVZN.module.css"

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
  const listVzn = useStore((state) => state.listVzn)
  const numberUnicCodeVzn = useParams()
  const bodyRequest = { WsInplantCode: listVzn.Num }
  const { findDivison } = useStore((state) => state)
  const [cards, setCards] = useState<TCards[]>([])

  const requestVzn = async (): Promise<TRequestVzn> => {
    const cardsVzn = await CardsVzn()
    const codes: number[] = []
    cardsVzn.depotcards.forEach((item) => codes.push(item.StockobjCode))
    const infoCardResult = await InfoCardsVzn()
    const nameCardResult = await NameCardsVZN(codes)
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
      infoCard.forEach((item) => {
        cards.push({
          ArrivalQty: item.ArrivalQty,
          LeaveQty: item.LeaveQty,
        })
      })

      nameCard.forEach((item, index) => {
        cards[index]["Name"] = item.Name
        cards[index]["Sign"] = item.Sign
      })

      setCards(cards)
    }
    getData()
  }, [])

  const itemVzn = listVzn.filter(
    (el) => el.Code == numberUnicCodeVzn.numberUnicCodeVzn
  )[0]

  const senderName: string = findDivison(itemVzn.Sender)
  const receiverName: string = findDivison(itemVzn.Receiver)
  return (
    <main className={style.main}>
      <section className={style.info}>
        <p>
          <span className={style.bold}>Отправитель: </span>
          {senderName}/ участок Цеха 01
        </p>
        <p>
          <span className={style.bold}>Получатель: </span>
          {receiverName} / участок Цеха 02
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
          <Button size="Small">Создать</Button>
        </div>
      </section>
      <div className={style.list}>
        {cards.map((el, index) => {
          return (
            <Link to={""} key={index} className={style.listSection}>
              <h4 className={style.title}>
                {el.Sign} -- {el.Name}
              </h4>
              <ul className={style.listCard}>
                <li>
                  <span>Выдано : </span> {el.LeaveQty}
                </li>
                <li>
                  <span> Принято : </span>
                  {el.ArrivalQty}
                </li>
                <li>
                  <span>Дата выдачи: </span>
                  {/* только для расхода, в приходе скрыть */}
                </li>
              </ul>
            </Link>
          )
        })}
      </div>
    </main>
  )
}
