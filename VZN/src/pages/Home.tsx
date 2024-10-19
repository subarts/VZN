import { Menu } from "../components/main/menu/Menu"
import Footer from "../components/footer/Footer"
import { Header } from "../components/header/Header"

const Home = () => {
  const headerProps = { style: ["border", "backgroundColor"] }
  function headerRenderProps() {
    return <h1>Меню</h1>
  }
  return (
    <>
      <Header render={() => headerRenderProps()} headerProps={headerProps} />
      <Menu />

      <Footer />
    </>
  )
}

export default Home
