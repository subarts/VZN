import Header from "../components/header/Header"
import { Menu } from "../components/main/menu/Menu"
import Footer from "../components/footer/Footer"
const Home = () => {
  return (
    <>
      <Header title={"Меню"} isBorder={true} isBackgroundColor={true} />
      <Menu />
      <Footer />
    </>
  )
}

export default Home
