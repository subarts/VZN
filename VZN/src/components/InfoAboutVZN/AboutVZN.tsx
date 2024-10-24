import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { CardsVzn } from "../../api/CardsVzn"
import { InfoCardsVzn } from "../../api/InfoCardsVzn"
import { nameCardsVZN } from '../../api/nameCardsVZN'
import { useStore } from "../../store/Store"
import { InfoCardsVZNInterface } from '../../types'
import { IDepotCards } from '../../types'
import { INameCardResult } from '../../types'
import Button from "../button/Button"
import style from "./aboutVZN.module.css"



type TRequestVzn = {
  infoCard?: InfoCardsVZNInterface[]
  nameCard?: INameCardResult[]
}

type TCards = {
  ArrivalQty?: number
  LeaveQty?: number
  Name?: string
  Sign?: string
}



export const AboutVZN = () => {
  const listVzn = useStore((state) => state.listVzn)
  const { numberUnicCodeVzn } = useParams()

  const bodyRequest = { WsInplantCode: listVzn.Num }
  const { findDivision } = useStore((state) => state)
  const [cards, setCards] = useState<TCards[]>([])

  const itemVzn = listVzn.filter(
    (el) => {
      if (!numberUnicCodeVzn) return
      if (el.Code === +numberUnicCodeVzn)
        return el
      return null
    }
  )[0]


  const requestVzn = async (): Promise<TRequestVzn | undefined> => {
    if (!numberUnicCodeVzn) return
    try {
      const data: InfoCardsVZNInterface[] | undefined = await InfoCardsVzn(+numberUnicCodeVzn)
      if (!data) return

      const leaveCardCodes: Array<number> = data.map(item => item.LeaveCardCode)
      const depotCards: IDepotCards[] | undefined = await CardsVzn(leaveCardCodes)
    
      const stockObjCodes: Array<number> | undefined = depotCards?.map(item => item.StockobjCode)

      if (!stockObjCodes) return
      const nameCard: INameCardResult[] | undefined = await nameCardsVZN(stockObjCodes)


      return {
        infoCard: data,
        nameCard: nameCard,
      }
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    async function getData() {
      const data = await requestVzn()
      const cards: Array<TCards> = []
      console.log(data)
      data?.infoCard?.forEach((item) => {
        cards.push({
          ArrivalQty: item.ArrivalQty,
          LeaveQty: item.LeaveQty,
        })
      })

      data?.nameCard?.forEach((item, index) => {
        cards[index]["Name"] = item.Name
        cards[index]["Sign"] = item.Sign
      })

      setCards(cards)
    }
    getData()
  }, [])
 
  console.log(itemVzn)
  const senderName: string = findDivision(itemVzn.Sender)
  const receiverName: string = findDivision(itemVzn.Receiver)
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
                  {/* <span>Дата выдачи: </span> */}
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
