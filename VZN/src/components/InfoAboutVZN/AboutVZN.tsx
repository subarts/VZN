import { useParams } from "react-router-dom"
import Button from "../button/Button"
import style from "./aboutVZN.module.css"
import { InfoVzn } from "../../api/InfoVzn"
import { useStore } from "../../store/Store"
export const AboutVZN = () => {
  const listVzn = useStore((state) => state.listVzn)
  const numberVzn = useParams()
  const bodyRequest = {
    WsInplantCode: numberVzn,
  }
  InfoVzn(bodyRequest)

  const itemVzn = listVzn.filter((el) => el.Num == numberVzn.numberVzn)[0]
  console.log(itemVzn)
  return (
    <main className={style.main}>
      <section className={style.info}>
        <p>
          <span className={style.bold}>Отправитель: </span>
          {itemVzn.Sender} / участок Цеха 01
        </p>
        <p>
          <span className={style.bold}>Получатель: </span>
          {itemVzn.Receiver} / участок Цеха 02
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

        <div className={style.list}>Cписок пуст...</div>
      </section>
    </main>
  )
}
