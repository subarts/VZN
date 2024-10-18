import Header from "../components/header/Header"
import { Menu } from "../components/main/menu/Menu"
import Footer from "../components/footer/Footer"
import { DateOfAcceptance } from "../components/dateOfAcceptance/DateOfAcceptance"

const Home = () => {
  const headerProps = {
    title: "Меню",
    style: ["header", "border", "backgroundColor"],
  }

  return (
    <>
      <Header {...headerProps} />
      <Menu />

      <Footer />
    </>
  )
}

export default Home
