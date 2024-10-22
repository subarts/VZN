import { useParams } from "react-router-dom"
import Button from "../button/Button"
import style from "./aboutVZN.module.css"
import { useStore } from "../../store/Store"
import { useEffect, useState } from "react"
import { TListRequest } from "../../types"
import { InfoCardsVzn } from "../../api/InfoCardsVzn"

export const AboutVZN = () => {
  const listVzn = useStore((state) => state.listVzn)
  const numberUnicCodeVzn = useParams()
  const bodyRequest = {
    WsInplantCode: listVzn.Num,
  }
  const { findDivison } = useStore((state) => state)
  const [cards, setCards] = useState([])
  const requestVzn = async (body: TListRequest): Promise<void> => {
    const result = await InfoCardsVzn(bodyRequest)
    setCards(result)
  }
  useEffect(() => {
    requestVzn(bodyRequest)
  }, [])
  /*  const requestCardsVzn = async (): Promise<void> => {
    const result = await CardsVzn(bodyRequest)
  }
  requestCardsVzn() */
  const itemVzn = listVzn.filter(
    (el) => el.Code == numberUnicCodeVzn.numberUnicCodeVzn
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
          <Button size="Small">Создать</Button>
        </div>

        <div className={style.list}>
          {cards.map((el, index) => {
            return (
              <div key={index}>
                <p>принято:{el.ArrivalQty}</p>
                <p>отпущено :{el.LeaveQty}</p>
                <p>{el.Code}</p>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}
