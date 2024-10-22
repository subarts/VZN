import styles from "./consigment.module.css"
import { Link } from "react-router-dom"
import { TListVznPropsItem } from "../../types"
import { useStore } from "../../store/Store"
type listVznProps = {
  listVzn: TListVznPropsItem[]
}

const Consigment: React.FC<listVznProps> = ({ listVzn }) => {
  const isObject: TListVznPropsItem[] = listVzn ? listVzn : []
  const isEpmtyObj = Object.entries(isObject).length > 0
  const { findDivison } = useStore((state) => state)
  return (
    <div className={styles.consigmentList}>
      {isEpmtyObj ? (
        listVzn?.map((el: TListVznPropsItem, index: number) => {
          const senderName = findDivison(el.Sender)
          const receiverName = findDivison(el.Receiver)
          return (
            <Link
              to={el.Code.toString()}
              className={styles.consigmentItem}
              key={index}
            >
              <h4>ВЗН №{el.Num}</h4>
              <ul className={styles.consigmentItemDescript}>
                <li>
                  Отправитель: <span>{senderName[0].name}</span>
                </li>
                <li>
                  Получатель: <span>{receiverName[0].name}</span>
                </li>
                <li>
                  Дата выдачи: <span>{el.LeaveMoveDate}</span>
                </li>
              </ul>
            </Link>
          )
        })
      ) : (
        <p>Список пуст...</p>
      )}
    </div>
  )
}

export default Consigment
