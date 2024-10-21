import Footer from "../../components/footer/Footer"
import logo from "../../assets/logo/Frame (5).svg"
import Input from "../../components/input/Input"
import Button from "../../components/button/Button"
import style from "./Auth.module.css"
import { useState } from "react"
import { authorization } from "../../api/authorization"
import { LogPass } from "../../types"

const Auth = () => {
  const [logInform, setLogInform] = useState<LogPass>({
    login: "",
    password: "",
  })
  function getAuthToken(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    authorization(logInform)
  }

  return (
    <>
      <main className={style.main}>
        <div className={style.title}>
          <img src={logo} width={"50px"} height={"50px"} />
          <h1>OmpMobile</h1>
        </div>
        <form action="" onSubmit={getAuthToken}>
          <Input
            legendText="Логин"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLogInform({ ...logInform, login: e.target.value })
            }
          />
          <Input
            legendText="Пароль"
            type="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLogInform({ ...logInform, password: e.target.value })
            }
          />
          <Button type="submit" size="Regular" color="Blue">Войти</Button>
        </form>
      </main>
      <Footer />
    </>
  )
}

export default Auth
