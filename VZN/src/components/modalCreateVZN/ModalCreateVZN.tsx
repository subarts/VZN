import { Link } from "react-router-dom"
import Button from "../button/Button"
import style from "./modalCreateVzn.module.css"

const ModalCreateVZN = () => {
  const [newVzn, setnewVzn] = useState<TNewVzn>({
    Num: "",
    Sender: "",
    Receiver: "",
    issuer: "",
    receiving: "",
  })

  function addSender(data: string) {
    setnewVzn({ ...newVzn, Sender: data })
  }
  function createVzn(e) {}
  return (
    <main className={style.main}>
      <form
        id="form"
        action="/ListConsignment/:numberUnicCodeVzn"
        className={style.form}
        onSubmit={createVzn}
      >
        <Input
          legendText={"№ ВЗН *"}
          /*           required={true} */
          required={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setnewVzn({
              ...newVzn,
              Num: e.target.value,
            })
          }
        />
        <FolderSelect legend={"Отправитель*"} addToBodyRequest={addSender} />
        <FolderSelect legend={"Получатель*"} required={true} />
        <FolderSelect legend={"Выдал МОЛ*"} disabled={true} />
        <Input legendText={"Дата Выдачи*"} type={"date"} required={true} />
        <FolderSelect legend={"Принял МОЛ"} disabled={true} />
      </form>
      <div className={style.listButtons}>
        <Link to={`/create/:${newVzn.Num}`}>
          <Button type={"submit"}>Создать</Button>
        </Link>
        <Button
          color={"TransparentWithBorder"}
          /* onClick={() => setVisibleModalType("")} */
        >
          Отмена
        </Button>
      </div>
    </main>
  )
}

export default ModalCreateVZN
