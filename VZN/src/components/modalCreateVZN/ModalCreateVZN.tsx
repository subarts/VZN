import Button from "../button/Button"
import style from "./modalCreateVzn.module.css"
import Input from "../input/Input"
import FolderSelect from "../folderSelect/FolderSelect"

const ModalCreateVZN = () => {
  return (
    <main className={style.main}>
      <form id="form" action="" className={style.form}>
        <Input legendText={"№ ВЗН *"} required={true} />
        <FolderSelect legend={"Отправитель*"} />
        <FolderSelect legend={"Получатель*"} />
        <FolderSelect legend={"Выдал МОЛ*"} />
        <Input legendText={"Дата Выдачи*"} type={"date"} required={true} />
        <FolderSelect legend={"Принял МОЛ"} />
      </form>
      <div className={style.listButtons}>
        <Button type={"submit"}>Создать</Button>
        <Button color={"TransparentWithBorder"}>Отмена</Button>
      </div>
    </main>
  )
}

export default ModalCreateVZN
