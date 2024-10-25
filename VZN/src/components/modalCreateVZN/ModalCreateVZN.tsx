import { Link } from "react-router-dom"
import Button from "../button/Button"
import style from "./modalCreateVzn.module.css"

const ModalCreateVZN = () => {
  return (
    <main className={style.main}>
      <Link to={"/InfoAboutVZN"}>
        <Button>Создать</Button>
      </Link>
      <Button>Отмена</Button>
    </main>
  )
}

export default ModalCreateVZN
