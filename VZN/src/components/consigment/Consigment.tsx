import styles from "./consigment.module.css"
type ConsigmentProps = {
  vzn: string
  sender: string
  recipient: string
  dateOfIssue: string
}
const Consigment: React.FC = () => {
  const obj = {} //сменить на пропсы которые будут приходить
  const isEpmtyObj = Object.entries(obj).length > 0

  return (
    <div className={styles.consigmentList}>
      {isEpmtyObj ? (
        obj.map((el: ConsigmentProps, index: number) => {
          return (
            <div className={styles.consigmentItem} key={index}>
              <h4>{el.vzn}</h4>
              <ul className={styles.consigmentItemDescript}>
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
      ) : (
        <p>Список пуст...</p>
      )}
    </div>
  )
}

export default Consigment
