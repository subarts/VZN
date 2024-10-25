import styles from "./consigment.module.css"
import { Link } from "react-router-dom"
import { TListVznPropsItem } from "../../types"
import { useStore } from "../../store/Store"

/* запрос участков подразделений */
const Consigment: React.FC = () => {
  const { listVzn, findDivision } = useStore()

  return (
    <div className={styles.consigmentList}>
      {listVzn.length > 0 ? (
        listVzn?.map((el: TListVznPropsItem, index: number) => {
          const senderName = findDivision(el.Sender)
          const receiverName = findDivision(el.Receiver)
          return (
            <Link
              to={el.Code.toString()}
              className={styles.consigmentItem}
              key={index}
            >
              <h4>ВЗН №{el.Num}</h4>
              <ul className={styles.consigmentItemDescript}>
                <li>
                  Отправитель: <span>{senderName}</span>
                </li>
                <li>
                  Получатель: <span>{receiverName}</span>
                </li>
                <li>
                  Дата выдачи: <span>{el.LeaveMoveDate}</span>
                </li>
              </ul>
            </Link>
          )
        })
      ) : (
        <p className={styles.epmty}>Список пуст...</p>
      )}
    </div>
  )
}

export default Consigment
