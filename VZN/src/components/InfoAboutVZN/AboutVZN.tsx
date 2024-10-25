import { FC, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CardsVzn } from "../../api/cardsVzn"
import { InfoCardsVzn } from "../../api/InfoCardsVzn"
import { nameCardsVZN } from "../../api/nameCardsVZN"
import { useStore } from "../../store/Store"
import { InfoCardsVZNInterface } from "../../types"
import { IDepotCards } from "../../types"
import { INameCardResult } from "../../types"
import Button from "../button/Button"
import style from "./aboutVZN.module.css"

type TRequestVzn = {
  infoCard?: InfoCardsVZNInterface[]
  nameCard?: INameCardResult[]
  cardObjects: { num: string; stockObjCode: number }[]
}

type TCards = {
  ArrivalQty?: number
  LeaveQty?: number
  Name?: string
  Sign?: string
  Num?: string
}

type TVisibleModal = "aboutVZN" | "viewingComposition" | "confirmOperation"

interface IAboutVZNProps {
  setVisibleModalType: React.Dispatch<React.SetStateAction<TVisibleModal>>
}

export const AboutVZN: FC<IAboutVZNProps> = ({ setVisibleModalType }) => {
  const { listVzn, addViewingComposition, findDivision, setPage } = useStore(
    (state) => state
  )
  const { numberUnicCodeVzn } = useParams<{ numberUnicCodeVzn: string }>()
  const [cards, setCards] = useState<TCards[]>([])

  const itemVzn = listVzn.filter((el) => {
    if (!numberUnicCodeVzn) return
    if (el.Code === +numberUnicCodeVzn) return el
    return null
  })[0]

  const requestVzn = async (): Promise<TRequestVzn | undefined> => {
    if (!numberUnicCodeVzn) return
    try {
      const data: InfoCardsVZNInterface[] | undefined = await InfoCardsVzn(
        +numberUnicCodeVzn
      )
      if (!data) return
      console.log(data)
      const leaveCardCodes: Array<number> = data.map(
        (item) => item.LeaveCardCode
      )
      const depotCards: IDepotCards[] | undefined = await CardsVzn(
        leaveCardCodes
      )

      const cardObjects:
        | Array<{ num: string; stockObjCode: number }>
        | undefined = depotCards?.map((item) => ({
        num: item.Num,
        stockObjCode: item.StockobjCode,
      }))

      if (!cardObjects) return
      const nameCard: INameCardResult[] | undefined = await nameCardsVZN(
        cardObjects.map((item) => item.stockObjCode)
      )

      return {
        infoCard: data,
        nameCard: nameCard,
        cardObjects: cardObjects,
      }
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    async function getData() {
      const data = await requestVzn()
      const cards: Array<TCards> = []
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

      data?.cardObjects?.forEach((item, index) => {
        cards[index]["Num"] = item.num
      })
      addViewingComposition(cards)
      setCards(cards)
    }
    getData()
  }, [])

  const senderName: string = findDivision(itemVzn.Sender)
  const receiverName: string = findDivision(itemVzn.Receiver)

  function handleClickElemList(e: React.MouseEvent<HTMLDivElement>) {
    const elements = Array.from(e.currentTarget.children)
    if (!elements) return
    const numberPage = Array.from(elements[0].children)[0].textContent
    if (!numberPage) return
    setPage(+numberPage)
    setVisibleModalType("viewingComposition")
  }

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
      <div className={style.list} onClick={handleClickElemList}>
        {cards.map((el, index) => {
          return (
            <div key={index} className={style.listSection}>
              <span style={{ display: "none" }}>{index + 1}</span>
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
              </ul>
            </div>
          )
        })}
      </div>
    </main>
  )
}
