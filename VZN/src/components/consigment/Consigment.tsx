import styles from "./consigment.module.css"
/* import { ConsigmentProps } from "../../types" */
/* type ConsigmentProps = {
  vzn: string
  sender: string
  recipient: string
  dateOfIssue: string
} */
const Consigment: React.FC = () => {
  const obj = {}
  const isEpmtyObj = Object.entries(obj).length > 0
  return (
    <div className={styles.consigment__list}>
      {isEpmtyObj
        ? obj.map((el, index: number) => {
            return (
              <div className={styles.consigment__item} key={index}>
                <h4>{el.vzn}</h4>
                <ul className={styles.consigment__item__descript}>
                  <li>
                    Отправитель: <span>{el.sender}</span>
                  </li>
                  <li>
                    Получатель: <span>{el.recipient}</span>
                  </li>
                  <li>
                    Дата выдачи: <span>{el.dateOfIssue}</span>
                  </li>
                </ul>
              </div>
            )
          })
        : "Список пуст..."}
    </div>
  )
}

export default Consigment
