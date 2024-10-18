import Footer from "../../components/footer/Footer"
import logo from "../../assets/logo/Frame (5).svg"
import Input from "../../components/input/Input"
import style from "./Auth.module.css"
const Auth = () => {
  return (
    <>
      <main className={style.main}>
        <div className={style.title}>
          <img src={logo} width={"50px"} height={"50px"} />
          <h1>OmpMobile</h1>
        </div>
        <Input legendText="Логин" />
        <Input legendText="Пароль" />
      </main>
      <Footer />
    </>
  )
}

export default Auth
